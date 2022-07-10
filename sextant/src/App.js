import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="SEXTANT" />
      <Exhibit name="Exhibit">
      </Exhibit>
    </div>
  );
}

export default App;
