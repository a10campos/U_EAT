import { useState } from "react";
import {Mixpanel} from "../../services/mixpanel"

export default function Filter() {
  const [price, setPrice] = useState("10000");
  const [distance, setDistance] = useState("1000");


  const handleChangeDistance = (event) => {
    setDistance(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <div className="flex  justify-center mt-4">
        
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-projectMustard text-white text-xl h-16 text-m font-bold leading-tight uppercase rounded shadow-md focus:bg-projectBlue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-projectBlue active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
          onClick={() => Mixpanel.track(Mixpanel.TYPES.FILTER_REST)}
        >
          Filtrar restaurantes
        </button>
      </div>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-3xl font-bold leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Filtro
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div className=" text-xl font-bold">Tipo de comida</div>

              <div className=" text-xl font-bold">
                Precios
                <div className="relative pt-1">
                  <input
                    type="range"
                    className=" form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                    min="1000"
                    max="10000"
                    step="500"
                    value={price}
                    onChange={handleChangePrice}
                  />
                </div>
                <div>₡{price}</div>
              </div>

              <div className=" text-xl font-bold">
                Distancia
                <div className="relative pt-1">
                  <input
                    type="range"
                    className=" form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                    min="0"
                    max="1000"
                    step="50"
                    value={distance}
                    onChange={handleChangeDistance}
                  />
                </div>
                <div>{distance} m</div>
              </div>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-projectBlue text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:bg-projectBlue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-projectBlue active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-projectMustard text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:bg-projectBlue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-projectBlue active:shadow-lg transition duration-150 ease-in-out ml-1"
              > Aceptar
              </button>
             
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
