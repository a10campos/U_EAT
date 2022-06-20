function UserInfoCard ({

}) {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <h1 className="mt-10 mb-10 text-6xl text-colorTextoAzul"><b>Mi perfil</b></h1>
                <div className="h-[250px] w-[250px] mb-6 rounded-3xl">
                    <img className="rounded-full"src="https://blogthinkbig.com/wp-content/uploads/sites/4/2020/02/animales-mas-grandes.jpg?fit=1800%2C665"/>
                </div>
                <h3 className="text-colorTextoAzul text-2xl m-2">Lil quil </h3>
                <p className="mb-5"> @lilquil</p>

            </div>
        </div>
    );
}

export default UserInfoCard ;