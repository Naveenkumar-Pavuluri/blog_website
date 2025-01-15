import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [content, setBody] = useState('');
    const [writtenBy, setWrittenBy] = useState('');
    const [isPending , setIsPending] = useState(false);
    const history = useHistory();
 
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, content, writtenBy}
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog Adding");
            setIsPending(false);
            history.push('/');
        })
    } 

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <label>Blog Body</label>
                <textarea required value={content} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog WrittenBy</label>
                <select value={writtenBy} onChange={(e)=>setWrittenBy(e.target.value)}>
                    <option default disabled></option>
                    <option value="Naveen">Naveen</option>
                    <option value="Navi">Navi</option>
                    <option value="Nav">Nav</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding...</button>}
            </form>
        </div>
    );
}

export default Create;