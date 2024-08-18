'use client'
import { CATEGORIES } from '@/app/_constants/categories'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-2 sm:py-4">
      <nav className="flex items-center justify-start gap-x-5">
        <Link href="/">Home</Link>

        {/* drop down カテゴリー */}
        <div className="dropdown relative inline-block">
          <button
            className="inline-flex items-center rounded bg-gray-300 px-4 py-2 font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            type="button"
            title="カテゴリーを開くボタン"
          >
            <span className="mr-1">記事カテゴリー</span>
            <Image
              src="/images/arrow-down.svg"
              alt="下矢印のアイコン"
              width={16}
              height={16}
              aria-hidden="true"
            />
          </button>
          <ul className="dropdown-menu absolute z-50 hidden pt-1 text-gray-700 dark:text-gray-300">
            {Object.entries(CATEGORIES).map(([key, value]) => (
              <li
                key={key}
                className="whitespace-no-wrap mt-1 block rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
              >
                <Link href={value}>{key}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="https://github.com/miK1011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/github-mark.svg"
            alt="Git Hubのアイコン"
            width={20}
            height={20}
          />
        </Link>
      </nav>
    </header>
  )
}

export default Header
