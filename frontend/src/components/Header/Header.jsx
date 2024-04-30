import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="haeder-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Discover delicious eats nearby, tailored to your cravings - because
          every bite tells a story.
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
}

export default Header
