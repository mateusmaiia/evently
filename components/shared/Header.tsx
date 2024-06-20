import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="W-36">
          <Image alt="Evently Logo" src="/assets/images/logo.svg" width={128} height={38}/>
        </Link>

        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  )
}
