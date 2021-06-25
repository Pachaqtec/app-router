import { useState } from 'react'

import axios from 'axios'



const Others = () => {
  const [nombreMascota, setNombreMascota] = useState('')
  const [tipoMascota, setTipoMascota] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValid = true
    if (nombreMascota === '') {
      isValid = false
    }
    if (tipoMascota === '') {
      isValid = false
    }

    if (!isValid) return

    try {
      const response = await axios.post('http://localhost:5000/mascotas', {
        id: Math.random() * 100,
        nombre: nombreMascota,
        tipo: tipoMascota
      })
      console.log('response', response)
    } catch (error) {
      console.error('error', error)
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombreMascota}
          onChange={(e) => setNombreMascota(e.target.value)}
          placeholder="Nombre de mascota"
        />
        <br />
        <input
          type="text"
          value={tipoMascota}
          onChange={(e) => setTipoMascota(e.target.value)}
          placeholder="Tipo de mascota"
        />
        <br />
        <input type="submit" value="Registrar mascota" />
      </form>
    </div>
  )
}

export default Others
