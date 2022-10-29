import React from 'react';
import classNames from 'classnames/bind';
import style from './Footer.module.scss';
import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';

const cx = classNames.bind(style);

const Footer = () => {
    return (
        <div className={cx('Container')}>
            <div className={cx('Left')}>
                <h1 className={cx('Logo')}>TVCARNIVOROUS</h1>
                <p className={cx('Desc')}>Đây là trang chuyên cung cấp các giống cây nắp ấm gieo hạt</p>
                <div className={cx('SocialContainer')}>
                    <div className={cx('SocialIcon', 'FaceB')}>
                        <Facebook className={cx('Icon')} />
                    </div>
                    <div className={cx('SocialIcon', 'Insta')}>
                        <Instagram className={cx('Icon')} />
                    </div>
                    <div className={cx('SocialIcon', 'Twit')}>
                        <Twitter className={cx('Icon')} />
                    </div>
                    <div className={cx('SocialIcon', 'Pint')}>
                        <Pinterest className={cx('Icon')} />
                    </div>
                </div>
            </div>
            <div className={cx('Center')}>
                <h3 className={cx('Title')}>Link hữu ích</h3>
                <ul className={cx('List')}>
                    <li className={cx('ListItem')}>Home</li>
                    <li className={cx('ListItem')}>Cart</li>
                    <li className={cx('ListItem')}>Nepenthes</li>
                    <li className={cx('ListItem')}>Flytrap</li>
                    <li className={cx('ListItem')}>Drosera</li>
                    <li className={cx('ListItem')}>My Account</li>
                    <li className={cx('ListItem')}>Order Tracking</li>
                    <li className={cx('ListItem')}>Wishlist</li>
                    <li className={cx('ListItem')}>Terms</li>
                </ul>
            </div>
            <div className={cx('Right')}>
                <h3 className={cx('Title')}>Liên hệ</h3>
                <p className={cx('ContactItem')}>
                    <Room className={cx('ContactIcon')} />
                    8/27 Võ Trường Toản
                </p>
                <p className={cx('ContactItem')}>
                    <Phone className={cx('ContactIcon')} />
                    +84 89 8616 934
                </p>
                <p className={cx('ContactItem')}>
                    <MailOutlined className={cx('ContactIcon')} />
                    viht61220@gmail.com
                </p>
                <div className={cx('PaymentContainer')}>
                    <img
                        className={cx('Payment')}
                        src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/313332267_3170360326515084_8630346243032258676_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=H9duMjGbka8AX9vGoLg&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfArknvfy4FLlUlfCiPoVAOh3H9oj8pCNRZbkL1k-DF2sg&oe=6360AEF9"
                        alt="Payment"
                    />
                    <img
                        className={cx('Payment')}
                        src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/313361037_3170362313181552_6283852803297714994_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=7Gx-90WVIskAX8Qt9iK&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBntmK91A70iqVszOuEXCrSCHRc0eLk-T8CnFZIeEVe-g&oe=63604828"
                        alt="Payment"
                    />
                    <img
                        className={cx('Payment')}
                        src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/313195576_3170361189848331_6569945031242191000_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=rSpDAKjZXtkAX_abFWA&tn=dUSujTopmITZDCIc&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfCG6fkTF_I4VBonmhSnfmEhXLLFrmF9lGlIKGRg1FjpIQ&oe=636146CF"
                        alt="Payment"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
