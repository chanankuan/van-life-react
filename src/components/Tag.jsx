import React from 'react';

const Tag = ({ children, bgColor }) => {
  const styles = {
    color: '#ffead0',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '200%',
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: bgColor,
    borderRadius: 5,
  };

  return <div style={styles}>{children}</div>;
};

export default Tag;
