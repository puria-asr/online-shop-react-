import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './imageslider.module.scss'
import { uiActions } from '../../../store/ui-slice'
const ImageSlider = () => {
    const dispatch = useDispatch()
    const showZoom = useSelector(state => state.ui.showZoom)
    function zoomInImage() {
        dispatch(uiActions.showZoom())
    }
    function notZoomInImage() {
        dispatch(uiActions.hideZoom())
    }
    return (
        <>

            <Carousel variant="dark" className={Styles.Carousel}>

                <Carousel.Item>
                    <div onMouseOver={zoomInImage} onMouseLeave={notZoomInImage} className={Styles.imagecontainer}>
                        {!showZoom ? <img
                            className="d-block w-100 "
                            src="https://dkstatics-public.digikala.com/digikala-products/a9ab05d6c45423bbcebaa6e4e3efe0126de08cc4_1670074734.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                            alt="Third slide"
                        /> :
                            <ReactImageMagnify  {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: "https://dkstatics-public.digikala.com/digikala-products/a9ab05d6c45423bbcebaa6e4e3efe0126de08cc4_1670074734.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                                    ,
                                },
                                largeImage: {
                                    src: "https://dkstatics-public.digikala.com/digikala-products/a9ab05d6c45423bbcebaa6e4e3efe0126de08cc4_1670074734.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                                    width: 900,
                                    height: 900
                                },
                                enlargedImagePortalId: "myPortal"
                            }} />}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div onMouseOver={zoomInImage} onMouseLeave={notZoomInImage} className={Styles.imagecontainer}>
                        {!showZoom ? <img
                            className="d-block w-100 "
                            src="https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                            alt="Third slide"
                        /> :
                            <ReactImageMagnify  {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: "https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                                    ,
                                },
                                largeImage: {
                                    src: "https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
                                    width: 900,
                                    height: 900
                                },
                                enlargedImagePortalId: "myPortal"
                            }} />}
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className={Styles.imagecontainer}>
                        <img
                            className="d-block w-100 "
                            src="https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default ImageSlider;
