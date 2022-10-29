import React from 'react';
import classNames from 'classnames/bind';
import style from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const cx = classNames.bind(style);
const Navbar = () => {
    return (
        <div className={cx('Container')}>
            <div className={cx('Wrapper')}>
                <div className={cx('Left')}>
                    <div className={cx('Language')}>EN</div>
                    <div className={cx('SearchContainer')}>
                        <input className={cx('Input')} placeholder="Seach.." />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className={cx('Center')}>
                    <div className={cx('Logo')}>TVCarnivorous</div>
                </div>
                <div className={cx('Right')}>
                    <div className={cx('MenuItem')}>Register</div>
                    <div className={cx('MenuItem')}>Sign In</div>
                    <div className={cx('MenuItem')}>
                        <Badge
                            badgeContent={4}
                            color="primary"
                            className={cx('Badge')}
                            sx={{ '& .MuiBadge-badge': { fontSize: 12 } }}
                        >
                            <ShoppingCartOutlinedIcon className={cx('CartIcon')} />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
