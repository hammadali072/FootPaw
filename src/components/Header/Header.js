import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import { AlignLeft } from 'lucide-react';
import { X } from 'lucide-react';
import brandLogo from '../../images/logo.svg';

import './Header.scss';

const Header = () => {

    return (
        <>
            {/* ===================================
                    Overlay section Starts here
                =================================== */}
            <div className='menu_overlay_main'>
                <div className='offcanvas offcanvas-start' tabindex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className='container'>
                        <div className='overlay'>
                            <div className='logo_main'>
                                <Link className='logo_otr' to='/'>
                                    <img className='logo_img' src={brandLogo} alt='Brand Logo' />
                                </Link>
                                <div class="close_icon_otr" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <X className='icon' strokeWidth={3} />
                                </div>
                            </div>
                            <div className='accordion' id="accordionExample">
                                <div className='menu_otr'>
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
                                            <div className='accordion-item'>
                                                <h2 className='accordion-header'>
                                                    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                                                        <span className='menu_text heading-sm-bold'>Pages</span>
                                                        <ChevronRight strokeWidth={4} className='dropdown_icon' />
                                                    </button>
                                                </h2>
                                                <div id='collapseOne' className='accordion-collapse collapse' data-bs-parent='#accordionExample'>
                                                    <div className='accordion-body'>
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
                                            </div>
                                        </li>
                                        <li className='menu_li'>
                                            <div className='accordion-item'>
                                                <h2 className='accordion-header'>
                                                    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='true' aria-controls='collapseTwo'>
                                                        <span className='menu_text heading-sm-bold'>Blog</span>
                                                        <ChevronRight strokeWidth={4} className='dropdown_icon' />
                                                    </button>
                                                </h2>
                                                <div id='collapseTwo' className='accordion-collapse collapse' data-bs-parent='#accordionExample'>
                                                    <div className='accordion-body'>
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
                                            </div>
                                        </li>
                                        <li className='menu_li'>
                                            <Link className='menu_a heading-sm-bold' to='/'>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===================================
                    Overlay section End here
                =================================== */}
            {/* ===================================
                    Overlay section Starts here
                =================================== */}
            <div className='shopping_overlay_main'>
                <div className='offcanvas offcanvas-end' tabindex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className='container'>
                        <div className='overlay'>
                            <div className='title_otr'>
                                <h4 className='title heading-lb'>Shopping Cart</h4>
                                <div class="close_icon_otr" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <X className='icon' strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===================================
                    Overlay section End here
                =================================== */}
            <header className='header_main'>
                <div className='alert_otr'>
                    <div className='alert_inr'>
                        <div className='Slider'>
                            <div className='Slider_inr'>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Super Savings</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Washing Made Easy</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Don't miss the Treat & Toy of the month</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Free Shipping Over $49</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Super Savings</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Washing Made Easy</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Don't miss the Treat & Toy of the month</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Free Shipping Over $49</p>
                            </div>
                            <div className='Slider_inr'>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Super Savings</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Washing Made Easy</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Don't miss the Treat & Toy of the month</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Free Shipping Over $49</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Super Savings</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Washing Made Easy</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Don't miss the Treat & Toy of the month</p>
                                <div className='icon_otr'>
                                    <PawPrint className='icon' />
                                </div>
                                <p className='text heading-xsb'>Free Shipping Over $49</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='header_inr'>
                        <div className='menu_icon_otr' data-bs-toggle='offcanvas' href='#offcanvasExample' role='button' aria-controls='#offcanvasExample'>
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
                                        <Link className='action_a shopping_icon_a' to="/" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                            <ShoppingBag className='action_icon shopping_icon' />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='shoppingBag_icon_otr' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <ShoppingBag className='icon' />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header