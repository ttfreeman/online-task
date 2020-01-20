#!/bin/bash
# before running this script, please make sure docker desktop is running
export DB_NAME=online-task-db
docker run --name $DB_NAME \
    -p 5432:5432 \
    -e POSTGRES_DB=online-task \
    -e POSTGRES_PASSWORD=0NLIN3-ex4m \
    -d postgres