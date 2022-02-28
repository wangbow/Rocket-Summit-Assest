import React, { Component } from 'react';
import introductionImg from '../../Assets/conferenceAgenda.png';
import { Tab, Grid } from '@b-design/ui';
import Navigation from '../Navigation';
import './index.less';
const { Row, Col } = Grid;

class ConferenceAgenda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: '0'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    getMainDetail = () => {
        const arr = [
            {
                time: '09:30-09:40',
                title: 'Opening speech(中间件+开源大图)',
                content: '小邪  阿里巴巴研究员、阿里云智能云原生应用平台总经理'
            },
            {
                time: '09:40-09:55',
                title: 'Apache Speaker(社区数据、现状＆发展)',
                content: '誓嘉  阿里巴巴研究员、阿里云智能云原生应用平台总经理'
            },
            {
                time: '09:55-10:20',
                title: 'RocketMQ 主题演讲(5x发布、技术、行业展望、断言)',
                content: '丁宇  阿里巴巴研究员、阿里云智能云原生应用平台总经理'
            },
            {
                time: '10:20-10:50',
                title: '行业头部客户实践',
                content: '平安银行'
            },
            {
                time: '10:50-11:20',
                title: '行业头部客户实践',
                content: '字节跳动'
            },
            {
                time: '11:20-11:45',
                title: '阿里系客户实践',
                content: '待定'
            },
            {
                time: '11:45-12:10',
                title: '行业头部客户实践',
                content: '平安银行'
            }
        ];

        const getList = arr.map(item => {
            return (
                <Row className='main-item'>
                    <Col span='4'>
                        <span class='main-time'>{item.time}</span>
                    </Col>
                    <Col span='20' className='padding-ver-10'>
                        <p>{item.title}</p>
                        <p>{item.content}</p>
                    </Col>
                </Row>
            )
        })

        return (
            <div>
                {getList}
            </div>
        )
    }

    getSubDetail = () => {
        const arr = [
            {
                time: '14:00-14:30',
                title: '互联网行业实践',
            },
            {
                time: '14:30-15:00',
                title: '阿里系最佳实践',
            },
            {
                time: '15:00-15:30',
                title: '金融行业实践',
            },
            {
                time: '15:30-15:45',
                title: '茶歇',
            },
            {
                time: '15:45-16:15',
                title: '零售行业实践',
            },
            {
                time: '16:15-16:45',
                title: '阿里系最佳实践',
            },
            {
                time: '16:45-17:15',
                title: '金融行业实践',
            },
            {
                time: '17:15-17:45',
                title: '其他行业',
            }
        ];

        const arr2 = [
            {
                time: '14:00-14:30',
                title: '大数据生态',
            },
            {
                time: '14:30-15:00',
                title: '数据库生态',
            },
            {
                time: '15:00-15:30',
                title: 'Serverless 生态',
            },
            {
                time: '15:30-15:45',
                title: '茶歇',
            },
            {
                time: '15:45-16:15',
                title: 'EDA 生态',
            },
            {
                time: '16:15-16:45',
                title: '微服务生态',
            },
            {
                time: '16:45-17:15',
                title: '云厂商',
            },
            {
                time: '17:15-17:45',
                title: '其他生态',
            }
        ];

        const arr3 = [
            {
                time: '14:00-14:30',
                title: '阿里云技术解析',
            },
            {
                time: '14:30-15:00',
                title: '阿里云技术解析',
            },
            {
                time: '15:00-15:30',
                title: '阿里云技术解析',
            },
            {
                time: '15:30-15:45',
                title: '茶歇',
            },
            {
                time: '15:45-16:15',
                title: '阿里云技术解析',
            },
            {
                time: '16:15-16:45',
                title: '阿里云技术解析',
            },
            {
                time: '16:45-17:15',
                title: '阿里云技术解析',
            },
            {
                time: '17:15-17:45',
                title: '阿里云技术解析',
            }
        ];


        const getPractice = arr.map(item => {
            return (
                <Row className='main-item'>
                    <Col span='6'>
                        <span class='main-time'>{item.time}</span>
                    </Col>
                    <Col span='18' className='padding-ver-15'>
                        <p class='main-time'>{item.title}</p>
                    </Col>
                </Row>
            )
        })

        const getDevelopment = arr2.map(item => {
            return (
                <Row className='main-item'>
                    <Col span='6'>
                        <span class='main-time'>{item.time}</span>
                    </Col>
                    <Col span='18' className='padding-ver-15'>
                        <p class='main-time'>{item.title}</p>
                    </Col>
                </Row>
            )
        })

        const getTechnology = arr3.map(item => {
            return (
                <Row className='main-item'>
                    <Col span='6'>
                        <span class='main-time'>{item.time}</span>
                    </Col>
                    <Col span='18' className='padding-ver-15'>
                        <p class='main-time'>{item.title}</p>
                    </Col>
                </Row>
            )
        })

        return (
            <Tab className='tabs-sub-wraper' tabPosition={'left'} shape="wrapped" activeKey={this.state.activeKey}>
                <Tab.Item title="行业探索实践" key={'0'} onClick={this.handleClick}>
                    <p className='padding-left-100'>{getPractice}</p>
                </Tab.Item>
                <Tab.Item title="开源生态发展" key={'1'} onClick={this.handleClick}>
                    <p className='padding-left-100'>{getDevelopment}</p>
                </Tab.Item>
                <Tab.Item title="核心技术解析" key={'2'} onClick={this.handleClick}>
                    <p className='padding-left-100'>{getTechnology}</p>
                </Tab.Item>
            </Tab>
        )
    }

    handleClick = (value) => {
        this.setState({
            activeKey: value
        })
    }

    render() {
        return (
            <div className='min-height-wraper'>
                <Navigation activeKey={'3'}/>
                <div className='conference-wraper'>
                    {/* <img src={introductionImg} className='img img-auto' /> */}
                    {/* <span className='conference-title'>{'大会议程'}</span> */} 
                    <Tab className='tabs-wraper'>
                        <Tab.Item title="主论坛">
                            {this.getMainDetail()}
                        </Tab.Item>
                        <Tab.Item title="分论坛">
                            {this.getSubDetail()}
                        </Tab.Item>
                        <Tab.Item title="新标签">
                            <div style={{ height: '400px' }}></div>
                        </Tab.Item>
                    </Tab>
                </div>
            </div>
        )
    }
}

export default ConferenceAgenda;