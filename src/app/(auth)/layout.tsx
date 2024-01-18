"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
    const pathname = usePathname();
  return (
    <div>
        <Link href={'/login'} className={pathname.startsWith('/login')?"text-black":""}>Login</Link>
        <Link href={'/register'} className={pathname.startsWith('/register')?"text-black":""}>Register</Link>
        <Link href={'/forgot-password'} className={pathname.startsWith('/forgot-password')?"text-black":""}>Forgot Passsword</Link>
        <div>
            {children}
        </div>
    </div>
  )
}
