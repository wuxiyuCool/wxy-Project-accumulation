import React, { Component } from 'react';
import { Icon } from 'antd';
import './headerHome.css'
class HeaderHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="header-home">
                <div className="header-city">
                    广州
                </div>
                <div className="search">
                    <div className="searchBox">
                        <Icon type="home" />
                        <input className="searchBox-input" type="text" placeholder="大家都在搜：月嫂" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderHome;
