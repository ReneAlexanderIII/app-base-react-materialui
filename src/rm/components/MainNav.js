import React from 'react';
import { Link } from "@reach/router";

export default function MainNav() {

  return (
      <nav>
        [ <Link to="/">Home</Link> ] [&nbsp;
        <Link to="/demo">Demo</Link> ] [&nbsp;
        <Link to="/about">About</Link> ]
      </nav>
  );
}