import IconesHeader from '../IconesHeader/icones';
import Logo from '../logo/logo';
import OpcoesHeader from '../opcoesHeader/opcocoesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;

`
function Header(){
    return(
        <HeaderContainer>
          <Logo/>
          <OpcoesHeader/>
          <IconesHeader/>        
      </HeaderContainer>
    )
}
export default Header 