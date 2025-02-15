import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';


export default function App() {
  const [alert, setAlert] = useState(null) // for showing alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar title="Notebook" />
        <Alert alert={alert} />
        <div className="container">

        <Routes>
          <Route exact path='/' element={<Home showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About />} />   
          <Route exact path="/notebook/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/notebook/signup" element={<Signup showAlert={showAlert} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  )
}
