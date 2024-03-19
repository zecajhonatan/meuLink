import './error.css'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='container-error'>
      <img src="logo512.png" alt='Pagina não encontrada' />
      <h1>PÁGINA NÃO ENCONTRADA - ERRO 404</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </div>
  )
}