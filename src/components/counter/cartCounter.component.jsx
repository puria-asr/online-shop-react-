import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { API_BASE_URL, username } from '../../configs/variables.config';
import Styles from './counter.module.scss'
const CardCounter = ({ number = 1 }) => {
    const [num, setNum] = useState(number);
    const productId = useParams()
    const increaseNum = async () => {
        let cartData = null
        let userId = null
        await axios.get(`${API_BASE_URL}mockusers?username=${username}`).then(res => {
            cartData = res.data[0].cart;
            userId = res.data[0].id
        })

        const productIndex = cartData.findIndex((e) => {
            return e.id == productId.id
        })

        const productObj = cartData[productIndex]
        productObj.count += 1
        cartData.splice(productIndex, 1)
        await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
            cart: [...cartData, productObj]
        })
        setNum(state => state + 1)
    }
    function decreaseNum() {
        setNum(state => state - 1)
    }
    return (
        <div className={Styles.countercard}>
            <button>
                {num === 1 ? <RiDeleteBinLine className={Styles.icon} /> : <AiOutlineMinus onClick={decreaseNum} className={Styles.icon} />}
            </button>
            <span style={{ color: 'red', userSelect: 'none' }}>{num}</span>
            <button>
                <AiOutlinePlus onClick={increaseNum} className={Styles.icon} />
            </button>
        </div>
    );
}

export default CardCounter;
