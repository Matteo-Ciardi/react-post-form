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
        <form onSubmit={submit}>
            <label for="author-post">Nome autore:</label>
            <input
                id="author-post"
                name="author"
                type="text"
                placeholder="Autore"
                value={post.author} onChange={change}
            />

            <label for="title-post">Titolo Post:</label>
            <input
                id="title-post"
                name='title'
                type="text"
                placeholder="Titolo"
                value={post.title} onChange={change}
            />

            <label for="body-post">Contenuto del Post:</label>
            <textarea
                id="body-post"
                name='body'
                placeholder="Testo del post"
                rows="5"
                value={post.body} onChange={change}
            ></textarea>

            <label for="checkbox-post">Post pubblico:</label>
            <input
                id="checkbox-post"
                name='public'
                type="checkbox"
                checked={post.public} onChange={change}
            />
            <button type="submit" >Invia</button>
        </form>
    )
}