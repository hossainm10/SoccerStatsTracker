import { getPlayer } from "./api"
import { useState, useEffect } from "react"


function DisplayPlayer(){


	const[data,setData] =  useState(null)

	const [playerName,setPlayerName]= useState("Lionel Messi")

	useEffect (() => {
		const fetchData= async() =>{
		const result= await  getPlayer(playerName)
		setData(result)
		}
		fetchData()
		
		
	
	},[playerName]);
	
	return (
	
		<div>
			<input type="text" placeholder="Enter player name" onChange={(e) setPlayerName(e.target.value)} />
			<div>
				{data ? json.stringify(data) :"No data available"}
			</div>
		</div>
	
	)





}
