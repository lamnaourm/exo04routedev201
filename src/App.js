import { Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './components/Acceuil';
import DetailCountry from './components/DetailCountry';
import NotFound from './components/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Acceuil />} />
        <Route path='/home' element={<Acceuil />} />
        <Route path='/details/:name' element={<DetailCountry />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
