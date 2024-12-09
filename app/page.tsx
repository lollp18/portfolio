"use client"

import { navItems } from "@/data"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Clients from "@/components/Clients"
import Approach from "@/components/Approach"
import Experience from "@/components/Experience"
import RecentProjects from "@/components/RecentProjects"
import { FloatingNav } from "@/components/ui/FloatingNavbar"

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full flex justify-center items-center flex-col overflow-hidden">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  )
}

export default Home
