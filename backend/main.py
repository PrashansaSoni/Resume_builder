from githubDesc.test import langFunction
from fastapi.responses import HTMLResponse
from fastapi.responses import JSONResponse
import uvicorn
import subprocess
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow all (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to my LangChain application!"}

@app.get("/display")
def display_html(name: str):
    # name = "prashansasoni"
    subprocess.run(
                ["bash", "githubDesc/download.sh", name],
                capture_output=True,
                text=True
            )
    result = langFunction()
    return result

if __name__ == "__main__":
    port = 8081
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
