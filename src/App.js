import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import AppCard from './Components/AppCard/AppCard';
import AppList from './Components/AppList/AppList';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      {/* <AppCard/> */}
      <AppList/>
    </>
  );
}

export default App;
