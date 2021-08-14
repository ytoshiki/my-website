import TopJP from '../../components/jp/TopJP';
import FadeIn from '../../components/animation/FadeIn';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Projects from '../../components/Projects';

const HomeJP = () => {
  return (
    <FadeIn>
      <div className='lang-jp'>
        <Header />
        <TopJP />
        <Projects lang='jp' />
        <Footer />
      </div>
    </FadeIn>
  );
};

export default HomeJP;
