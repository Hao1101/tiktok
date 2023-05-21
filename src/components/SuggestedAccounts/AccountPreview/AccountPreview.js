import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button/Button';
import styles from './AccountPreview.module.scss';

// import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function AccountPreview() {
    // const [accountValues, setAccountValues] = useState([]);

    // useEffect(() => {
    //     fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setAccountValues(res.data);
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // console.log('hao', accountValues);
    // console.log('hao2', accountValues);

    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')} src="" alt="" />
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                </div>
                <div className={cx('body')}>
                    <p className={cx('nickname')}>
                        <strong>hahoanhao</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>ha hoan hao123</p>
                    <p className={cx('analytisc')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
