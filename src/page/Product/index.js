import { Add, Remove } from '@mui/icons-material';
import classNames from 'classnames/bind';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Announcement from '../../components/Announcement';
import Newsletter from '../../components/Newsletter';
import style from './Product.module.scss';

const cx = classNames.bind(style);

const Product = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className={cx('Wrapper')}>
                <div className={cx('ImgContainer')}>
                    <img
                        src="https://cf.shopee.vn/file/82a1f5cb092ec3b386826bff13523e50"
                        alt=""
                        className={cx('Img')}
                    />
                </div>
                <div className={cx('InfoContainer')}>
                    <h1 className={cx('Title')}>Mirabilis X Bokorensis</h1>
                    <p className={cx('Desc')}>
                        Cây thuộc họ bắt mồi có khả năng dẫn dụ các loại côn trùng yêu mùi hương lại và tiêu hóa xác côn
                        trùng khi rơi vào nắp ấm Cây Mirabilis x Bokorensis rất dễ trồng, phù hợp những bạn mới tập chơi
                        dòng cây bắt mồi nói chung hay cây nắp ấm nói riêng nhờ những ưu điểm sau: + Không cần bón phân
                        + Chỉ cần nắng và nước + Cây với đặc tính của dòng Mira và Boko nên phát triển rất nhanh, ra ấm
                        to Cây bán là cây nhỏ, có kèm hình của ấm cây mẹ khi đã phát triển lớn.
                    </p>
                    <span className={cx('Price')}>50.000VNĐ</span>
                    <div className={cx('FilterContainer')}>
                        <div className={cx('Filter')}>
                            <h1 className={cx('FilterTitle')}>Size</h1>
                            <select className={cx('FilterSize')}>
                                <option className={cx('SizeOption')}>S</option>
                                <option className={cx('SizeOption')}>M</option>
                                <option className={cx('SizeOption')}>L</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('AddContainer')}>
                        <div className={cx('AmountContainer')}>
                            <Remove />
                            <span className={cx('Amount')}>2</span>
                            <Add />
                        </div>
                        <button className={cx('Btn')}>THÊM VÀO GIỎ HÀNG</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Product;
