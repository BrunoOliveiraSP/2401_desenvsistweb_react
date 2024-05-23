import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Evento from './pages/Evento';
import VarEstado from './pages/varEstado';
import Discord from './pages/Discord';
import Api from './pages/Api';
import NotFound from './pages/NotFound';
import DetalheAluno from './pages/DetalheAluno';

export default function Navegacao() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/evento' element={<Evento />} />
        <Route path='/varestado' element={<VarEstado />} />
        <Route path='/discord' element={<Discord />} />
        <Route path='/api' element={<Api />} />
        <Route path='/detalheAluno/:id' element={<DetalheAluno />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

