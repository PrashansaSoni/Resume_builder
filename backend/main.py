from fastapi import FastAPI
from githubDesc.test import langFunction
from fastapi.responses import HTMLResponse
import uvicorn
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to my LangChain application!"}

@app.get("/display", response_class=HTMLResponse)
def display_html():
    result = langFunction()
    return result

if __name__ == "__main__":
    port = 8081
    uvicorn.run("main:app", host="127.0.0.1", port=port, reload=True)
