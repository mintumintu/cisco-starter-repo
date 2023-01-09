import './App.css';
import ExhibitComponent from './ExhibitComponent';
import Header from './Header';

function App() {
  return (
    <>
    <Header />
    <ExhibitComponent heading="Speed" body="100MBPS"/>
    <ExhibitComponent heading="IP" body="127.0.0.1"/>
    </>
  );
}

export default App;
