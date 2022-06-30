import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Header from "../../Component/Header"
import Carousel from "../../Component/Carousel"

export default function RestaurantInfo() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header></Header>
        
      </div>
      <div className= " flex flex-1 items-center justify-center bg-projectBlue">
        {/*Div de informacion del*/}
        <div className="text-center w-screen">
          <div className=" mb-20">
            <h1 className="text-3xl font-bold text-white">Jardin de Lucy</h1>
          </div>

          <div>
            {/*Div de carrusel*/}
            <Carousel></Carousel>
          </div>

          <div>
            {/*Div de informacion del restaurante*/}
            <div className= "flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-white">Distancia:</p>
              <p className=" text-xl text-white">400 m</p>
            </div>
            <div className= "flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-white">Tipo de comida:</p>
              <p className=" text-xl text-white">típica</p>
            </div>
            <div className= "flex flex-row justify-center space-x-4">
              <p className=" text-xl font-bold text-white">Precios:</p>
              <p className=" text-xl text-white">₡1500-₡6000</p>
            </div>
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
        </div>
      </div>
    </div>
  )
}