"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import BlogCard from "./blog-card"
import Autoplay from "embla-carousel-autoplay"

export default function BlogsSlider({data}) {
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
          align: "start"
        }} setApi={setApi} >
          <CarouselContent >
            {data?.map((item, index) => (
              <CarouselItem key={index} className={"basis-[90%] md:basis-1/2 lg:basis-1/4 "}>
                <BlogCard item={item}  />
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
              className={`w-2 h-2  transition-colors ${index === current ? "bg-main-red w-6" : "bg-[#D9D9D9]"
                }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
