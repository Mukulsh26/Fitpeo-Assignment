import React from 'react'
import { CommentDiv, FeebackAlignDiv, HorizontalLine, OrderIconCont, OrderNameAlignCont, OrderNameDiv, StarImgDiv } from '../mainContent.styled'
import whiteStar from "../../Images/whiteStar.png"
import yellowStar from "../../Images/yellowStar.png"
const FeedbackComp = (props) => {
    const { details } = props
    const { imageUrl, name, rating, comment } = details
    const array = Array.from({ length: rating }, (_, index) => index + 1);
    const rem = Array.from({ length: 5 - rating  }, (_, index) => index + 1);
    return (
        <FeebackAlignDiv>
            <OrderNameAlignCont style={{ width: "100%" }}>
                <OrderIconCont>
                    <img src={imageUrl} draggable={false} />
                </OrderIconCont>
                <OrderNameDiv style={{ width: "unset" }}>{name}</OrderNameDiv>
            </OrderNameAlignCont>
            <StarImgDiv>
                {array.map((each) => (
                    <img src={yellowStar} draggable={false} width={"20px"} height={"20px"}/>
                ))}
                {rem.map((each) => (
                    <img src={whiteStar} draggable={false} width={"20px"} height={"20px"}/>
                ))}
            </StarImgDiv>
            <CommentDiv>{comment}</CommentDiv>
            <HorizontalLine/>


        </FeebackAlignDiv>
    )
}

export default FeedbackComp
