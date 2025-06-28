import './App.css';
import ListaCursos from './pages/ListaCursos';
import PaginaCursos from './pages/PaginaCursos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaCursos />} />
        <Route path='/curso/:id' element={<PaginaCursos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
