import './App.css';
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/index';
import Home from './pages/Home/index';
import MyRecipes from './pages/MyRecipes/index';
import Calendar from './pages/Calendar/index';
import ShoppingList from './pages/ShoppingList/index';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/MyRecipes" element={<MyRecipes/>} />
        <Route path="/Calendar" element={<Calendar/>} />
        <Route path="/ShoppingList" element={<ShoppingList/>} />
    </Routes>
  );
}

export default App;
