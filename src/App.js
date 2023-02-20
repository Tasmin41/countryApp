import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import React,{useState,useEffect} from 'react';
import Countries from './componens/Countries';
import Search from './componens/Search';


function App() {

  const [countries,setCountries] = useState([]);
  const [filterCountries,setFilterCountries] = useState(countries);
  const [loading,setLoading]=useState(true)
  const [error,setError] = useState(null);


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>{
      if(!res.ok){
        throw Error("Error occured")
      }else{
        return res.json();
      }
    })
    .then((data)=>{
      setCountries(data);
      setFilterCountries(data);
      setLoading(false);
      setError(null)
    })
    .catch((error)=>{
      setLoading(false)
      setError(error.message);
    })
  }, [])


  const removeCountry = (name)=>{
    const filterC = filterCountries.filter((country)=>country.name.common !== name)
    setFilterCountries(filterC);
  }

  const handleSearch = (searchValue)=>{
    const value = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const newCountriesName = country.name.common.toLowerCase();
      return newCountriesName.startsWith(value)
    })
    setFilterCountries(newCountries);
  }
  
  return (
    <div className="App">
      <section>
      <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>
                    <div>
                        <h1 className='title'>Country App</h1>
                    </div>
                    <div>
                        <Search onSearch = {handleSearch}/>
                    </div>
                </div>
            </div>
          </div>
      </section>
      
      {loading && <h2>Loading....</h2>}
      {error && <h2>Error throw</h2>}
      {countries &&
       <Countries
        countries={filterCountries}
         onRemoveCountry = {removeCountry}/>}
    </div>
  );
}

export default App;
