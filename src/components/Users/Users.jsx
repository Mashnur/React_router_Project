

const Users = ({ users}) => {
    const  {firstname, email} = users;

    return (
        <div className="grid grid-cols-2 gap-5 m-5 items-center">
            <div className="bg-sky-300 rounded-md gap-10">
            <h2>{firstname}</h2>
            <p >{email}</p>
            </div>
            
        </div>
    );
};

export default Users;