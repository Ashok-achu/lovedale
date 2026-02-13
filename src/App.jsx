import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import Convo from "./pages/Convo";
import Proposal from "./pages/Proposal";
import Song from "./pages/Song";
import './index.css'


export default function App(){
  return(
    <Router>
      <div className="app">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/memories" element={<Memories/>}/>
            <Route path="/convo" element={<Convo/>}/>
            <Route path="/proposal" element={<Proposal/>}/>
            <Route path="/song" element={<Song/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}
