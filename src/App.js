import { useEffect,useState } from 'react';
import './App.css';

function App() {
   const [tips,setTips] = useState ("");

 const abc = async()=>{
  const response = await fetch (`http://www.boredapi.com/api/activity/`);
  const data = await response.json();
  setTips(data.activity);
 }

 useEffect(()=>{
  abc()
 }, []);

  return (
    <div className="container">
<p>{tips}</p>
<button onClick={abc} >Find your activity today...</button>
    </div>
  )
}
  


export default App;
 