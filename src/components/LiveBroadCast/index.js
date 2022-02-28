import React, { Component } from 'react';
import introductionImg from '../../Assets/现场直播.png';
import Navigation from '../Navigation';
import './index.less';
export default class LiveBroadCast extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className='min-height-wraper'>
                <Navigation activeKey={'4'}/>
                <div className='live-wraper'>
                    <img src={introductionImg} className='img' />
                    {/* <span className='live-title'>{'现场直播'}</span> */}
                    <div className='video-wraper'>
                        <iframe id='content' width='728' height='380' src='https://yq.aliyun.com/yqnew/live/gc7d8515771d22bae12ea1fab7eef4b2?v=1.0.3&id=2441&s=1'></iframe>
                    </div>

                </div>
            </div>
        )
    }
}