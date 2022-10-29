import React from 'react';
import classNames from 'classnames/bind';
import style from './ProductList.module.scss';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

const cx = classNames.bind(style);

const ProductList = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <h1 className={cx('Title')}>Nepenthes</h1>
            <div className={cx('FilterContainer')}>
                <div className={cx('Filter')}>
                    <span className={cx('FilterText')}>Lọc Sản Phẩm</span>
                    <select className={cx('Select')}>
                        <option className={cx('Option')} disabled selected>
                            Màu
                        </option>
                        <option className={cx('Option')}>Đen</option>
                        <option className={cx('Option')}>Đỏ</option>
                        <option className={cx('Option')}>Xanh</option>
                        <option className={cx('Option')}>Xanh Đốm</option>
                        <option className={cx('Option')}>Đỏ Đốm</option>
                        <option className={cx('Option')}>Đen Đốm</option>
                        <option className={cx('Option')}>Tricolor</option>
                        iu
                    </select>
                    <select className={cx('Select')}>
                        <option className={cx('Option')} disabled selected>
                            Size
                        </option>
                        <option className={cx('Option')}>XS</option>
                        <option className={cx('Option')}>S</option>
                        <option className={cx('Option')}>M</option>
                        <option className={cx('Option')}>L</option>
                        <option className={cx('Option')}>XL</option>
                        <option className={cx('Option')}>XXL</option>
                    </select>
                </div>
                <div className={cx('Filter')}>
                    <span className={cx('FilterText')}>Sắp xếp</span>
                    <select className={cx('Select')}>
                        <option className={cx('Option')} selected>
                            Mới nhất
                        </option>
                        <option className={cx('Option')}>Giá từ thấp đến cao</option>
                        <option className={cx('Option')}>Giá từ cao đến thấp</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default ProductList;
