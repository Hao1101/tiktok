/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    CompassIcon,
    CompassActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import BorderTopContainer from '~/components/BorderTopContainer';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <div className={cx('content')}>
                    <Menu>
                        <MenuItem
                            title="For you"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title="Following"
                            to={config.routes.following}
                            icon={<UserGroupIcon />}
                            activeIcon={<UserGroupActiveIcon />}
                        />
                        <MenuItem
                            title="Explore"
                            to={config.routes.explore}
                            icon={<CompassIcon />}
                            activeIcon={<CompassActiveIcon />}
                        />
                        <MenuItem
                            title="Live"
                            to={config.routes.live}
                            icon={<LiveIcon />}
                            activeIcon={<LiveActiveIcon />}
                        />
                    </Menu>

                    <div>
                        <SuggestedAccounts label="Suggested accounts" />
                    </div>

                    <BorderTopContainer className={cx('footer-container')}>
                        <p className={cx('link-list')}>
                            <a className={cx('link-item')} href="#">
                                Giới thiệu
                            </a>
                            <a className={cx('link-item')} href="#">
                                TikTok Browse
                            </a>
                            <a className={cx('link-item')} href="#">
                                Bảng tin
                            </a>
                            <a className={cx('link-item')} href="#">
                                Liên Hệ
                            </a>
                            <a className={cx('link-item')} href="#">
                                Sự nghiệp
                            </a>
                            <a className={cx('link-item')} href="#">
                                ByteDance
                            </a>
                        </p>
                        <p className={cx('link-list')}>
                            <a className={cx('link-item')} href="#">
                                TikTok for Good
                            </a>
                            <a className={cx('link-item')} href="#">
                                Quảng cáo
                            </a>
                            <a className={cx('link-item')} href="#">
                                Developers
                            </a>
                            <a className={cx('link-item')} href="#">
                                Transparency
                            </a>
                            <a className={cx('link-item')} href="#">
                                TikTok Rewards
                            </a>
                        </p>
                        <p className={cx('link-list')}>
                            <a className={cx('link-item')} href="#">
                                Trợ giúp
                            </a>
                            <a className={cx('link-item')} href="#">
                                An toàn
                            </a>
                            <a className={cx('link-item')} href="#">
                                Điều khoản
                            </a>
                            <a className={cx('link-item')} href="#">
                                Quyền riêng tư
                            </a>
                            <a className={cx('link-item')} href="#">
                                Creator Portal
                            </a>
                            <a className={cx('link-item')} href="#">
                                Hướng dẫn cộng đồng
                            </a>
                        </p>
                        <p className={cx('link-list')}>
                            <span className={cx('more')}>Thêm</span>
                        </p>

                        <span className={cx('more')}>© 2022 TikTok - Clone by hhao</span>
                    </BorderTopContainer>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
