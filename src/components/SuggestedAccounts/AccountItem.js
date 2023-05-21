import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

import { useEffect } from 'react';

const cx = classNames.bind(styles);

function AccountItem(props) {
    // const [accountValues, setAccountValues] = useState([]);

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5')
            .then((res) => res.json())
            .then((res) => {
                console.log('123', res.data);
                props.setAccountValues(res.data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log('test2', props.accountValues);
    const renderPreview = (atr, content) => {
        console.log('test3', props.accountValues);
        console.log('data1', atr, content);
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            {props.accountValues.map((item, index) => (
                <div key={item.index}>
                    <Tippy
                        interactive
                        delay={[800, 0]}
                        offset={[-18, 0]}
                        placement="bottom"
                        render={(atr, content) => renderPreview(atr, content)}
                    >
                        <div className={cx('account-item')}>
                            <img className={cx('avatar')} src={item.avatar} alt="" />
                            <div className={cx('item-info')}>
                                <p className={cx('nickname')}>
                                    <strong>{item.nickname}</strong>
                                    {item.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                                </p>
                                <p className={cx('name')}>{`${item.first_name} ${item.last_name}`}</p>
                            </div>
                        </div>
                    </Tippy>
                </div>
            ))}
        </div>
    );
}

export default AccountItem;
