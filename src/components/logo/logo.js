import logo from '../../img/logo.svg'
import './logo.css'
function Logo(){
    return (
        <div className='logo'>
          <img src={logo} alt='Logo Alura-books' className='logo-img'></img>
          <p>Alura Books</p>
        </div>

    )
}
export default Logo