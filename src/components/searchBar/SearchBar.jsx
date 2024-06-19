import { useState } from 'react';
import './SearchBar.scss';

const types =["buy", "rent"];


const SearchBar = () => {
  const [query , setQuery] = useState({ 
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0,
  });

  const switchType =(val) =>{
    setQuery({...query, type:val});
  };

  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type) => (
          <button key={type} onClick={()=>switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>
        ))}
      </div>
      <form >
        <input type="text"  name="location" placeholder='City Location'/>
        <input type="number"  name="minPrice" min={0} max={1000000} placeholder='Min Price'/>
        <input type="number"  name="maxPrice"  min={0} max={1000000} placeholder='Max Price'/>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar