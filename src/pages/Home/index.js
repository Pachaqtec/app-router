import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Home = () => {
  const [id, setId] = useState(0)

  const { push } = useHistory()

  const handleSearchUser = () => {
    if (id >= 0 && id <=3) {
      push(`/users/${id}`)
    } else {
      alert('Usuario no existe !')
    }
  }

  return (
    <div>
      Home
      <br />
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        max="3"
        min="0"
        style={{ width: '200px' }}
      />
      <br />
      {/* <Link to={`/users/${id}`}>Buscar Usuario</Link> */}
      <button onClick={handleSearchUser}>Buscar usuario</button>
    </div>
  )
}

export default Home
