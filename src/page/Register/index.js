import React from 'react';
import classNames from 'classnames/bind';
import style from './Register.module.scss';

const cx = classNames.bind(style);
const Register = () => {
    return (
        <div className={cx('Container')}>
            <div className={cx('Wrapper')}>
                <h1 className={cx('Title')}>Đăng ký</h1>
                <form className={cx('Form')}>
                    <input className={cx('Input')} placeholder="Tên" />
                    <input className={cx('Input')} placeholder="Họ" />
                    <input className={cx('Input')} placeholder="Email" />
                    <input className={cx('Input')} placeholder="Username" />
                    <input className={cx('Input')} placeholder="Password" />
                    <input className={cx('Input')} placeholder="Confirm Password" />
                </form>
                <p className={cx('Agreement')}>
                    Khi bạn đăng ký, bạn đã đồng ý với <b>quy định</b> của website chúng tôi
                </p>
                <button className={cx('RegisterBtn')}>Đăng ký</button>
            </div>
        </div>
    );
};

export default Register;
