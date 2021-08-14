import ImgTop from '../../assets/img-project-02.png';
import '../../styles/projects/WCMS.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import BgValOne from '../../assets/projects/w-cms/img-val-01.jpg';
import BgValTwo from '../../assets/projects/w-cms/img-val-02.jpg';
import BgValThree from '../../assets/projects/w-cms/img-val-03.jpg';
import BgValFour from '../../assets/projects/w-cms/img-val-04.jpg';
import BgVisOne from '../../assets/projects/w-cms/img-vis-01.jpg';
import BgVisTwo from '../../assets/projects/w-cms/img-vis-02.jpg';
import BgVisThree from '../../assets/projects/w-cms/img-vis-03.jpg';
import BgVisFour from '../../assets/projects/w-cms/img-vis-04.jpg';
import BgCMOne from '../../assets/projects/w-cms/img-w-cm-01.jpg';
import BgCMTwo from '../../assets/projects/w-cms/img-w-cm-02.jpg';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import FadeIn from '../animation/FadeIn';

const dataVisualizationImgs = [BgVisOne, BgVisTwo, BgVisThree, BgVisFour];
const contentManagementImgs = [BgCMOne, BgCMTwo];
const dataValidationImgs = [BgValOne, BgValTwo];

SwiperCore.use([Navigation, Pagination]);

const WCMSJP = () => {
  return (
    <FadeIn>
      <Header hasParent={true} lang='/jp' />

      <div className='l-container'>
        <div className='wcms lang-jp'>
          <div className='wcms__top'>
            <div className='wcms__top-texts'>
              <h1 className='wcms__top-title'>W (コンテンツ管理/データのグラフ化 )</h1>
              <p className='wcms__top-para'>
                <Link to='/'>W(ECサイト)</Link>のコンテンツ管理、及び利用者・商品・売り上げのデータ化。
              </p>
              <div className='wcms__top-options'>
                <div className='wcms__top-option'>
                  <span className='wcms__top-option-title'>デモ:</span>

                  <a href='https://pf-customer-data-client.vercel.app/login' target='/' rel='noreferrer'>
                    サイトを見る
                  </a>
                </div>
                <div className='wcms__top-option'>
                  <span className='wcms__top-option-title'>ソースコード:</span>

                  <span className='wcms__top-option-sub'>
                    <a href='https://github.com/ytoshiki/pf__customer-data-client' target='/' rel='noreferrer'>
                      フロントエンド
                    </a>

                    <a href='https://github.com/ytoshiki/pf__customer-data-server' target='/' rel='noreferrer'>
                      バックエンド
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='wcms__top-img'>
              <img src={ImgTop} alt='' />
            </div>
          </div>
          <div className='wcms__block'>
            <h2 className='wcms__block-title'>テクノロジー</h2>
            <div className='wcms__block-wrapper'>
              <div className='wcms__block-content'>
                <h3>フロントエンド</h3>
                <span>言語</span>
                <ul>
                  <li>Typescript</li>
                </ul>
                <span>フレームワーク</span>
                <ul>
                  <li>React</li>
                </ul>
                <span>状態管理</span>
                <ul>
                  <li>Redux</li>
                </ul>
                <span>スタイル</span>
                <ul>
                  <li>Scss</li>
                </ul>
              </div>
              <div className='wcms__block-content'>
                <h3>バックエンド</h3>
                <span>言語</span>
                <ul>
                  <li>Typescript</li>
                  <li>Node</li>
                </ul>
                <span>フレームワーク</span>
                <ul>
                  <li>Express</li>
                </ul>
                <span>データベース</span>
                <ul>
                  <li>Mongodb</li>
                </ul>
                <span>認証</span>
                <ul>
                  <li>JWT</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='wcms__block is-bg'>
            <h2 className='wcms__block-title'>機能</h2>
            <div className='wcms__points'>
              <div className='wcms__points-block'>
                <h3 className='wcms__points-title'>データのグラフ化</h3>
                <div className='wcms__points-content'>
                  <div className='wcms__points-description'>
                    <Link to='/'>W(仮想ECサイト)</Link>の様々なデータがグラフ化できます。
                    <br />
                    その例として以下のものがあります。
                    <br />
                    <br />
                    <ul>
                      <li>利用者情報</li>
                      <li>売上比較</li>
                      <li>商品レビュー</li>
                      <li>顧客満足度</li>
                    </ul>
                    <br />
                    いくつかのグラフはクリックが可能で、さらに詳細ページに飛ぶことも可能です。
                  </div>
                  <div className='wcms__points-slider'>
                    <Swiper tag='section' wrapperTag='ul' slidesPerView={1} navigation pagination spaceBetween={0}>
                      {dataVisualizationImgs.map((Img) => {
                        return (
                          <SwiperSlide tag='li' key={uuidv4()}>
                            <div className='slider-bg' style={{ backgroundImage: `url(${Img})` }}></div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className='wcms__points-block'>
                <h3 className='wcms__points-title'>コンテンツの管理</h3>
                <div className='wcms__points-content'>
                  <p className='wcms__points-description'>
                    商品やカテゴリーの追加・編集・削除ができ、別サイトの<Link to='/'>W</Link>に反映されます。
                    <br />
                    <br />
                    しかし、ゲストユーザーとしてログインする場合（マスター以外）、商品・カテゴリーの追加はできますが、編集・削除をする権限がないため、それらの事はできない仕様になっています。
                  </p>
                  <div className='wcms__points-slider'>
                    <Swiper tag='section' wrapperTag='ul' slidesPerView={1} navigation pagination spaceBetween={0}>
                      {contentManagementImgs.map((Img) => {
                        return (
                          <SwiperSlide tag='li' key={uuidv4()}>
                            <div className='slider-bg ' style={{ backgroundImage: `url(${Img})` }}></div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className='wcms__points-block'>
                <h3 className='wcms__points-title'>フォーム検証/ユーザー認証</h3>
                <div className='wcms__points-content'>
                  <div className='wcms__points-description'>
                    以下のページでフォーム検証がおこなわれています。
                    <br />
                    <br />
                    <ul>
                      <li>ログイン/サインイン</li>
                      <li>製品・カテゴリーの追加</li>
                      <li>製品・カテゴリーの編集</li>
                    </ul>
                  </div>
                  <div className='wcms__points-slider'>
                    <Swiper tag='section' wrapperTag='ul' slidesPerView={1} navigation pagination spaceBetween={0}>
                      {dataValidationImgs.map((Img) => {
                        return (
                          <SwiperSlide tag='li' key={uuidv4()}>
                            <div className='slider-bg' style={{ backgroundImage: `url(${Img})` }}></div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
                <div className='wcms__points-content'>
                  <p className='wcms__points-description'>
                    ユーザー認証はJWTを使用しています。
                    <br />
                    <br />
                    それにより、マスター以外のアカウントでは製品・カテゴリーの編集・削除の制限をしています。
                  </p>
                  <div className='wcms__points-images'>
                    <img src={BgValFour} alt='' />
                    <img src={BgValThree} alt='' />
                  </div>
                </div>
              </div>

              <div className='wcms__points-block'>
                <h3 className='wcms__points-title'>その他</h3>
                <div className='wcms__points-content'>
                  <p className='wcms__points-description is-wide'>ソート、ページネーション、検索</p>
                </div>
              </div>
            </div>
          </div>
          <div className='wcms__bottom'>
            <div className='wcms__bottom-buttons'>
              <a href='/' target='_blank' className='wcms__bottom-button'>
                サイトを見る
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </FadeIn>
  );
};

export default WCMSJP;
