import React from 'react';
import classNames from 'classnames/bind';
import style from './Categories.module.scss';
import { categories } from '../../data';
import CategoriesItem from '../CategoriesItem';
const cx = classNames.bind(style);

const Categories = () => {
    return (
        <div className={cx('Container')}>
            {categories.map((item) => (
                <CategoriesItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Categories;
