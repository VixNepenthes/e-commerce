import React from 'react';
import classNames from 'classnames/bind';
import style from './Product.module.scss';
import { FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
const cx = classNames.bind(style);
const Product = ({ item }) => {
    return (
        <div className={cx('Container')}>
            <div className={cx('Circle')}></div>
            <img src={item.img} alt={'poluarProduct'} className={cx('ProductImg')} />
            <div className={cx('Info')}>
                <div className={cx('Icon')}>
                    <ShoppingCartOutlined />
                </div>
                <div className={cx('Icon')}>
                    <SearchOutlined />
                </div>
                <div className={cx('Icon')}>
                    <FavoriteOutlined />
                </div>
            </div>
        </div>
    );
};

export default Product;
