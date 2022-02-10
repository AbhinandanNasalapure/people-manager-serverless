# people-manager-serverless

**Technologies used:**
- Typescript
- NodeJS
- AWS Lambda, APIgateway and Dyanamodb
- Serverless framework

**pre-requisites:**
- [configure aws cli](docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
- configure dummy profile using aws cli for testing in local
- commands to download dynamodb in local
    - sls dynamodb install

**Running functions in local:**
- sls offline start

**or**
- npm run start:local

**Feature and functionalities :**
- This serverless application consists of different microservices rest endpoints to create, update , retrieve person/people and delete
- /person API can be used to perform various http requests like GET, POST , DELETE and PUT
- Sample request for creating a person in local
    - curl --location --request POST 'http://localhost:3003/dev/person' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "name",
    "lastName": "lastname",
    "address": "city",
    "phoneNumber": "1243214234"
}'

**Deploy :**
 - to deploy it to prd use stage option
    - npm run deploy:prd