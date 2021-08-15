import ImgTop from '../../assets/img-project-03.png';
import '../../styles/projects/WCMS.scss';
import ImgSave from '../../assets/projects/wordbook/img-wordbook-save.jpg';
import ImgList from '../../assets/projects/wordbook/img-wordbook-list.jpg';
import ImgTest from '../../assets/projects/wordbook/img-wordbook-test.jpg';
import ImgSearch from '../../assets/projects/wordbook/img-wordbook-search.jpg';
import ImgAuth from '../../assets/projects/wordbook/img-wordbook-auth.jpg';
import PageTop from '../../components/projects/PageTop';
import Technology from '../../components/projects/Technology';
import VisitButton from '../../components/projects/VisitButton';
import PointBlock from '../../components/projects/PointBlock';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FadeIn from '../../components/animation/FadeIn';

const basicImgs = [ImgSave, ImgList, ImgTest];
const searchImgs = [ImgSearch];
const authImgs = [ImgAuth];

const pageTopSources = {
  site: 'https://wordbookd.netlify.app/',
  front: 'https://github.com/ytoshiki/pf__wordbook_client/tree/master/src',
  back: 'https://github.com/ytoshiki/pf__wordbook_server'
};

const technologyFront = [
  {
    head: '言語',
    data: ['Typescript']
  },
  {
    head: 'フレームワーク',
    data: ['React']
  },
  {
    head: '状態管理',
    data: ['Redux']
  },
  {
    head: 'スタイル',
    data: ['scss']
  }
];

const technologyBack = [
  {
    head: '言語',
    data: ['Typescript', 'Node']
  },
  {
    head: 'フレームワーク',
    data: ['Express']
  },
  {
    head: 'データベース',
    data: ['mongodb']
  },
  {
    head: '認証',
    data: ['JWT']
  }
];

const WordBookJP = () => {
  const pageTopDescription = <p className='wcms__top-para'>英語学習者向けのアプリ。単語の意味・画像の検索が可能。単語帳を作ってテストができる。</p>;

  const point01Description = (
    <div className='wcms__points-description'>
      ページ上部の検索バーから単語の意味と画像の検索が可能です。
      <br />
      <br />
      以下のAPIを使用して実行しました。
      <br />
      <br />
      <ul>
        <li>
          辞書:{' '}
          <a href='https://developer.wordnik.com/' target='_blank' rel='noreferrer'>
            Wordnik API
          </a>
          <span>(本番環境)</span>,
          <a href='https://owlbot.info/' target='_blank' rel='noreferrer'>
            Owlbot Dictionary API
          </a>
          <span>(開発環境)</span>
        </li>
        <li>
          画像:{' '}
          <a href='https://pixabay.com/' target='_blank' rel='noreferrer'>
            Pixabay API
          </a>
        </li>
      </ul>
    </div>
  );

  const point02Description = (
    <div className='wcms__points-description'>
      アカウントの登録後、画面下部から単語帳の作成が可能です。
      <br />
      <br />
      作成した単語帳は画面左側「Word list」に反映されます。さらに上部の「Start Quizes」からその単語帳のテストを受けることもできます。 （スライド参照）
    </div>
  );

  const point03Description = (
    <div className='wcms__points-description'>
      {' '}
      <a href='https://jwt.io/' target='_blank' rel='noreferrer'>
        JWT
      </a>{' '}
      を用いてユーザー認証をしています。
      <br />
      <br />
      単語帳の機能を使うには、アカウントの登録が必要です。
      <br />
      <br />
      以下のアカウントでゲストユーザーとしてログインができます。
      <br />
      <br />
      <ul>
        <li>Email: admin@gmail.com</li>
        <li>Password: password</li>
      </ul>
    </div>
  );

  return (
    <FadeIn>
      <Header hasParent={true} lang='/jp' />

      <div className='l-container'>
        <div className='wcms lang-jp'>
          <PageTop title='WordBook D' description={pageTopDescription} sources={pageTopSources} image={ImgTop} lang='jp' />
          <Technology front={technologyFront} back={technologyBack} lang='jp' />
          <div className='wcms__block is-bg'>
            <h2 className='wcms__block-title'>機能</h2>
            <div className='wcms__points'>
              <PointBlock title='単語検索' description={point01Description} slideImages={searchImgs} size='is-lg' />
              <PointBlock title='単語の保存/テスト' description={point02Description} slideImages={basicImgs} size='is-lg' />
              <PointBlock title='ユーザー認証' description={point03Description} slideImages={authImgs} size='is-lg' />
            </div>
          </div>
          <VisitButton url='https://wordbookd.netlify.app/' target='_blank' rel='noreferrer' lang='jp' />
        </div>
      </div>
      <Footer />
    </FadeIn>
  );
};

export default WordBookJP;
