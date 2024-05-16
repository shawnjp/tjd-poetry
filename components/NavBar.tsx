import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const navigate = (path: string) => {
    router.push(path);
  };

  if (!hasMounted) {
    return null; 
  }

  return (
    <div className="navbar-container" style={{ 
      position: 'fixed', 
      right: 0, 
      top: 0,
      height: '50px',
      width: 'auto',
      display: 'flex', // Use flexbox
      flexDirection: 'row', // Stack children vertically
      alignItems: 'center', // Center children horizontally
      justifyContent: 'flex-end',
    }}>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="button-container">
          <ul className="flex flex-row md:flex-row md:space-x-4 w-full">
            <li className="flex-1">
              <button className="menu-button" onClick={() => navigate('/')}>
                Home
              </button>
            </li>
            <li className="flex-1">
              <button className="menu-button" onClick={() => navigate('/about')}>
                About
              </button>
            </li>
            <li className="flex-1">
              <button className="menu-button" onClick={() => navigate('/contact')}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <SignedIn>
        <div className="user-button-large">
          <UserButton />  
        </div>
      </SignedIn>
      <SignedOut>
        <div className="user-button-large">
          <SignInButton mode="modal"/> 
        </div> 
      </SignedOut>
    </div>    
  );
};

export default NavBar;