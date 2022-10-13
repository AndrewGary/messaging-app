import React from 'react'
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className='bg-neutral p-3 sm:p-0'>
        <Head>
          <title>Messaging App</title>
        </Head>
        { children }
    </div>
  )
}

export default Layout