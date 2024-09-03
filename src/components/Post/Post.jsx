

const Post = ({post}) => {
    const {id,title}= post;
    return (
        <div>
            <h3>{title}</h3>
            <p>{id}</p>
            
        </div>
    );
};

export default Post;