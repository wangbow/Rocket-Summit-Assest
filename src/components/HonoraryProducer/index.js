import React from 'react';
import introductionImg from '../../Assets/荣誉出品人.png';
import shutongImg from '../../Assets/shutong.png';
import xiaoxieImg from '../../Assets/xiaoxie.png';
import Navigation from '../Navigation';
import { Grid } from '@b-design/ui';
import './index.less';
const { Row, Col } = Grid;
function producerList() {
    const arr = [{
        name: '小邪',
        title: '阿里巴巴研究员',
        url: shutongImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '书童',
        title: '阿里巴巴研究员',
        url: xiaoxieImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '书童',
        title: '阿里巴巴研究员',
        url: xiaoxieImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '书童',
        title: '阿里巴巴研究员',
        url: xiaoxieImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '书童',
        title: '阿里巴巴研究员',
        url: xiaoxieImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    ];

    const list = arr.map(item => {
        return (
            <Col span='4' className='margin-right-20'>
                <img src={item.url} className='honorary-producer-list-img' />
                <section className='honorary-producer-section'>
                    <div className='honorary-producer-section-name'>{item.name}</div>
                    <div className='honorary-producer-section-title'>{item.title}</div>
                    <div className='honorary-producer-section-subtitle'>{item.subtitle}</div>
                </section>
            </Col>)
    })

    return <Row wrap={true}>{list}</Row>
}
export default function HonoraryProducer() {
    return (
        <div className='min-height-wraper'>
            <Navigation activeKey={'6'}/>
            <div className='honorary-producer-wraper'>
                <img src={introductionImg} className='img img-auto' />
                {/* <span className='honorary-producer-title'>{'荣誉出品人'}</span> */}
                <div className=''>
                    {producerList()}
                </div>
            </div>
        </div>
    )
}