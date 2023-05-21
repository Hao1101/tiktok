import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
    const [accountValues, setAccountValues] = useState([]);

    console.log('acc', accountValues);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem accountValues={accountValues} setAccountValues={setAccountValues} />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
