const restaurants = [
    {
      id: 1,
      name: "El Jardín de Lucy",
      photo: "https://d1ralsognjng37.cloudfront.net/e0d2af4d-f27b-4b83-9f0c-5c9c2e44f192",
      distance: "600",
      lowerPrice: "1500",
      higherPrice: "6000",
    },
    {
      id: 2,
      name: "Chini To Go",
      photo: "https://d1ralsognjng37.cloudfront.net/32557c3e-34e6-46f5-a82c-f6f1f1dd3d13.webp",
      distance: "400",
      lowerPrice: "1000",
      higherPrice: "6000",
    },
    {
      id: 3,
    name: "Homework",
    photo: "https://media-cdn.tripadvisor.com/media/photo-s/03/8e/04/68/super-buffet.jpg",
    distance: "400",
    lowerPrice: "1000",
    higherPrice: "4500",
  },
  {
    id: 4,
  name: "Das Shnitzel",
  photo: "https://d1ralsognjng37.cloudfront.net/6734f918-f9b5-4702-8287-4c382d0923b9.jpeg",
  distance: "700",
  lowerPrice: "3500",
  higherPrice: "8000",
},
{
    id: 5,
  name: "Mr Veggie",
  photo: "https://images.happycow.net/venues/1024/19/96/hcmp199685_1181281.jpeg",
  distance: "600",
  lowerPrice: "2500",
  higherPrice: "7000",
}

  ]

  
  export default function MainPage() {
      return (
        <div class="h-screen font-sans text-projectBlack">
            <div class="flex h-16 w-screen items-center justify-center">    
                <div class="my-5">
                    <p class ="text-4xl font-semibold tracking-widest"> U EAT </p> 
                </div>
                {/* TODO: Revisar esto */}
                {/* <div class="my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 cursor-pointer" viewBox="0 0 20 20" fill="#0b3c5d">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546
                        2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>   */}
            </div>
  
            <div class="flex w-screen justify-center mt-4">
                <button class="bg-projectMustard text-white font-bold text-xl pl-4 h-[48px] w-7/12 sm:w-96 rounded-md">
                Filtrar restaurantes
                </button>
            </div>
        
            <div class="mt-4">
                {
                restaurants.map((i) => {
                    return (
                    <div class="flex ml-4 w-screen items-center">
                        {/* <div key={`restaurant_${i.id}`}> */}
                        <img src={i.photo} alt={i.name} class="object-contain h-44 w-44"/>
                        <div class= "text-xl ml-4" >
                            <p class="text-2xl font-bold">{i.name}</p>
                            <p> A {i.distance} metros</p> 
                            <p> ₡{i.lowerPrice} - ₡{i.higherPrice}</p> 
                        </div>    
                    </div>
                    // </div>
                    )
                    })
                }
            </div>
        </div>      
      )
  }