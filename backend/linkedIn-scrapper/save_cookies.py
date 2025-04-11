# from selenium import webdriver
# import time
# import pickle

# driver = webdriver.Chrome()
# driver.get("https://www.linkedin.com/login"
#            )
# input("Login manually, then press Enter here...")
# pickle.dump(driver.get_cookies(), open("cookies/linkedin_cookies.pkl", "wb"))
# driver.quit()

# import pickle
# import os
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager

# # Ensure the cookies directory exists
# os.makedirs("cookies", exist_ok=True)

# def save_cookies():
#     options = webdriver.ChromeOptions()
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

#     driver.get("https://www.linkedin.com/login")
#     input("🔵 Log in manually and press Enter...")  # Wait for user to log in

#     # Save cookies to file
#     with open("cookies/linkedin_cookies.pkl", "wb") as file:
#         pickle.dump(driver.get_cookies(), file)
    
#     print("✅ Cookies saved successfully in 'cookies/linkedin_cookies.pkl'!")
#     driver.quit()

# save_cookies()


import os
import pickle
from selenium import webdriver

# Ensure the absolute path to cookies directory
cookies_dir = os.path.join(os.path.dirname(__file__), "..", "cookies")
cookies_path = os.path.join(cookies_dir, "linkedin_cookies.pkl")

# Ensure 'cookies/' directory exists
os.makedirs(cookies_dir, exist_ok=True)

# Launch WebDriver
driver = webdriver.Chrome()
driver.get("https://www.linkedin.com/login")

# Wait for manual login
input("Login manually, then press Enter here...")

# Save cookies
with open(cookies_path, "wb") as file:
    pickle.dump(driver.get_cookies(), file)

print(f"Cookies saved at {cookies_path}")

# Close driver
driver.quit()
