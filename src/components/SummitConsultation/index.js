import React from 'react';
import introductionImg from '../../Assets/峰会资讯.png';
import Navigation from '../Navigation';
import { Grid, Card } from '@b-design/ui';
import './index.less';

const { Row, Col } = Grid;
function getConsultationList() {
    const arr = [{
        title: '咨询标题1',
        content: '我每次出门旅行,总会随身携带一瓶故乡的水土,有时候在客域的旅店,把那瓶水土拿出来端详,就觉得那灰黑色的水土非常美丽,充满了力量。故乡的水土生养我们,使我们长成顶天立地的男儿,即使漂流万里,在寂寞的异国之夜,也能充满柔情与壮怀。那一瓶水土中不仅有着故乡之爱,还有妈妈的祝福,这祝福绵长悠远,阅读全文'
    },
    {
        title: '咨询标题2',
        content: '我每次出门旅行,总会随身携带一瓶故乡的水土,有时候在客域的旅店,把那瓶水土拿出来端详,就觉得那灰黑色的水土非常美丽,充满了力量。故乡的水土生养我们,使我们长成顶天立地的男儿,即使漂流万里,在寂寞的异国之夜,也能充满柔情与壮怀。那一瓶水土中不仅有着故乡之爱,还有妈妈的祝福,这祝福绵长悠远,阅读全文'
    },
    {
        title: '咨询标题3',
        content: '我每次出门旅行,总会随身携带一瓶故乡的水土,有时候在客域的旅店,把那瓶水土拿出来端详,就觉得那灰黑色的水土非常美丽,充满了力量。故乡的水土生养我们,使我们长成顶天立地的男儿,即使漂流万里,在寂寞的异国之夜,也能充满柔情与壮怀。那一瓶水土中不仅有着故乡之爱,还有妈妈的祝福,这祝福绵长悠远,阅读全文'
    },
    {
        title: '咨询标题4',
        content: '我每次出门旅行,总会随身携带一瓶故乡的水土,有时候在客域的旅店,把那瓶水土拿出来端详,就觉得那灰黑色的水土非常美丽,充满了力量。故乡的水土生养我们,使我们长成顶天立地的男儿,即使漂流万里,在寂寞的异国之夜,也能充满柔情与壮怀。那一瓶水土中不仅有着故乡之爱,还有妈妈的祝福,这祝福绵长悠远,阅读全文'
    }];
    const getList = arr.map(item => {
        return (
            <Col span={'12'}>
                <Card title={item.title}>
                    {item.content}
                    wqdwq
                </Card>
            </Col>
        )
    });

    return (
        <Row wrap='true'>
            {getList}
        </Row>
    )
}
export default function SummitConsultation() {
    return (
        <div className='min-height-wraper'>
          <Navigation activeKey={'7'}/>
            <div className='summit-consultation-wraper' >
                <img src={introductionImg} className='img img-auto' />
                {/* <span className='summit-consultation-title'>{'峰会咨询'}</span> */}
                <div className='summit-consultation-detail-wraper'>
                    {getConsultationList()}
                </div>
            </div>
        </div>
    )
}