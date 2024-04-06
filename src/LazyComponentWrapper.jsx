// LazyComponentWrapper.js
import React, { Suspense, lazy } from 'react';

const LazyComponentWrapper = (componentName) => {
  const Component = lazy(() => import(`./../components/main/${componentName}`));

  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyComponentWrapper;
