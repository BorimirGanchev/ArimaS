import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";

function Hero() {
    return (
        <Section crosses>
          <div className="container lg:flex">
            <div className="w-full lg:w-1/2 ">
              <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                <h1 className="h1 mb-6 text-center lg:text-left">
                  Explore the Possibilities of&nbsp;Everything&nbsp;
                  <span className="inline-block relative">with Arima-S{" "}</span>
                </h1>
                <ul className="max-w-[22rem] mb-10 md:mb-14">
                  {collabContent.map((item) => (
                    <li className="mb-3 py-3" key={item.id}>
                      <div className="flex items-center">
                        <img src={check} width={24} height={24} alt="check" />
                        <h6 className="body-2 ml-5">{item.title}</h6>
                      </div>
                      {item.text && (
                        <p className="body-2 mt-3 text-n-4">{item.text}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2  max-w-[23rem]  md:max-w-2xl xl:mb-24">
              <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                  <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                  <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[888/690] lg:aspect-[1024/890]">
                    <img
                      src={robot}
                      className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                      width={1024}
                      height={490}
                      alt="AI"
                    />

                  </div>
                </div>
                <Gradient />
              </div>
            </div>
          </div>
        </Section>
    )
}

export default Hero
