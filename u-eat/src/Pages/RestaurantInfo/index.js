import {Link, Routes, Route, useNavigate, useParams, Router} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantByID} from "../../Slices/userSlice";
import Header from "../../Component/Header"
import Carousel from "../../Component/Carousel"

export default function RestaurantInfo() {
  let id = useParams();
  const dispatch = useDispatch();


  //let restaurant = dispatch(getRestaurantByID({id}));
  const restaurant = useSelector((state) => state.user.restaurant);
  console.log(id);

  //dispatch(getRestaurantByID(id));
  //React.memo(dispatch(getRestaurantByID(id)));

  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  dispatch(getRestaurantByID(id))
    return () => { ignore = true; }
    },[dispatch,id]);

  console.log(restaurant);

    //HACER UN USER IS LOGGED IN? PERO MAS BIEN CON LA VARIABLE RESTAURANT

  return (
    <div className="flex flex-col h-screen">
      <p>{restaurant.name}</p>
      <div>
        <Header></Header>
        
      </div>
      <div className= " flex flex-1 justify-center text-center w-screen sm:bg-green-800">
        {/*Div de informacion del*/}
        <div className="text-center w-screen">
          <div className=" mb-20">
            <h1 className="text-5xl font-bold text-projectBlack">Jardin de Lucy</h1>
          </div>

          <div className="flex justify-center">
            {/*Div de carrusel, falta hacerlo dinamico para que presente lo de un determinado restaurante*/}
            <Carousel></Carousel>
          </div>

          <div className= " mt-10">
            {/*Div de informacion del restaurante*/}
            <div className= "flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-projectBlack">Distancia:</p>
              <p className=" text-xl text-projectBlack">400 m</p>
            </div>
            <div className= "flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-projectBlack">Tipo de comida:</p>
              <p className=" text-xl text-projectBlack">típica</p>
            </div>
            <div className= "flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-projectBlack">Precios:</p>
              <p className=" text-xl text-projectBlack">₡1500-₡6000</p>
            </div>
            {/*falta agregar estrellas*/}
          </div>

          <div className= "flex-col space-y-2 mt-8">
            {/*Div de los botones*/}
            <div>
              <button className="h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectMustard text-white text-lg font-bold"
                onClick={() => {

                }}
              >
              Ver menú
              </button>
            </div>
            <div>
              <button className="h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectMustard text-white text-lg font-bold"
                onClick={() => {

                }}
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
  )
}