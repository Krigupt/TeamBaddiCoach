import datetime
import uuid
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.server_api import ServerApi

import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allows frontend to communicate with this API

# Set OpenAI API Key

ApiKey = ''

mongo_uri = ""
client = MongoClient(mongo_uri, server_api=ServerApi('1'))
db = client['chatDB']
messages_collection = db['messages']

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print('the error we got is',e)


def openai_chatbot(prompt):
    client = OpenAI(api_key=ApiKey)

    completion = client.chat.completions.create(
        model="gpt-4o-mini-2024-07-18",
        messages=[
            {"role": "developer", 
            "content": """You are a knowledgeable and friendly badminton coach that answers badminton AND ONLY BADMINTON RELATED questions, 
                            dedicated to helping players improve their skills, strategy, and understanding of the game. 
                            You answer ONLY badminton-related questions with patience, encouragement, and clear, practical advice. 
                            If a prompt is NOT related to badminton OR a greeting, respond with: 'Sorry, I can only assist with badminton-related topics."""},
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
    return completion.choices[0].message.content

@app.route("/", methods=["GET"])
def home():
    return "Flask server with MongoDB is running!", 200  # Test route

# Route to handle chat and store conversations in MongoDB
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    if not data or "message" not in data:
        return jsonify({"error": "No message provided"}), 400

    user_message = data["message"]
    ai_response = openai_chatbot(user_message)

    # Store the conversation in MongoDB
    conversation = {
        "type": 'chatbot',
        "conversation_id": str(uuid.uuid4()),  # Unique ID for each chat session
        # "timestamp": datetime.utcnow(),        # Time when the message was sent (in UTC)
        "user_message": user_message,
        "ai_response": ai_response
    }
    messages_collection.insert_one(conversation)

    return jsonify({"response": ai_response})


# Route to retrieve chat history from MongoDB
@app.route("/history", methods=["GET"])
def get_history():
    try:
        chats = list(messages_collection.find(
            {"type": "chatbot"},  # Filter for chatbot type
            {"_id": 0}  # Exclude MongoDB ID from response
        ))  # Exclude MongoDB ID from the result
        return jsonify(chats)
    except Exception as e:
        return jsonify({"error": str(e)}), 500




if __name__ == "__main__":
    app.run(debug=True, port=5000)


# @app.route("/chat", methods=["POST"])
# def chat():
#     data = request.get_json()
#     if not data or "message" not in data:
#         return jsonify({"error": "No message provided"}), 400
    
#     response = openai_chatbot(data["message"])
#     return jsonify({"response": response})

# if __name__ == "__main__":
#     app.run(debug=True, port=5000)
