import Header from "../../Component/Header"

  export default function Review() {
      return (
        <div>
          <Header></Header>
          <div className="h-screen font-sans text-projectBlack w-screen">
            <div className ="flex  justify-center my-4 mx-4">
              <p className="font-bold text-3xl tracking-widest">Nombre restaurante</p>
            </div>

            <div className ="flex justify-center text-center mx-12 my-8">
              <p className="font-semibold text-2xl">¿Cuál sería su valoración para este restaurante?</p>
            </div>

            <div classNameName="flex justify-center text-center">
              <input placeholder="Escriba su reseña aquí"
              classNameName="placeholder:text-projectBlack px-4 h-[180px] w-[300px] sm:w-96 rounded-md border border-projectBlue"/>
            </div>

            <div classNameName="flex justify-center text-center">
                <button classNameName=" mt-14 h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectMustard text-white text-lg font-bold">
                  Enviar reseña
                </button>
            </div>
    
          </div>  
        </div>    
      )
  }