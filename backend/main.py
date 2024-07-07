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

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')
