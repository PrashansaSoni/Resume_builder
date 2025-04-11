import langchain
from typing_extensions import Literal, TypedDict
from pydantic import BaseModel, Field
from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate
import json
import markdown
from langchain_groq import ChatGroq
from dotenv import load_dotenv
import os
#llm = ChatOllama(model="llama3.2:latest")

load_dotenv()
groq_api_key = os.getenv("GROQ_API_KEY")
def langFunction():
    llm = ChatGroq(
        model="llama-3.3-70b-versatile",
        temperature=0,
        max_tokens=None,
        timeout=None,
        max_retries=2,
    )
    # For storing the contents of the user
    with open("./githubDesc/prompt.txt", "r") as file:
        content = file.read()

    # For future ref incase we built this for langgraph
    class responseSchema(BaseModel):
        """Returns the information about the users"""
        course: str = Field(description="course recommendation for the users")
        projects: str =  Field(description="Projects for the user to follow on")
        carrier: str =  Field(description="Carrier advice for the user")

    #structured_llm = llm.with_structured_output(responseSchema)

    prompt_template = ChatPromptTemplate([
        ("system", "You are a carrier advice giver, suggest some good recommendation on course, projects, and carriers return in html format"),
        ("user", "This is the user data - {content}")
    ])
    content_prompt = (prompt_template.invoke({"content": content}))

    response_llm = llm.invoke(content_prompt).content

    # html_response = markdown.markdown(response_llm)

    # response = {
    #     "html": html_response
    # }

    # json_response = json.dumps(response)
    return response_llm
# res = langFunction()
# print(res)
