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

Please note that you can execute the following command to remove all resources created by `CloudFormation` with the exception of the `notes` table created by *DynamoDB*, as it has been specified in `serverless.yml` that the table should be retained.
```
    sls remove -v
```
You have to manually delete the created table to ensure full cleanup.