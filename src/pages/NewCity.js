import WebsiteLayout from "../layouts/WebsiteLayout"
import "../styles/NewCity.css"
function NewCity() {
    return (
        <WebsiteLayout>
            <div className="NewCity-main">
                <div className="NewCity-background"></div>
                <h1 className="NewCity-title">NewCity</h1>
                <form className="NewCity-form">
                    <label className="NewCity-form-label">
                        <p className="NewCity-form-p">text1</p>
                        <input type="text" name="text1" className="NewCity-form-input" />
                    </label>
                    <label className="NewCity-form-label">
                        <p className="NewCity-form-p">text2</p>
                        <input type="text" name="text2" className="NewCity-form-input" />
                    </label>
                    <label className="NewCity-form-label">
                        <p className="NewCity-form-p">text3</p>
                        <input type="text" name="text3" className="NewCity-form-input" />
                    </label>
                    <label className="NewCity-form-label">
                        <p className="NewCity-form-p">text4</p>
                        <input type="text" name="text4" className="NewCity-form-input" />
                    </label>
                </form>
            </div>
        </WebsiteLayout>
    )   
}
export default NewCity