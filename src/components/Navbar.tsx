import Link from "next/link"

export function Navbar() {
  return (
    <header className="w-full bg-white py-4 px-6 border-b border-gray-200">
      <div className="container mx-auto">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="" width={120} height={50}/>
        </Link>
      </div>
    </header>
  )
}