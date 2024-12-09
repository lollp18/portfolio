import { FaLocationArrow } from "react-icons/fa6"

import { socialMedia } from "@/data"
import MagicButton from "./MagicButton"

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10"
      id="contact">
      {/* background grid */}

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex gap-5 md:text-base text-sm md:font-normal font-light">
          <a
            className="p-2 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            href="https://+4901718678312">
            <img
              src="/call.svg"
              alt="icons"
              width={30}
              height={30}
              className=" bg-white rounded-lg"
            />
          </a>
          <a
            className="p-2 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            href="https://lorenzo123696@gmail.com">
            <img
              src="/mail.svg"
              alt="icons"
              width={30}
              height={30}
              className=" bg-white rounded-lg"
            />
          </a>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <a href={info.link}>
                <img
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
