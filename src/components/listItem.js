const QnaListItem = ({ title, date }) => {
  return (
    <div className="qna">
      <div style={{ display: 'inline-block', fontSize: '14px' }}>{title}</div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '10px',
          fontSize: '13px',
          fontWeight: 'lighter',
        }}
      >
        {date}
      </div>
    </div>
  );
};

const EmailListItem = ({ sender, title }) => {
  return (
    <div className="qna">
      <div style={{ display: 'inline-block', fontSize: '14px' }}>{sender}</div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '10px',
          fontSize: '14px',
          fontWeight: 'lighter',
        }}
      >
        {title}
      </div>
    </div>
  );
};

export { QnaListItem, EmailListItem };
