import React from 'react';
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaWallet } from 'react-icons/fa';
import { RiFileCopyLine, RiHomeLine } from 'react-icons/ri';
import styled from 'styled-components';
import AvatarImage from '../assets/profile.webp';
import { darkThemeColor } from '../utils';
import Badge from './Badge';

const Sidebar = function Sidebar() {
    return (
        <Container>
            <ProfileContainer>
                <Avater src={AvatarImage} alt="profile" />
                <Name>
                    <FristName>Sunvi</FristName> <LastName>Rohoman</LastName>{' '}
                </Name>
                <Badge content="Pro Level" />
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <MyLink>
                        <RiHomeLine />
                        <h3>Dashboard</h3>
                    </MyLink>
                    <MyLink>
                        <RiFileCopyLine />
                        <h3>Projects</h3>
                    </MyLink>
                    <MyLink>
                        <FaWallet />
                        <h3>Inboices</h3>
                    </MyLink>
                    <MyLink>
                        <AiOutlinePieChart />
                        <h3>Reports</h3>
                    </MyLink>
                </Links>
                <ContactContainer>
                    <span>Having trobles?</span>
                    <a href="udhfdh">Contact us</a>
                </ContactContainer>
            </LinksContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 20%;
    height: 100% !important;

    background-color: #091322;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width: 100%;
        height: max-content !important;
    }
`;
const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Avater = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-top: 20%;
    outline: 3px solid #6100d4;
`;
const Name = styled.h2`
    color: white;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0.8rem 0 0.5rem 0;
`;
const FristName = styled.span`
    color: #16f5a3;
`;
const LastName = styled.span``;
const LinksContainer = styled.div`
    background-color: ${darkThemeColor};
    height: auto;
    width: 100%;

    padding-bottom: 3rem;
`;
const Links = styled.ul`
    list-style-type: none;
    width: 100%;
    height:60%
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`;
const MyLink = styled.li`
    transition: 0.3s;
    margin-left: 25%;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    color: #e4e4e4;
    cursor: pointer;
    align-content: center;

    h3 {
        font-weight: 300;
    }

    svg {
        font-size: 1.1rem;
        margin-top: 3px;
    }

    &:hover {
        color: #16f5a3;
    }

    @media screen and (max-width: 768px) {
        margin-left: 5%;
    }
`;
const ContactContainer = styled.div`
    width: 60%;
    height: auto;
    color: #c4c4c4;
    margin: auto auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: #091322;
    a {
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 0rem;
    }
`;

export default Sidebar;
