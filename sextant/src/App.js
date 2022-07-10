import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Address from './components/Address';

function App() {
  return (
    <div className="App">
      <Banner bannerText="SEXTANT" />
      <Exhibit name="Public IPv4 Address">
        <Address url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Public IPv4(v6) Address">
        <Address url='https://api64.ipify.org?format=json' />
      </Exhibit>
    </div>
  );
}

export default App;
