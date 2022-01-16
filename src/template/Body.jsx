import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Body.css'
import Carousel from '../components/carousel/Carousel';
import AtuacaoList from '../components/atuacao/AtuacaoList';
import { Container, makeStyles } from '@material-ui/core'
import Home from '../components/home/Home';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Contato from '../components/contato/Contato';
import Modal from '@material-ui/core/Modal'
import HomeMobile from '../components/home/HomeMobile';
import bg_homepage from '../img/bg_homepage.jpg'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


const Fullpage = () => {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle)

    const [showContent, setShowContent] = useState(false)
    const [showText, setShowText] = useState(false)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const modalObj = { setOpen, handleOpen, handleClose }

    return (
        <ReactFullpage
            //fullpage options
            licenseKey={'1F4AD28C-620940A8-9B3BC8A9-01687E1E'}
            responsiveHeight={826}
            responsiveWidth={1280}
            scrollingSpeed={700} /* Options here F8AF1B41*/
            anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage']}
            navigation
            sectionsColor={['#584741', '#FCFFF7', '#F5F7F2', '#FAFCF7']}
            parallax={true}
            afterLoad={(origin, destination, direction) => {
                if (destination.anchor === 'firstPage') {
                    setShowText(true)
                }
            }}
            onLeave={(origin, destination, direction) => {
                if (destination.anchor !== 'firstPage') setShowText(false)
                if (destination.index === 1 && showContent === false) setShowContent(true)
                if (showContent === true) setShowContent(false)

            }}
            render={({ state, fullpageApi }) => {


                return (
                    <ReactFullpage.Wrapper>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <h2 id="simple-modal-title">Mensagem enviada com sucesso</h2>
                            </div>

                        </Modal>
                        <div className="section section fp-auto-height-responsive" style={{backgroundImage: `url(${bg_homepage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <Container className="home_content" maxWidth='xl'>
                                {document.documentElement.clientWidth > 1350 ? <Home /> : <HomeMobile/>}
                                {document.documentElement.clientWidth > 1350 ?                                 
                                <button className="moveDown_button" onClick={() => fullpageApi.moveSectionDown()}>
                                    <ArrowDownwardIcon />
                                </button> : ''}

                            </Container>
                        </div>
                        <div className="section fp-auto-height-responsive" >

                            <Container maxWidth={false}>
                                <AtuacaoList showContent={showContent} />
                            </Container>
                        </div>
                        <div className="section fp-auto-height" >
                            <Carousel />
                        </div>
                        <div className="section fp-auto-height">
                            <Contato modal={modalObj} />
                        </div>

                    </ReactFullpage.Wrapper>
                )
            }}
        />
    )
}

export default Fullpage