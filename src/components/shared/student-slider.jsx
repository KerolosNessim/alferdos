"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import StudentCard from "./student-card"
import { motion, AnimatePresence } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"

export default function StudentSlider({data}) {
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        exit={{ opacity: 0, scale:0  }}
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
        loop: true,
        direction: "rtl",
        align:"start"
      }} setApi={setApi} className="w-full ">
        <CarouselContent className={"lg:w-[90%] ms-auto max-lg:container "}>
            {data.map((item, index) => (
            <CarouselItem key={index} className={"basis-[90%] md:basis-[48%] lg:basis-[28%] "}>
              <StudentCard index={index+1} item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>

      {/* Dots indicators */}
      <div className="flex justify-center mt-8 gap-1">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-6 h-3  transition-colors ${index === current ? "bg-main-red" : "bg-[#D9D9D9]"
              }`}
          />
        ))}
      </div>
    </motion.div>
    </AnimatePresence>
  )
}
