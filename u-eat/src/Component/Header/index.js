import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {Mixpanel} from "../../services/mixpanel"

//pasar propiedad
export default function Header() {
  const navigate = useNavigate();

  const location = useLocation();

  let bgColor = "white";
  let iconColor = "#0b3c5d";
  let textColor = "projectBlue";

  if (
    location.pathname.startsWith("/Location") ||
    location.pathname.startsWith("/ReviewSent") ||
    location.pathname.startsWith("/Login") ||
    location.pathname.startsWith("/Register") ||
    location.pathname.startsWith("/RegisterRest")) {
      bgColor = "projectBlue";
      iconColor = "white";
      textColor = "white";
  }

  return (
    <div className={`bg-${bgColor}`}>
      <div className="flex h-16 w-screen items-center  font-sans">
        <div className="flex w-1/4 mx-4 justify-start">
          <IoIosArrowBack
            className="h-10 w-10 cursor-pointer"
            fill={`${iconColor}`}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="flex w-2/4 mx-8 justify-center">
          <Link to ="/">
          <p className={`text-4xl font-bold tracking-widest text-${textColor}`} 
           onClick={() => Mixpanel.track(Mixpanel.TYPES.GO_TO_MAIN) } >
            {" "}U EAT{" "}
          </p>
          </Link>
        
        </div>
        <div className="flex w-1/4 mx-4 justify-end">
          <Link to ="/Perfil">
          <BsPersonCircle
            onClick={() =>  Mixpanel.track(Mixpanel.TYPES.OPEN_PROFILE)}
            className="h-12 w-12 cursor-pointer"
            fill={`${iconColor}`}
            />
          </Link>
         
         
        </div>
      </div>
    </div>
  );
}
