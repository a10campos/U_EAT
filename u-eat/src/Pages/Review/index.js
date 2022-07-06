import Header from "../../Component/Header"
import Buttons from "../../Component/Buttons";

const ratingChanged = (newRating) => {
  console.log(newRating);
};



  export default function Review() {
      return (
        <div>
          <Header/>
          <div className="h-screen font-sans text-projectBlack w-screen">
            <div className ="flex  justify-center my-4 mx-4">
              <p className="font-bold text-3xl tracking-widest">Nombre restaurante</p>
            </div>

            <div className ="flex justify-center text-center mx-12 my-8">
              <p className="font-semibold text-2xl">¿Cuál sería su valoración para este restaurante?</p>
              

            </div>

            <div className ="flex justify-center text-center mx-12 my-8">
              </div>

            

            <div className= "flex justify-center text-center">
              <input placeholder="Escriba su reseña aquí"
              className="placeholder:text-projectBlack px-4 h-[180px] w-[300px] sm:w-96 rounded-md border border-projectBlue"/>
            </div>

            <div className="flex justify-center text-center my-8">
              <Buttons text="Enviar reseña"/>
            </div>
    
          </div>  
        </div>    
      )
  }