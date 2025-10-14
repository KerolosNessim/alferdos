"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const links = [
  { href: '/profile', label: 'الملف الشخصي' },
  { href: '/profile/resultes', label: 'النتائج' },
  { href: '/profile/table', label: 'الجدول الدراسي' },
  { href: '/profile/statistics', label: 'الإحصائيات' },
]

const ProfileNavbar = () => {
  const pathname = usePathname()

  return (
    <nav className="text-center w-full">
      <ul
        className="
          flex 
          lg:flex-col 
          flex-row 
          gap-5 
          justify-center 
          max-md:text-xs 
          max-md:overflow-x-auto 
          max-md:no-scrollbar 
          max-md:whitespace-nowrap 
          max-md:px-2
        "
      >
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <li key={link.href} className=" flex-shrink-0">
              <Link
                href={link.href}
                className={`transition-all duration-300 ${isActive
                    ? 'text-secondary-green font-bold'
                    : 'text-text'
                  }`}
              >
                {link.label}
              </Link>

              {isActive && (
                <div className=" mt-1">
                  <Image
                    src="/profile-line.svg"
                    alt="active underline"
                    width={50}
                    height={5}
                    className="lg:w-20 md:w-16 w-6 mx-auto"
                  />
                </div>
              )}
            </li>
          )
        })}

        <li className="flex-shrink-0">
          <button className="text-text hover:text-secondary-green">
            تسجيل الخروج
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default ProfileNavbar
