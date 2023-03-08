import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';

const token = "1450164197:AAFqvV6DHugvks5889prhHZvzAid-kBa_8I";

function App() {

  const { onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])



  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
