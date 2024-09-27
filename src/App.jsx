
import Container from "react-bootstrap/Container";
import Topmenu from "./components/Upperslider";
import Box from "./components/Box";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Container fluid>
      <Topmenu/>
      <Box/>
      <Middle/>
    <Footer/>
    </Container>
    </>
  );
};
export default App;