"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { postData } from '@/lib/fetch-methods'
import { removeRole, removeToken, serverLogout } from '@/services'
import { useUserStore } from '@/stores/userStore'
import { useProfileStore } from '@/stores/profileStore'
import { toast } from 'sonner'

const links = [
  { href: '/profile', label: 'الملف الشخصي' },
  { href: '/profile/table', label: 'الجدول الدراسي' },
  // { href: '/profile/statistics', label: 'الإحصائيات' },
  { href: '/profile/monthly-exams', label: "التقييمات الشهريه" },
  { href: '/profile/resultes', label: 'شهادة الطالب' },
]

const ProfileNavbar = () => {
  const pathname = usePathname()
  const { setUser, setToken } = useUserStore()
  const { setProfileData } = useProfileStore()
  const router = useRouter()
  async function logout() {
    const res = await postData({
      url: "/logout",
    })
    if (res.code === 200) {
      await removeToken();
      await removeRole();
      router.push("/")
      toast.success("تم تسجيل الخروج بنجاح")
      setUser(null)
      setToken(null)
      setProfileData(null)
    } else {
      toast.error("حدث خطأ اثناء تسجيل الخروج")
    }
  }

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
          <button onClick={logout} className="text-text hover:text-secondary-green">
            تسجيل الخروج
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default ProfileNavbar
