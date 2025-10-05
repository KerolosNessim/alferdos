"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LuSchool } from "react-icons/lu";

import Link from "next/link";
import { span } from "motion/react-client";
import Image from "next/image";
import *as motion from 'motion/react-client'
export default function CustomBreadcrumbs({ items = [], }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1,delay:1 }}
      className="-translate-y-20 container bg-secondary-green h-40 rounded-xl relative flex items-center justify-center overflow-hidden">
      <Image src={'/bredcrumbs.png'} alt='breadcrumb' width={1000} height={1000} className='absolute md:w-80 w-30 end-0 bottom-0' />
      <Image src={'/bredcrumbs.png'} alt='breadcrumb' width={1000} height={1000} className='absolute md:w-40 w-15 start-0 bottom-0' />
      <Breadcrumb className="absolute top-4 right-4">
        <BreadcrumbList className=" flex items-center gap-1 ">
          {/* أول عنصر دايمًا الرئيسية */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="flex items-center gap-1 text-white hover:text-main-yellow">
                <LuSchool size={16} />
                <span className="sr-only">الرئيسية</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* الفاصل */}
          {items.length > 0 && <span aria-hidden="true" className="w-2 h-[1px] bg-white"></span>}

          {/* العناصر التالية */}
          {items.map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.href ? (
                <>
                  <BreadcrumbLink asChild>
                    <Link href={item.href} className="text-white hover:text-main-yellow text-xs" >{item.name}</Link>
                  </BreadcrumbLink>
                  {index < items.length - 1 && <span aria-hidden="true" className="w-2 h-[1px] bg-white"></span>}
                </>
              ) : (
                <BreadcrumbPage className="text-white  text-xs">{item.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <h3 className="text-white lg:text-3xl md:text-2xl text-xl font-bold">
        {items[items.length - 1]?.name}
      </h3>

      <div className=" size-25 bg-white rounded-full absolute -bottom-4 -end-6"></div>


    </motion.div>
  );
}
