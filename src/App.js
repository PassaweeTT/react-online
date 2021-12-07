import Footter from './components/Footter';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';

function App() {
  return (
    <div className="logo">
      <Logo/>
      <Header/>
      <Footter title={"Facebook"} website="www.google.com"
       address="Bangkok" postcode={1207}
       isOpen={true}></Footter>
      <Sidebar/>
      <Menu/>

    </div>
  );
}

export default App;
