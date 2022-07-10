
export default function Carousel() {
    return(
        <div id="carouselExampleIndicators" className="carousel slide relative w-10/12" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active float-left w-full">
                <img
                    src="https://scontent.fsjo12-1.fna.fbcdn.net/v/t1.6435-9/82459783_877303626060392_859594484038500352_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=xvJ78AlGiesAX-wVYUj&_nc_ht=scontent.fsjo12-1.fna&oh=00_AT830fT9VEr3JsZAp3Bj1cKZ3BGDdvDcexpILAw4wd4KNw&oe=62E4D678"
                    className="block w-full h-44 md:h-72 object-cover"
                    alt="Logo"
                />
                </div>
                <div className="carousel-item float-left w-full">
                <img
                    src="https://www.tusegurodeviaje.net/wp-content/uploads/2020/04/Chifrijo-3.jpg"
                    className="block w-full h-44 md:h-72 object-cover"
                    alt="Chifrijo"
                />
                </div>
                <div className="carousel-item float-left w-full">
                <img
                    src="https://d1lofqbqbj927c.cloudfront.net/monumental/2022/06/IMG_1431sized_0.jpg"
                    className="block w-full h-44 md:h-72 object-cover"
                    alt="Encuentranos"
                />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}