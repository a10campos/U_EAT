export default function Header() {
    
    return (
        <div className="bg-fondoTransparente fixed top-0 left-0 w-full h-full opacity-95">  
        <div className=" min-h-[200px] max-h-[300px] max-w-[5500px] min-w-[300px] bg-white fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] p-8 rounded"> 
            <h3 className="mb-2">Confirmacion</h3>
            <p>Se ha registrado exitosamente su restaurante!</p>
            <button className="bg-colorConfirmation p-2 mt-2 ">Aceptar</button>
        </div>
        </div>
    )
}   