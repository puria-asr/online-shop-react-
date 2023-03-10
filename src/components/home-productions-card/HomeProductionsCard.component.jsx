import React from 'react';
import companyicon from '../../assets/images/company.png'
import { numberWithCommas } from '../../utils/functions.utils';
import PriceWithDiscountText from '../price-With-Discount-text/priceWithDiscountText.component';
import Styles from './HomeProductionsCard.module.scss'
export const HomeProductionsCard = ({ name, price, image, className, discount, priceWithDiscount }) => {
    const imageHasHttp = image.includes('https')
    const pricenumberWithCommas = numberWithCommas(priceWithDiscount)
    return (

        <div className={`${Styles.homeproductioncard} ${className}`}>
            <div className={Styles.discount}>
                {discount}%
            </div>
            <div className={Styles.cardleft}>
                <span className={Styles.name}>{name}</span>

                <span className={`flex ${Styles.priceWithDiscount}`}>
                    <span className={Styles.price}>تومان  </span>
                    <span>
                        {pricenumberWithCommas}
                    </span>
                </span>
            </div>
            <PriceWithDiscountText price={price} />
            <div className={Styles.imagecontainer}>
                <img src={imageHasHttp ? image : `http://localhost:3001/files/${image}`} alt={image} />
            </div>
        </div>
    );
}

