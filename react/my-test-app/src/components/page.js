import React, { Component } from 'react';
import { Drawer, Button, List, Avatar } from 'antd';
class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            class: props.class,
            visible: false
        }
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const data = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            },
        ];
        return (
            <div className={this.state.class}>
                <Button type="primary" onClick={this.showDrawer}>
                    Open
        </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    key={item.title}
                                />
                            </List.Item>
                        )}
                    />
                </Drawer>
                <h3>{this.props.title}</h3>
                {this.props.children}
                <div className="left">
                    {this.props.left}
                </div>
            </div>
        );
    }
}

export default Page;
