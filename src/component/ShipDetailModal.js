
function ShipDetailModal(props) {
   const {changeShow,changeShipName,changeShipPhone,changeShipAddress}=props;
  
    return (
        
      <div id="shipModal" className="modal_ship">
      <div className="modal_ship_content">
         {/* <span className="close">&times;</span> */}
         <p className="font_24">編輯宅配資訊</p>

         <p><input 
         className="input mt_36 " 
         type="text" name="" 
         placeholder="您的姓名" 
         onChange={changeShipName}
         required /></p>

         <p><input 
         className="input mt_36 " 
         type="text" name="" 
         placeholder="您的電話" 
         onChange={changeShipPhone}
         required /></p>

         <p><input 
         className="input mt_36 " 
         type="text" name="" 
         placeholder="您的地址" 
         onChange={changeShipAddress}
         required /></p>

         <div className="display_center_end mt_36">
            <button onClick={changeShow} id="closeModalBtn" className="btn_unSelected">取消</button>
            <div className="pl_24"><button onClick={changeShow} id="" className="btn_selected">確認</button></div>
            
         </div>

      </div>
   </div>
       
        
    );
  }
  
  export default ShipDetailModal;