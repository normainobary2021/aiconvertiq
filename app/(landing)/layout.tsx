import React from 'react'
import LandingPageNavbar from './components/LandingPageNavbar';

function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
    <section className='flex min-h-screen flex-col overflow-x-clip'>
        <LandingPageNavbar />
        <div className='flex-grow'>
            {children}
        </div>
    </section>
  )
}

export default LandingLayout;