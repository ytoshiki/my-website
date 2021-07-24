import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

import WCMS from '../components/projects/W-CMS';

const redirect = () => <Redirect to='/' />;

const pages = ['w-cms', 'w-ec', 'wb-d', 'the-connect'];
const pageComponents = [<WCMS />, 'w-ec', 'wb-d', 'the-connect'];

const ProjectDetail = () => {
  const [renderPage, setRenderPage] = useState(null);
  const param = useParams();
  const projectName = param.project;

  useEffect(() => {
    if (!pages.some((page) => page === projectName)) {
      return setRenderPage(redirect());
    }

    const index = pages.indexOf(projectName);

    setRenderPage(pageComponents[index]);
  }, [projectName]);

  return (
    <main>
      <Header hasParent={true} />

      {renderPage && renderPage}
      <Footer />
    </main>
  );
};

export default ProjectDetail;
