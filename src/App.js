import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Auth from './pages/Auth/index';
import Home from './pages/Home/index';
import MyRecipes from './pages/MyRecipes/index';
import Calendar from './pages/Calendar/index';
import ShoppingList from './pages/ShoppingList/index';
import Recipe from './pages/Recipe/index';

function App() {
  
  const navigate = useNavigate();

  let token = localStorage.getItem("token");
  const [islogged, setIslogged] = useState(false);
  
  useEffect(() => {
    if(token === null){
      setIslogged(false);
    }
    else{
      setIslogged(true);
      navigate('/home');
    }
  }, [token]);

  return (
    <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={islogged ?<Home/> : <Navigate to="/" />} />
        <Route path="/MyRecipes" element={<MyRecipes/>} />
        <Route path="/Calendar" element={<Calendar/>} />
        <Route path="/ShoppingList" element={<ShoppingList/>} />
        <Route path="/Recipe/:recipeId" element={<Recipe/>} />
    </Routes>
  );
}

export default App;
