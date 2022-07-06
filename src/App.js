import './App.css';
import Drawer from './Components/Drawer/Drawer';
import Main from './Components/Main/Main';


function App() {
  return (
    <div>
      <div style={{width:'100%', display:'flex', flexWrap:'nowrap'}}>
        <Drawer/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
