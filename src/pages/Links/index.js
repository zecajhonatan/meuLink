import { useState, useEffect } from 'react'
import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getLinkSave, deleteLinks } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'


export default function Links() {

  let [myLinks, setMyLinks] = useState([])
  let [showModal, setShowModal] = useState(false)
  let [data, setData] = useState({})
  let [empytList, setEmpytList] = useState(false)

  useEffect(() => {
    async function getLinks() {
      let result = await getLinkSave('@encurtaLink')
      if (result.length === 0) {
        setEmpytList(true)
      }
      setMyLinks(result)
    }
    getLinks()
  }, [])

  function handleOpenLink(link) {
    setData(link)
    setShowModal(true)
  }

  async function handleDelete(id) {
    let result = await deleteLinks(myLinks, id)
    if (result.length === 0) {
      setEmpytList(true)
    }
    setMyLinks(result)
  }

  return (
    <div className='links-container' >

      <div className='links-header'>
        <Link to="/" >
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meu Links</h1>
      </div>

      {empytList && (
        <div className='links-item'>
          <h2 className='empyt-text'>
            Sua lista esta vazia!
          </h2>
        </div>
      )}

      {myLinks.map(links => (
        <div key={links.id} className='links-item'>
          <button className='link' onClick={() => handleOpenLink(links)}>
            <FiLink size={18} color='#fff' />
            <div>
              {links.long_url}
            </div>
          </button>
          <button className='link-delete' onClick={() => handleDelete(links.id)} >
            <FiTrash size={24} color='#ff5454' />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem // MODAL
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}


    </div>
  )
}