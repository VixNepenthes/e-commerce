import React from 'react';
import classNames from 'classnames/bind';
import style from './Announcement.module.scss';

const cx = classNames.bind(style);

const Announcement = () => {
    return <div className={cx('Container')}>Chào mừng đến với thế giới cây nắp ấm</div>;
};

export default Announcement;
