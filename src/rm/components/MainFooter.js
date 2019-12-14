import React from 'react';
import { Link } from "@reach/router";

export default function MainFooter() {

  return (
    <footer>
      <hr/>
      Here is the Footer
      <nav>
        <Link to="/">Home</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/about">About</Link>
      </nav>
    </footer>
  );
}