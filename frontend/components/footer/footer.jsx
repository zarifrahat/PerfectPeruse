import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=>{
    return(
        <footer className="splash-footer">
            <div className="splash-footer-company">
                <h3>COMPANY</h3>
                <ul>
                    <li>
                        <a href="https://www.goodreads.com/about/us">About us</a>
                    </li>
                    <li>
                        <a href="https://www.goodreads.com/jobs">Careers</a>
                    </li>
                    <li>
                        <a href="https://www.goodreads.com/about/terms">Terms</a>
                    </li>
                    <li>
                        <a href="https://www.goodreads.com/about/privacy">Privacy</a>

                    </li>
                    <li>
                        <a href="https://help.goodreads.com/">Help</a>
                    </li>
                </ul>
            </div>


            <div className="splash-footer-workwithus">
                <h3>WORK WITH US</h3>
                <ul>
                    <li>
                        <a href="https://www.goodreads.com/author/program">Authors</a>
                    </li>
                    <li>
                        <a href="https://www.goodreads.com/advertisers">Advertise</a>
                    </li>
                    <li>
                        <a href="https://www.goodreads.com/news?content_type=author_blogs">Authors &amp; ads blog</a>
                    </li>
                    <li>
                        <a href="https://www.goodreads.com/api">API</a>

                    </li>
                </ul>
            </div>

            <div className="splash-footer-connect">
                <h3>CONNECT</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/Goodreads/">
                            <img src={window.facebookURL}
                                alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/goodreads">
                            <img src={window.twitterURL}
                                alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/goodreads/">
                            <img src={window.instagramURL}
                                alt="Instagram" />
                        </a>
                    </li>
                    <li>

                        <a href="https://www.linkedin.com/company/goodreads-com/">
                            <img src={window.linkedinURL}
                                alt="Linkedin" />
                        </a>
                    </li>
                </ul>
            </div>


            <div className="splash-footer-misc">
                <div>
                    <ul>
                        <li>
                            <a href="https://itunes.apple.com/app/apple-store/id355833469?pt=325668&ct=mw_footer&mt=8">
                                <img src={window.applestoreURL}
                                    alt="Apple Play Store" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.goodreads&utm_source=mw_footer&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                                <img src={window.googleplayURL}
                                    alt="Google Store" />
                            </a>
                        </li>
                    </ul>
                </div>
                <ul>
                    <li>
                        © 2020 Goodreads, Inc.
                            </li>
                    <li>
                        <a href="https://www.goodreads.com/toggle_mobile">Mobile version</a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;