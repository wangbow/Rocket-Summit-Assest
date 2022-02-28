import React from 'react';
import introductionImg from '../../Assets/重磅嘉宾.png';
import shutongImg from '../../Assets/shutong.png';
import xiaoxieImg from '../../Assets/xiaoxie.png';
import Navigation from '../Navigation'
import { Grid, Slider } from '@b-design/ui';
import './index.less';

const { Row, Col } = Grid;
function guestList() {
    const settings = {
        // className: 'custom-slide',
        // arrowPosition: 'outer',
        // dots: false,
        // infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true
    }

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
    {
        name: '书童',
        title: '阿里巴巴研究员',
        url: xiaoxieImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '小邪',
        title: '阿里巴巴研究员',
        url: shutongImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '小邪',
        title: '阿里巴巴研究员',
        url: shutongImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '小邪',
        title: '阿里巴巴研究员',
        url: shutongImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '小邪',
        title: '阿里巴巴研究员',
        url: shutongImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '小邪',
        title: '阿里巴巴研究员',
        url: shutongImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
        name: '小邪',
        title: '阿里巴巴研究员',
        url: shutongImg,
        subtitle: '阿里云智能云原生应用平台总经理'
    },
    {
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
            <div span='4' className='margin-right-20'>
                <img src={item.url} className='guest-list-img' />
                <section className='guset-section'>
                    <div className='guest-section-name'>{item.name}</div>
                    <div className='guest-section-title'>{item.title}</div>
                    <div className='guest-section-subtitle'>{item.subtitle}</div>
                </section>
            </div>)
    })

    // return <Row wrap={true}>
    //         {list}
    //     </Row>

    return <Slider adaptiveHeight={true} arrowPosition={'outer'} {...settings} slidesToShow={5} dots={false} slidesToScroll={6} autoplay autoplaySpeed={2000}>{list}</Slider>
}
export default function HeavyGuest() {
    return (
        <div className='min-height-wraper'>
            <Navigation activeKey={'5'} />
            <div className='guest-wraper'>
                <img src={introductionImg} className='img img-auto' />
                {/* <span className='guest-title'>{'重磅嘉宾'}</span> */}
                <div className=''>
                    {guestList()}
                </div>
            </div>
        </div>
    )
}