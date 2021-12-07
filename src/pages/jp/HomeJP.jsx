import TopJP from '../../components/jp/TopJP';
import FadeIn from '../../components/animation/FadeIn';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Projects from '../../components/Projects';
import ProgressBar from '../../components/ProgressBar';

const HomeJP = () => {
  return (
    <FadeIn>
      <ProgressBar/>
      <div className='lang-jp'>
        <Header lang='jp'/>
        <TopJP />
        <Projects lang='jp' />
        <Footer />
      </div>
    </FadeIn>
  );
};

export default HomeJP;
