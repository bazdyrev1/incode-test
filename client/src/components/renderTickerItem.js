import styled from 'styled-components';

const WrapperItem = styled.div`

display: flex;
flex-direction: row;
align-content: center;
justify-content: center;
align-items: center;


`
const PartItem = styled.div`
height: 100%;
width: 22%
`
const AbbreviationItem = styled.div(props => ({
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: '4px',
    width: '47px',
    height: '20px',
    backgroundColor: props.backgroundColor,
}))


export {WrapperItem, PartItem, AbbreviationItem }