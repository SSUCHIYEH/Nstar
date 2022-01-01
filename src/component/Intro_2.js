function IntroTwo (){
    const imgURL = "https://github.com/TsiaYu1304/React_midterm_someparts/blob/master/img/intro_2.png?raw=true"
    return(
       <div className="intro_2_container">
           <div className="intro_2_img">
               <img alt="" className="intro_2_img_" src={imgURL}/>

           </div>
           <div className ="intro_2_describe">
               <div className="intro_2_title">發掘你所喜愛的潮流</div>
               <div className="intro_2_text">
                   在這裡可以展現個人的穿衣風格，經營自我品牌，你也可以在這裡找到你喜愛的衣服，發掘自己的時尚風格。
                   </div>
           </div>
       </div>
    );

}
export default IntroTwo;