import like_Unselect from '../assests/Icon/like.png';
import like_Select from '../assests/Icon/heart.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUserLike, putUserLike } from '../api/userAPI';
import { storeUserLike } from '../actions/userAction';


function LikeButton({ product_id }) {
    const [likeSrc, setLikeSrc] = useState(like_Unselect);
    const dispatch = useDispatch();
    const history = useHistory();
    const { userInfo } = useSelector(state => state.userSignIn);
    const { like } = useSelector(state => {
        console.log(state.userLike);
        return state.userLike
    });
    const handleClick = async () => {
        if (userInfo) {
            if (likeSrc === like_Unselect) {
                const putResp = await putUserLike(userInfo.user_id, product_id);
                if (putResp.status === 200) {
                    await dispatch(storeUserLike(userInfo.user_id))
                    setLikeSrc(like_Select)
                }
            } else {
                const deleteResp = await deleteUserLike(product_id);
                if (deleteResp.status === 200) {
                    await dispatch(storeUserLike(userInfo.user_id))
                    setLikeSrc(like_Unselect)
                }

            }
        } else {
            history.push('/login');
        }
    }
    useEffect(() => {
        if (like) {
            const likeProduct = like.find((item) => item.product_id === product_id);
            console.log(likeProduct);
            if (likeProduct) {
                setLikeSrc(like_Select);
            }
        }
    }, [like])
    return (
        < button className="productdetail_button_like" onClick={handleClick} >
            <img className="productdetail_icon" src={likeSrc} alt="" />
        </button >
    )
}

export default LikeButton;