import React from 'react';

interface IntSpinnerProps {
  size: string;
}

export const Spinner: React.FC<IntSpinnerProps> = (props)  => {
  return (
    <div>
      Loading...
    </div>
  );
};