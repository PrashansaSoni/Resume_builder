
import streamlit as st
import pdfkit
from jinja2 import Environment, FileSystemLoader
from profile_scraper import scrape_profile_data, setup_driver
from langchain.document_loaders import PyPDFLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# Configure Streamlit page
st.set_page_config(page_title=" Resume Builder ", layout="centered")

def generate_resume_linkedin(profile_data):
    env = Environment(loader=FileSystemLoader("templates"))
    template = env.get_template("linkedin_resume_template.html")
    
    resume_html = template.render(profile_data=profile_data)
    pdf_path = "linkedin_resume.pdf"
    pdfkit.from_string(resume_html, pdf_path, options={"enable-local-file-access": ""})
    
    return pdf_path

def generate_resume_manual(manual_data):
    env = Environment(loader=FileSystemLoader("templates"))
    template = env.get_template("manual_resume_template.html")
    
    resume_html = template.render(profile_data=manual_data)
    pdf_path = "manual_resume.pdf"
    pdfkit.from_string(resume_html, pdf_path, options={"enable-local-file-access": ""})
    
    return pdf_path

st.title("📄 Resume Builder")

# LinkedIn Profile Resume Generation
st.subheader("🔗 Generate Resume from LinkedIn")
profile_url = st.text_input("Enter LinkedIn Profile URL")
if st.button("Generate Resume from LinkedIn"):
    if not profile_url:
        st.warning("⚠️ Please enter a valid LinkedIn URL.")
    else:
        st.info("⏳ Scraping LinkedIn profile... Please wait.")
        
        driver = setup_driver()
        profile_data = scrape_profile_data(driver, profile_url)
        driver.quit()
        
        if not profile_data:
            st.error("❌ Failed to retrieve profile data. Please check the URL or try again later.")
        else:
            profile_data["experience"] = profile_data.get("experience", [])[:2]
            profile_data["skills"] = profile_data.get("skills", [])[:12]
            
            pdf_path = generate_resume_linkedin(profile_data)
            st.success("✅ Resume Generated Successfully!")
            
            with open(pdf_path, "rb") as file:
                st.download_button(label="📥 Download Resume", data=file, file_name="linkedin_resume.pdf", mime="application/pdf")

# Manual Resume Generation
st.subheader("✍️ Generate Resume Manually")
name = st.text_input("Full Name")
education = st.text_area("Education")
experience = st.text_area("Experience (One per line, format: Job - Time Period)")
skills = st.text_area("Skills (comma-separated)")
achievements = st.text_area("Achievements (One per line)")

generate_manual = st.button("Generate Resume Manually")

if generate_manual:
    if not name:
        st.warning("⚠️ Please enter your name.")
    else:
        formatted_experience = [
            {"job": exp.split(" - ")[0].strip(), "time": exp.split(" - ")[1].strip()} 
            for exp in experience.split('\n') if " - " in exp
        ]
        
        manual_data = {
            "name": name,
            "education": education,
            "experience": formatted_experience,
            "skills": [skill.strip() for skill in skills.split(',')],
            "achievements": [ach.strip() for ach in achievements.split('\n')]
        }
        
        pdf_path = generate_resume_manual(manual_data)
        st.success("✅ Resume Generated Successfully!")
        
        with open(pdf_path, "rb") as file:
            st.download_button(label="📥 Download Resume", data=file, file_name="manual_resume.pdf", mime="application/pdf")

# RAG Feature: Resume Upload & Querying
st.header("🔍 Query Your Resume with AI")
def process_resume(file):
    """Processes the uploaded resume and returns a retriever."""
    with open("uploaded_resume.pdf", "wb") as f:
        f.write(file.getbuffer())
    
    loader = PyPDFLoader("uploaded_resume.pdf")
    pages = loader.load()
    
    embeddings = OpenAIEmbeddings()
    vector_store = FAISS.from_documents(pages, embeddings)
    return vector_store.as_retriever()

def query_resume():
    """Handles resume upload, processing, and AI-based querying."""
   
    uploaded_file = st.file_uploader("📤 Upload your Resume (PDF)", type=["pdf"])
    
    if uploaded_file:
        st.info("📚 Processing your resume...")
        retriever = process_resume(uploaded_file)
        
        llm = ChatOpenAI()
        qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
        
        user_query = st.text_input("📝 Ask a question about your resume")
        if st.button("Ask AI") and user_query:
            response = qa_chain.run(user_query)
            st.write("💡 AI Response:", response)
query_resume()