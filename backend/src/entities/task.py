from marshmallow import Schema, fields
from sqlalchemy import Column, String
from .entity import Entity, Base


class Task(Entity, Base):
    __tablename__ = 'tasks'

    title = Column(String)
    description = Column(String)

    def __init__(self, title, description, created_by):
        Entity.__init__(self, created_by)
        self.title = title
        self.description = description


class TaskSchema(Schema):
    id = fields.Number()
    title = fields.Str()
    description = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
