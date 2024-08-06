import React from 'react'
import { HorizontalLine, OrderIconCont,OrderNameAlignCont,OrderNameCont,OrderNameDiv,StatusDiv,TotalOrderAlignCont } from '../mainContent.styled'

const OrderComp = (props) => {
    const { details } = props
    const { imageUrl, name, orderNo, amount, status } = details
    return (
        <>
        <TotalOrderAlignCont>
            <OrderNameAlignCont>
                <OrderIconCont>
                    <img src={imageUrl} draggable={false} />
                </OrderIconCont>
                <OrderNameDiv style={{width:"unset"}}>{name}</OrderNameDiv>
            </OrderNameAlignCont>

            <OrderNameDiv>{orderNo}</OrderNameDiv>
            <OrderNameDiv>{amount}</OrderNameDiv>
            <OrderNameDiv style={{display:"flex",justifyContent:"center"}}>
                <StatusDiv style={{background:status === "Delivered" ? "#185245" : "#7d4143"}}>
                <span style={{color:status === "Delivered" ? "#139570" : "#ca6f72"}}>{status}</span>
                </StatusDiv>
                
            </OrderNameDiv>

        </TotalOrderAlignCont>
        <HorizontalLine/>
        </>

    )
}

export default OrderComp
