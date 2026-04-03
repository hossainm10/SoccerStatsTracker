import fastapi
from routes import fixtures, teams,players



app= fastapi.FastAPI()

app.include_router(fixtures.router)
app.include_router(teams.router)
app.include_router(players.router)

@app.get("/")



async def root():
    return {"message":"Welcome to the football stats API"}    
