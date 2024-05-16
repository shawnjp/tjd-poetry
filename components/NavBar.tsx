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
      left: 0, 
      top: 0,
      height: '100vh',
      width: '50 px',
      display: 'flex', // Use flexbox
      flexDirection: 'column', // Stack children vertically
      alignItems: 'center', // Center children horizontally
      justifyContent: 'right',
    }}>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="button-container">
          <ul className="flex flex-col md:flex-col md:space-x-4 w-full">
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
        <UserButton />  
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal"/>  
      </SignedOut>
    </div>    
  );
};

export default NavBar;