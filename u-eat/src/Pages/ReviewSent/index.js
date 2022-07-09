import Header from "../../Component/Header";

export default function ReviewSent() {

  return (
    <>
      <Header/>
      <div className="bg-projectBlue h-screen ">
        <div className="flex justify-center text-center items-center">
          <p className="text-4xl text-white font-medium  mx-4 mt-64">
            ¡Su reseña fue enviada! </p>
        </div>
        <div className="flex items-center justify-center mt-12">
        <a href="/MainPage" className="text-white text-xl no-underline hover:underline ...">Ir a pantalla principal</a>
        </div>
      </div>
    </>
  );
}
