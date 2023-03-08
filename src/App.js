import { useEffect } from 'react';
import './App.css';
const tg=window.Telegram.WebApp;

const token="1450164197:AAFqvV6DHugvks5889prhHZvzAid-kBa_8I";


function App() {

  useEffect(()=>{
  tg.ready()
  },[])

  const onClose=()=>{
    tg.close()
  }

  return (
    <div className="App">
     chat
     <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
