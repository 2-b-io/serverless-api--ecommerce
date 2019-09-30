(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/setting-image/create.js":
/*!***********************************************!*\
  !*** ./src/functions/setting-image/create.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! joi */ "joi");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rest_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rest/resource */ "./src/rest/resource.js");
/* harmony import */ var infrastructure_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! infrastructure/config */ "./src/infrastructure/config.js");
/* harmony import */ var services_setting_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/setting-image */ "./src/services/setting-image.js");





const SCHEMA = joi__WEBPACK_IMPORTED_MODULE_1___default.a.object().keys({
  identifier: joi__WEBPACK_IMPORTED_MODULE_1___default.a.string().trim().required(),
  settings: joi__WEBPACK_IMPORTED_MODULE_1___default.a.object()
});
/* harmony default export */ __webpack_exports__["default"] = (Object(rest_resource__WEBPACK_IMPORTED_MODULE_2__["default"])('SETTING_IMAGE')(async (req, session) => {
  const body = JSON.parse(req.body);
  const values = await joi__WEBPACK_IMPORTED_MODULE_1___default.a.validate(body, SCHEMA);
  const settingImage = await services_setting_image__WEBPACK_IMPORTED_MODULE_4__["default"].create(values);

  if (!settingImage) {
    return {
      statusCode: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["BAD_REQUEST"]
    };
  }

  return {
    statusCode: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["CREATED"],
    resource: settingImage
  };
}));

/***/ }),

/***/ "./src/functions/setting-image/get.js":
/*!********************************************!*\
  !*** ./src/functions/setting-image/get.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! joi */ "joi");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rest_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rest/resource */ "./src/rest/resource.js");
/* harmony import */ var infrastructure_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! infrastructure/config */ "./src/infrastructure/config.js");
/* harmony import */ var services_setting_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/setting-image */ "./src/services/setting-image.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(rest_resource__WEBPACK_IMPORTED_MODULE_2__["default"])('SETTING_IMAGE')(async (req, session) => {
  const {
    settingImageIdentifier
  } = req.pathParameters;
  const settingImage = await services_setting_image__WEBPACK_IMPORTED_MODULE_4__["default"].get(settingImageIdentifier);

  if (!settingImage) {
    throw {
      statusCode: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["NOT_FOUND"]
    };
  }

  return {
    statusCode: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["OK"],
    resource: settingImage
  };
}));

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/*! exports provided: SETTING__IMAGE___create, SETTING__IMAGE___get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_setting_image_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/setting-image/create */ "./src/functions/setting-image/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTING__IMAGE___create", function() { return _functions_setting_image_create__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _functions_setting_image_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/setting-image/get */ "./src/functions/setting-image/get.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTING__IMAGE___get", function() { return _functions_setting_image_get__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/infrastructure/config.js":
/*!**************************************!*\
  !*** ./src/infrastructure/config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mongo: {
    uri: process.env.MONGODB_URI,
    ttl: process.env.MONGODB_TTL
  },
  apps: {
    WEBAPP: 'webapp',
    EC_DEMO: 'ec-demo'
  }
});

/***/ }),

/***/ "./src/infrastructure/mongoose.js":
/*!****************************************!*\
  !*** ./src/infrastructure/mongoose.js ***!
  \****************************************/
/*! exports provided: register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ms */ "ms");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var infrastructure_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! infrastructure/config */ "./src/infrastructure/config.js");
// Using Mongoose With AWS Lambda: https://mongoosejs.com/docs/



let connection = null;
let connectionExpiration = null;
const ttl = ms__WEBPACK_IMPORTED_MODULE_1___default()(infrastructure_config__WEBPACK_IMPORTED_MODULE_2__["default"].mongo.ttl || '30s');

const connect = async () => {
  console.log('connect'); // Because `connection` is in the global scope, Lambda may retain it between
  // function calls thanks to `callbackWaitsForEmptyEventLoop`.
  // This means your Lambda function doesn't have to go through the
  // potentially expensive process of connecting to MongoDB every time.

  if (connection === null || connection.readyState !== 1) {
    console.log('Connecting to MongoDB...');
    connection = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(infrastructure_config__WEBPACK_IMPORTED_MODULE_2__["default"].mongo.uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      // Buffering means mongoose will queue up operations if it gets
      // disconnected from MongoDB and send them when it reconnects.
      // With serverless, better to fail fast if not connected.
      bufferCommands: false,
      // Disable mongoose buffering
      bufferMaxEntries: 0 // and MongoDB driver buffering

    });
    console.log('MongoDB connected!');
  } else {
    console.log('Reuse alive MongoDB connection.');
  } // reset expiration


  clearTimeout(connectionExpiration);
  connectionExpiration = setTimeout(() => {
    console.log('MongoDB Connection expired!');
    connection.close();
  }, ttl);
  return connection;
};

const register = async (modelName, schema) => {
  const connection = await connect();

  if (connection.modelNames().includes(modelName)) {
    return connection.model(modelName);
  } else {
    return connection.model(modelName, schema);
  }
}; // don't use `mpromise`

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = Promise;
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/models/setting-image.js":
/*!*************************************!*\
  !*** ./src/models/setting-image.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var infrastructure_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infrastructure/mongoose */ "./src/infrastructure/mongoose.js");

