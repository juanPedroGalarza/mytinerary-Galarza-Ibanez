import WebsiteLayout from "../layouts/WebsiteLayout"
import "../styles/NewCity.css"
function NewCity() {
    return (
        <div className="NewCity-main">
            <div className="NewCity-background"></div>
            <h1 className="NewCity-title">NewCity</h1>
            <form className="NewCity-form">
                <label className="NewCity-form-label">
                    <p className="NewCity-form-p">City Name</p>
                    <input type="text" name="text1" className="NewCity-form-input" />
                </label>
                <label className="NewCity-form-label">
                    <p className="NewCity-form-p">Country</p>
                    <input type="text" name="text2" className="NewCity-form-input" />
                </label>
                <label className="NewCity-form-label">
                    <p className="NewCity-form-p">Description</p>
                    <textarea placeholder="Leave us a description of the city..." className="NewCity-form-textarea"  />
                </label>
                <label className="NewCity-form-label">
                    <p className="NewCity-form-p">Picture of the city</p>
                    <input type="url" name="url" id="url"
       placeholder="https://exampleimageurl.com" className="NewCity-form-input" />
                </label>
                <button type="submit" className="NewCity-form-button">Send</button>
            </form>
        </div>
    )   
}
export default NewCity