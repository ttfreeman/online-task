FROM ubuntu:latest

RUN apt-get update -y 
RUN apt-get install -y python-pip python-dev
RUN pip install sqlalchemy psycopg2-binary flask marshmallow flask-cors
WORKDIR /app
COPY . /app

RUN chmod u+x bootstrap.sh
CMD [ "./bootstrap.sh &" ]