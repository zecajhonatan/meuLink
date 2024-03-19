import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import { saveLink } from '../../services/storeLinks'

import api from '../../services/api'

export default function App() {

  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})

  async function hendleShortLink() {
    
    try {

      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)
      saveLink('@encurtaLink', response.data)

      setLink('')

    } catch (error) {
      console.log({ msg: error.message })
      alert("Ops, Parece que algo deu errado")
      setLink('')
    }
  }


  return (
    <div className="container-home">

      <div className="logo">
        <img src="/logo192.png" alt="Sujeito link logo" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder='cole seu link aqui...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={hendleShortLink}>Gerar Link</button>


      </div>
      <Menu />

      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}

    </div>
  )
}