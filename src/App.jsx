import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lang, setlang] = useState('en')
  const handleLang=()=>{
    console.log(lang)
  }
  useEffect(() => {
    handleLang()
  }, [lang])
  
  return (
    <div className="App">
      <div onClick={()=>setlang('ar')}>arabic</div>
      <div onClick={()=>setlang('en')}>english</div>
    </div>
  );
}

export default App;
