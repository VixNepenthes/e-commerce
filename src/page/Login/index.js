import React from 'react';
import classNames from 'classnames/bind';
import style from './Login.module.scss';
const cx = classNames.bind(style);
const Login = () => {
    return (
        <div className={cx('Container')}>
            <div className={cx('Wrapper')}>
                <h1 className={cx('Title')}>Đăng Nhập</h1>
                <form className={cx('Form')}>
                    <input className={cx('Input')} placeholder="Username" />
                    <input className={cx('Input')} placeholder="Password" />
                </form>

                <button className={cx('RegisterBtn')}>Đăng nhập</button>
                <a href="/" className={cx('Link')}>
                    Quên Mật Khẩu?
                </a>
                <a href="/register" className={cx('Link')}>
                    Tạo tài khoản mới
                </a>
            </div>
        </div>
    );
};

export default Login;
