'use client'

import React, { useState } from 'react'
import * as motion from "motion/react-client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import EventCard from './event-card'

const EventGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const totalItems = 27
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage

  return (
    <motion.div
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      viewport={{once:true}}
      className='container space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Array.from({length:itemsPerPage}).map((_,index)=>(
          <EventCard 
            key={startIndex + index}
            title="فعالية مسرحيات هادفة للوطن والمجتمع"
            date="13 يناير 2026"
            desc="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص"
            img="/event.jpg"
          />
        ))}
      </div>

      <Pagination dir="ltr">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="cursor-pointer"
              />
            </PaginationItem>
          )}
          
          {Array.from({length: totalPages}).map((_, index) => {
            const pageNumber = index + 1
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => setCurrentPage(pageNumber)}
                    isActive={currentPage === pageNumber}
                    className="cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            } else if (
              pageNumber === currentPage - 2 ||
              pageNumber === currentPage + 2
            ) {
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationEllipsis />
                </PaginationItem>
              )
            }
            return null
          })}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="cursor-pointer"
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </motion.div>
  )
}

export default EventGrid
