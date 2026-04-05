import { getFixture } from "./api"
import { useState,useEffect } from "react"

interface league_fixture {
	id:number,
	name:string

}

export default function DisplayFixtures(){
	const fixtures_id:league_fixture[]=[
		{id: 39, name: "Premier League"},
		{id:2,name:"Champions League"},
		{id:140,name:"La Liga"}	
	
	]	
	const [data,setData]=useState(null)
	const [selectedLeague, setSelectedLeague]=useState(39)
	useEffect( () => {
		
		const fetchData= async() => {
			const result=await getFixture(selectedLeague)
			setData(result)
		}
		fetchData()
		
	},[selectedLeague]);
	const handleChange= (event : React.ChangeEvent<HTMLSelectElement>) => {setSelectedLeague(event.target.value)};
	return (
		<div>
			<select value={selectedLeague} onChange={handleChange}>
				<option value=""> -- Select a league -- </option>
				{fixtures_id.map(fixture =>(
				<option key={fixture.id} value= {fixture.id	}>{fixture.name}</option>))}
		
			</select>
			<div> {data ?  JSON.stringify(data) : "No data available"}</div>

		</div>
	)
}
