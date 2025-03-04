import { Link } from 'react-router-dom';

import brandLogo from '../../images/logo-w.svg';
import paymentCompanies from '../../images/payment-companies.png';
import petImage from '../../images/pet-img.png';
import boneVector from '../../images/bone-vector.png';
import footPrint from '../../images/foot-print.png';
import { Link2 } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { SendHorizonal } from 'lucide-react';

import './Footer.scss';

const Footer = () => {

    return (
        <>
            <footer className='footer_main'>
                <div className='container'>
                    <div className='footer_inr'>
                        <div className='row logo_contacts_otr'>
                            <div className='col_logo_otr col-xl-3'>
                                <div className='col_logo_inr'>
                                    <div className='logo_main'>
                                        <Link className='logo_otr' to='/'>
                                            <img className='logo_img' src={brandLogo} alt='FootPaw' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col_contacts_otr col-xl-9'>
                                <div className='row col_contacts_inr'>
                                    <div className='col_contact_otr col-md-4 col-sm-6'>
                                        <div className='row col_contact_inr'>
                                            <div className='col-auto contact_icon_otr'>
                                                <PhoneCall className='contact_icon' />
                                            </div>
                                            <div className='col col_content_otr'>
                                                <h4 className='contact_title heading-xsm'>Hotline Order</h4>
                                                <Link className='contact_a heading-lb' to='tel:(877) 123 456 789'>(877) 123 456 789</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col_contact_otr col-md-4 col-sm-6'>
                                        <div className='row col_contact_inr'>
                                            <div className='col-auto contact_icon_otr'>
                                                <Mail className='contact_icon' />
                                            </div>
                                            <div className='col col_content_otr'>
                                                <h4 className='contact_title heading-xsm'>Email Us</h4>
                                                <Link className='contact_a heading-lb' to='mailto:support@example.com'>support@example.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col_contact_otr col-md-4 col-sm-6'>
                                        <div className='row col_contact_inr'>
                                            <div className='col-auto contact_icon_otr'>
                                                <Link2 className='contact_icon' />
                                            </div>
                                            <div className='col col_content_otr'>
                                                <h4 className='contact_title heading-xsm'>Follow Us</h4>
                                                <div className='social_otr'>
                                                    <ul className='social_ul'>
                                                        <li className='social_li'>
                                                            <Link className='social_a' to='/'>
                                                                <Facebook className='social_icon' />
                                                            </Link>
                                                        </li>
                                                        <li className='social_li'>
                                                            <Link className='social_a' to='/'>
                                                                <Twitter className='social_icon' />
                                                            </Link>
                                                        </li>
                                                        <li className='social_li'>
                                                            <Link className='social_a' to='/'>
                                                                <Instagram className='social_icon' />
                                                            </Link>
                                                        </li>
                                                        <li className='social_li'>
                                                            <Link className='social_a' to='/'>
                                                                <Linkedin className='social_icon' />
                                                            </Link>
                                                        </li>
                                                        <li className='social_li'>
                                                            <Link className='social_a' to='/'>
                                                                <Youtube className='social_icon' />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row links_newsletter_otr'>
                            <div className='col_links_otr col-lg-8'>
                                <div className='row col_links_inr'>
                                    <div className='col_link_otr col-md-4 col-sm-6'>
                                        <div className='col_link_inr'>
                                            <h4 className='heading heading-xsb'>Dog Food</h4>
                                            <div className='menu_otr'>
                                                <ul className='menu_ul'>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Dry Dog Food</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Wet Dog Food</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Biscuits</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Chewy Treats</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Dental Treats</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col_link_otr col-md-4 col-sm-6'>
                                        <div className='col_link_inr'>
                                            <h4 className='heading heading-xsb'>Dog Supplier</h4>
                                            <div className='menu_otr'>
                                                <ul className='menu_ul'>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Toys</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Carriers</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Harnesses & Leads</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Flea & Tick</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Grooming & Shampoo</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col_link_otr col-md-4 col-sm-6'>
                                        <div className='col_link_inr'>
                                            <h4 className='heading heading-xsb'>Cat Food</h4>
                                            <div className='menu_otr'>
                                                <ul className='menu_ul'>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Dry Dog Food</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Wet Dog Food</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Cat Treats</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Cat Food Trapper</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Accesories</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col_link_otr col-md-4 col-sm-6'>
                                        <div className='col_link_inr'>
                                            <h4 className='heading heading-xsb'>Useful Links</h4>
                                            <div className='menu_otr'>
                                                <ul className='menu_ul'>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>New Products</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Best Seller</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Bundle & Save</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Online Gift Card</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Pet Store Locator</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col_link_otr col-md-4 col-sm-6'>
                                        <div className='col_link_inr'>
                                            <h4 className='heading heading-xsb'>My Account</h4>
                                            <div className='menu_otr'>
                                                <ul className='menu_ul'>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>My Profile</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>My Order History</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>My Wish List</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Order Tracking</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Shopping Cart</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col_link_otr col-md-4 col-sm-6'>
                                        <div className='col_link_inr'>
                                            <h4 className='heading heading-xsb'>Our Company</h4>
                                            <div className='menu_otr'>
                                                <ul className='menu_ul'>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>About Us</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Careers</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Affiliate</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Contact Us</Link>
                                                    </li>
                                                    <li className='menu_li'>
                                                        <Link className='menu_a heading-sm' to='/'>Gift Card</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col_newsletter_otr col-lg-4'>
                                <div className='col_newsletter_inr'>
                                    <div className='content_otr'>
                                        <div className='content_inr'>
                                            <h3 className='heading heading-h3'>Our Newsletter</h3>
                                            <p className='desc heading-sm'>Be the first to know about new collections and exclusive offers.</p>

                                            <form className='form_otr'>
                                                <div className='input_main'>
                                                    <div className='input_otr'>
                                                        <input className='input_email heading-sm' type='email' id='email' placeholder='Enter your email' />
                                                    </div>
                                                    <div className='btn_otr'>
                                                        <button className='submit_btn' type='button'>
                                                            <SendHorizonal className='icon' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className='img_otr'>
                                                <img className='pet_img' src={petImage} alt='Pet' />
                                                <img className='bone_img' src={boneVector} alt='Bone' />
                                                <img className='fp_img' src={footPrint} alt='FootPrint' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright_otr'>
                    <div className='container'>
                        <div className='copyright_inr'>
                            <p className='copyright_text heading-xsm'>Copyright © 2025
                                <Link className='copyright_inr heading-xsb' to='/'> FootPaw </Link>. All rights reserved</p>
                            <div className='payment_companies'>
                                <img className='companies_img' src={paymentCompanies} alt='Payment Companies' />
                            </div>
                            <div className='copyrights_otr'>
                                <ul className='copyrights_ul'>
                                    <li className='copyright_li'>
                                        <Link className='copyright_a heading-xsm' to="/">Privacy Policy</Link>
                                    </li>
                                    <li className='copyright_li'>
                                        <Link className='copyright_a heading-xsm' to="/">Contact</Link>
                                    </li>
                                    <li className='copyright_li'>
                                        <Link className='copyright_a heading-xsm' to="/">Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer