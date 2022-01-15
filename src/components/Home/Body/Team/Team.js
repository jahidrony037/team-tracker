import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;
    const navigate = useNavigate();

    return (
        <div className='team' >
            <div className="container">
                <img src={strTeamBadge} alt="team-logo" />
                <h3 style={{ padding: '5px' }}>{strTeam}</h3>
                <p padding={{ padding: "4px" }} style={{ color: 'gray' }}>Sports Type: Football {strSport} </p><br />
                <Button onClick={() => navigate(`/home/team/${idTeam}`)} variant="contained">Explore   <FontAwesomeIcon icon={faArrowRight} /></Button>

            </div>

        </div>
    );
};

export default Team;