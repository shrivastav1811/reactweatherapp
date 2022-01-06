import React , {useState,useEffect} from 'react'

const Tempapp = () => {

 const [city, setCity]= useState(null);
 const [search, setSearch]= useState("pune");

 useEffect(()=>{
     const fetchApi = async()=>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1348e348310c0d899f3fe244350f02ce`
      const res = await fetch(url);
  
     const resjson = await res.json();
    //  console.log(resjson);
     setCity(resjson.main);
     }
     fetchApi();
 },[search])

    return (
        <>
        <div className="box">
               <div className="inputdata">
                  <input
                   type="search"
                   value={search}
                   className="inputfield"
                   onChange={(event)=> {
                     setSearch(event.target.value)
                   }}
                    />
               </div>
           
   {!city ? (
       <p className="errormsg"> no data found</p>
   ) : 
   
    (
     <div>
     <div className="info">
               <h2 className="location">
               <i className="fas fa-street-view"></i>{search}
               </h2>
               <h1 classname="temp">
                {city.temp}<sup>0</sup>Cel
               </h1>
               <h3 className="temp_maxmin"> Min : {city.temp_min}<sup>0</sup>Cel | max : {city.temp_max}<sup>0</sup>Cel </h3>
           </div>  
  
            <div className="wave one"></div>
            <div className="wave two"></div>
            <div className="wave three"></div>
        </div>
       )}

        </div>
        </>
    )
}

export default Tempapp;
