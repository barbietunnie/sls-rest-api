'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

// remove all localhost instances when deploying to live
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
});

module.exports.create = (event, context, callback) => {
  // create a note and add it into the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Add a note')
  };

  callback(null, response);
}

module.exports.getOne = (event, context, callback) => {
  // get a single note from the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Get a note')
  };

  callback(null, response);
}

module.exports.getAll = (event, context, callback) => {
  // get all notes from the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Get all notes')
  };

  callback(null, response);
}

module.exports.update = (event, context, callback) => {
  // update a note in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Update a note')
  };

  callback(null, response);
}

module.exports.delete = (event, context, callback) => {
  // delete a note in the database
  const response = {
    statusCode: 200,
    body: JSON.stringify('Delete a note')
  };

  callback(null, response);
}