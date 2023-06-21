import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import Tawtar1 from "../assets/img/Tawtar.jpg" 
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Profile = () =>{
    const [loopNum , setLoopnum] = useState(0);
    const [isDeleting , setIsdeleting] = useState(false);
    const toRotate = ["Web Daveloper" ,"Fontend Davloper","Backend Davloper"];
    const [text, setText] = useState('');
      const [index, setIndex] = useState(1);
    const [delta , setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
    },[delta]);

    return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsdeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsdeleting(false);
            setLoopnum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
      setIndex(prevIndex => prevIndex + 1);
    }    
    }
return(
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                         {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
<span className="tagline"> Welcome To my portfolio</span>
<h1> {`Hi i'm Nawapad Saengsura Webpag `}  <span className="warp">{text}</span></h1>
<p>Hi, my name is Nawapad Saengsura. I am interested in working as a frontend developer. I am very motivated and ready to learn new technologies. I work well under pressure and I have the ability to working as a team</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </div>}
                        </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
 <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={Tawtar1} alt="Header Img"/>
                </div>}
            </TrackVisibility>
                    </Col>
            </Row>
        </Container>
    </section>
)
}