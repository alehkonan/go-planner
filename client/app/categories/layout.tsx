import { PropsWithChildren } from 'react';

const CategoriesLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <p>Layout</p>
      {children}
    </div>
  );
};

export default CategoriesLayout;
