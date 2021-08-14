import FadeIn from '../components/animation/FadeIn';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Top from '../components/Top';

const Home = () => {
  return (
    <FadeIn>
      <Header />
      <Top />
      <Projects />
      <Footer />
    </FadeIn>
  );
};

export default Home;
