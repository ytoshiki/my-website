
import githubIcon from "../../assets/github.svg";
import devComminityIcon from "../../assets/dev-community.svg";
import { motion } from 'framer-motion';
import profileImage from "../../assets/profile.jpeg";

import '../../styles/Top.scss';

const TopJP = () => {
  return (
    <div className='l-container'>
      <div className='top-wrapper'>
        <div className='top'>
        
        
        <div className="top__content">
        <motion.div className="top__card"
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: .5, delay: .5}}
        >
              <div className="top__card-header">
                <div className="top__card-avatar">
                  <motion.div className="top__card-indicator" initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 2}}></motion.div>
                  <motion.img initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 1.2}} src={profileImage} alt="" />
                </div>
                <div className="top__profile">
                  <motion.div initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 1.3}} className="top__profile-name">
                    吉岡寿輝
                  </motion.div>
                  <motion.div initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 1.4}} className="top__profile-role">
                    フロントエンドエンジニア
                  </motion.div>
                </div>
                <motion.div initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 1.5}} className="top__card-footer">
                  <a className="top__card-btn">
                    <img src={githubIcon} alt="" />
                  </a>
                  <a className="top__card-btn">
                    <img src={devComminityIcon} alt="" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
        </div>
        <motion.div className="top__about" initial={{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 1, delay: 2}}>
          名古屋市のGrowGroup株式会社でフロントエンドエンジニアをしています。<br />
          主にPug.js、Javascript、Scss、少しだけPHPを書いています。
        </motion.div>

        </div>
      </div>
    </div>
  );
};

export default TopJP;
