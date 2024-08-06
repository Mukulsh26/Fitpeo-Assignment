import React from 'react'
import { ColumnHeading, ContentAlignDiv, DashboardText, HeadingAlignCont, HorizontalLine, OrderAlignDiv, RecentOrdersText, ScrollDiv, StatsticsAlignDiv, TotalFeedBackAlignDiv, TotalFeedBackDiv, TotalGoalsCont, TotalMainContentDiv, TotalOrdersDiv, TotalStaticsDiv } from './mainContent.styled'
import Sidebar from './SiderBar/sidebar'
import OrderIcon from "../Images/orderIcon.png"
import cancelIcon from "../Images/cancelIcon.png"
import deliveryIcon from "../Images/deliveryIcon.png"
import revenueIcon from "../Images/revenueIcon.png"
import Statstics from './StatsticsComp/statstics'
import NetProfit from './NetProfitComp/netProfit'
import goalsIcon from "../Images/goals_Icon.png"
import dishesIcon from "../Images/dishesIcon.png"
import menuIcon from "../Images/menuIcon.png"
import GoalsComp from './GoalsComp/goalsComp'
import OrderComp from './OrdersComp/orders'
import FeedbackComp from './FeedbackComp/feedback'
import BarGraph from './BarGraph/barGraph'
const staticsData = [{
    id: 1,
    title: "Total Orders",
    count: "75",
    imageUrl: OrderIcon
},
{
    id: 2,
    title: "Total Delivered",
    count: "70",
    imageUrl: deliveryIcon
},
{
    id: 3,
    title: "Total Cancelled",
    count: "05",
    imageUrl: cancelIcon
},
{
    id: 4,
    title: "Total Revenue",
    count: "$12k",
    imageUrl: revenueIcon
}
]

const goalsData = [{
    id: 1,
    title: "Goals",
    imageUrl: goalsIcon
},
{
    id: 2,
    title: "Popular Dishes",
    imageUrl: dishesIcon
},
{
    id: 3,
    title: "Menus",
    imageUrl: menuIcon
}]

const ordersData = [{
    id:1,
    imageUrl:"https://randomuser.me/api/portraits/men/75.jpg",
    name:"Wade Warren",
    orderNo:"17558348",
    amount:"$124.00",
    status:"Delivered"
},
{
    id:2,
    imageUrl:"https://randomuser.me/api/portraits/women/75.jpg",
    name:"Jane Chopper",
    orderNo:"123287438",
    amount:"$245.00",
    status:"Delivered"
},
{
    id:3,
    imageUrl:"https://randomuser.me/api/portraits/men/75.jpg",
    name:"Wade Warren",
    orderNo:"23743437",
    amount:"$324.00",
    status:"Cancelled"
},
{
    id:4,
    imageUrl:"https://randomuser.me/api/portraits/women/75.jpg",
    name:"Wade Warren",
    orderNo:"23437848",
    amount:"$450.00",
    status:"Pending"
},
{
    id:5,
    imageUrl:"https://randomuser.me/api/portraits/men/75.jpg",
    name:"Wade Warren",
    orderNo:"39928493",
    amount:"$256.00",
    status:"Pending"
},
{
    id:6,
    imageUrl:"https://randomuser.me/api/portraits/women/75.jpg",
    name:"Wade Warren",
    orderNo:"227237438",
    amount:"$354.00",
    status:"Delivered"
}
]

const feebackData = [{
    id:1,
    imageUrl:"https://randomuser.me/api/portraits/men/75.jpg",
    name:"Wade Warren",
    rating:4,
    comment:"The dish had a delightful balance of flavors, with each ingredient complementing the others perfectly. The presentation was visually appealing, adding to the overall dining experience. However, the portion size was slightly smaller than expected. Overall, it was a delicious and well-prepared meal."
    
},
{
    id:2,
    imageUrl:"https://randomuser.me/api/portraits/women/75.jpg",
    name:"Hoe Wiladerson",
    rating:5,
    comment:"The dish was bursting with fresh and vibrant flavors, making each bite a joy. The seasoning was spot-on, enhancing the natural taste of the ingredients. The texture was perfect, with a satisfying mix of crunch and tenderness. A truly memorable and enjoyable dining experience!"
    
},
{
    id:3,
    imageUrl:"https://randomuser.me/api/portraits/men/75.jpg",
    name:"Obama",
    rating:3,
    comment:"The dish had a harmonious blend of flavors and impeccable seasoning, making it delightful. The texture was perfect, combining crunch and tenderness for an exceptional experience."
    
},
{
    id:4,
    imageUrl:"https://randomuser.me/api/portraits/women/75.jpg",
    name:"John wick",
    rating:2,
    comment:"The dish had a harmonious blend of flavors and impeccable seasoning, making it delightful. The texture was perfect."
    
}

]
const MainContent = () => {
    return (
        <TotalMainContentDiv>
            <Sidebar />
            <ContentAlignDiv>
                <ScrollDiv>
                    <DashboardText>Dashboard</DashboardText>
                    <StatsticsAlignDiv>
                        <TotalStaticsDiv>
                            {staticsData.map((each) => (
                                <Statstics details={each} key={each?.id} />
                            ))}
                        </TotalStaticsDiv>
                        <NetProfit />
                    </StatsticsAlignDiv>
                    <StatsticsAlignDiv style={{  marginTop: "25px" }}>
                        <TotalStaticsDiv style={{background:"#1f2029"}}>
                          <BarGraph />
                        </TotalStaticsDiv>
                        <TotalGoalsCont>
                            {goalsData.map((each) =>
                                <GoalsComp details={each} key={each?.id} />
                            )}
                        </TotalGoalsCont>
                    </StatsticsAlignDiv>
                    <StatsticsAlignDiv style={{ height: "400px", marginTop: "25px" }}>
                        <TotalOrdersDiv>
                          <RecentOrdersText>Recent Orders</RecentOrdersText>
                          <HeadingAlignCont>
                            <ColumnHeading style={{textAlign:"left"}}>Customer</ColumnHeading>
                            <ColumnHeading>Order No</ColumnHeading>
                            <ColumnHeading>Amount</ColumnHeading>
                            <ColumnHeading>Status</ColumnHeading>
                          </HeadingAlignCont>
                          <HorizontalLine/>
                          <OrderAlignDiv>
                          {ordersData.map((each) =>
                                <OrderComp details={each} key={each?.id} />
                            )}
                          </OrderAlignDiv>
                          
                        </TotalOrdersDiv>

                        <TotalFeedBackDiv>
                        <RecentOrdersText>Customer's Feedback</RecentOrdersText>
                        <TotalFeedBackAlignDiv>
                        {feebackData.map((each) =>
                                <FeedbackComp details={each} key={each?.id} />
                            )}
                            </TotalFeedBackAlignDiv>

                        </TotalFeedBackDiv>

                    </StatsticsAlignDiv>
                </ScrollDiv>

            </ContentAlignDiv>

        </TotalMainContentDiv>
    )
}

export default MainContent
