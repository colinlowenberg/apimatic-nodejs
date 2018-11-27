/**
  * @module DispatchDisgoAPILib
  *
  * The Disgo API is a modern HTTP interface that follows the REST architecture with a JSON format.
  * Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API
  * errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are
  * understood by off-the-shelf HTTP clients. We support cross-origin resource sharing, allowing
  * you to interact securely with our API from a client-side web application. [JSON](http://www.
  * json.org) is returned by all API responses, including errors, although our API libraries
  * convert responses to appropriate language-specific objects.  ### HTTP Responses Disgo uses
  * conventional HTTP response codes to indicate the success or failure of an API request. Response
  * codes in the 200-299 range indicate success, codes in the 400-499 range indicate an error that
  * failed given the information provided, and codes in the 500-599 range indicate an error with
  * the Dispatch node. When a request is valid but does not complete successfully, we return a 402
  * error code.  #### Status and Error Codes | Status Code.          | Summary
  * |  | ---------------------------- |:-------------------------------:|  | 200 - OK
  * |Everything worked as expected. | | 400 - Bad Request       |The request was unacceptable,
  * often due to missing a required parameter. | | 401 - Unauthorized      |No valid API key
  * provided. | | 402 - Request Failed    |The parameters were valid but the request failed. | |
  * 404 - Not Found         |The requested resource doesn't exist. | | 405 - Method Not Allowed
  * |The requested resource doesn't exist. | | 409 - Conflict         |The request conflicts
  * with another request  | | 418 - I'm a teapot         |The node is not a delegate. Please use a
  * delegate when making this request.  | | 429 - Too Many Requests |Too many requests hit the API
  * too quickly. We recommend an exponential backoff of your requests. | | 500, 502, 503, 504 -
  * |Server Errors Something went wrong on Disgo's end. (These are rare.) |
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const TransactionsController = require('./Controllers/TransactionsController');
const ArtifactsComingSoonController = require('./Controllers/ArtifactsComingSoonController');
const SignTransactionsDevBranchController =
  require('./Controllers/SignTransactionsDevBranchController');
const AccountsController = require('./Controllers/AccountsController');
const DelegatesController = require('./Controllers/DelegatesController');
const Datum1 = require('./Models/Datum1');
const ListDelegatesResponse = require('./Models/ListDelegatesResponse');
const Receipt = require('./Models/Receipt');
const ListTransactionsResponse = require('./Models/ListTransactionsResponse');
const HttpEndpoint = require('./Models/HttpEndpoint');
const GrpcEndpoint = require('./Models/GrpcEndpoint');
const Datum = require('./Models/Datum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of DispatchDisgoAPILib
    Configuration,
    Environments,
    // controllers of DispatchDisgoAPILib
    TransactionsController,
    ArtifactsComingSoonController,
    SignTransactionsDevBranchController,
    AccountsController,
    DelegatesController,
    // models of DispatchDisgoAPILib
    Datum1,
    ListDelegatesResponse,
    Receipt,
    ListTransactionsResponse,
    HttpEndpoint,
    GrpcEndpoint,
    Datum,
    // exceptions of DispatchDisgoAPILib
    APIException,
};

module.exports = initializer;
