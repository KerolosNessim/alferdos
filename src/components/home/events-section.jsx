"use client";
import SectionHeader from "../shared/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
const slides = [
  {
    id: 1,
    title: "فعالية مسرحيات هادفة للوطن والمجتمع",
    date: "13 يناير 2026",
    desc: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص",
    img: "/event.jpg",
  },
  {
    id: 2,
    title: "حدث رياضي مميز",
    date: "7 مارس 2026",
    desc: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص.",
    img: "/event.jpg",
  },
  {
    id: 3,
    title: "يوم ترفيهي للأطفال",
    date: "2 أبريل 2026",
    desc: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص",
    img: "/event.jpg",
  },
  {
    id: 4,
    title: "ورشة فنية للأطفال",
    date: "9 مايو 2026",
    desc: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص.",
    img: "/event.jpg",
  },
  {
    id: 5,
    title: "مهرجان الربيع",
    date: "15 يونيو 2026",
    desc: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص",
    img: "/event.jpg",
  },
];

const EventsSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 space-y-12">
      <div className="container">
        <SectionHeader title={"فعاليات  دورية"} />
      </div>

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
              align: "center",
            }}
            setApi={setApi}
          >
            <CarouselContent className="gap-4">
              {slides.map((slide, index) => {
                const isActive = index === current;
                return (
                  <CarouselItem
                    key={slide.id}
                    className="basis-[90%] md:basis-[48%] lg:basis-1/4"
                  >
                    <div
                      className={`relative   transition-all duration-500 ${isActive ? "opacity-100" : "opacity-50"
                        }`}
                    >
                      <Image
                        src={slide.img}
                        alt={slide.title}
                        width={800}
                        height={500}
                        className="w-full h-80 object-cover"
                      />

                      {/* محتوى الكارت يظهر فقط لو active */}
                      {isActive && (
                        <div className=" border flex flex-col justify-end p-6 pb-12 rounded-br-3xl relative">
                          {/* date */}
                          <div className="absolute -top-[28%] right-1 h-10 bg-main-red flex items-center  mb-4 text-sm font-semibold  text-white w-fit pe-3 gap-4 ">
                            <div className="h-full px-4 bg-white flex items-center justify-center ">
                              <Image
                                src="/date.svg"
                                alt="date"
                                width={1000}
                                height={1000}
                                className="size-7"
                              />
                            </div>
                            <div>
                              {slide.date}
                            </div>
                          </div>
                          <h3 className="text-lg text-text font-bold mb-1">
                            {slide.title}
                          </h3>
                          <p className="text-xs leading-6 text-text-gray line-clamp-2 mt-4">{slide.desc}</p>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Dots indicators */}
          <div className="flex justify-center mt-8 gap-1">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-6 h-3 transition-colors  ${index === current ? "bg-main-red" : "bg-[#D9D9D9]"
                  }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;
