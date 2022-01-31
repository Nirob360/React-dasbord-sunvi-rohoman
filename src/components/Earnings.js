import React from 'react';
import { IoStatsChart } from 'react-icons/io5';
import styled from 'styled-components';
import { hoverEffect, themeColor } from '../utils';

const Earnings = function Earnings() {
    return (
        <EarningsCard>
            <CardContent>
                <Chart>
                    <IoStatsChart />
                </Chart>
                <EarningText>Earnings</EarningText>
                <Earning>$8,985</Earning>
                <EarningsIncrease>+10% since last month</EarningsIncrease>
            </CardContent>
        </EarningsCard>
    );
};

const EarningsCard = styled.div`
    height: 100%;
    width: 14rem;
    background-color: ${themeColor};
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in;
    &:hover {
        box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width: 80%;
    }
`;
const CardContent = styled.div`
    margin: 1rem;
`;
const Chart = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.3s;
    svg {
        height: 4rem;
        width: 4rem;
    }

    &:hover {
        color: #00fae5;
    }
`;
const EarningText = styled.div`
    text-align: center;
    font-weight: normal;
    padding: 0.4rem 0;
`;

const Earning = styled.div`
    text-align: center;
`;
const EarningsIncrease = styled.div`
    text-align: center;
    font-weight: normal;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 2rem;
`;

export default Earnings;
