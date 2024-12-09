"use client"

import { FaLocationArrow } from "react-icons/fa6"

import { projects } from "@/data"

import React, { useRef, useEffect, useState } from "react"
import { isMobile } from "react-device-detect"

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
  const [ImgWidth, setImgWidth] = useState(0)

  const DImage = ({ src }: { src: string }) => {
    const imgRef = useRef<HTMLImageElement>(null)
    let [SwitchWidth, setSwitchWidth] = useState("")
    useEffect(() => {
      if (imgRef.current) {
        setSwitchWidth(
          imgRef.current.offsetWidth > imgRef.current.offsetHeight
            ? "w-full mb-6"
            : "h-full mb-6"
        )
        setImgWidth(imgRef.current.offsetWidth)
      }
    }, [imgRef])

    return <></>
  }

  return (
    <div
      className="py-2  w-[90vw]  "
      id="projects">
      <h1 className="heading m-20">
        A selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className=" flex flex-col  items-center justify-center gap-y-64  ">
        {projects.map((item) => (
          <div
            className=" flex items-center justify-center "
            key={item.id}>
            <div className="flex flex-col justify-start items-start p-7 w-full  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] shadow-white-100">
              <img
                src={item.img}
                className="mb-4  object-scale-down rounded-2xl"
              />

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-2xl md:text-xl text-base line-clamp-1 "
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}>
                {item.des}
              </p>

              <div className="flex  items-center justify-between mt-7 w-full ">
                <div className="flex flex-wrap items-center ">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-11 w-10 h-10 flex justify-center items-center ml-2">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
