import React from 'react';
import TopNavbar from '../../molecules/topnavbar/TopNavBar.jsx';
import HeroBannerOverlay from '../../molecules/herobanneroverlay/HeroBannerOverlay.jsx';

function NavHero() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('src/stories/assets/Lynx/LeapingLynx.jpg')",
        maxHeight: '100vh', // Set max-height of the parent div
        overflow: 'hidden', // Hide overflow if content exceeds parent's height
      }}
    >
      <TopNavbar />
      <HeroBannerOverlay className="h-full" />
    </div>
  );
}

export default NavHero;
