import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import Drawer from './Components/Drawer/Drawer';
import Main from './Components/Main/Main';
import {useEffect} from 'react'
import getData from './redux/action.js'
import axios from 'axios'
import { changePage } from './redux/action';


function App() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(changePage(0))
   axios.post(`http://localhost:4000/getUserCallWorkbook.do?pageNumber=${0}&pageSize=5`).then(res =>dispatch(getData(res.data.workbookItems)))

  }, [])
  

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
