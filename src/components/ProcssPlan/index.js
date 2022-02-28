import React, { Component } from 'react';
import introductionImg from '../../Assets/process Scheduling.png';
import { Timeline, Icon, Grid, Card } from '@b-design/ui';
import { procssPlan } from '../../Copies';
import Navigation from '../Navigation';
import SumitCaseImage from '../../Assets/提交案例.png';
import ShortlistedImage from '../../Assets/入围案例.png';
import SpringRainImage from '../../Assets/春雨案例.png';

import TopicImage from '../../Assets/topic 征集.png';
import MeetingImage from '../../Assets/会议开始.png';
import './index.less';

export default class ProcssPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collectMenu: false,
            collectMQ: false,
        }
    }

    onMouseEnter = () => {
        this.setState({
            collectMenu: true,
        })
    }

    onMouseEnterMQ = () => {
        this.setState({
            collectMQ: true
        })
    }

    onMouseLeave = () => {
        this.setState({
            collectMenu: false
        })
    }

    onMouseLeaveMQ = () => {
        this.setState({
            collectMQ: false
        })
    }

    renderCollectMenu() {
        return (
            <div className='collect-ment-wraper'>
                <h3>
                    大会流程安排说明
                </h3>
                <h3 className='font-collect-color'>
                    案例评选:
                </h3>
                <ul>
                    <li>
                        提交案例:提交在使用RocketMQ过程中的优秀案例进行评选,点击案例评选.立即参与;
                    </li>
                    <li>
                        入围案例:评选出50个入围案例会在官网展示,同时获得相应奖励.具体奖励请看案例评选;
                    </li>
                    <li>
                        “春雨”案例:最终10个获奖案例会在3.26日RocketMQ Summit大会上现场颁奖.
                    </li>
                </ul>
            </div>
        )
    }

    renderCollectMQ() {
        return (
            <div className='collect-mq-wraper'>
                <h3>
                    大会流程安排说明
                </h3>
                <h3 className='font-mq-color'>
                    RocketMQ Summit大会流程:
                </h3>
                <ul>
                    <li>
                        Topic征集:从2月18日开始征集Topic
                    </li>
                    <li>
                        大会开始:3月26日在北京金茂万丽酒店举行
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        const { Item: TimelineItem } = Timeline
        const { Row, Col } = Grid
        const { collectMenu, collectMQ } = this.state;
        return (
            <div className='min-height-wraper'>
              <Navigation activeKey={'2'}/>
                <div className='process-wraper'>
                <img src={introductionImg} className='img img-auto' />
                    {/* <span className='process-title'>{procssPlan}</span> */}
                    <Timeline>
                        <TimelineItem title="2022-02-18" state="process" dot={<Icon type="location" size="small" style={{ color: '#fff' }} />} />
                        <TimelineItem title="案例提交后3-5个工作日群组通知" dot={<Icon type="location" size="small" style={{ color: '#fff' }} />} />
                        <TimelineItem title="2022-03-26" dot={<Icon type="location" size="small" style={{ color: '#fff' }} />} />
                        <TimelineItem title="" dot={''} style={{ display: 'none' }} />

                    </Timeline>
                    <Row wrap={true} className='case-detail-wraper'>
                        <Col span='6'>
                            <Card className="card-case-collect-wraper" contentHeight="auto">
                                <section className='section-title'>

                                </section>
                                <content className='card-item font-collect-color font-24' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                                    案例征集
                                    <Icon type='arrow-right' />
                                </content>
                            </Card>

                        </Col>
                        <Col span='6'>
                            <Card className="card-case-wraper" contentHeight="auto">
                                <section className='section-title font-22'>

                                </section>
                                <content className='card-item font-22'>
                                    <img src={SumitCaseImage} className='card-item-image' />
                                    提交案例
                                </content>
                            </Card>
                        </Col>

                        <Col span='6'>
                            <Card className="card-case-wraper" contentHeight="auto">
                                <section className='section-title'>

                                </section>
                                <content className='card-item font-22'>
                                    <img src={ShortlistedImage} className='card-item-image' />
                                    入围案例
                                </content>
                            </Card>
                        </Col>

                        <Col span='6'>
                            <Card className="card-case-wraper" contentHeight="auto">
                                <section className='section-title'>

                                </section>
                                <content className='card-item font-22'>
                                    <img src={SpringRainImage} className='card-item-image' />
                                    春雨案例
                                </content>
                            </Card>
                        </Col>
                        {
                            collectMenu && this.renderCollectMenu()
                        }


                    </Row>

                    <Row wrap={true} className='case-mq-wraper'>
                        <Col span='6'>
                            <Card className="case-mq-collect-wraper" contentHeight="auto" onMouseEnter={this.onMouseEnterMQ} onMouseLeave={this.onMouseLeaveMQ}>
                                <section className='section-title'>

                                </section>
                                <content className='card-item font-24'>
                                    RocketMQ Summit
                                    <Icon type='arrow-right' />
                                </content>
                            </Card>

                        </Col>
                        <Col span='12'>
                            <Card className="card-mq-wraper" contentHeight="auto">
                                <section className='section-title'>

                                </section>
                                <content className='card-item font-22'>
                                    <img src={TopicImage} className='card-item-image' />
                                    Topic征集
                                </content>
                            </Card>
                        </Col>

                        <Col span='6'>
                            <Card className="card-mq-wraper" contentHeight="auto">
                                <section className='section-title'>
                                </section>
                                <content className='card-item font-22'>
                                    <img src={MeetingImage} className='card-item-image' />
                                    会议开始
                                </content>
                            </Card>
                        </Col>
                        {
                            collectMQ && this.renderCollectMQ()
                        }
                    </Row>
                </div>
            </div>
        )
    }
}