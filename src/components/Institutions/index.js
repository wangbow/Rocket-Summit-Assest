import React from 'react';
import { organizationalInstitutions, Organizer, Cloud_Native_Application_Platform, Undertaker, Alibaba_Kaiyuan_Office, RocketMQ } from '../../Copies'
import { Icon } from '@b-design/ui';
import introductionImg from '../../Assets/组织机构.png';
import aliyunImg from '../../Assets/阿里云原生应用平台logo.png';
import mqImg from '../../Assets/rocketMQ logo.png';
import kaiyuanImg from '../../Assets/阿里巴巴开源办公室.png';
import Navigation from '../Navigation';
import './index.less';

function Title(props) {
  return (
    <div className='insitution-wraper' >
      <header className='font-size-14 margin-bottom-5'>{props.name}</header>
      <div className='insitution-wraper-hearder'>
        <div className='line-yellow'></div>
        <div className='line-ccc'></div>
      </div>
      {
        props.type === 'aliyun' && <p>
          <img src={aliyunImg} width='244px' height='30px' className='aliyunImg' />
        </p>
      }

      {
        props.type === 'RocketMQ' && <p>
          <img src={mqImg} className='mqImg' />
          <img src={kaiyuanImg} className='kaiyuanImg' />
        </p>
      }

      {
        props.type === 'Media' && <p style={{ height: '60px' }}>

        </p>
      }

      {
        props.type === 'Community' && <p style={{ height: '60px' }}>

        </p>
      }

    </div>
  )
}

export default function Institutions() {
  return (
    <div className='min-height-wraper'>
       <Navigation activeKey={'8'}/>
      <div className='institutions-wraper'>
        <img src={introductionImg} className='img img-auto' />
        {/* <span className='institutions-title'>{'组织机构'}</span> */}
        <div className='margin-top-128'>
          <Title name={Organizer} type='aliyun' />
          <Title name={Undertaker} type='RocketMQ' />
          <Title name={'合作媒体'} type='Media' />
          <Title name={'合作社区'} type='Community' />
        </div>
      </div>
    </div>
  )
}