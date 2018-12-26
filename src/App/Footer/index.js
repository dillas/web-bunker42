import React from 'react';

import Link from '../../Link';

import './style.css';

const Footer = () => (
  <div className="Footer">
    <div>
      <small>
        <span className="Footer-text">Build by</span>{' '}
        <Link
          className="Footer-link"
          href="https://github.com/dillas"
        >
          Evgenii Yakobenko
        </Link>{' '}
        <span className="Footer-text">with &hearts;</span>
      </small>
    </div>
    <div>
      <small>
        <span className="Footer-text">
          Interested in GraphQL, Apollo and React?
        </span>{' '}
        <Link
          className="Footer-link"
          href="#"
        >
          Get updates
        </Link>{' '}
        <span className="Footer-text">
          about upcoming articles, book &
        </span>{' '}
        <Link className="Footer-link" href="#">
          courses
        </Link>
        <span className="Footer-text">.</span>
      </small>
    </div>
  </div>
);

export default Footer;