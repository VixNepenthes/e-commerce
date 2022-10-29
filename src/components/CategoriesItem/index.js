import React from 'react';
import classNames from 'classnames/bind';
import style from './CategoriesItem.module.scss';

const cx = classNames.bind(style);

const CategoriesItem = ({ item }) => {
    return (
        <div className={cx('Container')} key={item.id}>
            <img src={item.img} alt="categoryItem" className={cx('CategoriesItemImg')} />
            <div className={cx('CategoriesItemInfo')}>
                <h1 className={cx('CategoriesItemTitle')}>{item.title}</h1>
                <button className={cx('CategoriesItemBtn')}>SHOP NOW</button>
            </div>
        </div>
    );
};

export default CategoriesItem;
