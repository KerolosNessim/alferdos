"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const AuthSlider = () => {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const slides = [
    "/slide-1.png",
    "/slide-2.png",
    "/slide-3.png",
  ]
  return (
    <div className="space-y-6">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          loop: true,
          direction: "rtl",
          align: "center"
        }} setApi={setApi} >
        <CarouselContent >
          {slides.map((slide, index) => (
            <CarouselItem key={index} className={"basis-full "}>
              <Image src={slide} alt="slide" width={1000} height={1000} className="w-full h-80 object-contain " />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* content */}
      <div className="text-center text-white space-y-4">
        <h3 className="text-2xl font-bold">مدرسة الفردوس</h3>
        <p>بيئة مميزة للطالب والمدرسين بنظام حديث وسهل</p>
      </div>

      {/* Dots indicators */}
      <div className="flex justify-center  gap-1">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full bg-[#91ABD5]  transition-colors ${index === current ? "bg-white w-6" : "bg-[#91ABD5]"
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default AuthSlider
