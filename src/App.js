import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
