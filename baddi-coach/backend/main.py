from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allows frontend to communicate with this API

# Set OpenAI API Key

ApiKey = ''


def openai_chatbot(prompt):
    client = OpenAI(api_key=ApiKey)

    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a friendly badminton coach..."},
            {"role": "user", "content": prompt}
        ]
    )
    return completion.choices[0].message.content

@app.route("/", methods=["GET"])
def home():
    return "Flask server is running!", 200  # Test route to check if Flask is up

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    if not data or "message" not in data:
        return jsonify({"error": "No message provided"}), 400
    
    response = openai_chatbot(data["message"])
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
