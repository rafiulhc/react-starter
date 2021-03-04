import React from 'react';


const SelectedPlayer = (props) => {
    const addedPlayer= props.addedPlayer;
    const totalSalary = addedPlayer.reduce((total ,player)=> total + player.salary,0)
    const imageStyle = {
        width:'150px',
        height: '150px',
        borderRadius : '25px'
    }
    
        return (
        <div> 
        <h1>Total Player Selected :   {addedPlayer.length}</h1>
        <h2>Total Budget :{totalSalary}</h2>
        <ul>
            {
                addedPlayer.map(newPlayer=> <div>    <img style ={imageStyle} src={newPlayer.img}alt=""/>
                <h3>Player ID.{newPlayer.id} {newPlayer.name}</h3>
                <p>{newPlayer.salary}</p>
                </div>
             )
            }
        </ul>
        </div>
    );
};

export default SelectedPlayer;