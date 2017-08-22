import React from 'react';

const Header = (props) => {

  const { value, headerType, className } = props;

  switch (headerType){
    case 'H1':
      return (<h1 className={className}>{value}</h1>);
    case 'H2':
      return (<h2 className={className}>{value}</h2>);
    case 'H3':
      return (<h3 className={className}>{value}</h3>);
    case 'H4':
      return (<h4 className={className}>{value}</h4>);
    case 'H5':
      return (<h5 className={className}>{value}</h5>);
    default:
      return (<h6 className={className}>{value}</h6>);
  };
};

export { Header };
