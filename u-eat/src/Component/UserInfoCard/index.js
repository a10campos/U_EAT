import {useDispatch,useSelector} from "react-redux";

const img = "https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/29249653_1867862393237318_1048193034946084864_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFa4pCMlswEAX_cAYu_&_nc_ht=scontent-mia3-2.xx&oh=00_AT9wwDvUHqKqeExvA1Y90tH_u3rWJLWvQRE7yjiiQWs_Ig&oe=62EA0288"

function UserInfoCard ({
}) {
    const user = useSelector((state) => state.user.user);
    const completeName = user.name + " " + user.lastName;
    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <h1 className="mt-10 mb-10 text-6xl text-colorTextoAzul"><b>Mi perfil</b></h1>
                <div className="h-full w-[250px] mb-6 rounded-3xl">
                    <img className="rounded-full" src={user.img}/>
                </div>
                <h3 className="text-colorTextoAzul text-2xl m-2">{completeName}</h3>
                <p className="mb-5"> {user.email}</p>

            </div>
        </div>
    );
}

export default UserInfoCard ;