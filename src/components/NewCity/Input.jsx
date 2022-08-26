import { useState, useEffect } from "react"

export default function Input() {
    const [input, setInput] = useState({
    cityname: '',
    citycountry: '',
    citytext: '',
    imgurl: ''
})
const handleInputChange = (text)  => {
//console.log(text.target.name)
//console.log(text.target.value)
setInput({
    ...input,
    [text.target.name] : text.target.value
    })
}   

const sendData = (text) => {
    text.preventDefault()
    //console.log('sending data...'+ input.cityname + ' ' + input.citycountry+ ' ' + input.citytext + ' ' + input.imgurl )
}

return (
    
    <>
        <form className="NewCity-form" onSubmit={sendData}>
            <label className="NewCity-form-label">
                    <p className="NewCity-form-p">City Name</p>
                    <input type="text" name="cityname" className="NewCity-form-input" onChange={handleInputChange}/>
                </label>
                <label className="NewCity-form-label">
                    <p className="NewCity-form-p">Country</p>
                    <input type="text" name="citycountry" className="NewCity-form-input" onChange={handleInputChange}/>
                </label>
                <label className="NewCity-form-label">
                    <p className="NewCity-form-p">Description</p>
                    <textarea placeholder="Leave us a description of the city..." name="citytext" className="NewCity-form-textarea" onChange={handleInputChange} />
                </label>
                <label className="NewCity-form-label">
                    <p className="NewCity-form-p">Picture of the city</p>
                    <input type="url" name="cityImg" id="imgurl"
                        placeholder="https://exampleimageurl.com" className="NewCity-form-input" onChange={handleInputChange}/>
                </label>
                <button type="submit" className="NewCity-form-button">Send</button>
        </form>
    </>
        
    )
}
