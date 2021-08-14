const VisitButton = ({ url, lang = '' }) => {
  return (
    <div className='wcms__bottom'>
      <div className='wcms__bottom-buttons'>
        <a href={url} target='_blank' className='wcms__bottom-button' rel='noreferrer'>
          {lang === 'jp' ? 'サイトを見る' : 'Visit Site'}
        </a>
      </div>
    </div>
  );
};

export default VisitButton;
