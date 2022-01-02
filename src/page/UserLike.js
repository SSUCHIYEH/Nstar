import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserLike } from "../api/userAPI.js";
import Productlist from "../component/Productlist.js";
import { SET_LOADING_FALSE, SET_LOADING_TRUE } from "../const/constants.js";
import { storeUserLike } from '../actions/userAction';

function UserLike() {
    const [likeData, setLikeData] = useState();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userSignIn)
    const { like } = useSelector(state => {
        console.log(state.userLike);
        return state.userLike
    })
    useEffect(async () => {

        dispatch({ type: SET_LOADING_TRUE })
        await dispatch(storeUserLike(userInfo.user_id))
        dispatch({ type: SET_LOADING_FALSE })

    }, [])

    return (
        <>
            {like ?

                <Productlist products={like} />
                :
                <>
                    <div className="container">
                        <div className="mt_80">
                            沒有收藏的商品
                        </div>
                    </div>
                </>
            }
        </>

    )

}

export default UserLike;