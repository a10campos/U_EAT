

  export default function Home() {
      return (
        <div class="h-screen font-sans text-projectBlack w-screen">

            <div class="flex h-16 w-screen items-center justify-center">    
                <div class="my-5">
                    <p class ="text-4xl font-semibold tracking-widest text-projectBlack"> U EAT </p> 
                </div>
                {/* TODO: Revisar esto */}
                {/* <div class="my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 cursor-pointer" viewBox="0 0 20 20" fill="#0b3c5d">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546
                        2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>   */}
            </div>

          <div class ="flex  justify-center my-4 mx-4">
            <p class="font-bold text-3xl tracking-widest">Nombre restaurante</p>
          </div>

          <div class ="flex justify-center text-center mx-12 my-8">
            <p class="font-semibold text-2xl">¿Cuál sería su valoración para este restaurante?</p>
          </div>

          <div className="flex justify-center text-center">
            <input placeholder="Escriba su reseña aquí"
            className="placeholder:text-projectBlack px-4 h-[180px] w-[300px] sm:w-96 rounded-md border border-projectBlue"/>
           </div>

           <div className="flex justify-center text-center">
              <button className=" mt-14 h-[48px]  w-7/12 sm:w-96 rounded-md bg-projectMustard text-white text-lg font-bold">
                Enviar reseña
              </button>
           </div>
  
        </div>      
      )
  }