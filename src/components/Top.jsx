import { motion } from 'framer-motion';
import githubIcon from "../assets/github.svg";
import devComminityIcon from "../assets/dev-community.svg";
import '../styles/Top.scss';

const Top = () => {
  return (
    <div className='l-container'>
      <div className='top-wrapper'>
        <div className='top'>
        
        <div className="top__content">
        <motion.div className="top__card"
        initial={{y: 40, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 1}}
        >
              <div className="top__card-header">
                <div className="top__card-avatar">
                  <motion.div className="top__card-indicator" initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 2}}></motion.div>
                  <motion.img initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 1.2}} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                </div>
                <div className="top__profile">
                  <motion.div initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 1.3}} className="top__profile-name">
                    Toshiki Yoshioka
                  </motion.div>
                  <motion.div initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .5, delay: 1.4}} className="top__profile-role">
                    Frontend developer
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
          I'm a front-end developer currently working for GrowGroup.inc in Nagoya, Japan programing primarily in pug.js, javascript, scss, and a little bit of php. 
        </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Top;
