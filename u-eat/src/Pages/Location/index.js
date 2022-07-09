import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../Component/Header";
import {Link} from "react-router-dom"
import {chooseLocation} from "../../Slices/locationSlice";

const _countries = require('./countries.json');
const _states = require('./states.json');
const _unis = require('./universities.json');


function Location() {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [university, setUniversity] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setCountry(_countries);
  }, []);

  const handleCountry = (id) => {
    const _state = _states.filter(x => x.countryId === id);
    setState(_state);
  };

  const handleState = (id) => {
    const _uni = _unis.filter(x => x.StateId === id);
    setUniversity(_uni);
  };

  const backgroundColor = "projectBlue"

  return (
    
    <div className={`h-screen w-screen bg-${backgroundColor} text-xl`}>
          <Header></Header>
      <div className="flex justify-center">
        <img src="https://i.postimg.cc/PJ0RkZqJ/logo512.png" alt="logo"  />
      </div>
      <div className="flex justify-center mx-10 my-3">
        <select
          className="rounded-md px-20 py-1" value="country_value"
          onChange={(e) => handleCountry(e.target.value)}
        >
          <option value="0"> Seleccionar país</option>
          {country && country !== undefined
            ? country.map((_country, index) => {
                return (
                  <option key={index} value={_country.id}>
                    {_country.name}
                  </option>
                );
              })
            : "No hay países"}
        </select>
      </div>
      <div className="flex justify-center mx-10 my-3">
        <select
          className="rounded-md px-14 py-1" value="state_value"
          onChange={(e) => handleState(e.target.value) }
        >
          <option value="0"> Seleccionar provincia</option>
          {state && state !== undefined
            ? state.map((_state, index) => {
                return (
                  <option key={index} value={_state.id}>
                    {_state.name}
                  </option>
                );
              })
            : "No hay estados"}
        </select>
      </div>
      <div className="flex justify-center mx-10 my-3">
        <select className="rounded-md py-1 px-12" value="uni_value">
          <option value="0"> Seleccione universidad </option>
          {university && university !== undefined
            ? university.map((_uni, index) => {
                return (
                  <option key={index} value={_uni.id}>
                    {_uni.name}
                  </option>
                );
              })
            : "No hay universidades"}
        </select>
      </div>
      <div className="flex justify-center mx-10 my-3">
        <Link to="/MainPage">
          <button className="bg-projectMustard text-white text-3xl 
            font-bold rounded-md h-[48px] w-80 mt-16 mb-10"   onClick={()=> { dispatch(chooseLocation({
              country, state, university}));}}>
            Aceptar
          </button>
        </Link>
       
      </div>
    </div>
  );
}

export default Location;