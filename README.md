# Getting started

The Disgo API is a modern HTTP interface that follows the REST architecture with a JSON format. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. We support cross-origin resource sharing, allowing you to interact securely with our API from a client-side web application. [JSON](http://www.json.org) is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.

### HTTP Responses
Disgo uses conventional HTTP response codes to indicate the success or failure of an API request. Response codes in the 200-299 range indicate success, codes in the 400-499 range indicate an error that failed given the information provided, and codes in the 500-599 range indicate an error with the Dispatch node. When a request is valid but does not complete successfully, we return a 402 error code.

#### Status and Error Codes
| Status Code.          | Summary                         | 
| ---------------------------- |:-------------------------------:| 
| 200 - OK                |Everything worked as expected. |
| 400 - Bad Request       |The request was unacceptable, often due to missing a required parameter. |
| 401 - Unauthorized      |No valid API key provided. |
| 402 - Request Failed    |The parameters were valid but the request failed. |
| 404 - Not Found	        |The requested resource doesn't exist. |
| 405 - Method Not Allowed	        |The requested resource doesn't exist. |
| 409 - Conflict	        |The request conflicts with another request  |
| 418 - I'm a teapot	        |The node is not a delegate. Please use a delegate when making this request.  |
| 429 - Too Many Requests |Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500, 502, 503, 504 -    |Server Errors	Something went wrong on Disgo's end. (These are rare.) |


## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Dispatch%20Disgo%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Dispatch%20Disgo%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `DispatchDisgoAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Dispatch%20Disgo%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Dispatch%20Disgo%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Dispatch%20Disgo%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Dispatch%20Disgo%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Dispatch Disgo APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Dispatch%20Disgo%20APIController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [TransactionsController](#transactions_controller)
* [ArtifactsComingSoonController](#artifacts_coming_soon_controller)
* [SignTransactionsDevBranchController](#sign_transactions_dev_branch_controller)
* [AccountsController](#accounts_controller)
* [DelegatesController](#delegates_controller)

## <a name="transactions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TransactionsController") TransactionsController

### Get singleton instance

The singleton instance of the ``` TransactionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TransactionsController;
```

### <a name="list_transactions"></a>![Method: ](https://apidocs.io/img/method.png ".TransactionsController.listTransactions") listTransactions

> Call to retrieve all transactions on a Dispatch delegate.
> 
> 
> #### Example request
> ```shell
> curl 'http://{{ipAddress}}:{{port}}/v1/transactions/'
> ```
> 
> #### Example response
> ```shell
> {
>     "status": "Ok",
>     "humanReadableStatus": "Ok",
>     "data": [
>         {
>             "hash": "{{hash}}",
>             "type": 0,
>             "from": "{{fromAddress}}",
>             "to": "{{toAddress}}",
>             "value": 5,
>             "abi": "{}",
>             "time": 1535527996533,
>             "signature": "{{signature}}",
>             "hertz": 0,
>             "receipt": {
>                 "transactionHash": "",
>                 "status": "",
>                 "created": "0001-01-01T00:00:00Z"
>             }
>         },.... {}
>     ],
>     "created": "2018-09-06T00:03:18.822716546Z"
> }
> ```


```javascript
function listTransactions(page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 'page';

    controller.listTransactions(page, function(error, response, context) {

    
    });
```



### <a name="create_send_signed_transaction"></a>![Method: ](https://apidocs.io/img/method.png ".TransactionsController.createSendSignedTransaction") createSendSignedTransaction

> This endpoint will allow you to send a transaction using the hash of the transaction. Note that any parameter that is optional you should include and send as an empty string or 0; with the exception of the parameter named "params" which should be "[]" if empty.
> 


```javascript
function createSendSignedTransaction(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.createSendSignedTransaction(contentType, function(error, response, context) {

    
    });
```



### <a name="get_transaction_by_hash"></a>![Method: ](https://apidocs.io/img/method.png ".TransactionsController.getTransactionByHash") getTransactionByHash

> TODO: Add a method description


```javascript
function getTransactionByHash(hash, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| hash |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var hash = 'hash';

    controller.getTransactionByHash(hash, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="artifacts_coming_soon_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ArtifactsComingSoonController") ArtifactsComingSoonController

### Get singleton instance

The singleton instance of the ``` ArtifactsComingSoonController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ArtifactsComingSoonController;
```

### <a name="get_artifact_by_hash"></a>![Method: ](https://apidocs.io/img/method.png ".ArtifactsComingSoonController.getArtifactByHash") getArtifactByHash

> TODO: Add a method description


```javascript
function getArtifactByHash(hash, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| hash |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var hash = 'hash';

    controller.getArtifactByHash(hash, function(error, response, context) {

    
    });
```



### <a name="add_new_artifact"></a>![Method: ](https://apidocs.io/img/method.png ".ArtifactsComingSoonController.addNewArtifact") addNewArtifact

> TODO: Add a method description


```javascript
function addNewArtifact(callback)
```

#### Example Usage

```javascript


    controller.addNewArtifact(function(error, response, context) {

    
    });
```



### <a name="list_artifacts"></a>![Method: ](https://apidocs.io/img/method.png ".ArtifactsComingSoonController.listArtifacts") listArtifacts

> TODO: Add a method description


```javascript
function listArtifacts(callback)
```

#### Example Usage

```javascript


    controller.listArtifacts(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sign_transactions_dev_branch_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SignTransactionsDevBranchController") SignTransactionsDevBranchController

### Get singleton instance

The singleton instance of the ``` SignTransactionsDevBranchController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SignTransactionsDevBranchController;
```

### <a name="create_execute_smart_contract_type2"></a>![Method: ](https://apidocs.io/img/method.png ".SignTransactionsDevBranchController.createExecuteSmartContractType2") createExecuteSmartContractType2

> TODO: Add a method description


```javascript
function createExecuteSmartContractType2(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.createExecuteSmartContractType2(contentType, function(error, response, context) {

    
    });
```



### <a name="create_deploy_smart_contract_type1"></a>![Method: ](https://apidocs.io/img/method.png ".SignTransactionsDevBranchController.createDeploySmartContractType1") createDeploySmartContractType1

> TODO: Add a method description


```javascript
function createDeploySmartContractType1(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.createDeploySmartContractType1(contentType, function(error, response, context) {

    
    });
```



### <a name="create_token_transfer_type0"></a>![Method: ](https://apidocs.io/img/method.png ".SignTransactionsDevBranchController.createTokenTransferType0") createTokenTransferType0

> TODO: Add a method description


```javascript
function createTokenTransferType0(contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';

    controller.createTokenTransferType0(contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="accounts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountsController") AccountsController

### Get singleton instance

The singleton instance of the ``` AccountsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountsController;
```

### <a name="get_account_by_address"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.getAccountByAddress") getAccountByAddress

> This endpoint retrieves the detailed account information and balance of an address. 
> 
> #### Example request
> ```shell
> curl 'http://{{ipAddress}}:{{port}}/v1/accounts/{{address}}'
> ```
> 
> 
> #### Example response
> ```shell
> {
>     "status": "Ok",
>     "humanReadableStatus": "Ok",
>     "data": {
>         "address": "{{address}}",
>         "name": "",
>         "balance": 0,
>         "transactionHash": "{{hash}}",
>         "updated": "2018-08-28T21:20:41.192534758Z",
>         "created": "2018-08-28T21:20:29.358826557Z",
>         "nonce": 0
>     },
>     "created": "2018-09-05T23:57:13.958756313Z"
> }
> ```
> 


```javascript
function getAccountByAddress(accountAddress, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountAddress |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var accountAddress = 'accountAddress';

    controller.getAccountByAddress(accountAddress, function(error, response, context) {

    
    });
```



### <a name="list_transactions_to_an_address"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.listTransactionsToAnAddress") listTransactionsToAnAddress

> Call to retrieve all transactions filtered using from parameter (or to).
> 
> 
> 
> #### Example request
> ```shell
> curl 'http://{{ipAddress}}:{{port}}/v1/transactions/to/{{address}}'
> ```
> 
> #### Example response
> ```shell
> {
>     "status": "Ok",
>     "humanReadableStatus": "Ok",
>     "data": [
>         {
>             "hash": "{{hash}}",
>             "type": 2,
>             "from": "{{from}}",
>             "to": "{{to}}",
>             "abi": "{{abi}}",
>             "method": "plusOne",
>             "params": [
>                 1
>             ],
>             "time": 1535528027657,
>             "signature": "{{signature}}",
>             "hertz": 2,
>             "receipt": {
>                 "transactionHash": "{{txHash}}",
>                 "status": "Ok",
>                 "contractAddress": "{{address}}",
>                 "contractResult": [
>                     2
>                 ],
>                 "created": "2018-08-29T07:33:52.918897036Z"
>             },
>             "gossip": [
>                 {
>                     "hash": "{{hash}}",
>                     "address": "{{address}}",
>                     "transactionHash": "{{txHash}}",
>                     "time": 1535528027905,
>                     "signature": "{{signature}}"
>                 },...
>             ]
>         },...
>      ],
>     "created": "2018-09-06T00:11:12.44461441Z"
> }
> ```


```javascript
function listTransactionsToAnAddress(to, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | TODO: Add a parameter description |
| page |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var to = '{{accountAddress}}';
    var page = '{{pageNumber}}';

    controller.listTransactionsToAnAddress(to, page, function(error, response, context) {

    
    });
```



### <a name="list_transactions_from_an_address"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.listTransactionsFromAnAddress") listTransactionsFromAnAddress

> Call to retrieve all transactions filtered using from parameter (or to).
> 
> 
> #### Example request
> ```shell
> curl 'http://{{ipAddress}}:{{port}}/v1/transactions/from/{{address}}'
> ```
> 
> #### Example response
> ```shell
> {
>     "status": "Ok",
>     "humanReadableStatus": "Ok",
>     "data": [
>         {
>             "hash": "{{hash}}",
>             "type": 2,
>             "from": "{{from}}",
>             "to": "{{to}}",
>             "abi": "{{abi}}",
>             "method": "plusOne",
>             "params": [
>                 1
>             ],
>             "time": 1535528027657,
>             "signature": "{{signature}}",
>             "hertz": 2,
>             "receipt": {
>                 "transactionHash": "{{txHash}}",
>                 "status": "Ok",
>                 "contractAddress": "{{address}}",
>                 "contractResult": [
>                     2
>                 ],
>                 "created": "2018-08-29T07:33:52.918897036Z"
>             },
>             "gossip": [
>                 {
>                     "hash": "{{hash}}",
>                     "address": "{{address}}",
>                     "transactionHash": "{{txHash}}",
>                     "time": 1535528027905,
>                     "signature": "{{signature}}"
>                 },...
>             ]
>         },...
>      ],
>     "created": "2018-09-06T00:11:12.44461441Z"
> }
> ```


```javascript
function listTransactionsFromAnAddress(from, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| from |  ``` Required ```  | TODO: Add a parameter description |
| page |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var from = '{{accountAddress}}';
    var page = '{{pageNumber}}';

    controller.listTransactionsFromAnAddress(from, page, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="delegates_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DelegatesController") DelegatesController

### Get singleton instance

The singleton instance of the ``` DelegatesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DelegatesController;
```

### <a name="list_delegates"></a>![Method: ](https://apidocs.io/img/method.png ".DelegatesController.listDelegates") listDelegates

> This URL / API call will return a list of all delegates on the Dispatch network. 
> 
> 
> #### Example request
> ```shell
> curl 'http://seed.dispatchlabs.io:1975/v1/delegates'
> ```
> #### Example response
> ```shell
> {
>     "status": "Ok",
>     "humanReadableStatus": "Ok",
>     "data": [
>         {
>             "address": "{{address}}",
>             "grpcEndpoint": {
>                 "host": "35.203.147.207",
>                 "port": 1973
>             },
>             "httpEndpoint": {
>                 "host": "35.203.147.207",
>                 "port": 1975
>             },
>             "type": "Delegate"
>         },
>     ..... ],
>     "created": "2018-09-05T22:30:28.845499275Z"
> }
> ```


```javascript
function listDelegates(callback)
```

#### Example Usage

```javascript


    controller.listDelegates(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



