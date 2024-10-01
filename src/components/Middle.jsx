import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from '../images/p2.jpg';

const Middle = () => {
    return (
        <>
            <Container id='skill' fluid style={{ marginTop: "0px" }}>
                <Card className="bg-dark text-white">
                    <img src={img3} className="card-img" alt="Card background" />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
                        <h1>MY SKILLS</h1>

                        <Container className="d-flex flex-wrap justify-content-center" style={{ marginTop: "50px" }}>
                            <Row className="justify-content-center" style={{ gap: '1rem' }}>
                                {/* Python & Django Skills */}
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card 
                                        border="dark" 
                                        style={{ 
                                            marginBottom: '1rem', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' 
                                        }}
                                    >
                                        <Card.Header style={{ color: 'white' }}>Python & Django</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white' }}>Backend Development</Card.Title>
                                            <Card.Text style={{ color: 'white' }}>
                                                Expertise in Python, Django, and Flask for building robust web applications with secure backends.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Frontend Technologies */}
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card 
                                        border="dark" 
                                        style={{ 
                                            marginBottom: '1rem', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' 
                                        }}
                                    >
                                        <Card.Header style={{ color: 'white' }}>Frontend Technologies</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white' }}>HTML, CSS, JS</Card.Title>
                                            <Card.Text style={{ color: 'white' }}>
                                                Proficient in HTML, CSS, JavaScript, React for crafting interactive and responsive UIs.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* REST APIs */}
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card 
                                        border="dark" 
                                        style={{ 
                                            marginBottom: '1rem', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' 
                                        }}
                                    >
                                        <Card.Header style={{ color: 'white' }}>RESTful APIs</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white' }}>API Development</Card.Title>
                                            <Card.Text style={{ color: 'white' }}>
                                                Skilled in designing and implementing RESTful APIs for seamless client-server communication.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Databases */}
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card 
                                        border="dark" 
                                        style={{ 
                                            marginBottom: '1rem', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' 
                                        }}
                                    >
                                        <Card.Header style={{ color: 'white' }}>Databases</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white' }}>SQL & NoSQL</Card.Title>
                                            <Card.Text style={{ color: 'white' }}>
                                                Experience in managing relational (PostgreSQL, MySQL) and NoSQL databases (MongoDB) for data persistence.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Version Control */}
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card 
                                        border="dark" 
                                        style={{ 
                                            marginBottom: '1rem', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' 
                                        }}
                                    >
                                        <Card.Header style={{ color: 'white' }}>Version Control</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white' }}>Git & GitHub</Card.Title>
                                            <Card.Text style={{ color: 'white' }}>
                                                Proficient in Git for version control, enabling collaboration and efficient code management.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* DevOps Skills */}
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card 
                                        border="dark" 
                                        style={{ 
                                            marginBottom: '1rem', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' 
                                        }}
                                    >
                                        <Card.Header style={{ color: 'white' }}>DevOps</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white' }}>CI/CD, Docker</Card.Title>
                                            <Card.Text style={{ color: 'white' }}>
                                                Knowledge of Continuous Integration/Continuous Deployment (CI/CD) and Docker for automated workflows and containerization.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Cloud Platforms */}
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card 
                                        border="dark" 
                                        style={{ 
                                            marginBottom: '1rem', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' 
                                        }}
                                    >
                                        <Card.Header style={{ color: 'white' }}>Cloud Platforms</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white' }}>AWS & Azure</Card.Title>
                                            <Card.Text style={{ color: 'white' }}>
                                                Familiar with cloud platforms like AWS, Azure, and deploying scalable applications in the cloud.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Testing */}
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card 
                                        border="dark" 
                                        style={{ 
                                            marginBottom: '1rem', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' 
                                        }}
                                    >
                                        <Card.Header style={{ color: 'white' }}>Testing</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white' }}>Unit & Integration Tests</Card.Title>
                                            <Card.Text style={{ color: 'white' }}>
                                                Experience in writing unit and integration tests using tools like PyTest to ensure software reliability.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </>
    );
};

export default Middle;
