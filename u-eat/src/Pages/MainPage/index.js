import Header from "../../Component/Header";
import Buttons from "../../Component/Buttons";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
  export default function MainPage() {

    const [restaurants,setRestaurant] = useState([]);
    const [filter,setFilter] = useState([]);

    useEffect(()=>{
      const fetchRestaurants = async () => {
        const restaurantsFetch = await fetch (`http://localhost:7500/restaurants?filter=${filter}`);
        const resturantBody = await restaurantsFetch.json();
        setRestaurant(resturantBody);
      }
      fetchRestaurants();
    },[]);

    return (
        <div>
          <Header></Header>
          <div className="h-screen font-sans text-projectBlack">
              <div className="flex  justify-center mt-4">
                < Buttons text="Filtrar restaurantes"/> 
              </div>
          
              <div className="mt-4">
                  {
                  restaurants.map((i) => {
                      return (
                      <Link to={`/restaurants/${i.id}`} key={`restaurants${i.id}`} >
                        <div className="ml-4 w-screen items-center flex">
                        <img src={i.photo} alt={i.name} className="object-contain h-44 w-44"/>  
                        <div >
                          <div className= "text-xl ml-4" >
                            <p className="text-2xl font-bold">{i.name}</p>
                            <p> A {i.distance} metros</p> 
                            <p> ₡{i.rangePrice}</p> 
                            <p> Valoración: {i.points}</p> 
                          </div>      
                        </div>
                     </div>
                      </Link>  
                      )
                      })
                  }
              </div>  
          </div>   
        </div>   
      )
  }