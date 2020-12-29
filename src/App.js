import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './header';
import { Banner } from './banner';
import { About } from './about';
import { Services } from './services';
import { Portfolio } from './portfolio';
import { Contact } from './contact';
import Routes from './routes';


function App(history) {
  return (
    <div>
      
      <Routes />
      {/* <Banner
      /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
