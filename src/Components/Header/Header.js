import './Header.css';
import * as Faicon from 'react-icons/fa'

const Header = () => {
    return(
        <div className="header">
            <div className='flex'>
            <Faicon.FaRegLaughWink size="2em" />
            <h1>Meme generator</h1>
            </div>
            <h5>Create your own memes</h5>
        </div>
    )
}


export default Header;