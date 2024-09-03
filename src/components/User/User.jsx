import { useLoaderData, useNavigate } from "react-router-dom";
import Users from "../Users/Users";


const User = () => {
    const user=useLoaderData();
    const navigate=useNavigate();
    const handleGoBAck=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Our User {user.length}</h2>
            <p>Our users are very fantastic</p>
            <button onClick={handleGoBAck}>Go Back</button>
            <div>
              {
                  user.map( users => <Users key={ users.id}  users={ users}></Users>)
              }
            </div>
            
        </div>
    );
};

export default User;