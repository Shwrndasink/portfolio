import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './logo';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <header>
                    <div className="max-width-container">
                    <div className="logo">
                       <Logo />
                    </div>
                    </div>
                </header>
            </div>
        );
    }
}
