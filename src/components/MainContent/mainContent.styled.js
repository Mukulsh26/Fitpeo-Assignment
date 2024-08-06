import styled from "styled-components";

export const TotalMainContentDiv = styled.div`
width: 100%;
position: relative;
display: flex;
height: 92.59%;
`

export const TotalSideBarDiv = styled.div`
height: 100%;
top: 0px;
left: 0px;
z-index: 99;
transform: translateX(0px);
transition: 0.2s ease-in;
@media (max-width: 500px) {
   display:none;
}
`

export const SidebarDiv = styled.div`
padding-top: 30%;
position: relative;
z-index: 3;
left: 0px;
top: 0px;
width: 72px;
background-color: #1f2029;
height: 100%;
// border-right: 1px solid rgb(237, 239, 242);
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`


export const ScrollDiv = styled.div`
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    background-color: #aaaaaf;
    border-radius: 6px;
}
`
export const ContentAlignDiv = styled(ScrollDiv)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow-y: auto;
padding: 0px 0px 20px 0px;
`
export const DashboardText = styled.div`
width: 100%;
height: 50px;
display: flex;
/* justify-content: center; */
align-items: center;
padding-left: 20px;
color: white;
font-family: 'Inter';
font-size: 18px;
font-weight: 600;
`

export const StatsticsAlignDiv = styled.div`
display: flex;
    gap: 20px;
    width: 100%;
    padding-left: 20px;
    padding-right:30px;
    // height:120px;
@media (max-width: 914px) {
   flex-direction:column;
}

`

export const StatsticsDiv = styled.div`
background:#1f2029;
height:100%;
width:30%;
border-radius:5px;
padding:10px;
`

export const StatsticsIconCont = styled.div`
width:40px;
height:40px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
img{
width:50%;
height:50%;
}
`
export const TotalStaticsDiv = styled.div`
display:flex;
width:70%;
gap:10px;
  @media (max-width: 1000px) {
    width:50%;
  }
  @media (max-width: 914px) {
    width:100%;
  }

`

export const TitleCont = styled.div`
font-family: 'Inter';
    color: white;
    font-size: 12px;
    margin-top: 5px;
    font-weight: 300;
`

export const TotalCountDiv = styled.div`
display:flex;
justify-content:space-between;
margin-top: 10px;
`

export const CountDiv = styled.div`
font-family: 'Inter';
    color: white;
    font-size: 18px;
    font-weight: 600;
`

export const SortIconDiv = styled.div`
display:flex;
align-items:center;
gap:5px;
font-size: 12px;
    font-family: 'Inter';
    color: #11765d;
    font-weight: 600;
`

export const NetProfitCont = styled.div`
display: flex;
    gap: 20px;
    width: 30%;
    height:120px;
    background:#1f2029;
    padding:10px;
    justify-content:space-between;
@media (max-width: 1000px) {
   width:50%;
}
@media (max-width: 914px) {
   width:100%;
}

`
export const NetProfitText = styled.div`
font-size: 12px;
    font-family: 'Inter';
    color: white;
`
export const NetProfitAlignDiv = styled.div`
display:flex;
flex-direction:column;
gap:12px;
`
export const TotalNetProfitPerDiv = styled.div`
// border-radius: 50%;
//     height: 60px;
//     border: 10px solid #2e3466;
// height:60px;
img{
width:100%;
height:100%;
}
`

export const TotalGoalsCont = styled.div`
width:30%;
 background:#1f2029;
 padding:15px;
 border-radius:5px;
justify-content: space-around;
    display: flex;
    flex-direction: column;
 @media (max-width: 1000px) {
   width:50%;
}
 @media (max-width: 914px) {
   width:100%;
}

`
export const GoalAlignCont = styled.div`
display:flex;
align-items:center;
gap:20px;
`
export const GoalIconCont = styled.div`
width:60px;
height:60px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
img{
width:50%;
height:50%;
}
`
export const TotalGoalAlignCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export const GoalTitleCont = styled.div`
font-family: 'Inter';
    color: white;
    font-size: 16px;
`

export const SideArrowIconCont = styled.div`
width:35px;
height:35px;
display:flex;
justify-content:center;
align-items:center;
background:#494a4e;
border-radius:50%;
img{
width:50%;
height:50%;
transform:rotate(90deg);
}
`

export const TotalOrdersDiv = styled.div`
width:70%;
 background:#1f2029;
 padding:15px;
 border-radius:5px;
 @media (max-width: 1000px) {
   width:50%;
}
 @media (max-width: 914px) {
   width:100%;
}
`

export const RecentOrdersText = styled.div`
width:100%;
color:white;
font-family:Inter;
font-size:20px;
font-weight:600;
`

export const HeadingAlignCont = styled.div`
display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom:15px;
`
export const HorizontalLine = styled.div`
width:100%;
height:1px;
background:#2f3038;
`

export const ColumnHeading = styled.div`
color:white;
font-family:Inter;
font-size:14px;
width:25%;
text-align:center;
`

export const OrderIconCont = styled.div`
width:35px;
height:35px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
img{
width:100%;
height:100%;
border-radius:50%;
}
`
export const TotalOrderAlignCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export const OrderNameAlignCont = styled.div`
display: flex;
    align-items: center;
    gap: 15px;
    width:25%;
`
export const StatusDiv = styled.div`
    width: 50%;
    padding: 3px;
    border-radius: 5px;
    @media (max-width: 500px) {
   width:60%;
}
`
export const OrderNameDiv = styled.div`
font-family: Inter;
    color: white;
    font-size: 12px;
    font-weight: 400;
    width:25%;
    text-align:center;
`

export const OrderAlignDiv = styled.div`
display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 9px;
    overflow-y: scroll;
    height: 290px;
`

export const TotalFeedBackDiv = styled.div`
width:30%;
 background:#1f2029;
 padding:15px;
 border-radius:5px;
    display: flex;
    flex-direction: column;
@media (max-width: 1000px) {
   width:50%;
}
@media (max-width: 914px) {
   width:100%;
}
`
export const SidebarIconCont = styled.div`
width:20px;
height:20px;
display:flex;
justify-content:center;
align-items:center;
img{
width:100%;
height:100%;
}
`
export const FeebackAlignDiv = styled.div`
display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 6px;
`

export const TotalFeedBackAlignDiv = styled.div`
display:flex;
flex-direction:column;
overflow-y:auto;
margin-top:10px;
`
export const StarImgDiv = styled.div`
display:flex;
align-items:center;
gap:2px;
`
export const CommentDiv = styled.div`
font-size:12px;
font-family:Inter;
color:white;
font-weight: 300;
`