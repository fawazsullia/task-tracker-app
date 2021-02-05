import React from 'react'



const Header = () => {
    return (
        <div className="header" style={{ paddingTop : 'auto', paddingBottom : 'auto',}}>
            <h1 style={headerStyle}>Task Tracker</h1>
        </div>
    )
}

const headerStyle = {
    display : 'block',
 margin : 'auto',
textAlign : 'center',
color : '#0a043c',

}

export default Header;
