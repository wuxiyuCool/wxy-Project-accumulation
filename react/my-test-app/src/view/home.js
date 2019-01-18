import React, { Component } from 'react';
import HeaderHome from '../components/header_home/headerHome'
import { Icon } from 'antd';

import './home.css'

class Home extends Component {
    render() {
        const navBarLi = [
            {
                url: '',
                text: '餐饮'
            },
            {
                url: '',
                text: '餐饮'
            },
            {
                url: '',
                text: '餐饮'
            },
            {
                url: '',
                text: '餐饮'
            },
            {
                url: '',
                text: '餐饮'
            },
            {
                url: '',
                text: '餐饮'
            },
            {
                url: '',
                text: '餐饮'
            },
            {
                url: '',
                text: '餐饮'
            }
        ]
        return (
            <div className="home">
                <HeaderHome className="head"></HeaderHome>
                <div className="home-main">
                    <div className="navbarbox">
                        <ul className="navbar innerboxNone">
                            {
                                navBarLi.map((item,index) => {
                                    return (<li key={index} className="barli">
                                        {item.text}
                                    </li>)
                                })
                            }
                        </ul>
                        <Icon type="plus" />
                    </div>
                    <div style={{background: '#efefef'}}>
                        <ul className="home-swiper">
                            {
                                [1,2,3,4,5].map(item => (
                                    <li key={item} className="swiper-item">
                                        <img width="37px" height="37px" style={{borderRadius: '50%',background: 'rgb(51, 204, 255)', padding: '7px'}} src="http://expert2.zhongwl.cn/client/image/icon/专属词.png" alt=""/>
                                        <span>新闻</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="home-content">
                            <header className="home-content-title">
                                新闻·资讯
                            </header>
                            <div className="new-notice">
                                <ul>
                                    <li>12121</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
