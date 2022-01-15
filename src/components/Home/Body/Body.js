import React, { useEffect, useState } from 'react';
import './Body.css';
import Team from './Team/Team';

const Body = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className='body-container'>
            {
                teams.map(team => <Team team={team} />)
            }
        </div>
    );
};

export default Body;