import Link from "next/link"
import { NavbarData } from "../data"
import { 
  NavItemWrapper, 
  NavLink, 
  NavLinksTrigger,
  NavSublist} from "./styled"
import { useExpansion } from "@/client/lib/hooks/useExpansion"


type NavItemProps = {
  data: NavbarData
}

const NavItem = ({ data }: NavItemProps) =>{
  const [ navItemExpanded, handleNavItemExpansion ] = useExpansion()

  return (
    <NavItemWrapper>
      { !!data.subLinks? 
        <>
          <NavLinksTrigger
            onClick={ handleNavItemExpansion }
            aria-expanded={ navItemExpanded }>{ data.title }
          </NavLinksTrigger>
          <NavSublist>
            { data.subLinks.map(sublink => (
            <NavItemWrapper key={ sublink.title }>
              <Link 
                legacyBehavior 
                href={ sublink.link }
                passHref>
                <NavLink>
                  { sublink.title }
                </NavLink>
              </Link>
            </NavItemWrapper>
            )) }
          </NavSublist>
        </>
        :
        <Link 
          legacyBehavior 
          href={ data.link }
          passHref>
            <NavLink>
              { data.title }
            </NavLink>
        </Link>
      }
    </NavItemWrapper>
  )
}


export default NavItem