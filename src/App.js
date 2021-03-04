import react, { useEffect, useState } from 'react';
import reactDOM from 'react-dom'
import './App.css';
import PlayerData from './data.json';
import Player from './Player'
import SelectedPlayer from './SelectedPlayer';
import './Player.css'


                  function App(){

               const [players,setPlayers] = useState([]);
                   useEffect(() => {
                   let url = "./data.json";
                     fetch(url)
                       .then(res => res.json())
                       .then(data => setPlayers(data))
                     },[]);
                      const [addedPlayer, setAddedPlayer] = useState([])
                      const handleClick = (player)=>{
                         const newPlayerList = [...addedPlayer,player];
                      setAddedPlayer(newPlayerList)
                     }
            return (
               <div className = "container" >
                       <div   className = "player-container">
                         <h2>PLAYERS FOR TODAY MATCH</h2>
                       <ul>
                        {
                            PlayerData.map(player=> <Player player={player} handleClick={handleClick} key={player.id}></Player> )
                         }
                     </ul>
                </div>
                <div className = "selected-container">
                    <SelectedPlayer  addedPlayer={addedPlayer}></SelectedPlayer>
                     </div>
            </div>
          );
        }

export default App;
