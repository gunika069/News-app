import React, { useState, useEffect } from "react";
import "./App.css";
export default function App() {

  let [NewsData, setNewsData] = useState([]);
  let [Search,  setSearch] = useState();
  let [SearchText,  setSearchText] = useState();
  useEffect(()=>{
    async function GetData(){
     let Data = await  fetch(`https://newsapi.org/v2/everything?q=${SearchText}&apiKey=dabe64f4505849f295d4f610c4c8b924`)
     Data = await Data.json()
     setNewsData(Data.articles);

     }
     GetData()
  },[SearchText])


  return (
    <div>
      <nav>
        <h2>Logo</h2>
        <div id="SearchBar">
          <input onChange={(e)=>{
            setSearch(e.target.value)
            console.log(Search)
          }} type="text" placeholder="Search"/>
          <button onClick={()=>{
            setSearchText(Search)
          }}>Search</button>
        </div>
        <ul>
          <li>Home</li>
          <li>Tech</li>
          <li>Business</li>
          <li>India</li>
        </ul>
         
      </nav>

      <div id="Main">
       
      {
        NewsData.map((e)=>(
          <div className="Card">
            <div className="Image">
              <img src={e.urlToImage} alt="" />
            </div>
            <div className="Content">
              <h2>{e.title}</h2>
              <h3>{e.description}</h3>
              <p>{e.publishedAt}</p>
              <button>Read More</button>
            </div>
          </div>
        ))
      }

      </div>
    </div>
  );
}
