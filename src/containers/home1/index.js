import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "./components/Slider";
import MainServices from "./components/MainServices";
import AboutUs from "./components/AboutUs";
import ProfessionalTeams from "./components/ProfessionalTeams";
import ContactUs from "./components/ContactUs";
import slideBackground from "../../assets/imgs/bgs/SlideBackground.png";
import bg1 from "../../assets/imgs/bgs/BG1.png";
import bg2 from "../../assets/imgs/bgs/BG2.png";
import footerBG from "../../assets/imgs/bgs/FooterBG.png";

const Home1 = () => {
  return (
    <div className="home-1">
      <Header />

      <Box
        className="bg-section-1"
        sx={{
          background: `url(${slideBackground}) no-repeat top left`,
          backgroundSize: "90% 100%",
        }}
      >
        <Container className="container" maxWidth="content" disableGutters>
          <Slider />
        </Container>
      </Box>

      <Box
        className="bg-section-2"
        sx={{
          background: `url(${bg1}) no-repeat bottom right`,
          backgroundSize: "60% 60%",
        }}
      >
        <Container className="container" maxWidth="content" disableGutters>
          <MainServices />
          <AboutUs />
        </Container>
      </Box>

      <Box
        className="bg-section-3"
        sx={{
          background: `url(${bg2}) no-repeat bottom left`,
          backgroundSize: "80% 60%",
        }}
      >
        <Container className="container" maxWidth="content" disableGutters>
          <ProfessionalTeams />
          <ContactUs />
        </Container>
      </Box>

      <Box
        className="bg-section-4"
        sx={{
          background: `url(${footerBG}) no-repeat center bottom`,
          backgroundSize: "cover",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Home1;
