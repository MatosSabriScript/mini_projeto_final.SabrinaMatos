import React from 'react';
import './Section.css';

const Section = ({ title, content, id }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
