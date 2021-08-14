const PageTop = ({ title, description, sources, image, lang = '' }) => {
  return (
    <div className='wcms__top'>
      <div className='wcms__top-texts'>
        <h1 className='wcms__top-title'>{title}</h1>
        {description}
        <div className='wcms__top-options'>
          <div className='wcms__top-option'>
            <span className='wcms__top-option-title'>{lang === 'jp' ? 'デモ:' : 'Demo:'}</span>

            <a href={sources.site} target='/' rel='noreferrer'>
              {lang === 'jp' ? 'サイトを見る' : 'Visit Site'}
            </a>
          </div>
          <div className='wcms__top-option'>
            <span className='wcms__top-option-title'>{lang === 'jp' ? 'ソースコード:' : ' Source Code:'}</span>

            <span className='wcms__top-option-sub'>
              {sources.front && lang === 'jp' && (
                <a href={sources.front} target='/' rel='noreferrer'>
                  フロントエンド
                </a>
              )}
              {sources.front && lang !== 'jp' && (
                <a href={sources.front} target='/' rel='noreferrer'>
                  Front-end
                </a>
              )}
              {sources.back && lang === 'jp' && (
                <a href={sources.back} target='/' rel='noreferrer'>
                  バックエンド
                </a>
              )}
              {sources.back && lang !== 'jp' && (
                <a href={sources.back} target='/' rel='noreferrer'>
                  Back-end
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
