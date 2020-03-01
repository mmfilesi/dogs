import React from 'react';
import Message from '../../components/ui/message';

const ViewNotFound: React.FC = () => {
  return (
    <section className="page">
      <Message type="warning" message="Page not found" />
    </section>
  );
}

export default ViewNotFound;
