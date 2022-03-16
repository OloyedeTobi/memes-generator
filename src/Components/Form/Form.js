import './Form.css'

const Form = ({handleChange,handleSubmit, topEntry, bottomEntry}) =>{
    return(
        <div className='form'>
            <div className='flex'>
                <input
                 type="text"
                 className="text-input padded"
                 name = "topEntry"
                 onChange ={handleChange}
                 value = {topEntry} />

                <input 
                 type="text"
                 className="text-input"
                 name = "bottomEntry"
                 onChange ={handleChange}
                 value = {bottomEntry} />
            </div>
            <div>
                <button 
                className='submit'
                onClick={handleSubmit}>
                Get a new meme image  🖼
                </button>
            </div>
        </div>
    )
}

export default Form;