## LinkedIn Profile Scraping Project

This project is designed to scrape LinkedIn profiles using Selenium and display the data in a simple HTML format. The project leverages Jinja for template rendering and LangChain for advanced processing.

### Team Members:
- Adya Nandi
- Amar
- Prashansa Soni

### Requirements

Before starting, ensure you have the required dependencies installed. You can do this by installing the packages from the `requirements.txt` file.

### Steps to get started:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PrashansaSoni/Resume_builder.git
   cd Resume_builder
   ```

2. **Create a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # Note - On Windows, use venv\Scripts\activate
   ```

3. **Install the dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the scraping script**:
   You can start scraping LinkedIn profiles using the following command:
   ```bash
   python scrape_linkedin.py
   ```

5. **View the results**:
   After scraping, the data will be saved as an HTML file. Simply open the HTML file in a web browser to view the results.

   ```bash
   open index.html #if using macos or linux
   ```

### Files
- `scrape_linkedin.py`: The main script to scrape LinkedIn profiles using Selenium.
- `index.html`: The HTML file containing the scraped data.
- `requirements.txt`: The file containing all the necessary dependencies.
