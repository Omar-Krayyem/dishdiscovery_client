import '../Header/style.css';
import Card from '../../components/Card/index';
import axios from 'axios';
import React, { useState, useEffect } from "react";

const Header = () => {

  let [searchInput, setSearchInput] = useState("");
  let [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(() => {
    console.log(searchInput);
    const token = localStorage.getItem("token");

    const getRecipes = async () => {
        try {
            let { data } = await axios.get(`http://127.0.0.1:8000/api/Home/search/${searchInput}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(data.data);
            setSearchedRecipes(data.data); // You need to define 'user'
            console.log(searchedRecipes);
        } catch (error) {
            console.log(error);
        }
    }

    if (searchInput !== "") {
      getRecipes();
    } else {
      setSearchedRecipes([]); // Clear the search results when the input is empty
    }
  }, [searchInput]);


  return (
    <div className='Search_Header'>
      <div className='Header'>
        <div className='search'>
              <input type='text' placeholder='Search recipes here...'  value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
          </div>
          <div className='txt'>
              <div className='title'>What is favorite suisines?</div>
              <div className='subtitle'>personalize your experience</div>
          </div>
      </div>
      {searchInput !== "" && (
        <div className='Search_Result'>
          <h1>Result</h1>
          <div className="cardContainer">
            {searchedRecipes.map((searchedRecipe) => (
              <Card key={searchedRecipe.id} id={searchedRecipe.id} name={searchedRecipe.name} new_image_url={searchedRecipe.new_image_url}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;