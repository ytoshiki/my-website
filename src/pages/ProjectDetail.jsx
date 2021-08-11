import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

import WCMS from '../components/projects/W-CMS';
import Connect from './projects/Connect';
import WEC from './projects/WEC';
import WordBook from './projects/WordBook';

const pages = ['w-cms', 'w-ec', 'wb-d', 'the-connect'];
const pageComponents = [<WCMS />, <WEC />, <WordBook />, <Connect />];

const ProjectDetail = () => {
  const [renderPage, setRenderPage] = useState(null);
  const param = useParams();
  const projectName = param.project;

  useEffect(() => {
    const index = pages.indexOf(projectName);

    setRenderPage(pageComponents[index]);
  }, [projectName]);

  return (
    <main>
      <Header hasParent={true} />

      {renderPage}
      <Footer />
    </main>
  );
};

export default ProjectDetail;
