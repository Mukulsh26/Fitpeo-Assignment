import React from 'react'
import { SidebarDiv, SidebarIconCont, TotalSideBarDiv } from '../mainContent.styled'
import homeIcon from "../../Images/homeIcon.png"
import bagIcon from "../../Images/bagIcon.png"
import statsticsIcon from "../../Images/statsticsIcon.png"
const Sidebar = () => {
  return (
    <TotalSideBarDiv>
       <SidebarDiv>
        <SidebarIconCont>
            <img src={homeIcon} draggable={false} />
        </SidebarIconCont>
        <SidebarIconCont>
            <img src={statsticsIcon} draggable={false} />
        </SidebarIconCont>
        <SidebarIconCont>
            <img src={bagIcon} draggable={false} />
        </SidebarIconCont>
        <SidebarIconCont>
            <img src={statsticsIcon} draggable={false} />
        </SidebarIconCont>
        <SidebarIconCont>
            <img src={bagIcon} draggable={false} />
        </SidebarIconCont>
       </SidebarDiv>
    </TotalSideBarDiv>
  )
}

export default Sidebar
