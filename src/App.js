import Footter from './components/Footter';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="logo">
      <Logo/>
      <Header/>
      <Footter title={"Facebook"} website="www.google.com"
       address="Bangkok" postcode={1207}
       isOpen={true}></Footter>

    </div>
  );
}

export default App;
