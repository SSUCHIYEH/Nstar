function IntroOne (){
    const introbg = "https://github.com/TsiaYu1304/React_midterm_someparts/blob/master/img/intro.png?raw=true"
    const Logo_yello = "https://github.com/TsiaYu1304/React_midterm_someparts/blob/master/img/LogoY.png?raw=true";
    return(
        <div className = "intro_1_container" style={{ backgroundImage: `url(${introbg})` }}>
            {/* <img className="intro_1_BG" src ="img/intro.png" /> */}
            <div className = "intro_1_item">
            <img alt="" className="intro_1_Logo" src ={`${Logo_yello}`} />
            <div className="intor_1_describe">
                這是一個專門拍賣二手衣服的網站，每個人都可以將還能夠穿的衣服上傳拍賣，創造共享經濟。</div>
            </div>
           
        </div>
    );

}
export default IntroOne;