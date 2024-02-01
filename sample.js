import React from 'react';
import myHtml from 'sample.html';

const MyComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: myHtml }} />
  );
}

export default MyComponent;
