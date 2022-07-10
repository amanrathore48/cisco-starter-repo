import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Address from './components/Address';
import Pylon from './components/Pylon';

function App() {
  return (
    <div className="App">
      <Banner bannerText="SEXTANT" />
      <div className="main-container">
        <div className="cards">
          <Exhibit name="Public IPv4 Address">
            <Address url='https://api.ipify.org?format=json' />
          </Exhibit>
          <Exhibit name="Public IPv4(v6) Address">
            <Address url='https://api64.ipify.org?format=json' />
          </Exhibit>
          <Exhibit name="Latency">
            <Pylon />
          </Exhibit>
        </div>
      </div>
       
    </div>
  );
}

export default App;
