import React, { useEffect, useState } from 'react';
import './App.css';
import Countries from './Countries';

function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [country, setCountry]= useState([]);
  const [isLoading , setIsloading] = useState(true);
  const [error , setError]= useState(null);

  useEffect(()=>{
     fetch(url)
     .then(res=>{
      if(res.ok){
        return res.json()
      }
    
        throw res
      
     })
     .then(data=>{
      setCountry(data)
     
     })
     .catch(error=>{
      setError(error)
     })
     .finally(()=>{
      setIsloading(false)
     })
  },[])
  // if(isLoading) return "loading....";
  // if(error) return "Error!"
  return (
    <div className="container">
     <h1>Country App</h1>
     {isLoading  && <h3>Loading......</h3>}
     {error && <h3>{error.message}</h3>}
    {country && <Countries Countries={country}/> }
    </div>
  );
}

export default App;
