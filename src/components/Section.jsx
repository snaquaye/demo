import React from 'react';

export const Section = (props) => {
  return (
    <section id={props.id} className={props.className}>
      {props.children}
    </section>
  );
}