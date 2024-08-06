import React from 'react'
import { NetProfitAlignDiv, NetProfitCont, NetProfitText, SortIconDiv, TotalNetProfitPerDiv } from '../mainContent.styled'
import sortUpGreen from "../../Images/sortUpGreen.png"
import profitPer from "../../Images/profitPerIcon.png"
const NetProfit = () => {
    return (
        <NetProfitCont>
            <NetProfitAlignDiv>
                <NetProfitText>Net Profit</NetProfitText>
                <NetProfitText style={{ fontSize: "30px", fontWeight: 700 }}>$6759.25</NetProfitText>
                <SortIconDiv style={{ color: "#11765d" }}>
                    <img src={sortUpGreen} draggable={false} height={"10px"} />
                    <div>3%</div>
                </SortIconDiv>
            </NetProfitAlignDiv>
            <TotalNetProfitPerDiv>
                <img src={profitPer} draggable={false}/>
            </TotalNetProfitPerDiv>

        </NetProfitCont>
    )
}

export default NetProfit
