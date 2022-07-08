import HeaderLight from "../../Component/HeaderLight";

export default function ReviewSent() {

  return (
    <>
      <HeaderLight/>
      <div className="bg-fondoPrincipal h-screen ">
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
