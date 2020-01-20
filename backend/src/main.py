from flask import Flask, jsonify, request
from flask_cors import CORS

from .entities.entity import Session, engine, Base
from .entities.task import Task, TaskSchema
from .auth import AuthError, requires_auth

# create the Flask app
app = Flask(__name__)
CORS(app)

# generate database schema (if needed)
Base.metadata.create_all(engine)


@app.route('/tasks')
def get_tasks():
    session = Session()
    task_objects = session.query(Task).all()

    # transforming into JSON-serializable objects
    schema = TaskSchema(many=True)
    tasks = schema.dump(task_objects)

    # serializing as JSON
    session.close()
    return jsonify(tasks.data)


@app.route('/tasks', methods=['POST'])
@requires_auth
def add_task():
    posted_task = TaskSchema(
        only=('title', 'description')).load(request.get_json())

    task = Task(**posted_task.data, created_by='HTTP post request')

    # persist task
    session = Session()
    session.add(task)
    session.commit()

    new_task = TaskSchema().dump(task).data
    session.close()

    return jsonify(new_task), 201


@app.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response
