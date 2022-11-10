import React from "react";
import Form from "./component/Form";
import Render from "./component/Render";
import{Routes,Route,BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Form/>}/>
      <Route path="/render" element={<Render/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;