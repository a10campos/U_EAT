import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Pages/App";

export default function Header() {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  
  return (
    <div className={`bg-${theme.background}`}>
      <div className="flex h-16 w-screen items-center  font-sans">
        <div className="flex w-1/4 mx-4 justify-start">
          <IoIosArrowBack 
            className="h-10 w-10 cursor-pointer"
            fill={`${theme.icons}`}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="flex w-2/4 mx-8 justify-center">
          <p className={`text-4xl font-bold tracking-widest text-${theme.text}`}> U EAT </p>
        </div>
        <div className="flex w-1/4 mx-4 justify-end">
          <BsPersonCircle
            onClick={() => navigate("/Perfil")}
            className="h-12 w-12 cursor-pointer"
            fill={`${theme.icons}`}
          />
        </div>
      </div>
    </div>
  );
}
