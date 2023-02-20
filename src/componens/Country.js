import React from 'react'

const Country = (props) => {
   const {name,area,population,capital,flags} = props.country;

   const btnHandle = (name)=>{
    props.onRemoveCountry(name)
   }
  return (
        <div className='col-xl-4'>
            <div className='single-box'>
                <img src={flags.png}></img>
                <h3>Country Name : {name.common}</h3>
                <h3>Population: {population}</h3>
                <h3>Area : {area}</h3>
                <h3>Capital : {capital}</h3>
                <button className='btn btn-danger' onClick={()=>{btnHandle(name.common)}}>Remove Country</button>
            </div>
        </div>
  )
}

export default Country
