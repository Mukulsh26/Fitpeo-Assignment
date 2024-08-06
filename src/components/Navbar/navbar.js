import React from 'react'
import { HamburgerIconDiv, LogoAlignCont, LogoIcon, LogoIconCont, NavbarCont, OptionsCont, OptionsLogo, OptionsLogoCont, SearchCont, SearchIcon, SearchInput } from './navbar.styled'
import logo from "../Images/match.png"
import searchIcon from "../Images/search.png"
import msgIcon from "../Images/message.png"
import settingIcon from "../Images/setting.png"
import notIcon from "../Images/notification.png"
import hamburgerIcon from "../Images/hamburgerIcon.png"
const Navbar = () => {
    return (
        <NavbarCont>
            <LogoAlignCont>
                <LogoIconCont>
                    <LogoIcon draggable={false} src={logo} />
                </LogoIconCont>
                <SearchCont>
                    <SearchIcon src={searchIcon} draggable={false}/>
                    <SearchInput type='text' placeholder='Search'/>
                </SearchCont>
            </LogoAlignCont>
            <OptionsCont>
             <OptionsLogoCont>
                <OptionsLogo src={msgIcon} draggable={false}/>
             </OptionsLogoCont>
             <OptionsLogoCont>
                <OptionsLogo src={settingIcon} draggable={false}/>
             </OptionsLogoCont>
             <OptionsLogoCont>
                <OptionsLogo src={notIcon} draggable={false}/>
             </OptionsLogoCont>
             <OptionsLogoCont>
                <img src="https://randomuser.me/api/portraits/women/75.jpg" draggable={false} width="100%" height="100%" style={{borderRadius:"50%"}}/>
             </OptionsLogoCont>
            </OptionsCont>
            <HamburgerIconDiv>
                <img src={hamburgerIcon} draggable={false}/>
            </HamburgerIconDiv>
        </NavbarCont>
    )
}

export default Navbar
