import React from 'react';
import styled from 'styled-components';
import { themeColor } from '../utils';

const Badge = function Badge({ content, clean = false, glow = false, paid = false, late = false }) {
    return (
        <Div clean={clean} glow={glow} paid={paid} late={late}>
            {content}
        </Div>
    );
};

const Div = styled.div`
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    color: white;
    background: ${themeColor};
    cursor: pointer;

    ${({ clean }) =>
        clean &&
        `background-color: transparent;
    border: 0.05rem solid ${themeColor};
     color:${themeColor};`}

    ${({ glow }) =>
        glow &&
        `font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weitht:normal;
        color:#2f233d;
        background-color:rgba(109,134,245,0.192);
    `}
    ${({ paid }) =>
        paid &&
        `
        background-color:#70e00041;
        color:#70e000;
    `}

${({ late }) =>
        late &&
        `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;

export default Badge;
