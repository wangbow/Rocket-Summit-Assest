import React from 'react';
import Hearder from './Header';
import IntroductionConference from './IntroducConference';
import Institutions from './Institutions';
import ProcssPlan from './ProcssPlan';
import ConferenceAgenda from './ConferenceAgenda';
import LiveBroadCast from './LiveBroadCast';
import HeavyGuest from './HeavyGuest';
import HonoraryProducer from './HonoraryProducer';
import SummitConsultation from './SummitConsultation';
import ReactFullpage from '@fullpage/react-fullpage';
import '@b-design/ui/dist/index.css';
import './index.less';

const fullpageOptions = {
    anchors: ['q01', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']
};

const Fullpage = () => (
    <ReactFullpage
        {...fullpageOptions}
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <Hearder />
                    </div>
                    <div className="section">
                        <IntroductionConference />
                    </div>
                    <div className="section">
                        <ProcssPlan />
                    </div>
                    <div className="section">
                        <ConferenceAgenda />
                    </div>
                    <div className="section">
                        <LiveBroadCast />
                    </div>
                    <div className="section">
                        <HeavyGuest />
                    </div>
                    <div className="section">
                        <HonoraryProducer />
                    </div>
                    <div className="section">
                        <SummitConsultation />
                    </div>
                    <div className="section">
                        <Institutions />
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);


export default Fullpage;
