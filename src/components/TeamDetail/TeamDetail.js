import { faBullseye, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import './TeamDetail.css';

const TeamDetail = () => {

    const { teamID } = useParams();
    const [teamDetail, setTeamDetail] = useState({});
    useEffect(() => {
        const url = `https://my-json-server.typicode.com/jahidrony037/teamdetails/teams/${teamID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data))
    }, [teamID])

    const { intFormedYear, strCountry, strSport, strGender, strTeam, strTeamBadge, strTwitter, strFacebook, strYoutube } = teamDetail;


    // console.log(teamDetail.length > 0 && teamDetail[0].strGender === "Male" ? true : false);

    return (
        <div className='team-details'>
            <div className="header-container" fluid="md">
                <img fluid="md" style={{ opacity: "1" }} src={strTeamBadge} alt="team-logo" />
            </div>
            <div className="details-body-container">
                <Container className="team-info" fluid="md" >
                    <Row className='justify-content-md-center'>
                        <Col className="text" sm={8}>
                            <h3>{strTeam}</h3>
                            <p>  <FontAwesomeIcon icon={faBullseye} /> <strong> Founded: {intFormedYear}</strong></p>
                            <p>  <FontAwesomeIcon icon={faFlag} /> <strong> Country: {strCountry}</strong></p>
                            <p> <FontAwesomeIcon icon={faFutbol} /><strong> Sport Type: {strSport}</strong></p>
                            <p>  <FontAwesomeIcon icon={faMars} /><strong> Gender: {strGender} </strong></p>
                        </Col>
                        <Col className='justify-content-center' sm={4}>
                            <div className="img">
                                {
                                    teamDetail.strGender && teamDetail.strGender === "Male" ? <img className="fitImg" style={{ width: "100%", margin: "0 auto" }} src="https://i.ibb.co/XV6TQkG/male.png" alt="male" /> : <img className='fitImg' style={{ width: "100%" }} src="https://i.ibb.co/3kbXFQv/female.png" alt="female" />
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <p className='textSizing'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  </p>
                    <br />
                    <p className='textSizing'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </div>
            <footer style={{ padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                    <a className='socialIcon' href={strFacebook} target="_blank" rel="noreferrer"> <FaFacebook className='icon' size="60px" color="white" /></a>
                    < a className='socialIcon' href={strYoutube} target="_blank" rel="noreferrer"><FaYoutube className='icon' size="60px" color="red" /></a>
                    < a className='socialIcon' href={strTwitter} target="_blank" rel="noreferrer"><AiFillTwitterCircle className='icon' size="60px" color="cyan" /></a>
                </div>
            </footer >
        </div >
    );
};

export default TeamDetail;