import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero1 from "../public/hero1.jpeg"
import hero2 from "../public/hero2.jpeg"
import hero3 from "../public/hero3.jpeg"
import hero4 from "../public/hero4.jpeg"

const Hero = () => {
  return (
    <div className='max-w-6xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-6 sm:py-10'>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4">
            Lorem ipsum dolor sit ametion banamy.
          </h2>
          <p className="text-sm sm:text-base font-medium mb-3 sm:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sit!
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sit!
          </p>
          <Button className="button hover:bg-ColorViolet/80">
            Explorer
          </Button>
        </div>
        <div className="max-w-[400px] grid grid-cols-2 justify-items-center mx-auto gap-4">
          <Image src={hero1} width={200} height={150} alt="hero1" className=" h-[120px] sm:h-[200px] w-full object-cover rounded-md" />
          <Image src={hero2} width={200} height={150} alt="hero2" className=" h-[120px] sm:h-[200px] w-full object-cover rounded-md" />
          <Image src={hero3} width={200} height={150} alt="hero3" className=" h-[120px] sm:h-[200px] w-full object-cover rounded-md" />
          <Image src={hero4} width={200} height={150} alt="hero4" className=" h-[120px] sm:h-[200px] w-full object-cover rounded-md" />
        </div>
    </div>
  )
}

export default Hero