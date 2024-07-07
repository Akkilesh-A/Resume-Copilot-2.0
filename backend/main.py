from flask_cors import CORS
import google.generativeai as genai
import os
import re
from flask import Flask, request, jsonify
import PyPDF2 as pdf
import docx2txt

app = Flask(__name__)
CORS(app)

# Your route definitions
@app.route('/', methods=['GET'])
def healthy_server():
    return jsonify({"message": "Healthy server running"})

UPLOAD_FOLDER = 'uploaded_files'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#generating score for JOB SEEKERS!
@app.route("/resume_scan_with_ai", methods=['POST'])
def resume_scanner():
    if 'image' not in request.files:
        return jsonify({"message": "No file provided"}), 400

    reume_uploaded = request.files['image']
    if reume_uploaded.filename == '':
        return jsonify({"message": "No file selected"}), 400

    # Save the file to the upload folder
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], reume_uploaded.filename)
    reume_uploaded.save(file_path)

    job_title = request.form.get('jobTitle')
    tech_stack = request.form.get('techStack')

    # Process the uploaded file here if needed
    genai.configure(api_key="AIzaSyAklh_Ui212l80skoaUTtf3XXSWIw6Rjl8")

    # Set up the model configuration for text generation
    generation_config = {
        "temperature": 0.4,
        "top_p": 1,
        "top_k": 32,
        "max_output_tokens": 4096,
    }

    # Define safety settings for content generation
    safety_settings = [
        {"category": f"HARM_CATEGORY_{category}", "threshold": "BLOCK_MEDIUM_AND_ABOVE"}
        for category in ["HARASSMENT", "HATE_SPEECH", "SEXUALLY_EXPLICIT", "DANGEROUS_CONTENT"]
    ]

    def generate_response_from_gemini(input_text):
        # Create a GenerativeModel instance with 'gemini-pro' as the model type
        llm = genai.GenerativeModel(
            model_name="gemini-pro",
            generation_config=generation_config,
            safety_settings=safety_settings,
        )
        # Generate content based on the input text
        output = llm.generate_content(input_text)
        # Return the generated text
        return output.text

    def extract_text_from_pdf_file(uploaded_file):
        # Use PdfReader to read the text content from a PDF file
        pdf_reader = pdf.PdfReader(uploaded_file)
        text_content = ""
        for page in pdf_reader.pages:
            text_content += str(page.extract_text())
        return text_content

    def extract_text_from_docx_file(uploaded_file):
        # Use docx2txt to extract text from a DOCX file
        return docx2txt.process(uploaded_file)

    def tokenize_text(text):
        """Tokenizes text into words and removes punctuation."""
        text = re.sub(r'[^\w\s]', '', text)  # Remove punctuation
        words = text.split()  # Tokenize text into words
        return words

    def get_missing_keywords(job_description, resume_text):
        """Get missing keywords from job description that are absent in resume."""
        # Tokenize job description and resume text
        job_words = set(tokenize_text(job_description))
        resume_words = set(tokenize_text(resume_text))
        
        # Calculate missing keywords
        missing_keywords = job_words - resume_words  # Difference between job and resume words
        
        # Return sorted list of missing keywords for readability
        return sorted(list(missing_keywords))

    # Prompt template for generating AI response
    input_prompt_template = """
    As an experienced Applicant Tracking System (ATS) analyst,
    with profound knowledge in technology, software engineering, data science, 
    and big data engineering, your role involves evaluating resumes against job descriptions.
    Recognizing the competitive job market, provide top-notch assistance for resume improvement.
    Your goal is to analyze the resume against the given job description, 
    assign a percentage match based on key criteria, and pinpoint missing keywords accurately.
    resume:{text}
    description:{job_description}
    I want the response in one single string having the structure
    "Job Description Match":"%", "Missing Keywords":""
    """

    if reume_uploaded:
        if not tech_stack.strip():
            return jsonify({"message":"Please provide the Job Description ⚠"}),200
        else:
            if reume_uploaded.mimetype == "application/pdf":
                with open(file_path, "rb") as pdf_file:
                    resume_text = extract_text_from_pdf_file(pdf_file)
                    print("Extracted PDF Text:", resume_text)  # Debugging statement
            elif reume_uploaded.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                with open(file_path, "rb") as docx_file:
                    resume_text = extract_text_from_docx_file(docx_file)
                    print("Extracted DOCX Text:", resume_text)  # Debugging statement
            response_text = generate_response_from_gemini(input_prompt_template.format(text=resume_text, job_description=tech_stack))

            # Initialize missing_keywords variable
            missing_keywords = ""
            score=""
            # Extract Job Description Match percentage from the response
            match_percentage_str = response_text.split('"Job Description Match":"')[1].split('"')[0]
            
            if match_percentage_str == 'N/A':
                score=match_percentage_str
                result=" Sorry yours Skills do not match with the requirements 😣"
                # Get missing keywords from the job description and resume
                missing_keywords = get_missing_keywords(tech_stack, resume_text)
            
            else:
            # Remove percentage symbol and convert to float
                match_percentage = float(match_percentage_str.rstrip('%'))

                if match_percentage >= 20:
                    result = f"Your Resume Match is {match_percentage_str} 😊 - This resume matches the job description!"  # Highlight in green for a good match
                else:
                    result = f"Match {match_percentage_str} 😭 - This resume does not match the job description."  # Highlight in red for a poor match
    print(response_text)
    return jsonify({"message": "Successful!","jobTitle":job_title,"techStack":tech_stack,"missingKeywords" : missing_keywords,"score":response_text,"result":result,"score":score}), 200
       

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')
