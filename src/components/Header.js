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
      <Link href="/createvehicle">
        <a>Add New Vehicle</a>
      </Link>
    </div>
  );
}

export default Header;
