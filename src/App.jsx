import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Alldoc from './Components/Alldoc';
import { Route, Routes } from 'react-router-dom';
import MoreDeatils from './Components/MoreDeatils';


function App() {
  return (
    <div className="App">
    <header>

    <Header/>

    </header>
    
    <section>
    <Routes>
      <Route path='/' element={<Alldoc/>}/>
      <Route path='/view/:id' element={<MoreDeatils/>}/>
    </Routes>

    </section>
    <footer>
    <Footer/>

    </footer>
    </div>
  );
}

export default App;
