import React from 'react';
import styled from 'styled-components';
import AvaterImage from '../assets/avatarImage2.webp';
import AvaterImag2 from '../assets/avatarImage3.webp';
import { cardShadow, hoverEffect, themeColor } from '../utils';

const Projects = function Projects() {
    return (
        <YourProject>
            <Project>
                <Avater>
                    <img src={AvaterImage} alt="imgone" />
                </Avater>
                <Datail>
                    <Title>logo design for bakery</Title>
                    <SubTitle> 1 day remainging</SubTitle>
                </Datail>
            </Project>
            <Project>
                <Avater>
                    <img src={AvaterImag2} alt="imgone" />
                </Avater>
                <Datail>
                    <Title>logo design for bakery</Title>
                    <SubTitle> 1 day remainging</SubTitle>
                </Datail>
            </Project>
            <AllProjects>See all projects</AllProjects>
        </YourProject>
    );
};

const YourProject = styled.div`
    height: 70%;
    background-color: white;
    margin: 0;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: ${cardShadow};
    transition: 0.4s;
    &:hover {
        box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        height: max-content;
        width: 75%;
        margin-top: 1rem;
    }
`;
const Project = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
`;
const Avater = styled.div`
    img {
        height: 4rem;
        width: 4rem;
        border-radius: 4rem;
    }
`;
const Datail = styled.div`
    margin-left: 1rem;
`;
const Title = styled.div`
    font-weight: 500;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        font-size: 1rem;
    }
`;
const SubTitle = styled.div`
    font-weight: 300;
`;
const AllProjects = styled.h5`
    text-align: end;
    color: ${themeColor};
    cursor: pointer;
`;

export default Projects;
