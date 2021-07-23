import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='l-container'>
        <div className='footer__inner'>
          <div className='footer__left'>
            <span>
              Designed and developled by{' '}
              <a href='/' target='_blank'>
                Toshiki Yoshioka
              </a>
              .
            </span>
            <span>
              Built with{' '}
              <a href='/' target='_blank'>
                React
              </a>
              . Hosted on <a href='/'>netlify</a>. See{' '}
              <a href='/' target='_blank'>
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
