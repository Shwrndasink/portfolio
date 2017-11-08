import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './logo';
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 20vh;
    background: #37424a;
`

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header>
                    <header>
                        <div className="max-width-container">
                        <div className="logo">
                        <Logo/>
                            {this.props.children}
                        </div>
                        </div>
                    </header>
                </Header>
            </div>
        );
    }
}
