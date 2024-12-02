"use client"

import { FaLocationArrow } from "react-icons/fa6"

import { projects } from "@/data"
import { PinContainer } from "./ui/Pin"
import React, { useRef, useEffect, useState } from "react"
import { isMobile } from "react-device-detect"

const DImage = ({ src }: { src: string }) => {
  const imgRef = useRef(null)
  let [SwitchWidth, setSwitchWidth] = useState("")

  useEffect(() => {
    if (imgRef.current) {
      setSwitchWidth(
        imgRef.current.offsetWidth > imgRef.current.offsetHeight
          ? "w-full"
          : "h-full"
      )
    }
  }, [imgRef])

  return (
    <img
      ref={imgRef}
      src={src}
      className={SwitchWidth}
    />
  )
}
const ProjectsLink = ({
  href,
  Device,
}: {
  href: string
  Device: {
    mobile: boolean
    pc: boolean
  }
}) => {
  if ((isMobile && Device.mobile) || (!isMobile && Device.pc))
    return (
      <a
        href={href}
        className="flex lg:text-xl md:text-xs text-sm text-purple cursor-pointer ">
        Check Live Site
      </a>
    )
  if (!isMobile && Device.mobile && !Device.pc)
    return (
      <p className="flex lg:text-xl md:text-xs text-sm  cursor-default ">
        Only Mobile
      </p>
    )
  if (isMobile && !Device.mobile && Device.pc)
    return (
      <p className="flex lg:text-xl md:text-xs text-sm  cursor-default ">
        Desktop only
      </p>
    )
}

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className=" flex flex-col  items-center justify-center p-4 mt-10">
        {projects.map((item) => (
          <div
            className=" h-[82rem] flex items-center justify-center  w-[72vw]"
            key={item.id}>
            <PinContainer>
              <div className="relative flex items-center justify-center  w-[65vw] overflow-hidden h-[82vh]  mb-10 imgBakround ">
                <DImage src={item.img} />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}>
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-11 w-10 h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}>
                      <img
                        src={icon}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <ProjectsLink
                    href={item.link}
                    Device={item.Device}
                  />
                  <FaLocationArrow
                    className="ms-3"
                    color="#CBACF9"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
