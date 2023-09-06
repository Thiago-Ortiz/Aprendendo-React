import { useState } from "react"
import "./index.css"

function App() {
  const [email, setEmail] = useState("")
  const [comentario, setComentario] = useState("")
  const [comments, setComments] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 100000),
      email: email,
      comentario: comentario,
      date: new Date()
      
    }
    console.log({ newComment })
    setComments((state) => [newComment, ...state])
    setComentario("")
    setEmail("")

  }

  return (
    <div id="app">
      <h1>Seção de Comentários</h1>
      
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label><br />
      
      <input 
      type="email"
      id="email"
      required
      value={email}
      onChange={(ev) => setEmail(ev.target.value)}
      />
      <br />
      <label htmlFor="comentario">Comentário</label><br />
      <textarea 
      id="comentario"
      cols="30" rows="6"
      required
      value={comentario}
      onChange={(ev) => setComentario(ev.target.value)}>
      </textarea>
      <br />
      <button>Enviar Comentário</button>
      </form>
      <hr />

    <section id="comments">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.email}</h3>
            <span>{comment.date.toLocaleString()}</span>
            <p>{comment.comentario}</p>
          </div>
        ))
      ) : (<p>Seja o primeiro a comentar!</p>)}
    </section>
    </div>
  )
}

export default App
