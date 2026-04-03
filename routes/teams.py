from fastapi import APIRouter
from services.freeapi import get_response


url_path="/football-get-list-all-team"
router=APIRouter(prefix="/teams",tags=["teams"])


@router.get("/")
async def get_team(user_query):
    response= get_response(url_path, {"leagueid":user_query})
    return response
