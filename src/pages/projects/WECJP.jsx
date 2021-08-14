import ImgTop from '../../assets/img-project-01.png';
import '../../styles/projects/WCMS.scss';
import ImgAuth from '../../assets/projects/w-ec/img-w-auth.jpg';
import ImgCart from '../../assets/projects/w-ec/img-w-cart.jpg';
import ImgSearch from '../../assets/projects/w-ec/img-w-search.jpg';
import ImgSort from '../../assets/projects/w-ec/img-w-sort.jpg';
import ImgReview01 from '../../assets/projects/w-ec/img-w-review01.jpg';
import ImgReview02 from '../../assets/projects/w-ec/img-w-review02.jpg';
import { Link } from 'react-router-dom';
import PageTop from '../../components/projects/PageTop';
import Technology from '../../components/projects/Technology';
import VisitButton from '../../components/projects/VisitButton';
import PointBlock from '../../components/projects/PointBlock';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import FadeIn from '../../components/animation/FadeIn';
import Fadeout from '../../components/animation/Fadeout';

const authImgs = [ImgAuth];
const basicImgs = [ImgSearch, ImgCart, ImgSort];
const reviewImgs = [ImgReview01, ImgReview02];

const pageTopSources = {
  site: 'https://w-ec.netlify.app/',
  front: 'https://github.com/ytoshiki/pf__ecommerce-client',
  back: 'https://github.com/ytoshiki/pf__customer-data-server'
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

const WECJP = () => {
  const pageTopDescription = (
    <p className='wcms__top-para'>
      ECサイト。カテゴリー及び商品は別アプリ<Link to='/'>(W)</Link>からAPIで登録・所得が可能。
    </p>
  );

  const point01Description = (
    <div className='wcms__points-description'>
      一般的なECサイトにある以下のような機能が行えます
      <br />
      <br />
      <ul>
        <li>1. 商品の検索</li>
        <li>2. カートの操作</li>
        <li>3. 商品の並び替え</li>
      </ul>
      <br />
      <br />
      それらを実行する際に、不必要なAPIのやりとりを防ぐためにReact HooksとReduxを用いて状態管理をしています。
    </div>
  );

  const point02Description = (
    <div className='wcms__points-description'>
      購入した商品のレビューを書くことができます。実際に購入することはできませんが、ログインした状態で購入ボタンを押すと、画面右上のユーザーアイコンからレビューのページへ飛べます。
      <br />
      そこから商品のレビューの追加、編集が行えます。
    </div>
  );

  const point03Description = (
    <div className='wcms__points-description'>
      JWTを用いてユーザー認証を行っています。
      <br />
      <br />
      商品を購入するには、アカウントの登録が必要です。そのアカウントの情報が商品のレビューに必要になります。
      <br />
      <br />
      ゲストユーザーとしてログインするには以下のアカウント情報をご利用ください。
      <br />
      <br />
      <ul>
        <li>
          <li>Username: demo</li>
          <li>Password: password</li>
        </li>
      </ul>
    </div>
  );

  return (
    <FadeIn>
      <Header hasParent={true} lang='/jp' />
      <div className='l-container'>
        <div className='wcms lang-jp'>
          <PageTop title='W (ECサイト)' description={pageTopDescription} sources={pageTopSources} image={ImgTop} lang='jp' />
          <Technology front={technologyFront} back={technologyBack} lang='jp' />
          <div className='wcms__block is-bg'>
            <h2 className='wcms__block-title'>機能</h2>
            <div className='wcms__points'>
              <PointBlock title='ECサイトの基本操作' description={point01Description} slideImages={basicImgs} size='is-lg' />
              <PointBlock title='商品レビュー' description={point02Description} slideImages={reviewImgs} size='is-lg' />
              <PointBlock title='ユーザー認証' description={point03Description} slideImages={authImgs} size='is-lg' />
            </div>
          </div>
          <VisitButton url='https://w-ec.netlify.app/' target='_blank' rel='noreferrer' lang='jp' />
        </div>
      </div>
      <Footer />
    </FadeIn>
  );
};

export default WECJP;
