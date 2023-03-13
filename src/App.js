import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom"
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

const token = "1450164197:AAFqvV6DHugvks5889prhHZvzAid-kBa_8I";

function App() {

  const { onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
