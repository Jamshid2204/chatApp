import React from 'react';

const Search = () => {
    return(
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='find a user'/>
            </div>
            <div className="userChat">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                <div className="userChatInfo">
                    <span>jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search