import React, { Component } from 'react';
import { Nav, Button } from '@b-design/ui';
import { navText, Case_Selection, Summit_Registration } from '../../Copies';
import './index.less';

const { Item, SubNav } = Nav;

export default class Navigation extends Component {
    componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll);
    }

    // handleScroll = (event) => {
    //     const ele = $("#nav");
    //     console.log('ele', ele);
    //     const banner = $("#banner").height();
    //     console.log('banner', banner)
    //     if ($(window).scrollTop() > banner) {
    //         ele.addClass("scrollNav")
    //     } else {
    //         ele.removeClass("scrollNav")
    //     }

    // }

    goName = () => {
        window.open('https://hd.aliyun.com/form/1297?hid=31231&channelId=936&empId=')
    }


    render() {
        const { activeKey = '0' } = this.props;

        // const Items = navText.map((item) => {
        //     return <Item key={item.key} style={{ width: '120px' }} >
        //         <a data-menuanchor={item.url} href={item.url}> {item.name} </a>
        //     </Item>
        // })
        const Items = navText.map((item, index) => {
            const { activeKey = '0' } = this.props;

            if (item.idx === 'q0') {
                return (
                    <li style={{ width: '120px', display: 'none' }} data-menuanchor={item.idx}>
                        <a href={item.url} className='active'> {item.name} </a>
                    </li>
                )
            } else if (activeKey && Number(activeKey) === index) {
                return (
                    <li style={{ width: '120px' }} data-menuanchor={item.idx}>
                        <a href={item.url} className='active'> {item.name} </a>
                    </li>
                )
            } else {
                return (
                    <li style={{ width: '120px' }} data-menuanchor={item.idx}>
                        <a href={item.url}> {item.name} </a>
                    </li>
                )
            }

        })
        return (
            <div>
                <div id='nav'>
                    <ul
                        className="custom-nav"
                        type="line"
                        direction="hoz"
                        triggerType={'hover'}
                        defaultSelectedKeys={navText[activeKey].key}
                    >
                        {Items}
                    </ul>
                </div>
                <div className='registration-wraper'>
                    <Button className="case-selection" size='small'> {Case_Selection}</Button>
                    <Button className="margin-left-20 summit-registration" onClick={this.goName} size='small'> {Summit_Registration}</Button>
                </div>
            </div>
        )
    }
}

