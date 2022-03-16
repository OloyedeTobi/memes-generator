import './Meme.css'
const Meme = ({memeImage, topEntry, bottomEntry}) =>{
    return(
        <div className='meme'>
        <img src={memeImage} alt="meme"></img>
        <div className='fixed top'>{topEntry}</div>
        <div className='fixed bottom'>{bottomEntry}</div>
        </div>
    )
}

export default Meme;