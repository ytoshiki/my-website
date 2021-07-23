import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='l-container'>
        <div className='footer__inner'>
          <div className='footer__left'>
            <span>
              Designed and developled by{' '}
              <a href='https://github.com/ytoshiki' target='_blank' rel='noreferrer'>
                Toshiki Yoshioka
              </a>
              .
            </span>
            <span>
              Built with{' '}
              <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                React
              </a>
              . Hosted on{' '}
              <a href='https://www.netlify.com/' target='_blank' rel='noreferrer'>
                netlify
              </a>
              . See{' '}
              <a href='https://github.com/ytoshiki/my-website' target='_blank' rel='noreferrer'>
                source code
              </a>
              .
            </span>
          </div>
          <div className='footer__right'>
            <span>
              <a href='mailto:hnkc.ysoktsk@gmail.com'>Send me a message</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
