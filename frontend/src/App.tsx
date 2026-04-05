import DisplayPlayer from "./components/players"
import DisplayFixtures from "./components/fixtures"
import DisplayTeam from "./components/teams"

export default function App(){
	const [clicked,setClicked]= useState("fixtures");

	return(
	
		<>
			<p style= {{color: 'blue', textAlign:"center",fontSize:'300%'}}>  Do you want to view Fixtures, players, team Stats?</p>
			<div style ={{ display: "flex", gap "32px", justifyContent: "center", alignItems:"center",height:"100vh"}}>
				<Btn_Fixture />
				<Btn_Team />
				<Btn_Player /?
			</div>
		<>
	
	
	);


}
 
export function BtnFixture(){

	
}
