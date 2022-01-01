
import facebook from "../assests/Icon/facebook.png";
import line from "../assests/Icon/line.png";
import ig from "../assests/Icon/instagram.png";


export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-container">
                <div className="Footer-list">
                    <p>關於我們</p>
                    <p>購物須知</p>
                </div>
                <div className="property"><p>© 2021InowGirl</p></div>
                <div className="Footer-icon">
                    <img alt="" className="Footer-icon-img" src={facebook} />
                    <img alt="" src={ig} />
                    <img alt="" src={line} />
                </div>
            </div>
        </div>
    )
}