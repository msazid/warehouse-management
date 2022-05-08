import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="footer-copy py-3">
                            <div className="copy-right text-center">
                                <p className="text-light">&copy;MS-Grocery. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;