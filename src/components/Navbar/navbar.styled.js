import styled from 'styled-components';

export const NavbarCont = styled.div`
width: 100%;
top: 0px;
left: 0px;
padding: 28px 26px;
position: sticky;
z-index: 101;
height: 7.41%;
background-color: #1f2029;
display: flex;
justify-content: space-between;
align-items: center;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`

export const LogoAlignCont = styled.div`
display:flex;
gap:20px;
align-items:center;
`

export const LogoIconCont = styled.div`
height:30px;
width:30px;
display:flex;
justify-content:center;
align-items:center;
`
export const LogoIcon = styled.img`
height:100%;
width:100%;
`

export const SearchCont = styled.div`
display:flex;
align-items:center;
position:relative;
`

export const SearchInput = styled.input`
background:#292b2f;
border:none;
height: 25px;
border-radius: 8px;
width: 250px;
color:white;
font-family:Inter;
font-size: 14px;
font-weight: 600;
padding-left:36px;
&:focus{
border:none;
}
@media (max-width: 450px) {
   width:150px;
}
`

export const SearchIcon = styled.img`
width: 15px;
    height: 15px;
    position: absolute;
    left: 10px;
`

export const OptionsCont = styled.div`
display:flex;
gap:12px;
align-items:center;
@media (max-width: 500px) {
   display:none;
}
`

export const OptionsLogoCont = styled.div`
background:#44464a;
// background:white;
display:flex;
justify-content:center;
align-items:center;
width:30px;
height:30px;
border-radius:50%;
`

export const OptionsLogo = styled.img`
height:50%;
width:50%;
// background: white;
    border: none;
`
export const HamburgerIconDiv = styled.div`
justify-content:center;
align-items:center;
width:30px;
height:30px;
display:none;
@media (max-width: 500px) {
   display:flex;
}
`