const schema = infrastructure_mongoose__WEBPACK_IMPORTED_MODULE_0__["default"].Schema({
  identifier: {
    type: String,
    unique: true,
    index: true
  },
  settings: {
    type: infrastructure_mongoose__WEBPACK_IMPORTED_MODULE_0__["default"].Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true,
  collection: 'settingImage'
});
/* harmony default export */ __webpack_exports__["default"] = (() => Object(infrastructure_mongoose__WEBPACK_IMPORTED_MODULE_0__["register"])('SettingImage', schema));

/***/ }),

/***/ "./src/rest/resource.js":
/*!******************************!*\
  !*** ./src/rest/resource.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isarray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isarray */ "isarray");
/* harmony import */ var isarray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isarray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serialize-error */ "serialize-error");
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serialize_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var transformers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! transformers */ "./src/transformers/index.js");
/* harmony import */ var utils_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/header */ "./src/utils/header.js");


 // import accountService from 'services/account'




const getSession = async req => {
  const {
    authorization
  } = Object(utils_header__WEBPACK_IMPORTED_MODULE_4__["normalizeHttpHeaders"])(req.headers);
  const {
    app,
    account: accountIdentifier
  } = Object(utils_header__WEBPACK_IMPORTED_MODULE_4__["parseAuthorizationHeader"])(authorization); // const account = accountIdentifier ?
  //   await accountService.get(accountIdentifier) :
  //   null

  if (accountIdentifier) {
    throw http_status_codes__WEBPACK_IMPORTED_MODULE_0__["UNAUTHORIZED"];
  }

  return {
    app // account

  };
};

const transform = (type, resource) => {
  const transformer = transformers__WEBPACK_IMPORTED_MODULE_3__[type] || (r => r);

  return isarray__WEBPACK_IMPORTED_MODULE_1___default()(resource) ? resource.map(transformer) : transformer(resource);
};

/* harmony default export */ __webpack_exports__["default"] = (resourceType => logic => {
  const handler = async (req, context) => {
    // Make sure to add this so you can re-use `connnection` between function calls.
    // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
    context.callbackWaitsForEmptyEventLoop = false;

    try {
      const session = await getSession(req);
      const {
        resource,
        statusCode
      } = await logic(req, session);
      return {
        statusCode,
        body: resource ? JSON.stringify(transform(resourceType, resource)) : null
      };
    } catch (error) {
      // validation error
      if (error.isJoi) {
        return {
          statusCode: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["BAD_REQUEST"],
          body: JSON.stringify({
            reason: error.details
          })
        };
      }

      return {
        statusCode: error.statusCode || http_status_codes__WEBPACK_IMPORTED_MODULE_0__["INTERNAL_SERVER_ERROR"],
        body: JSON.stringify({
          reason: serialize_error__WEBPACK_IMPORTED_MODULE_2___default()(error.reason || error)
        })
      };
    }
  };

  handler.logic = logic;
  return handler;
});

/***/ }),

/***/ "./src/services/setting-image.js":
/*!***************************************!*\
  !*** ./src/services/setting-image.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var models_setting_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models/setting-image */ "./src/models/setting-image.js");


const create = async ({
  identifier,
  settings = {}
}) => {
  const SettingImageModel = await Object(models_setting_image__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const settingImage = await new SettingImageModel({
    identifier,
    settings
  }).save();

  if (!settingImage) {
    return null;
  }

  return settingImage;
};

const get = async identifier => {
  const SettingImageModel = await Object(models_setting_image__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return await SettingImageModel.findOne({
    identifier
  });
}; // // TODO:  auto delete if upload handler from upload tool


/* harmony default export */ __webpack_exports__["default"] = ({
  create,
  get
});

/***/ }),

/***/ "./src/transformers/index.js":
/*!***********************************!*\
  !*** ./src/transformers/index.js ***!
  \***********************************/
/*! exports provided: SETTING_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-image */ "./src/transformers/setting-image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTING_IMAGE", function() { return _setting_image__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/transformers/setting-image.js":
/*!*******************************************!*\
  !*** ./src/transformers/setting-image.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (imageSetting => ({
  identifier: imageSetting.identifier,
  settings: imageSetting.settings,
  timestamps: imageSetting.timestamps,
  createdAt: imageSetting.createdAt
}));

/***/ }),

/***/ "./src/utils/header.js":
/*!*****************************!*\
  !*** ./src/utils/header.js ***!
  \*****************************/
/*! exports provided: normalizeHttpHeaders, parseAuthorizationHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHttpHeaders", function() { return normalizeHttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAuthorizationHeader", function() { return parseAuthorizationHeader; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);

const normalizeHttpHeaders = headers => Object.entries(headers).reduce((headers, [name, value]) => _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, headers, {
  [name.toLocaleLowerCase()]: value
}), {});
const parseAuthorizationHeader = value => {
  const [type, params] = value.split(' ');
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    type
  }, params.split(',').reduce((map, pair) => {
    const [name, value] = pair.split('=');
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, map, {
      [name]: value
    });
  }, {}));
};

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "isarray":
/*!**************************!*\
  !*** external "isarray" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isarray");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "ms":
/*!*********************!*\
  !*** external "ms" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),

/***/ "serialize-error":
/*!**********************************!*\
  !*** external "serialize-error" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-error");

/***/ })

/******/ })));
//# sourceMappingURL=handler.js.map