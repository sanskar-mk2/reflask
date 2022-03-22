from email.policy import default
import imp
from flask import Flask, send_from_directory  # type: ignore
from flask_restful import Api, Resource, reqparse  # type: ignore
from flask_cors import CORS  # type: ignore
from api.HelloApiHandler import HelloApiHandler  # type: ignore

app = Flask(__name__, static_url_path="", static_folder="frontend/build")
CORS(app)
api = Api(app)


@app.route("/", defaults={"path": ""})
def serve(path):
    return send_from_directory(app.static_folder, "index.html")


api.add_resource(HelloApiHandler, "/flask/hello")
