import React from 'react'
import { CountDiv, SortIconDiv, StatsticsDiv, StatsticsIconCont, TitleCont, TotalCountDiv } from '../mainContent.styled'
import sortUpRed from "../../Images/sortUpRed.png"
import sortUpGreen from "../../Images/sortUpGreen.png"
const Statstics = (props) => {
    const {details} = props;
    const {imageUrl,title,count,id} = details
  return (
    <StatsticsDiv>
      <StatsticsIconCont style={{background: title === "Total Orders" ? "#28336a" :title === "Total Delivered" ? "#125646" :title === "Total Cancelled" ? "#623239" : "#5b2a4d"  }}>
        <img src={imageUrl} draggable={false}/>
      </StatsticsIconCont>
      <TitleCont>{title}</TitleCont>
      <TotalCountDiv>
        <CountDiv>{count}</CountDiv>
        <SortIconDiv style={{color: id % 2 === 0 ? "#8d4e58" : "#11765d"}}>
            <img src={id % 2 !== 0 ? sortUpGreen : sortUpRed} draggable={false} height={"10px"} style={{transform:id % 2 === 0 ? "rotate(180deg)" : "unset"}}/>
            <div>3%</div>
        </SortIconDiv>
      </TotalCountDiv>
    </StatsticsDiv>
  )
}

export default Statstics
