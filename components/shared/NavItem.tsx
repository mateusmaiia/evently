import { headerLinks } from "@/constants";
import Link from "next/link";

export function NavItems( ){
  return(
    <ul className="md:flex-between flex w-full flex-col md:flex-row items-start gap-5 ">
      {headerLinks.map(link => {
        return(
          <Link href={link.route}>
            {link.label}
          </Link>
        )
      })}
    </ul>   
  )
}