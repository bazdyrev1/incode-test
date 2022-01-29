import styled from 'styled-components';

const WrapperList = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(255,255,255);

`
const UlList = styled.ul`
height: 50%;
width: 60%;
top: auto;
bottom: auto;
right: 10%;
left: 10%;
align-items: center;
`

const LiList = styled.li`
height: auto;
width: 100%;

`
export {WrapperList, UlList, LiList }