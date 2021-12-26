function AddCredit(props) {
    const {creditShow,name,number}=props;
    return (

        <div>
            <div className="line mt_36"></div>
            <button  onClick={creditShow} id="creditModalBtn" className="btn_unSelected mt_36">編輯信用卡資訊</button>
            <div className="font_gray mt_36">{name} {number}</div>
        </div>


    );
}

export default AddCredit;