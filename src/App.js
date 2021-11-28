import Footter from './components/Footter';
import Header from './components/Header';
import Logo from './components/Logo';
function App() {
  return (
    <>
      <Logo/>
      <Header/>
      <Footter title={"Facebook"} website="www.google.com"
       address="Bangkok" postcode={1207}
       isOpen={true}></Footter>

    
    </>
  );
}

export default App;
