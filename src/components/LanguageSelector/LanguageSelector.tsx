import './style.scss'
import React from 'react';

const LanguageSelector: React.FC = () => {
    return (
        <div className="language-selector">
            <h2>Select Language</h2>
            <div className="justabox">
                <div className="happiness">
                    <input id="pt" type="radio" name="type" value="pt" checked />
                    <label htmlFor="pt" className='pt-lang' />
                </div>
                <div className="happiness">
                    <input id="en" type="radio" name="type" value="en" checked />
                    <label htmlFor="en" className='en-lang' />
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
