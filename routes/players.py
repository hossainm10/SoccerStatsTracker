from fastapi import APIRouter
from services.freeapi import get_response

url_path="/football-players-search"
router=APIRouter(prefix="/players",tags=["players"])

@router.get("/")
async def get_player(user_query):
    response =get_response(url_path, {"leagueid":user_query})
    return response

