import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INTERNAL_PATHS } from '../../configs/routs.config';
import { numberWithCommas } from '../../utils/functions.utils';
import BaseBtn from '../buttons/AddToCartBtn.component';
import Styles from './CartBill.module.scss'
const CartBill = ({ prices = 0, userData, cartSum }) => {

    const price = numberWithCommas(prices)
    const [isEnd, setIsEnd] = useState(false)
    window.onscroll = function () {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            setIsEnd(true)
        } else {
            setIsEnd(false)

        }
    }
    const navigate = useNavigate()
    return (
        <>
            {price != 0 && userData.length > 0 ? <div className={isEnd ? Styles.cartbillEnded : Styles.cartbill}>
                <div className={`flex a-c ${Styles.pricetot}`}>
                    <span style={{ direction: 'rtl' }}>{price && price}تومان</span>
                    <span>قیمت کالاها({cartSum})</span>
                </div>
                <div className={`flex a-c ${Styles.pricetot}`}>
                    <span style={{ direction: 'rtl' }}>{price && price}تومان</span>
                    <span>جمع سبد خرید</span>
                </div>
                <BaseBtn onclick={() => navigate(INTERNAL_PATHS.ORDER_REGISTRATIONPAGE)}>
                    نهایی کردن سبد خرید
                </BaseBtn>

            </div> : ''}
        </>
    );
}

export default CartBill;
