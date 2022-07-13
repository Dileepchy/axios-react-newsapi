import React,{useState, useEffect} from 'react'
import '../components/css/style.css'

const Temapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Kathmandu");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f3073a4c9ace1e491d7b56c8b3d00e7f`
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson);
        };
        fetchApi();
    })
    

  return (
    <>
    <div className='box'>
    <div className='inputData'>
        {/* written in search will be displayed in below */}
        <input type="search" value={search} className='inputFeild' onChange={(event) =>{ setSearch(event.target.value)} } />
     </div>
     {!city ? (
        <p className='errorMsg'>No Data Found</p>
     ) : (
        <div className='info'>
        <h2 className='location'>
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>
        <h1 className='temp'>29.12℃</h1>
        <h3 className='tempmin_max'>Min : {city.temp_min}℃ | Max : {city.temp_max}℃</h3>
     </div>
     )}

     </div> 
    </>
  )
}

export default Temapp