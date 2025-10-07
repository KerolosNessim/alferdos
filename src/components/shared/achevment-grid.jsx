'use client'

import React, { useState } from 'react'
import StudentCard from './student-card'
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
import AchevmentsCard from './achevment-card'

const AchevmentGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const totalItems = 27 // Total number of students
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const colors = [
    "#B43838",
    "#C3B944",
    "#435C3E"
  ]
  return (
    <motion.div
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      viewport={{once:true}}
      className='container space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Array.from({length:itemsPerPage}).map((_,index)=>(
          <AchevmentsCard key={startIndex + index} color={colors[index % colors.length]}/>
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

export default AchevmentGrid
