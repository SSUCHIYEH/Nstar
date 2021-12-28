
import { useForm } from "react-hook-form";


function CreditCardDetailModal(props) {
  
   const {changeCreditShow,changeCreditName,changeCreditNumber}=props;

   const { register, handleSubmit } = useForm();
   const onSubmit= async(value) =>{

   };



   return (

      <div id="creditModal" className="modal_ship">
         <form onSubmit={handleSubmit(onSubmit)} className="modal_ship_content">
            {/* <span className="close">&times;</span> */}
            <p className="font_24">編輯信用卡資訊</p>
            <p><input {...register("name", { required: true })}  onChange={changeCreditName} className="input mt_36 " type="text" name="" placeholder="持卡人姓名" /></p>
            <p><input {...register("number", { required: true })}onChange={changeCreditNumber} className="input mt_36 " type="text" name="" placeholder="信用卡卡號" /></p>
            <p><input className="input mt_36 " type="text" name="" placeholder="MM/YY" required /></p>
            <p><input className="input mt_36 " type="text" name="" placeholder="CVV" required /></p>
            <div className="display_center_end mt_36">
               <button onClick={changeCreditShow} id="closeCreditModalBtn" className="btn_unSelected">取消</button>
               <div className="pl_24"><input type="submit" onClick={changeCreditShow} id="" className="btn_selected" value="確認"/></div>
               
            </div>

         </form>
      </div>


   );
}

export default CreditCardDetailModal;