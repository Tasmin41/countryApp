import React,{useState,useEffect} from 'react'



const Search = (props) => {


    const [searchValue,setSearch] = useState('')

    const handleInputChange = (e)=>{
        setSearch(e.target.value);
        
    }
    useEffect(() => {
        props.onSearch(searchValue);
    }, [searchValue])
    
  return (
    <div className='search-div'>
        <label className='search_label'>Search here Countries : </label>
      <input type="text" name='name' id='name' onChange={handleInputChange} className="form-control"></input>
    </div>
  )
}

export default Search
