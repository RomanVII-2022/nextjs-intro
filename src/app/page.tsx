import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <>
      <div>Welcome Home. Hello World.</div>
      <Link href={'/blogs'}>Blogs</Link>
    </>
  )
}

export default HomePage