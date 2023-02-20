import React from 'react'
import {v4 as uuidv4} from "uuid"


import Country from './Country'


const Countries = (props) => {
  return (
    <section>
        <div className='container'>
            <div className='row'>
                {props.countries.map((country)=>{
                const countryNew = {country,id:uuidv4()};
                return <Country 
                {...countryNew}
                 key={countryNew.id}
                 onRemoveCountry = {props.onRemoveCountry}
                 />;
                })}
            </div>
        </div>
    </section>
  );
};

export default Countries
