/* eslint-disable no-nested-ternary */
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

const date = new Date();
const hour = date.getHours();

const Navbar = function Navbar() {
    return (
        <NavbarContainer>
            <Text>
                <span>
                    {hour >= 12 ? (hour >= 16 ? 'Good Evening' : 'Good AfterNoon') : 'Good Morning'}
                    ,
                </span>
                <span>Sanvi rohoman</span>
            </Text>

            <InputContainer>
                <Icon>
                    <FiSearch />
                </Icon>
                <Input type="text" placeholder="search for project" />
            </InputContainer>
        </NavbarContainer>
    );
};

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
        gap: 20px;
    }
`;
const Text = styled.h1`
    span:nth-child(1) {
        font-weight: 500;
        color: #484258;
        margin-right: 8px;
    }
`;
const InputContainer = styled.div`
    display: flex;
    margin-right: 15px;
`;
const Icon = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: #dce4ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    cursor: pointer;
    svg {
        color: #555555;
    }
`;
const Input = styled.input`
    border: none;
    background-color: #dce4ff;
    outline: none;
    padding: 0 8px;
    transition: 0.4s;
`;

export default Navbar;
