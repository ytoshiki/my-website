const VisitButton = ({ url }) => {
  return (
    <div className='wcms__bottom'>
      <div className='wcms__bottom-buttons'>
        <a href={url} target='_blank' className='wcms__bottom-button' rel='noreferrer'>
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default VisitButton;
