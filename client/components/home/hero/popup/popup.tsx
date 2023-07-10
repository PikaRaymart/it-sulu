import { useExpansion } from "@/client/lib/hooks/useExpansion"
import { PopupsData } from "../data"
import { 
  Dropdown,
  PopupWrapper, 
  Title, 
  Trigger } from "./styled"
import { DefaultText } from "@/client/styled/collection/text"


type PopupProps = { data: PopupsData }

export const Popup = ({ data }: PopupProps) =>{
  const [ isExpanded, handleExpansion ] = useExpansion()

  return (
    <PopupWrapper onBlur={ () => console.log(document.activeElement) }>
      <Trigger
        onClick={ handleExpansion }
        aria-expanded={ isExpanded } >
        <span>+</span>
        { data.label }
      </Trigger>
      <Dropdown>
        <Title>{ data.title }</Title>
        <DefaultText>{ data.description }</DefaultText>
      </Dropdown>
    </PopupWrapper>
  )
}


export default Popup