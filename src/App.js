import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import './css/app.css';
import Home from './pages/Home';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import { v4 as uuidv4 } from 'uuid'
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [technos, setTechnos] = useState([])

  const STORAGE_KEY = 'technos'
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, [])

  useEffect(() => {
    console.log('useEffect with []');
    setTechnos(storedTechnos);
  }, [])

  useEffect(() => {
    // persister en base
    console.log('useEffect with [technos]');
    setStoredTechnos(technos);
  }, [technos])

  function handleAddTechno(techno) {
    // on assigne un uid ici pour simuler un appel à une bdd
    setTechnos([...technos, { ...techno, id: uuidv4() }]);
  }


  function handleDelete(id) {
    // si on avait une bdd -> ordre de suppression
    setTechnos(technos.filter((tech) => tech.id !== id));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/list" element={<TechnoList technos={technos} handleDelete={handleDelete} />} />
      </Routes>
    </>
  );
}

export default App;
