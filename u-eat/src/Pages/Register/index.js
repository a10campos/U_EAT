import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, logout } from "../../Slices/userSlice";
import { Navigate } from "react-router-dom";
import InputText from "../../Component/InputText";
import Buttons from "../../Component/Buttons";
import PopUpConf from "../../Component/ConfirmationPopUp";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  return userIsLoggedIn ? (
    <>
      <Navigate to="/" />
    </>
  ) : (
    <>
      <div className=" flex items-center justify-center h-screen bg-projectBlue w-screen">
        <div className="flex flex-col mt-10 items-center text-center w-7/12 space-y-4">
          <div className=" mb-20">
            <h1 className="text-3xl font-bold text-white">Registro</h1>
          </div>
          <InputText
            placeHolder="Nombre"
            Type="text"
            values={name}
            fOnChange={(evt) => {
              setName(evt.target.value);
            }}
          />

          <InputText
            placeHolder="Apellido"
            Type="text"
            values={lastName}
            fOnChange={(evt) => {
              setLastName(evt.target.value);
            }}
          />

          <InputText
            placeHolder="Correo"
            Type="email"
            values={email}
            fOnChange={(evt) => {
              setEmail(evt.target.value);
            }}
          />

          <InputText
            placeHolder="Usuario"
            Type="text"
            values={username}
            fOnChange={(evt) => {
              setUsername(evt.target.value);
            }}
          />

          <InputText
            placeHolder="Teléfono"
            Type="text"
            values={telephone}
            fOnChange={(evt) => {
              setTelephone(evt.target.value);
            }}
          />

          <InputText
            placeHolder="Contraseña"
            Type="password"
            values={password}
            fOnChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />

          <div className=" flex flex-col items-center">
            {errorMessage && (
              <p id="mensajeError" className="text-white mt-14 ">
                {errorMessage}
              </p>
            )}

            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-projectMustard text-white text-xl h-16 text-m font-bold rounded-md"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              onClick={() => {
                dispatch(
                  registerUser({
                    name,
                    lastName,
                    email,
                    username,
                    telephone,
                    password,
                  })
                );
              }}
            >
              Registrarse
            </button>

            <PopUpConf
              title="Registro"
              text="¡Ya está registrado! Vuelva a la pantallade login para usar la aplicación."
              link="/login"
              buttonLabel="Ir a login"
            ></PopUpConf>

            <div className="flex mt-8 mx-4 ">
              <a
                href="/login"
                className="text-white text-xl no-underline hover:underline ..."
              >
                <div>¿Ya tiene una cuenta?</div>
                <div>Inicie sesión aquí</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
