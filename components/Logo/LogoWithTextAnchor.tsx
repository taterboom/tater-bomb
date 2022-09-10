import Link from "next/link"
import { Logo } from "./Logo"

export const LogoWithTextAnchor = () => {
  return (
    <Link href="/">
      <a className="!no-underline flex items-center gap-1 text-sm">
        <Logo width={22} height={22} />
        <span className="logo-gradient bg-clip-text text-transparent">@taterbomb</span>
      </a>
    </Link>
  )
}

export default LogoWithTextAnchor
