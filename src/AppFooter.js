import React from 'react';
import './appFooter.css';

function AppFooter({}) {
    return (
        <div className="footer">
            <p>&copy; {(new Date()).getFullYear()}</p>
            <p> Msaood Ghanem כל הזכויות שמורות</p>
        </div>
    );
}

export default AppFooter;