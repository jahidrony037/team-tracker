
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NoMatchFound from "./components/NoMatchFound/NoMatchFound";
import TeamDetail from "./components/TeamDetail/TeamDetail";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/team/:teamID' element={<TeamDetail />} />
        <Route path="*" element={<NoMatchFound />} />
      </Routes>
    </div>
  );
}

export default App;
