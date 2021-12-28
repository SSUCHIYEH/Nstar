import { useForm } from "react-hook-form";

function ShipDetailModal(props) {
   const {changeShow,changeShipName,changeShipPhone,changeShipAddress}=props;

   const { register, handleSubmit } = useForm();
   const onSubmit= async(value) =>{

   };


    return (
        
      <div id="shipModal" className="modal_ship">
      <form  onSubmit={handleSubmit(onSubmit)} className="modal_ship_content">
         {/* <span className="close">&times;</span> */}
         <p className="font_24">編輯宅配資訊</p>

         <p><input
         {...register("name", { required: true })} 
         className="input mt_36 " 
         type="text" name="" 
         placeholder="您的姓名" 
         onChange={changeShipName}
         required /></p>

         <p><input 
         {...register("phone", { required: true })} 
         className="input mt_36 " 
         type="text" name="" 
         placeholder="您的電話" 
         onChange={changeShipPhone}
         required /></p>

         <p><input
         {...register("address", { required: true })} 
         className="input mt_36 " 
         type="text" name="" 
         placeholder="您的地址" 
         onChange={changeShipAddress}
         required /></p>

         <div className="display_center_end mt_36">
            <button onClick={changeShow} id="closeModalBtn" className="btn_unSelected">取消</button>
            <div className="pl_24"><input onClick={changeShow} type="submit" className="btn_selected" value="確認"/></div>
            
         </div>

      </form>
   </div>
       
        
    );
  }
  
  export default ShipDetailModal;