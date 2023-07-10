import Link from "next/link"
import { 
  HeaderWrapper, 
  Navbar, 
  NavbarTrigger,
  Navlist} from "./styled"
import LogoDark from '@/public/logo/logo-dark.png'
import Image from "next/image"
import { useExpansion } from "@/client/lib/hooks/useExpansion"
import { NavItem } from "./navItem"
import { navbarData } from "./data"


const Header = () =>{
  const [ navbarExpanded, handleNavbarExpansion ] = useExpansion()

  return (
    <HeaderWrapper>
      <Link href="/">
      <picture>
        <source media="(min-width:1200px)" srcSet="/logo/logo-light.png" />
        <Image 
          src={ LogoDark } 
          alt="IT Sulu"
          width={140} />
      </picture>
      </Link>
      <div>
        <NavbarTrigger
          onClick={ handleNavbarExpansion }
          aria-expanded={ navbarExpanded } >
          <span></span>
        </NavbarTrigger>
        <Navbar>
          <Navlist>
            { navbarData.map(data => (
              <NavItem
                key={ data.title }
                data={ data } />
            )) }
          </Navlist>
        </Navbar>
      </div>
    </HeaderWrapper>
  )
}


export default Header