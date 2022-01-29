import {WrapperWindow, ContentBox} from './renderedModalWin'

const ModalWindow = ({children, visible, setVisible}) => {

    return (
        visible ? 
        <WrapperWindow onClick={()=> setVisible(false)}>
            <ContentBox onClick={(e) => e.stopPropagation()}>
            {children}
            </ContentBox>
        </WrapperWindow>
        : null
    )
}
export default ModalWindow;