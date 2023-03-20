import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss'
import images from '~/assets/images';
import AccountsItem from '~/components/AccountItem';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 1000);
    })

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
                <img src={images.logo} alt='Tiktok' />

            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={attrs =>(
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountsItem />
                            <AccountsItem />
                            <AccountsItem />
                            <AccountsItem />
                        </PopperWrapper>
                    </div>
                )}
            >
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
            </div>
            </Tippy>
            <div className={cx('actions')}></div>
        </div>
    </header>
}

export default Header;