import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Slider.module.scss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from '../../data';
const cx = classNames.bind(style);
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 1 ? slideIndex - 1 : 3);
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 1);
        }
    };

    return (
        <div className={cx('Container')}>
            <div
                className={cx('Arrow', 'Left')}
                onClick={() => {
                    handleClick('left');
                }}
            >
                <ArrowLeftOutlined className={cx('ArrowIcon')} />
            </div>

            {sliderItems.map((item) => (
                <div
                    className={cx('Wrapper')}
                    key={item.id}
                    style={item.id === slideIndex ? { display: `block` } : { display: `none` }}
                >
                    <div className={cx('Slider')} style={{ backgroundColor: `${item.bg}` }}>
                        <div className={cx('ImgContainer')}>
                            <img src={item.img} alt="SliderPic" className={cx('ImgSlider')} />
                        </div>
                        <div className={cx('InfoContainer')}>
                            <h1 className={cx('Title')}>{item.title}</h1>
                            <p className={cx('Desc')}>{item.desc}</p>
                            <button className={cx('SliderBtn')}>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            ))}

            <div
                className={cx('Arrow', 'Right')}
                onClick={() => {
                    handleClick('right');
                }}
            >
                <ArrowRightOutlined className={cx('ArrowIcon')} />
            </div>
        </div>
    );
};

export default Slider;
