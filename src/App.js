import './App.css';
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/index';
import Home from './pages/Home/index';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
    </Routes>
  );
}

export default App;
