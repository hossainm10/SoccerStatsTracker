from fastapi import APIRouter
from services.freeapi import get_response

url_path="/football-get-all-matches-by-league"
router=APIRouter(prefix="/fixtures",tags=["fixtures"])

@router.get("/")
async def get_fixture(user_query):
    response= get_response(url_path,{"leagueid":user_query})
    return response
