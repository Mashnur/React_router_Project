import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const users = useLoaderData();
    const {firstname , email, id}= users;
    return (
        <div className="bg-yellow-300">
            <h3>All about Users:{firstname}</h3>
            <p>{email}</p>
            <p>{id}</p>
           
            
        </div>
    );
};

export default UserDetails;