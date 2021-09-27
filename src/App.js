
import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

import Header from "./components/Header/Header"
import PageCard from './pages/PageCard';



function App() {

  const [filter, setFilter] = useState("");

  return (

    <div className="App">
      <Header/>
      <Button setFilter={setFilter}/>
      <PageCard filter={filter}/>
      <Footer/>
    </div>
  );
}

export default App;