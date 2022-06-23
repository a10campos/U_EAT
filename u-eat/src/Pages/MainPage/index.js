import Header from "../../Component/Header"
import {useEffect, useState} from "react";

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
    const [_restaurants, setRestaurants] = useState([]);

    useEffect (()=> {
      const fetchRestaurants = async () => {
        //const restaurantsFetch = await fetch("https://api.myapp.com/restaurants");
        //const restaurantsJSON = await restaurantsFetch.json(); 
        setRestaurants([

        ]);
      }
    })
    return (
        <div>
          <Header></Header>
          <div className="h-screen font-sans text-projectBlack">
              <div className="flex w-screen justify-center mt-4">
                  <button className="bg-projectMustard text-white font-bold text-xl pl-4 h-[48px] w-7/12 sm:w-96 rounded-md">
                  Filtrar restaurantes
                  </button>
              </div>
          
              <div className="mt-4">
                  {
                  restaurants.map((i) => {
                      return (
                      <div className="ml-4 w-screen items-center flex">
                        <img src={i.photo} alt={i.name} className="object-contain h-44 w-44"/>  
                        <div key={`restaurant_${i.id}`}>
                          <div className= "text-xl ml-4" >
                            <p className="text-2xl font-bold">{i.name}</p>
                            <p> A {i.distance} metros</p> 
                            <p> ₡{i.lowerPrice} - ₡{i.higherPrice}</p> 
                          </div>    
                          
                        </div>
                     </div>
                      )
                      })
                  }
              </div>
          </div>   
        </div>   
      )
  }