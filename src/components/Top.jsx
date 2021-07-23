import TopImage from '../assets/img-top.png';
import ImgJs from '../assets/js.png';

import '../styles/Top.scss';

const Top = () => {
  return (
    <div className='l-container'>
      <div className='top'>
        <div className='top__left'>
          <h1 className='top__name'>
            Hi<span>✌️</span>
            <br></br>
            I'm Toshiki Yoshioka
          </h1>
          <p className='top__title'>
            Junior front-end developer |{' '}
            <span>
              <img src={ImgJs} alt='' /> enthusiast
            </span>{' '}
            who loves building things for the web.
          </p>
        </div>
        <div className='top__right'>
          <div className='top__image'>
            <img src={TopImage} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
