import { useState } from 'react'
import './form.css'

export default function Form() {

    const [post, setPost] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    })

    const change = (e) => {
        const { name, value, type, checked } = e.target
        setPost({ ...post, [name]: type === 'checkbox' ? checked : value })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", post)
            .then(res => console.log("post inviato", res.data))
            .catch(error => console.log(error))
    }

    return (
        <div className='form-card'>
            <h1>NUOVO POST</h1>
            <form onSubmit={submit} className='form'>
                <label for="author-post">Autore:</label>
                <input
                    id="author-post"
                    name="author"
                    type="text"
                    value={post.author} onChange={change}
                />

                <label for="title-post">Titolo:</label>
                <input
                    id="title-post"
                    name='title'
                    type="text"
                    value={post.title} onChange={change}
                />

                <label for="body-post">Contenuto:</label>
                <textarea
                    id="body-post"
                    name='body'
                    rows="5"
                    value={post.body} onChange={change}
                ></textarea>
                <div>
                    <label for="checkbox-post">Post pubblico:</label>
                    <input
                        id="checkbox-post"
                        name='public'
                        type="checkbox"
                        checked={post.public} onChange={change}
                    />
                    <button type="submit" >Pubblica</button>
                </div>
            </form>
        </div>
    )
}