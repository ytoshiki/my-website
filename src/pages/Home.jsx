import Fade from '../components/animation/Fade';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import Projects from '../components/Projects';
import Top from '../components/Top';

const Home = () => {
  return (
    <Fade>
      <ProgressBar/>
      <Header />
      <Top />
      <Projects />
      <Footer />
      </Fade>

  );
};

export default Home;
