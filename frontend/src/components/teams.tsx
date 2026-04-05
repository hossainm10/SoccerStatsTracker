import {getTeam} from "./api"
import {useState, useEffect} from "react"

interface teams_id {

	id:number,
	name:string
}


export default function DisplayTeam(){

	const teams: teams_id [] = [ 
		{id :529,name:"Barcelona"},
		{id :42,name:"Arsenal"},
		{id:40,name :"Liverpool"},
		{id:541,name:"Real Madrid"}
	
	]
	
	const [data,setData]=useState(null)
        const [selectedTeam, setSelectedTeam]=useState(40)
        useEffect( () => {

                const fetchData= async() => {
                        const result=await getTeam(selectedTeam)
                        setData(result)
                }
                fetchData()

        },[selectedTeam]);
        const handleChange= (event : React.ChangeEvent<HTMLSelectElement>) => {setSelectedTeam(event.target.value)};
        return (
                <div>
                        <select value={selectedTeam} onChange={handleChange}>
                                <option value=""> -- Select a league -- </option>
                                {teams.map(team =>(
                                <option key={team.id} value= {team.id     }>{team.name}</option>))}

                        </select>
                        <div> {data ?  JSON.stringify(data) : "No data available"}</div>

                </div>
        )
}


