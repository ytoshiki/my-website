import { v4 as uuidv4 } from 'uuid';

const Technology = ({ front, back, lang = '' }) => {
  const renderFront = () =>
    front && (
      <div className='wcms__block-content'>
        <h3>{lang === 'jp' ? 'フロントエンド' : 'Front-end'}</h3>
        {front.map((data) => {
          return (
            <div key={uuidv4()}>
              <span>{data.head}</span>
              <ul>
                {data.data.map((item) => {
                  return <li key={uuidv4()}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}{' '}
      </div>
    );

  const renderBack = () =>
    back && (
      <div className='wcms__block-content'>
        <h3>{lang === 'jp' ? 'バックエンド' : 'Back-end'}</h3>{' '}
        {back.map((data) => {
          return (
            <div key={uuidv4()}>
              <span>{data.head}</span>
              <ul>
                {data.data.map((item) => {
                  return <li key={uuidv4()}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}{' '}
      </div>
    );

  return (
    <div className='wcms__block'>
      <h2 className='wcms__block-title'>{lang === 'jp' ? 'テクノロジー' : 'Technologies'}</h2>
      <div className='wcms__block-wrapper'>
        {renderFront()}

        {renderBack()}
      </div>
    </div>
  );
};

export default Technology;
