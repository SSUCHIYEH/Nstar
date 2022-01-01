import img_intro1 from "../assests/landing/home_new.png"
import img_bar from "../assests/landing/home_bar.png"
import img_logoY from "../assests/Icon/logo-y.png"
function IntroOne() {
    const introbg = "https://github.com/TsiaYu1304/React_midterm_someparts/blob/master/img/intro.png?raw=true"
    const Logo_yello = "https://github.com/TsiaYu1304/React_midterm_someparts/blob/master/img/LogoY.png?raw=true";
    return (
        // <div className = "intro_1_container" style={{ backgroundImage: `url(${img_intro1})` }}>
        //     {/* <img className="intro_1_BG" src ="img/intro.png" /> */}
        //     <div className = "intro_1_item">
        //     <img alt="" className="intro_1_Logo" src ={`${Logo_yello}`} />
        //     <div className="intor_1_describe">
        //         這是一個專門拍賣二手衣服的網站，每個人都可以將還能夠穿的衣服上傳拍賣，創造共享經濟。</div>
        //     </div>

        // </div>
        <div className="intro_1_container">
            <div className="intro_1_box1" >
                <div className="intro_1_description">
                    <div>
                     <img className="intro_1_logo" alt="" src={img_logoY} />
                    <p className="w_372"> 這是一個專門拍賣二手衣服的網站，每個人都可以將還能夠穿的衣服上傳拍賣，創造共享經濟。
                    </p>   
                    </div>
                </div>
                    <img className="intro_1_bg" alt="" src={img_intro1} />
                

            </div>

            <div className="intro_1_bar">
            <img className="w_full" alt="" src={img_bar} />
            </div>

        </div>
    );

}
export default IntroOne;