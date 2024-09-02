import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const users = useLoaderData();
    const {name}= users;
    return (
        <div>
            <h3>All about Users{name}</h3>
           
            
        </div>
    );
};

export default UserDetails;