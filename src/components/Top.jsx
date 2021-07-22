import TopImage from '../assets/img-top.png';

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
          <p className='top__title'>Junior front-end developer who loves building things for the web.</p>
          <span className='top__sub-title'>Projects</span>
          <span className='top__sub-title'>About</span>
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
