import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Body.css'
import arrowDown from '../img/logo192.png'
import { CSSTransition } from 'react-transition-group';
import Carousel from '../components/carousel/Carousel';




const Fullpage = () => {
    
    const [showContent, setShowContent] = useState(false)
    

    return (
        <ReactFullpage
            //fullpage options
            licenseKey={'1F4AD28C-620940A8-9B3BC8A9-01687E1E'}
            responsiveHeight={0}
            scrollingSpeed={700} /* Options here */
            anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage']}
            navigation
            sectionsColor={['#3D3D3D', '#959595', '#3D3D3D', '#959595', '#3D3D3D', '#959595']}
            parallax={true}
            onLeave={(origin, destination, direction) => {
                console.log(destination.anchor);
                if (destination.index == 1 && showContent == false) {
                    setShowContent(true)
                }
                if (showContent == true) {
                    setShowContent(false)
                }

            }}
            render={({ state, fullpageApi }) => {
                console.log(state.lastevent);
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className="home_content" >

                                <p >Section 1 (welcome to fullpage.js)</p>
                                <p >Section 1 (welcome to fullpage.js)</p>
                                <p >Section 1 (welcome to fullpage.js)</p>

                                <button className="moveDown_button" onClick={() => fullpageApi.moveSectionDown()}>
                                    <img src={arrowDown} />
                                </button>
                            </div>
                        </div>
                        <div className="section">
                            
                        <div className="atuacao_content">
                                <CSSTransition
                                    in={showContent}
                                    timeout={1000}
                                    classNames="content"
                                    appear
                                >
                                    <div>
                                        <p >Section 2 (welcome to fullpage.js)</p>
                                        <p >Section 2 (welcome to fullpage.js)</p>
                                        <p >Section 2 (welcome to fullpage.js)</p>
                                        <p >Section 2 (welcome to fullpage.js)</p>
                                    </div>
                                </CSSTransition>
                                <CSSTransition
                                    in={showContent}
                                    timeout={1500}
                                    classNames="content"
                                    appear
                                >
                                    <div>
                                        <p >Section 2 (welcome to fullpage.js)</p>
                                        <p >Section 2 (welcome to fullpage.js)</p>
                                        <p >Section 2 (welcome to fullpage.js)</p>
                                        <p >Section 2 (welcome to fullpage.js)</p>
                                    </div>
                                </CSSTransition>
                            </div>
                        </div>
                        <div className="section">
                            <Carousel />
                        </div>
                        <div className="section">
                            <p>Section 4</p>
                        </div>
                        <div className="section">
                            <p>Section 5</p>
                        </div>
                        <div className="section">
                            
                        </div>
                    </ReactFullpage.Wrapper>
                )
            }}
        />
    )
}

export default Fullpage