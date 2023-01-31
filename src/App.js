import './App.css';
import Newcontent from './NewElements/Newcontent';
import Newdemos from './NewElements/Newdemos';
import Newfooter from './NewElements/Newfooter'
import './NewElements/optimal.css'
import Signin from './NewElements/Signin'
import Signup from './NewElements/Signup'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Newdemos/>
      <Routes>
        <Route path='/' element={<Newcontent/>}/>
        <Route path="/register" element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/> 
      </Routes>
      <Newfooter/>
    </Router>
  );
}

export default App;
