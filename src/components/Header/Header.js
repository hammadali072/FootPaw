import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import { AlignLeft } from 'lucide-react';
import brandLogo from '../../images/logo.svg';

import './Header.scss';

const Header = () => {

    return (
        <>
            <header className='header_main'>
                <div className='container'>
                    <div className='header_inr'>
                        <div className='menu_icon_otr'>
                            <AlignLeft className='icon' />
                        </div>
                        <div className='logo_main'>
                            <Link className='logo_otr' to='/'>
                                <img className='logo_img' src={brandLogo} alt='Brand Logo' />
                            </Link>
                        </div>
                        <nav className='menu_otr'>
                            <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='menu_a heading-sm-bold' to='/'>Home</Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_a heading-sm-bold' to='/'>About</Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_a heading-sm-bold' to='/'>Shop</Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_a heading-sm-bold' to='/'>
                                        <span className='menu_text'>Pages</span>
                                        <ChevronDown strokeWidth={4} className='icon' />
                                    </Link>
                                    <div className='menu_dropdown_otr'>
                                        <div className='menu_dropdown_inr'>
                                            <ul className='menu_dropdown_ul'>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_a heading-sm' to='/'>
                                                        <PawPrint className='icon' />
                                                        <span className='menu_text'>FAQ</span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_a heading-sm' to='/'>
                                                        <PawPrint className='icon' />
                                                        <span className='menu_text'>404 Error</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_a heading-sm-bold' to='/'>
                                        <span className='menu_text'>Blog</span>
                                        <ChevronDown strokeWidth={4} className='icon' />
                                    </Link>
                                    <div className='menu_dropdown_otr'>
                                        <div className='menu_dropdown_inr'>
                                            <ul className='menu_dropdown_ul'>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_a heading-sm' to='/'>
                                                        <PawPrint className='icon' />
                                                        <span className='menu_text'>Blog - Standard</span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_a heading-sm' to='/'>
                                                        <PawPrint className='icon' />
                                                        <span className='menu_text'>Blog - Grid</span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_a heading-sm' to='/'>
                                                        <PawPrint className='icon' />
                                                        <span className='menu_text'>Single Post</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_a heading-sm-bold' to='/'>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className='action_main'>
                            <ul className='action_ul'>
                                <li className='action_li'>
                                    <div className='action_otr'>
                                        <Link className='action_a' to="/">
                                            <Search className='action_icon' />
                                        </Link>
                                    </div>
                                </li>
                                <li className='action_li'>
                                    <div className='action_otr'>
                                        <Link className='action_a' to="/">
                                            <User className='action_icon' />
                                        </Link>
                                    </div>
                                </li>
                                <li className='action_li'>
                                    <div className='action_otr'>
                                        <Link className='action_a' to="/">
                                            <Heart className='action_icon' />
                                        </Link>
                                    </div>
                                </li>
                                <li className='action_li'>
                                    <div className='action_otr'>
                                        <Link className='action_a' to="/">
                                            <ShoppingBag className='action_icon' />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='shoppingBag_icon_otr'>
                            <ShoppingBag className='icon' />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header