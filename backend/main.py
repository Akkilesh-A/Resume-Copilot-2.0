from flask import Flask,request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Your route definitions
@app.route('/', methods=['GET'])
def healthy_server():
    return jsonify({"message": "Healthy server running"})

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')
