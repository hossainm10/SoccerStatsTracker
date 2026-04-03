

const BASE_URL="http://127.0.0.1:8000"


async function getResponse(endpoint){

	const response= await fetch(BASE_URL+endpoint)
	const data= await response.json()
	return data
}

export async function getFixture(user_query){
	const endpoint= "/fixtures?user_query="+user_query
	const response=await getResponse(endpoint)
	return response

}

export async function getPlayer(user_query){

	const endpoint = "/players?user_query="+user_query
	const response= await getResponse(endpoint)
	return response
}

export async function getTeam(user_query){

	const endpoint="/teams?user_query="+user_query
	const response =await getResponse(endpoint)
	return response
}

