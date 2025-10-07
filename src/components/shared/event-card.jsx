import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventCard = ({ title, date, desc, img }) => {
  return (
    <Link href={`/events/1`} className="relative transition-all duration-500 opacity-100">
      <Image
        src={img || "/event.jpg"}
        alt={title || "event"}
        width={800}
        height={500}
        className="w-full h-80 object-cover"
      />

      <div className="border flex flex-col justify-end p-6 pb-12 rounded-br-3xl relative">
        {/* date */}
        <div className="absolute -top-[28%] right-1 h-10 bg-main-red flex items-center mb-4 text-sm font-semibold text-white w-fit pe-3 gap-4">
          <div className="h-full px-4 bg-white flex items-center justify-center">
            <Image
              src="/date.svg"
              alt="date"
              width={1000}
              height={1000}
              className="size-7"
            />
          </div>
          <div>
            {date || "13 يناير 2026"}
          </div>
        </div>
        <h3 className="text-lg text-text font-bold mb-1">
          {title || "عنوان الفعالية"}
        </h3>
        <p className="text-xs leading-6 text-text-gray line-clamp-2 mt-4">
          {desc || "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص"}
        </p>
      </div>
    </Link>
  )
}

export default EventCard
