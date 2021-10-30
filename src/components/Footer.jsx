import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='l-container'>
        <div className='footer__inner'>
          <div className='footer__right'>
            <div className='footer__sns'>
              <ul>
                <li>
                  <a href='mailto:hnkc.ysoktsk@gmail.com'>Email</a>
                </li>
                <li>
                  <a href='https://github.com/ytoshiki' target='_blank' rel='noreferrer'>
                    Github
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/toshikiyoshioka' target='_blank' rel='noreferrer'>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
