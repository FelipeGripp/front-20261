import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import RequerimentoForm from './forms/RequerimentoForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {}
        <Route index element={<Dashboard />} />
        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos">
          <Route index element={<Requerimentos />} />
          <Route path="novo" element={<RequerimentoForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
