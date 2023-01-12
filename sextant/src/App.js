import './App.css';
import ExhibitContainer from './ExhibitContainer';
// import ExhibitComponent from './ExhibitComponent';
import Header from './Header';
import client from './websocketclient';

function App() {
  return (
    <>
    <Header />
    <ExhibitContainer />
    </>
  );
}

export default App;
