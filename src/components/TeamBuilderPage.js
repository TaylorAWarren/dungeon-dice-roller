import React, {useState} from 'react'

export default function TeamBuilderPage() {
    const [players,setPlayers] = useState([]);
    const [newPlayer,setNewPlayer] = useState();
    const [teams, setTeams] = useState();
    const [currentTeam, setCurrentTeam] = useState(0)

    const handleChangePlayer = (e) => {
        setNewPlayer(e.target.value)
    }

    const handleAddPlayer = (e) => {
        e.preventDefault();
        setPlayers(players.concat([newPlayer]));
        setNewPlayer("")
    }

    const add_player_blob = () => {
        return(
            <div>
                <p>Player Name:</p>
                <form onSubmit={(e) => {handleAddPlayer(e)}}>
                    <input type={String} value={newPlayer} onChange={(e) => {handleChangePlayer(e)}}></input>
                    <button onClick={(e) => {handleAddPlayer(e)}}>Add Player</button>
                </form>
            </div>
        )
    }

    const print_players_blob = () => {
        let printedPlayers = players.map((player,id) => {
            return(<div id={id} style={styles.playerButton}>{player + " "}<button onClick={(e) => {remove_player(e,id)}}>-</button></div>)
        })
        return (
            <div style={styles.printedPlayersBlock}>
                {printedPlayers}
            </div>
        )
    }

    const remove_player = (e,id) => {
        e.preventDefault();
        setPlayers(players.filter((player, i) => i !== id))
        setTeams()
    }

    const build_list = (inlist, people = []) => {
        let team = []
        let team_2 = []
        for(let i = 0; i < people.length; i++){
            if(inlist % 2 === 1){
                team.push(people[i])
            }
            else{
                team_2.push(people[i])
            }
            inlist = Math.floor(inlist / 10)
        }
        return (
                    <div style={styles.parentTeamListBlock}>
                        <ul style={styles.teamList}>Team 1
                            {team.map((player, id) => (<li style={styles.teamListElement} id={id}>{player}</li>))}
                        </ul>
                        <ul style={styles.teamList}>Team 2
                            {team_2.map((player, id) => (<li style={styles.teamListElement} id={id}>{player}</li>))}
                        </ul>
                    </div>
                )
    }

    const handleChangeTeams = (val) => {
        setCurrentTeam(currentTeam + val)
    }

    const current_team_blob = () => {
        if(teams && teams.length){
            let prev_button = (currentTeam > 0 ? <button style={{...styles.swapTeamButton, ...styles.prevTeamButton}} onClick={(e) => handleChangeTeams((-1))}>Prev</button> : "")
            let next_button = (currentTeam < teams.length - 1 ? <button style={{...styles.swapTeamButton, ...styles.nextTeamButton}} onClick={(e) => handleChangeTeams((1))}>Next</button> : "")
            return(
                <div>
                <p> Setup {currentTeam + 1} of {teams.length}</p>
                <div style={styles.teamsBlock}>
                {prev_button}
                {build_list(teams[currentTeam], players)}
                {next_button}
                </div>
                </div>
                )
        }
    }

    const generateTeams = () => {
        setTeams(shuffle(generate_combinations(players)));
    }

    const generate_combinations = (inlist, teams = 2) => {

        const max_team = Math.ceil((inlist.length) / teams)
        let list = []
    
        for(let i = 0; i < inlist.length; i++){
            list[i] = Math.pow(10,i)
        }
        var result = [];
        switch(max_team){
            case 2:
                result = list.flatMap(
                    (v, i) => list.slice(i+1).map( w => w + v)
                );
                break;
            case 3:
                result = list.flatMap(
                    (v, i) => {
                        let temp_arr = []
                        for(let j = 0; j < list.length; j++){
                            temp_arr[j] = list[j]
                        }
                        temp_arr.splice(0,i+1)
                        let z = temp_arr.flatMap((w, j) => temp_arr.slice(j+1).map( x => w + x + v))
                        return (z)
                    }
                );
                break;
            default:
                break;
        }
    
        return(result)
    }
    
    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

  return (
    <div><h3>Team Builder Page</h3>
    {add_player_blob()}
    {print_players_blob()}
    <button onClick={(e) => generateTeams(e)}>Make Teams!</button>
    {current_team_blob()}
    </div>
  )
}

const styles = {
    playerButton: {
        backgroundColor: "magenta",
        display: "inline",
        padding: "5px",
        margin: "15px",
    },
    printedPlayersBlock: {
        margin: "10px"
    },
    swapTeamButton: {
        color:"pink",
        fontSize: "18px",
        display: "inline",
        height: "250px",
        width: "250px"
    },
    prevTeamButton: {
        backgroundColor: "orange",
        float: "left"
    },
    nextTeamButton: {
        backgroundColor: "purple",
        float: "right"
    },
    teamsBlock: {
        display: "inline",
        height: "200px"
    },
    teamList: {
        display: "inline"
    },
    teamListElement: {
        display: "inline",
        margin: "5px",
        backgroundColor: "#EEE",
        padding: "5px",
        display: "inline",
        float: "center"
    }
}