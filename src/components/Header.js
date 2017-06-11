import React from 'react';
import Link from 'next/link';

function Header() {
  // add style inline-block
  return (
    <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    &nbsp; &nbsp;
    <Link href="/vehiclespage">
      <a>Vehicles</a>
    </Link>
    &nbsp; &nbsp;
    <Link href="/">
      <a>Comments</a>
    </Link>
    &nbsp; &nbsp;
    <Link href="/">
    <a>Contacts</a>
    </Link>
    &nbsp; &nbsp;
    <Link href="/">
      <a>Products</a>
    </Link>
    </div>
  );
}

export default Header;
