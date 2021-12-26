function CreditCardDetailModal(props) {
  
   const {changeCreditShow,changeCreditName,changeCreditNumber}=props;


   return (

      <div id="creditModal" className="modal_ship">
         <div className="modal_ship_content">
            {/* <span className="close">&times;</span> */}
            <p className="font_24">編輯信用卡資訊</p>
            <p><input onChange={changeCreditName} className="input mt_36 " type="text" name="" placeholder="持卡人姓名" required /></p>
            <p><input onChange={changeCreditNumber} className="input mt_36 " type="text" name="" placeholder="信用卡卡號" required /></p>
            <p><input className="input mt_36 " type="text" name="" placeholder="MM/YY" required /></p>
            <p><input className="input mt_36 " type="text" name="" placeholder="CVV" required /></p>
            <div className="display_center_end mt_36">
               <button onClick={changeCreditShow} id="closeCreditModalBtn" className="btn_unSelected">取消</button>
               <div className="pl_24"><button onClick={changeCreditShow} id="" className="btn_selected">確認</button></div>
               
            </div>

         </div>
      </div>


   );
}

export default CreditCardDetailModal;