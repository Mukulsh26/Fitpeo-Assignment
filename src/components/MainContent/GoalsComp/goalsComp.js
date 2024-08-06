import React from 'react'
import { GoalAlignCont, GoalIconCont, GoalTitleCont, SideArrowIconCont, TotalGoalAlignCont } from '../mainContent.styled'
import sideArrowIcon from "../../Images/side_arrow.png"
const GoalsComp = (props) => {
    const { details } = props
    const { imageUrl, title } = details
    return (
        <TotalGoalAlignCont>
            <GoalAlignCont>
                <GoalIconCont style={{ background: title === "Goals" ? "#603236" : title === "Popular Dishes" ? "#293364" : "#224960" }}>
                    <img src={imageUrl} draggable={false} />
                </GoalIconCont>
                <GoalTitleCont>{title}</GoalTitleCont>

            </GoalAlignCont>
            <SideArrowIconCont>
               <img src={sideArrowIcon} draggable={false}/>
            </SideArrowIconCont>
        </TotalGoalAlignCont>

    )
}

export default GoalsComp
