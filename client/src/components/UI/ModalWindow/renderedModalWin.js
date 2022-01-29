import { produceWithPatches } from "@reduxjs/toolkit/node_modules/immer";
import React from "react";
import styled from 'styled-components';

const WrapperWindow = styled.div`
color: blue;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0,0,0, 0.8);
`;
const ContentBox = styled.div`
    padding: 25px;
     background: white;
     border-radius: 16px;
     min-width: 250px;
`


export   {WrapperWindow, ContentBox,} ;
