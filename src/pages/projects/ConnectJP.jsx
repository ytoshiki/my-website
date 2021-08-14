import ImgTop from '../../assets/img-project-04.png';
import '../../styles/projects/WCMS.scss';
import ImgCategory from '../../assets/projects/connect/img-connect-category.jpg';
import ImgLang from '../../assets/projects/connect/img-connect-lang.jpg';
import PageTop from '../../components/projects/PageTop';
import Technology from '../../components/projects/Technology';
import VisitButton from '../../components/projects/VisitButton';
import PointBlock from '../../components/projects/PointBlock';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FadeIn from '../../components/animation/FadeIn';

const searchImgs = [ImgCategory, ImgLang];

const pageTopSources = {
  site: 'https://pf-newssearch-client.vercel.app/',
  front: 'https://github.com/ytoshiki/pf__newssearch-client'
};

const technologyFront = [
  {
    head: '言語',
    data: ['Typescript']
  },
  {
    head: 'フレームワーク',
    data: ['Next.js']
  },
  {
    head: 'スタイル',
    data: ['css']
  }
];

const ConnectJP = () => {
  const pageTopDescription = <p className='wcms__top-para'>世界中のニュースを集めたアプリ。カテゴリー、言語、キーワードで検索が可能。</p>;

  const point01Description = (
    <div className='wcms__points-description'>
      トップページからはカテゴリーを選択してニュースの絞り込みが可能。
      <br />
      <br />
      画面右上の検索アイコンからキーワード、言語の絞り込みが可能なページへ飛ぶことができます。
      <br />
      <br />
      ニュース及び記事は
      <a href='https://currentsapi.services/en' target='_blank' rel='noreferrer'>
        Currents API
      </a>
      からAPIで所得しています。
    </div>
  );

  return (
    <FadeIn>
      <Header hasParent={true} lang='/jp' />

      <div className='l-container'>
        <div className='wcms lang-jp'>
          <PageTop title='THE CONNECT' description={pageTopDescription} sources={pageTopSources} image={ImgTop} lang='jp' />
          <Technology front={technologyFront} lang='jp' />
          <div className='wcms__block is-bg'>
            <h2 className='wcms__block-title'>機能</h2>
            <div className='wcms__points'>
              <PointBlock title='キーワード検索' description={point01Description} slideImages={searchImgs} size='is-lg' />
            </div>
          </div>
          <VisitButton url='https://pf-newssearch-client.vercel.app/' target='_blank' rel='noreferrer' lang='jp' />
        </div>
      </div>
      <Footer />
    </FadeIn>
  );
};

export default ConnectJP;
