import React from "react";
import { Icon, Button } from '@b-design/ui';
import TT from '../../Assets/768.png';
import { Case_Selection, Summit_Registration } from '../../Copies';
import './index.less';

function goName(){
    window.open('https://hd.aliyun.com/form/1297?hid=31231&channelId=936&empId=')
}

export default function Title() {
    return (
        <div className="title-wraper">
            <span className="login-wraper">
                <Icon type='Group1' /> 
                www
            </span>
            <div className="slide"><img src={TT} width='100%' height={'100%'} id='banner'/> </div>
            <span className="login-button-wraper">
                <Button className="case-selection"> {Case_Selection}</Button>
                <Button className="margin-left-20 summit-registration" onClick={goName}> {Summit_Registration}</Button>
            </span>
        </div>)
}