import os
from dotenv import load_dotenv




base_path=os.path.dirname(__file__)
env_path=os.path.join(base_path, ".env")

load_dotenv(env_path)

freeapi_url= "https://free-api-live-football-data.p.rapidapi.com"




free_api=os.getenv("free_api")

