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
import AchevmentsCard from "./achevment-card"
import Autoplay from "embla-carousel-autoplay"

export default function AchevmentsSlider({ data }) {
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

  const colors = [
    "#B43838",
    "#C3B944",
    "#435C3E"
  ]
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        exit={{ opacity: 0, scale: 0 }}
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
            align: "center"
          }} setApi={setApi} >
          <CarouselContent >
            {data?.map((item, index) => (
              <CarouselItem key={index} className={"basis-[90%] md:basis-[48%] lg:basis-1/3 "}>
                <AchevmentsCard item={item} index={index + 1} color={colors[index % colors.length]} />
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
