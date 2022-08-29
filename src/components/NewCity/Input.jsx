import { useState} from "react"

export default function Input() {
    const [input, setInput] = useState({})


const handleInputChange = (e)  => {
const inputValue = e.target.value;
const inputName = e.target.name;
setInput((values)=>({...values,[inputName]:inputValue}))
};   

const sendData = (text) => {
    text.preventDefault()
    //Submit
    infoCities.push(input)
    let form=document.querySelector('#newcity-form')
    // console.log('data'+ input.City +input.Country +input.Photo + input.Fundation +input.Description)
    }
    //needing array for the info to push
        let infoCities= [] 

    const inputArray =[
    {name: "City",
    type:"text",
    placeholder: "type the name of the city!",value:""},
    {name: "Country",
    type:"text", placeholder: "Type the contry where the city is from!",value:""},
    {name: "Photo",
    type:"url", placeholder: "Insert the image url of the city!",value:""},
    {name: "Population",
    type:"text", placeholder: "Type the population of the city!",value:""},
    {name: "Fundation",
    type:"date", placeholder: "Type the date of fundation of the city!",value:""},
    {name: "Description",
    type:"text", placeholder: "Tell us about the city!",value:""},
]
//console.log(infoCities) empty ofc
//to read the array of object, then asign them... 
    const formStructure= (e) =>{
    return (
    <label className="NewCity-form-label" key={e.name}>
    <p className="NewCity-form-p">{e.name}</p>
    <input className="NewCity-form-input" placeholder={e.placeholder} type={e.type} name={e.name} onChange={handleInputChange} defaultValue={e.value} />
    </label> 
    )
}

//console.log(inputArray.map(formStructure)) //IT WORKS
return (
    
    <>
        <form className="NewCity-form" id="newcity-form" onSubmit={sendData}>
                        {inputArray.map(formStructure)}
                <button type="submit" className="NewCity-form-button">Send</button>
        </form>
    </>
        
    )
}