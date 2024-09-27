import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            background: '#1c1c1c',  // Darker background for sophistication
            color: '#e0e0e0',  // Soft light color for better readability
            padding: '4rem 0',
            borderTop: '4px solid dark',  // Blue top border
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)',
            borderRadius:'25px'
        }}>
            <Container id='about' >
                <Row>
                    <Col md={4} className="mb-4">
                        <h5 className="text-uppercase" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>About Me</h5>
                        <p style={{ lineHeight: '1.6' }}>
                            I'm a Full Stack Developer dedicated to crafting seamless digital experiences. Let's connect and collaborate!
                        </p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5 className="text-uppercase" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>Connect</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="https://github.com/anuragpandey8056" className="text-light" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} /> GitHub
                            </Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/anurag-pandey-101583260/" className="text-light" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} /> LinkedIn
                            </Nav.Link>
                            <Nav.Link href="https://x.com/AnuragP52396908" className="text-light" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} /> Twitter
                            </Nav.Link>
                            <Nav.Link href="anuragpandey8056@gmail.com" className="text-light">
                                <FaEnvelope size={24} /> Email
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5 className="text-uppercase" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
                            <Nav.Link href="#blog" className="text-light">Blog</Nav.Link>
                            <Nav.Link href="#about" className="text-light">About Me</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col>
                        <p style={{ fontSize: '0.9rem', margin: 0 }}>
                            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                        </p>
                        <p style={{ fontSize: '0.8rem', margin: '0.5rem 0 0' }}>
                            Built with ❤️ using React and Bootstrap.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
