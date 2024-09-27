import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import img1 from '../images/p1.jpg';
import img2 from '../images/p2.jpg';
const CustomCard = ({ }) => {
  return (
    <>
      <Container fluid >
        <Card  id='about' className="bg-dark text-white">
          <img src={img2} />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
            <Card.Title><h1> Hi I'am a ANURAG PANDEY</h1></Card.Title>
            <Card.Text>
              <h3>FULLSTACK WEB-DEVELOPER</h3>

            </Card.Text>

            <Card.Text>
              <p style={{ justifyContent: "center" }}>As a Full Stack Python Developer, I specialize in building robust,<br></br>
                scalable web applications from the ground up, leveraging both frontend and backend<br></br> technologies. My
                expertise spans Python, Django/Flask, JavaScript, and modern frontend frameworks, allowing me to create<br></br>
                seamless, user-centric solutions. I thrive on solving complex problems and delivering efficient, high-quality
                code across the entire stack.</p>

            </Card.Text>
            <div >
              <Button style={{ margin: "10px" }} variant="outline-light">Hire me</Button>
              <Button style={{ margin: "10px" }} variant="outline-light">Let's Chat</Button>

            </div>

            <h1 style={{ marginTop: "100px" }}>MY JOURNEY</h1>

            <Container id='jorney' style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px" }} >




              {/* Python & Django Skills */}
              <Card
                border="dark"
                style={{
                  width: '18rem',
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' // Shadow effect
                }}
              >
                <Card.Header style={{ color: 'white' }}>2019-2020</Card.Header>
                <Card.Body>
                  <Card.Title style={{ color: 'white' }}>10th CLASS</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    "Completed 10th grade from Gandhi High School, Sidhi (M.P.) with 89.66%."
                  </Card.Text>
                </Card.Body>
              </Card>



              {/* Python & Django Skills */}
              <Card
                border="dark"
                style={{
                  width: '18rem',
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' // Shadow effect
                }}
              >
                <Card.Header style={{ color: 'white' }}>2021-2022</Card.Header>
                <Card.Body>
                  <Card.Title style={{ color: 'white' }}>12th CLASS</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    "Completed Intermediate (12th grade) from Excellence School No.1, Sidhi (M.P.) with 85.33%."

                  </Card.Text>
                </Card.Body>
              </Card>



              {/* Python & Django Skills */}
              <Card
                border="dark"
                style={{
                  width: '18rem',
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' // Shadow effect
                }}
              >
                <Card.Header style={{ color: 'white' }}>2022-2025</Card.Header>
                <Card.Body>
                  <Card.Title style={{ color: 'white' }}>GRADUATION</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    "Pursuing a Bachelor of Science (Hons) from the Institute for Excellence in Higher Education, Bhopal (M.P.)."
                  </Card.Text>
                </Card.Body>
              </Card>

            </Container>

          </Card.ImgOverlay>
        </Card>


















      </Container>


    </>
  );
};

export default CustomCard;
