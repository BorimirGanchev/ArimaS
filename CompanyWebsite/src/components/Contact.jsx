import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { slideIn, zoomIn } from "../utils/motion"
import Section from "./Section";
import Button from "./Button"
import { map, mail, phone } from "../assets/index.js"

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <Section id="contacts">
    <div className="container flex xl:flex-row flex-col-reverse gap-10 p-12 overflow-hidden items-center justify-center ">
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] p-6 rounded-2xl bg-[#161625]'
    >
      <p className="text-slate-500 m-3">GET IN TOUCH</p>
      <h2 className="h1 md:h2 font-black m-3">CONTACT.</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-4 flex flex-col gap-8 '
      >
        <label className='flex flex-col '>
          <span className='text-white font-medium m-3'>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary bg-[#21192e] m-3 text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium m-3'>Your email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary bg-[#21192e] m-3 text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium m-3'>Your Message</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What you want to say?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary bg-[#21192e] m-3 text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <Button
          type='submit'
          className='bg-tertiary m-3 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </motion.div>

    <motion.div
        variants={zoomIn(0.2, 2)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mb-10 md:mb-0'
      >
        <div className="text-white ">
      <h2 className="h2 font-bold flex items-center gap-4">
        Send us a message
        <img
          src={mail}
          width={48}
          height={48}
          alt="brainwave"
        />
      </h2>
                

          <p className="text-justify text-wrap text-base leading-relaxed mb-4 mt-4 md:text-lg md:leading-loose md:mb-6">
            Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.</p>
          <ul className="list-none p-0 m-0 text-base leading-relaxed md:text-lg md:leading-loose">
            <li className="mb-2 md:mb-3 h6 flex items-center gap-4">        
              <img
                src={mail}
                width={36}
                height={48}
                alt="brainwave"
              />
              arima_S@gmail.com
            </li>
            <li className="mb-2 md:mb-3 h6 flex items-center gap-4">
              <img
                src={phone}
                width={36}
                height={48}
                alt="brainwave"
              />
              +359 894 556 780
            </li>
            <li className="mb-2 md:mb-3 h6 flex items-center gap-4">
              <img
                src={map}
                width={36}
                height={48}
                alt="brainwave"
              />
              bul. "Tsar Simeon I" 350
            </li>
          </ul>
        </div>
    </motion.div>
    </div>
  </Section>
  )
}

export default Contact
