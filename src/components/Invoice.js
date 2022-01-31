import React from 'react';
import styled from 'styled-components';
import Avaterimage from '../assets/avatarImage5.webp';
import Avaterimage2 from '../assets/avatarImage6.webp';
import { cardShadow, hoverEffect } from '../utils';
import Badge from './Badge';

const Invoice = function Invoice() {
    return (
        <IncoiceContainer>
            <CardContent>
                <Incoice>
                    <Info>
                        <Avater>
                            <img src={Avaterimage} alt="imgone" />
                        </Avater>
                        <TextContainer>
                            <Title>Alexander wiLLiams</Title>
                            <SubTitle>ABC Holding</SubTitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <Badge content="Paid" paid />
                        <Price>$ 1,200.95</Price>
                    </Container>
                </Incoice>
                <Incoice>
                    <Info>
                        <Avater>
                            <img src={Avaterimage2} alt="imgto" />
                        </Avater>
                        <TextContainer>
                            <Title>John Philips</Title>
                            <SubTitle>Inchor Associates</SubTitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <Badge content="Painding" late />
                        <Price>$ 1,300.95</Price>
                    </Container>
                </Incoice>
                <Incoice>
                    <Info>
                        <Avater>
                            <img src={Avaterimage} alt="imgto" />
                        </Avater>
                        <TextContainer>
                            <Title>John Philips</Title>
                            <SubTitle>Inchor Associates</SubTitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <Badge content="Paid" clean />
                        <Price>$ 1,300.95</Price>
                    </Container>
                </Incoice>
            </CardContent>
        </IncoiceContainer>
    );
};

const IncoiceContainer = styled.div`
    width: 35rem;
    border-radius: 1rem;
    margin-top: 1rem;
    background-color: white;
    height: 140%;
    box-shadow: ${cardShadow};
    transition: 0.4s;
    &:hover {
        box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const CardContent = styled.div`
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        margin: 2rem 0;
    }
`;
const Incoice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.4rem;
    padding-top: 0.6rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
        gap: 1rem;
    }
`;
const Info = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
`;
const Avater = styled.div`
    margin-right: 5px;
    img {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 3.5rem;
    }
`;
const TextContainer = styled.div`
    margin-left: 1rem;
`;
const Title = styled.div``;
const SubTitle = styled.div`
    margin-left: 1rem;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width: 100%;
        flex-direction: column;
        gap: 0.6rem;
    }
`;
const Price = styled.div``;

export default Invoice;
