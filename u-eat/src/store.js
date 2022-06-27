//clase para almacenar el estado de la aplicación
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    //aquí se meten las diferentes partes para el almacenimiento
    //de mi aplicación (slices)
});

export default store;