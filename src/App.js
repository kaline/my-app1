import Sidebar from './sideBar/Sidebar';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Home></Home>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
