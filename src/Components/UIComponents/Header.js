import React from 'react';

const Header = (props) => {

  const { value, headerType } = props;
  
  switch (headerType){
    case 'H1':
      return (<h1>{value}</h1>);
    case 'H2':
      return (<h2>{value}</h2>);
    case 'H3':
      return (<h3>{value}</h3>);
    case 'H4':
      return (<h4>{value}</h4>);
    case 'H5':
      return (<h5>{value}</h5>);
    default:
      return (<h6>{value}</h6>);
  };
};

export { Header };
