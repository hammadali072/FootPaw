import { Link } from 'react-router-dom';

import brandLogo from '../../images/logo-w.svg';
import paymentCompanies from '../../images/payment-companies.png';
import { Link2 } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Youtube } from 'lucide-react';

import './Footer.scss';

const Footer = () => {

    return (
        <>
            <footer className='footer_main'>
                <div className='container'>
                    <div className='footer_inr'>
                        <div className='row logo_contacts_otr'>
                            <div className='col_logo_otr col-3'>
                                <div className='logo_main'>
                                    <Link className='logo_otr' to='/'>
                                        <img className='logo_img' src={brandLogo} alt='FootPaw' />
                                    </Link>
                                </div>
                            </div>
                            <div className='col_contacts_otr col-9'>
                                <div className='col_contacts_inr'>
                                    <div className='row'>
                                        <div className='col_contact_otr col-4'>
                                            <div className='col_contact_inr'>
                                                <div className='row'>
                                                    <div className='col-auto contact_icon_otr'>
                                                        <PhoneCall className='contact_icon' />
                                                    </div>
                                                    <div className='col col_content_otr'>
                                                        <h4 className='contact_title heading-xsm'>Hotline Order</h4>
                                                        <Link className='contact_a heading-lb' to='tel:(877) 123 456 789'>(877) 123 456 789</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col_contact_otr col-4'>
                                            <div className='col_contact_inr'>
                                                <div className='row'>
                                                    <div className='col-auto contact_icon_otr'>
                                                        <Mail className='contact_icon' />
                                                    </div>
                                                    <div className='col col_content_otr'>
                                                        <h4 className='contact_title heading-xsm'>Email Us</h4>
                                                        <Link className='contact_a heading-lb' to='mailto:support@example.com'>support@example.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col_contact_otr col-4'>
                                            <div className='col_contact_inr'>
                                                <div className='row'>
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