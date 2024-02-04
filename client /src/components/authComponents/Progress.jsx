// eslint-disable-next-line react/prop-types
export const Progress = ({ count }) => {
    return (
      <div className="progress">
        <div className="steps">
          <div className={count >= 1 ? 'active' : ''}>1</div>
          <div className={count >= 2? 'active' : ''}>2</div>
          <div className={count >= 3 ? 'active' : ''}>3</div>
          <div className={count >= 4 ? 'active' : ''}>4</div>
        </div>
      </div>
    );
  };
  