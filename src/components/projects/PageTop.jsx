const PageTop = ({ title, description, sources, image }) => {
  return (
    <div className='wcms__top'>
      <div className='wcms__top-texts'>
        <h1 className='wcms__top-title'>{title}</h1>
        {description}
        <div className='wcms__top-options'>
          <div className='wcms__top-option'>
            <span className='wcms__top-option-title'>demo:</span>

            <a href={sources.site} target='/' rel='noreferrer'>
              Visit site
            </a>
          </div>
          <div className='wcms__top-option'>
            <span className='wcms__top-option-title'>source code:</span>

            <span className='wcms__top-option-sub'>
              {sources.front && (
                <a href={sources.front} target='/' rel='noreferrer'>
                  front-end
                </a>
              )}
              {sources.back && (
                <a href={sources.back} target='/' rel='noreferrer'>
                  back-end
                </a>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className='wcms__top-img'>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default PageTop;
