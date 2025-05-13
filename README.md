# LinkedIn Profile Resume builder/ Github project recommedation system Project

**This project is under development.** It is hosted with GitHub Pages. The backend will be developed using FastAPI, and we are utilizing LangChain, Selenium, Jinja, and other tools for backend processing. The LLM calls will be made via third-party services (not Ollama). You can see the demo by clicking the link below. Feel free to contribute!

[Demo Link](https://prashansasoni.github.io/Resume_builder/)

## Team Members:
- Adya Nandi
- Amar
- Prashansa Soni

## Requirements

Before starting, ensure you have the required dependencies installed. You can do this by installing the packages from the `requirements.txt` file.

### Steps to get started:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/PrashansaSoni/Resume_builder.git
    cd Resume_builder/backend
    ```

2. **Create a virtual environment (optional but recommended):**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use venv\Scripts\activate
    ```

3. **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Run the backend script in the backend server:**

    ```bash
    python main.py
    ```
    This will start the server at your backend(check the port), earlier it was configured to ec2 instance(hardCoded which is not a good idea), now it's local.

5. **View the results:**

    After scraping, the data will be saved as an HTML file. Simply open the `index.html` file in a web browser to view the results.

---
# GitHub Repo Analyzer(1/2)

This project analyzes a GitHub user's repositories to provide insights about their coding interests, languages used, and notable projects and some suggestions.

## How It Works

1. **Input GitHub Username:** The user provides a GitHub username via the frontend.
2. **Clone Repositories:** The backend executes a Bash script to clone the specified user's repositories.
3. **Data Processing:** The repository data is sent to a Langchain-based backend server for analysis.
4. **Display Output:** The processed data is displayed on the frontend, highlighting the user's key interests, primary languages, and noteworthy projects.

## Technologies Used

* Bash (Repository Cloning)
* Python (Backend Server using Langchain, transitioning to Langgraph later)
* JavaScript (Frontend)
* Docker (To be implemented for isolation and security)


## Future Improvements

* Implement Docker for enhanced security and isolation.
* Migrate from Langchain to Langgraph as complexity increases.
* Extend analysis to include user-specific metrics, such as commit frequency and open-source contributions.

# LinkedIn Resume builder(2/2)

* docs will be added lateron

Feel free to contribute and give any suggestions.
