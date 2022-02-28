import React from 'react';
import introductionImg from '../../Assets/induction.png';
import Navigation from '../Navigation';
import { introductionDetail, introduction } from '../../Copies';
import './index.less';
export default function IntroductionConference() {
    return (
        <div className='min-height-wraper'>
           <Navigation activeKey={'1'}/>
            <div className='introduc-wraper'>
                <img src={introductionImg} className='img img-auto' />
                {/* <span className='introduc-title'>{introduction}</span> */}
                <div className='introduc-detail-wraper'>
                    {introductionDetail}
                </div>
            </div>
        </div>
    )
}