import { useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title}= post;
    const navigate=useNavigate();
    const handlePostDetail=()=>{
        navigate(`/Posts/${id}`)
    }
    
    return (
        <div>
            <h3>{title}</h3>
            <p>{id}</p>
            <button className="bg-red-800" onClick={handlePostDetail}>Click Here</button>
             
        </div>
    );
};

export default Post;