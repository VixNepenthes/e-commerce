import React from 'react';
import classNames from 'classnames/bind';
import style from './Products.module.scss';
import { popularProducts } from '../../data';
import Product from '../Product';
const cx = classNames.bind(style);
const Products = () => {
    return (
        <div className={cx('Container')}>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Products;
