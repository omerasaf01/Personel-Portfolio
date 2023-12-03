import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="w-full h-full flex flex-col">
        <Menu />
      </div>
    </main>
  )
}
