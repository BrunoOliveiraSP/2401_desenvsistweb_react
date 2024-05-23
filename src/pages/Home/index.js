import './index.scss';

import Cabecalho from '../../components/cabecalho';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="App">
      <Cabecalho titulo="HOME" />

      <h1> HOME </h1>

      <ul>
        <li>
          <Link to='/contato'> Contato </Link>
        </li>

        <li>
          <Link to='/sobre'> Sobre </Link>
        </li>

        <li>
          <Link to='/evento'> Evento </Link>
        </li>

        <li>
          <Link to='/varestado'> Variável de Estado </Link>
        </li>

        <li>
          <Link to='/discord'> Discord </Link>
        </li>

        <li>
          <Link to='/api'> Chamada em API </Link>
        </li>

      </ul>

    </div>
  );
}


