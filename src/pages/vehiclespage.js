import React from 'react';
import Link from 'next/link';

function VehiclesPage() {
  return (
    <div>
      <h3>This is the vehicles page</h3>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default VehiclesPage;
