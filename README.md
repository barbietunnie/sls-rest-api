# Serverless API demo
This application demonstrates using the serverless framework to create a RESTful API.

It includes the capability to test the Lamda functions and DynamoDB features offline too.

### Notes
- To run locally, execute:
```
    sls offline start
```

- To run/deploy on AWS, execute:
```
    sls deploy -v
```
*N.B:* Before deploying to AWS, ensure that the `region` and `endpoint` defined in the handler as `localhost` are commented out