import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";


const User = () => {
    const user=useLoaderData();
    return (
        <div>
            <h2>Our User {user.length}</h2>
            <p>Our users are very fantastic</p>
            <div>
              {
                  user.map( users => <Users key={ users.id}  users={ users}></Users>)
              }
            </div>
            
        </div>
    );
};

export default User;