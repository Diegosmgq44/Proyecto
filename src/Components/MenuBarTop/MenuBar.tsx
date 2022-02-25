import Logo from './../../assets/logoTwitter.png';
import eggBlue from './../../assets/eggBlue.png'
import './MenuBar.css'

const srcDefault=eggBlue;               //Vendrian de la BBDD
export default function menuBarTop() {
  return (
      <div className="menuBar">
        <img className="avatarDefault" src={ srcDefault } />
        <img className="logoTwitter" src={Logo} alt="Twitter" />
      </div>
  )
}
