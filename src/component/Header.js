import React, { useState } from 'react'
import logo from '../assets/images/Logo.png';
import himg1 from '../assets/images/HeroImage1.png';
import himg2 from '../assets/images/HeroImage2.png';
import { Col, Container, Row } from 'react-bootstrap';

function Header() {
    const [toggle, setToggle] = useState('none')
    const handleHum = () =>{
        if (toggle === 'none') {
            setToggle('block');
        }else{
            setToggle('none');
        }
        
    }
    return (
        <div className='section1'>
            <Container>
                {/* nav */}
                <div className='nav-main'>
                    <div>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">ABOUT</a></li>
                            <li><a href="/">ROADMAP</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src={logo} className="w-100" alt="" />
                    </div>
                    <div>
                        <ul>
                            <li><a href="/">TEAM</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/" className='button1'>CONNECT WALLET</a></li>
                        </ul>
                    </div>
                </div>
                {/* nav */}
                {/* monile nav */}
                <div className='mobile-nav'>
                    <div>
                        <img src={logo} className="mobile-logo" alt="" />
                    </div>
                    <div className='humburger-main' onClick={handleHum}>
                        <div className='Line1st'></div>
                        <div className='Line2nd'></div>
                        <div className='Line3rd'></div>
                    </div>
                </div>
                <div className='MobileNav-main' style={{display:toggle}}>
                    <div>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">ABOUT</a></li>
                            <li><a href="/">ROADMAP</a></li>
                            <li><a href="/">TEAM</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li>
                                <a href="/" className='button1'>CONNECT WALLET</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* monile nav */}
                <Row className='pb-5'>
                    <Col lg="8">
                        <h1 className='commonTitle1'>
                            10,000 Unique Avocados on Avax BLOCKCHAIN
                        </h1>
                        <p className='commonDesc'>
                            Once we establish a community of AVA Avocado enthusiasts, we’ll be airdropping 500 Avocados as a show of appreciation. This will also support our marketing efforts, by offering a means of media distribution.
                        </p>
                        <button className='button1 px-5 mt-3'>MINT NOW</button>
                    </Col>
                    <Col lg="4"></Col>
                </Row>
            </Container>
            <img src={himg1} className='himg1' alt="" />
            <img src={himg2} className='himg2' alt="" />
        </div>
    )
}

export default Header