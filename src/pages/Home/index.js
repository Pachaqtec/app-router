import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const ACCESS_TOKEN = '3875372609247663'

const Home = () => {
  const [id, setId] = useState(0)
  const [idHero, setIdHero] = useState('')
  const [hero, setHero] = useState({})

  const { push } = useHistory()

  useEffect(() => {
    console.log('Mounted')
    login()
    getPersons()
  }, [])

  const handleSearchUser = () => {
    if (id >= 0 && id <=3) {
      push(`/users/${id}`)
    } else {
      alert('Usuario no existe !')
    }
  }

  const promiseTest = () => {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        // resolve({
        //   user: 'lapadula',
        //   pwsd: 12345,
        //   token: 'sdhfbnasidfync8awx4yr7432'
        // })
        reject({
          error: true,
          desc: 'Usuario y/o contraseña incorrecta'
        })
      }, 3000)
    })
  }

  const login = () => {
    promiseTest()
    .then((response) => console.log('response', response))
    .catch((error) => console.error('error', error))
    .finally(() => console.log('fin'))
  }

  // const getHero = (e) => {
  //   e.preventDefault()
  //   if (idHero !== '') {
  //     fetch(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${idHero}`, {
  //       headers: {
  //         'Content-Type': 'json/aplication'
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log('response', response)
  //       setHero(response)
  //     })
  //     .catch((error) => console.error('error', error))
  //   }
  // }

  const getHero = (e) => {
    e.preventDefault()
    if (idHero !== '') {
      axios({
        url: `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${idHero}`,
        method: 'GET',
        responseType: 'json'
      })
      .then((response) => {
        console.log('response', response)
        setHero(response.data)
      })
      .catch((error) => console.error('error', error))
    }
  }

  const getPersons = async () => {
    const personas = []
    try {
      const persona1 = await axios.get('http://localhost:5000/persona')
      console.log('persona1', persona1)
      personas.push(persona1?.data)
      const persona2 = await axios.get('http://localhost:5000/persona2')
      console.log('persona2', persona2)
      personas.push(persona2?.data)
      const persona3 = await axios.get('http://localhost:5000/persona3')
      console.log('persona3', persona3)
      personas.push(persona3?.data)
      const persona4 = await axios.get('http://localhost:5000/persona4')
      console.log('persona4', persona4)
      personas.push(persona4?.data)

      console.log(personas)
    } catch (error) {
      
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
      <button onClick={handleSearchUser}>Buscar usuario</button>
      <br /><br />
      <form onSubmit={getHero}>
        <input
          type="text"
          value={idHero}
          onChange={({ target }) => setIdHero(target.value)}
          placeholder="Id del héroe"
        />
      <br />
        <input type="submit" value="Buscar" />
      </form>
      {
        Object.keys(hero).length > 0 && (
          <>
            <h1>Héroe</h1>
            <ul>
              <li>Nombre: {hero.name}</li>
              <li>Género: {hero.appearance?.gender}</li>
              <li>Raza: {hero.appearance?.race}</li>
              <li>Publicado en: {hero.biography?.publisher}</li>
              <img src={hero.image?.url} alt="image_hero" />
            </ul>
          </>
        )
      }
      
    </div>
  )
}

export default Home
