import React from 'react';
import classNames from 'classnames/bind';
import style from './Cart.module.scss';
import Navbar from '../../components/Navbar';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import { Add, Remove } from '@mui/icons-material';
const cx = classNames.bind(style);

const Cart = () => {
    const type = 'filled';
    return (
        <div className={cx('Container')}>
            <Navbar />
            <Announcement />
            <div className={cx('Wrapper')}>
                <h1 className={cx('Title')}>Giỏ Của Bạn</h1>
                <div className={cx('Top')}>
                    <button className={cx('TopBtn')}>MUA TIẾP</button>
                    <div className={cx('TopTexts')}>
                        <span className={cx('TopText')}>Giỏ Hàng (2)</span>
                        <span className={cx('TopText')}>Danh Sách Mong Muốn (0)</span>
                    </div>
                    <button
                        className={cx('TopBtn')}
                        type={type}
                        style={
                            type === 'filled'
                                ? { border: `none`, backgroundColor: `black`, color: `white` }
                                : { backgroundColor: `transparent` }
                        }
                    >
                        TÍNH TIỀN
                    </button>
                </div>
                <div className={cx('Bottom')}>
                    <div className={cx('Info')}>
                        <div className={cx('Product')}>
                            <div className={cx('ProductDetail')}>
                                <img
                                    className={cx('ImgProduct')}
                                    src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/297896206_3107864636097987_2242893350841070997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=9aVEe8IQo1UAX-3t_q1&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCF39EhUSXBNsV1zi8LxuNjq_TuraRMRJc-OUyBqR5g6w&oe=6360B553"
                                    alt="productCart"
                                />
                                <div className={cx('Detail')}>
                                    <span className={cx('ProductName')}>
                                        <b>Name:</b> N.Ông địa lông dài
                                    </span>
                                    <span className={cx('ProductId')}>
                                        <b>Id:</b> 15092022
                                    </span>
                                </div>
                            </div>
                            <div className={cx('PriceDetail')}>
                                <div className={cx('ProductAmountContainer')}>
                                    <Add className={cx('Icon')} />
                                    <div className={cx('ProductAmount')}>2</div>
                                    <Remove className={cx('Icon')} />
                                </div>
                                <div className={cx('ProductPrice')}>500.000VNĐ</div>
                            </div>
                        </div>
                        <hr className={cx('Hr')} />
                    </div>
                    <div className={cx('Summary')}>
                        <h1 className={cx('SummaryTitle')}>Tổng quan</h1>
                        <div className={cx('SummaryItem')}>
                            <span className={cx('SummaryItemText')}>Tạm tính</span>
                            <span className={cx('SummaryItemPrice')}>500.000VNĐ</span>
                        </div>
                        <div className={cx('SummaryItem')}>
                            <span className={cx('SummaryItemText')}>Dự tính ship</span>
                            <span className={cx('SummaryItemPrice')}>25.000VNĐ</span>
                        </div>
                        <div className={cx('SummaryItem')}>
                            <span className={cx('SummaryItemText')}>Tiền ship giảm</span>
                            <span className={cx('SummaryItemPrice')}>-10.000VNĐ</span>
                        </div>
                        <div className={cx('SummaryItem', 'Total')}>
                            <span className={cx('SummaryItemText')}>Tổng</span>
                            <span className={cx('SummaryItemPrice')}>515.000VNĐ</span>
                        </div>
                        <button className={cx('SummaryBtn')}>Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
