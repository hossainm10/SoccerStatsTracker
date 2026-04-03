import requests
from config import freeapi_url, free_api

freeapi_host="free-api-live-football-data.p.rapidapi.com"

headers={
        "x-rapidapi-host":freeapi_host,
        "x-rapidapi-key":free_api
        }

def get_response(endpoint):
    response = requests.get(freeapi_url+endpoint, headers=headers)
    return response
