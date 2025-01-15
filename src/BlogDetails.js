import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
    const handleClick = ()=>{
        fetch(("http://localhost:8000/blogs/" + blogs.id),{
            method: "DELETE"
        }).then(()=>{
            history.push("/");
        })
    }
    return (
        <div className="blog">
            {isPending && <div>Loading..!!!!</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <div className="container">
                    <article>
                        <h2>{blogs.title}</h2>
                        <h3>Written by {blogs.writtenBy}</h3>
                        <p>{blogs.content}</p>
                        <button onClick={handleClick}>Delete</button>
                    </article>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;