import React, { Component } from 'react';
import './page.css'
class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="page">
                {this.props.children}
            </div>
        );
    }
}

export default Page;
