function UserInfoCard ({

}) {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <h1 className="mt-10 mb-10 text-6xl text-colorTextoAzul"><b>Mi perfil</b></h1>
                <div className="h-full w-[250px] mb-6 rounded-3xl">
                    <img className="rounded-full"src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t31.18172-8/28954183_1611719475550512_8824012321026988892_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9nGsJLQgzYwAX-QvqiY&_nc_ht=scontent.fsjo14-1.fna&oh=00_AT8Eqe43nLRkDT-pp2Yrdoo7kdMdwZNsQjLICF90RQXJTw&oe=62D7AE6C"/>
                </div>
                <h3 className="text-colorTextoAzul text-2xl m-2">Aaron Campos </h3>
                <p className="mb-5"> @aaron</p>

            </div>
        </div>
    );
}

export default UserInfoCard ;