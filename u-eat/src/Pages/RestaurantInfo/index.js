import { useParams, useNavigate } from "react-router-dom";
import Header from "../../Component/Header";
import Carousel from "../../Component/Carousel";
import { useEffect, useState } from "react";
import {Mixpanel} from "../../services/mixpanel"

export default function RestaurantInfo() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [restaurant,setRestaurant] = useState([]);
  const [reviews,setReviews] = useState([]);
  
  useEffect (()=> {
    const getRestaurantById = async () => {
      const restaurantFetch = await fetch(
        `http://localhost:7500/restaurants/${id}`
      );
      const restaurantData = await restaurantFetch.json();
      setRestaurant(restaurantData);
    };
    getRestaurantById();
  }, []);

    useEffect (()=> {
      const getReviewsById = async () => {
        const reviewsFetch = await fetch(`http://localhost:7500/restaurants/${id}/reviews`);
        const reviewsData = await reviewsFetch.json();
        setReviews(reviewsData);
      }
      getReviewsById();
    },[]);

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header></Header>
      </div>
      <div className=" flex flex-1 justify-center text-center w-screen sm:bg-green-800">
        {/*Div de informacion del*/}
        <div className="text-center w-screen">
          <div className=" mb-20">
            <h1 className="text-5xl font-bold text-projectBlack">
              {restaurant.name}
            </h1>
          </div>

          <div className="flex justify-center">
            {/*Div de carrusel, falta hacerlo dinamico para que presente lo de un determinado restaurante*/}
            <Carousel></Carousel>
          </div>

          <div className=" mt-10">
            {/*Div de informacion del restaurante*/}
            <div className="flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-projectBlack">Distancia:</p>
              <p className=" text-xl text-projectBlack">
                {restaurant.distance} m
              </p>
            </div>
            <div className="flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-projectBlack">
                Tipo de comida:
              </p>
              <p className=" text-xl text-projectBlack">típica</p>
            </div>
            <div className="flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-projectBlack">Precios:</p>
              <p className=" text-xl text-projectBlack">
                {restaurant.rangePrice}
              </p>
            </div>
            {/*falta agregar estrellas*/}
          </div>

          <div className="flex-col space-y-2 mt-8">
            {/*Div de los botones*/}
            <div>
              <button
                className="h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectMustard text-white text-lg font-bold"
                onClick={() => {}}
              >
                Ver menú
              </button>
            </div>
            <div>
              <button className="h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectMustard text-white text-lg font-bold"
                onClick={() => {navigate(`Review`)  }}
              >
                Agregar Reseña
              </button>
            </div>
          </div>

          <div className=" mt-8">
            {/*Div de las reseñas*/}
            <h2 className="text-3xl font-bold text-projectBlue">Reseñas</h2>
            {/*Meter aqui las reseñas*/}
          </div>
        </div>
      </div>
    </div>
  );
}
