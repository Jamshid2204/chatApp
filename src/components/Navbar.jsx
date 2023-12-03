import React from 'react';

const Navbar = () => {
    return(
        <div className='navbar'>
            <span className='logo'>Chat app</span>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                <span>John</span>
                <button> log out </button>
            </div>
        </div>
    )
}

export default Navbar