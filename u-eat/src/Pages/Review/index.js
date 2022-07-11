import Header from "../../Component/Header";
import PopUpConf from "../../Component/ConfirmationPopUp";

import { Mixpanel } from "../../services/mixpanel";

import { sendReview } from "../../Slices/reviewSlice";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Review() {
  const [stars, setstars] = useState("");
  const [details, setDetails] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const getRestaurantById = async () => {
      const restaurantFetch = await fetch(
        `http://localhost:7500/restaurants/${id}`
      );
      const restaurantData = await restaurantFetch.json();
      setRestaurant(restaurantData);
    };
    getRestaurantById();
  }, []);

  return (
    <>
      <Header />
      <div className="h-screen font-sans text-projectBlack w-screen">
        <div className="flex justify-center my-8 mx-4">
          <p className="text-4xl font-bold text-projectBlack text-center">
            {restaurant.name}
          </p>
        </div>

        <div className="flex justify-center text-center mx-12 my-8">
          <p className="font-semibold text-2xl">
            ¿Cuál sería su valoración para este restaurante?
          </p>
        </div>

        <div className="flex justify-center text-center">
          <input
            type="number"
            label="Ingrese un número del 1 al 5"
            className="px-4 h-[40px] sm:w-96 rounded-md border border-projectBlue"
            value={stars}
            onChange={(evt) => {
              setstars(evt.target.value);
            }}
          />
        </div>

        <div className="flex justify-center text-center mx-12 my-8">
          <p className="font-semibold text-2xl">Escriba su reseña aquí</p>
        </div>

        <div className="flex justify-center text-center">
          <textarea
            label="Escriba su reseña aquí"
            className="px-4 h-[180px] w-[300px] sm:w-96 rounded-md border border-projectBlue"
            value={details}
            onChange={(evt) => {
              setDetails(evt.target.value);
            }}
          />
        </div>
        <div className="flex  justify-center mt-4">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-projectMustard text-white text-xl h-16 text-m font-bold rounded-md"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
            onClick={() => {
              dispatch(sendReview({ stars, details, id }));
              Mixpanel.track(Mixpanel.TYPES.ADD_REVIEW);
            }}
          >
            Enviar reseña
          </button>
        </div>
            <PopUpConf 
            title="Reseña enviada"
            text="¡Su reseña fue enviada con éxito!"
            link="/"
            buttonLabel="Volver a la página principal"

            ></PopUpConf>
      </div>
    </>
  );
}
