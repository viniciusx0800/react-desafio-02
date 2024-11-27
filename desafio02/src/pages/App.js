import gitLogo from '../assets/github.png'

import { Container } from './styles';

function App() {
  return (
    <Container>
     hola em tu 
     <img src={gitLogo} width={72} height={72} alt='github logo'/>
    </Container>
  );
}

export default App;
