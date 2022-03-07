from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
  return jsonify([{
    'source': 'New York Times',
    'sentiment': 'POSITIVE',
    'score': 0.9,
  }, {
    'source': 'NY',
    'sentiment': 'NEGATIVE',
    'score': 0.76,
  }, {
    'source': 'Test2',
    'sentiment': 'POSITIVE',
    'score': 0.8,
  }, {
    'source': 'T',
    'sentiment': 'NEGATIVE',
    'score': 0.66,
  }])

if __name__ == "__main__":
  port = 5000
  app.run(debug=True, host='0.0.0.0', port=port)