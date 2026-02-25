from flask import Flask, jsonify, send_from_directory
import json

app = Flask(__name__)

# load products
def get_products():
    with open("products.json") as f:
        return json.load(f)

# serve index
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

# serve cart
@app.route("/cart")
def cart():
    return send_from_directory(".", "cart.html")

# serve css/js/json files
@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(".", path)

# API
@app.route("/api/products")
def products():
    return jsonify(get_products())

if __name__ == "__main__":
    app.run(debug=True)