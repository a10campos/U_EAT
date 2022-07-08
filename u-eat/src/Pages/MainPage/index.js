import Header from "../../Component/Header";
import Buttons from "../../Component/Buttons";
import {useEffect} from "react";
//import Rating from '@mui/material/Rating';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {getRestaurants} from "../../Slices/restaurantSlice";

  export default function MainPage() {

    const restaurants = useSelector(
      (state) => state.user.restaurants
    );
  
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const points = restaurants.points;

  console.log(restaurants);

    return (
        <div>
          <Header></Header>
          <div className="h-screen font-sans text-projectBlack">
              <div className="flex w-screen justify-center mt-4">
                < Buttons text="Filtrar restaurantes"/> 
              </div>
          
              <div className="mt-4">
                  {
                  restaurants.map((i) => {
                      return (
                      <Link to={`/restaurant/${i.name}`} key={`restaurant${i.id}`} >
                        <div className="ml-4 w-screen items-center flex">
                        <img src={i.photo} alt={i.name} className="object-contain h-44 w-44"/>  
                        <div >
                          <div className= "text-xl ml-4" >
                            <p className="text-2xl font-bold">{i.name}</p>
                            <p> A {i.distance} metros</p> 
                            <p> ₡{i.lowerPrice} - ₡{i.higherPrice}</p> 
                            <p> Valoración: {i.points}</p> 
                            {/* <Rating name="read-only" value={points} size="small"/> */}
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