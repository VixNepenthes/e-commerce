import React from 'react';
import classNames from 'classnames/bind';
import style from './Newsletter.module.scss';
import { Send } from '@mui/icons-material';
const cx = classNames.bind(style);
const Newsletter = () => {
    return (
        <div className={cx('Container')}>
            <h1 className={cx('Title')}>Tin mới</h1>
            <p className={cx('Description')}>Cập nhật tin tức từ sản phẩm yêu thích của bạn</p>
            <div className={cx('InputContainer')}>
                <input className={cx('Input')} placeholder="Your email..." />
                <button className={cx('Btn')}>
                    <Send className={cx('Icon')} />
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
