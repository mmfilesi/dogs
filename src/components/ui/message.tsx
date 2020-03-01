import React from 'react';

interface IntMessage {
  type: string;
  message?: string;
}

const Message: React.FC<IntMessage> = (props)  => {
  return (
    <div className={`message message--${props.type}`} data-qa="messages" role="complementary">
      { props.message && props.message !== '' ? props.message : 'Something sinister has happened' }
    </div>
  );
};

export default Message;