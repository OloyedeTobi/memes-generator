import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css'
import Meme from './Components/Meme/Meme';
import {useState, useEffect} from 'react';



function App() {

  const [memeEntry, setMemeEntry] = useState({
    topEntry: "Top Text",
    bottomEntry: "Bottom Text",
  })

  const [memeImage, setMemeImage] = useState(["http://i.imgflip.com/1bij.jpg"])
  const [fetchMemes, setFetchMemes] = useState([])
  function HandleChange(event){
       
       setMemeEntry(prev => ({
         ...prev,
         [event.target.name]: event.target.value
       }))
  }

 useEffect(() =>{
   fetch('https://api.imgflip.com/get_memes')
   .then(res => res.json())
   .then(data => setFetchMemes(data.data.memes))
 }, [])


 function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * fetchMemes.length)
  const url = fetchMemes[randomNumber].url
  setMemeImage(url)
  
}


  return (
    <div className="App">
       <Header />
       <div className='body'>
         <Form 
         topEntry = {memeEntry.topEntry}
         bottomEntry = {memeEntry.bottomEntry}
         handleChange = {HandleChange}
         handleSubmit = {getMemeImage}
         />

         <Meme 
         memeImage={memeImage}
         topEntry = {memeEntry.topEntry}
         bottomEntry = {memeEntry.bottomEntry}
         />
       </div>
    </div>
  );
}

export default App;
