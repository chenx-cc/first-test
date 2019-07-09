webpackJsonp([13],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiManualServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiManualServiceProvider = /** @class */ (function () {
    function ApiManualServiceProvider(commonService) {
        this.commonService = commonService;
    }
    ApiManualServiceProvider.prototype.manual = function (getOpId, getCategoryId, getStoreNo) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/manual/' + getOpId + '/' + getCategoryId + '/' + getStoreNo)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiManualServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiManualServiceProvider);
    return ApiManualServiceProvider;
}());

//# sourceMappingURL=api-manual-service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiControlServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiControlServiceProvider = /** @class */ (function () {
    function ApiControlServiceProvider(commonService) {
        this.commonService = commonService;
    }
    ApiControlServiceProvider.prototype.getCheckList = function (getTaskId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/chkList/' + getTaskId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiControlServiceProvider.prototype.changeStatus = function (taskId, status, lockTask) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = { 'lockTask': lockTask };
                        return [4 /*yield*/, this.commonService.doPost('/task/' + taskId + '/' + status, param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiControlServiceProvider.prototype.changeCheckList = function (getTaskId, checkListId, lineNo, chkStatus, lockChkListInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = { 'chkStatus': chkStatus, 'lockChkListInfo': lockChkListInfo };
                        return [4 /*yield*/, this.commonService.doPost('/chkList/' + getTaskId + '/' + checkListId + '/' + lineNo, param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiControlServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiControlServiceProvider);
    return ApiControlServiceProvider;
}());

//# sourceMappingURL=api-control-service.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTaskuServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiTaskuServiceProvider = /** @class */ (function () {
    function ApiTaskuServiceProvider(commonService) {
        this.commonService = commonService;
    }
    ApiTaskuServiceProvider.prototype.getTaskDetail = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/task/' + taskId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    //GETWORKER
    ApiTaskuServiceProvider.prototype.getWorker = function (storeNo, categoryId, opId, date, stime, etime) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/worker/' + storeNo + "/" + categoryId + "/" + opId + '?date=' + date + '&sTime=' + stime + '&eTime=' + etime)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    //UPDATECHECK
    ApiTaskuServiceProvider.prototype.taskUpdateCheck = function (storeNo, workerId, date, stime, etime, categoryId, opId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/worker/' + storeNo + '?workerId=' + workerId + '&date=' + date + '&stime=' + stime + '&etime=' + etime + '&categoryId=' + categoryId + '&opId=' + opId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    //UPDATE
    ApiTaskuServiceProvider.prototype.taskUpdate = function (getTaskID, taskInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = taskInfo;
                        return [4 /*yield*/, this.commonService.doPost('/task/' + getTaskID, param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiTaskuServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiTaskuServiceProvider);
    return ApiTaskuServiceProvider;
}());

//# sourceMappingURL=api-tasku-service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTaskcServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiTaskcServiceProvider = /** @class */ (function () {
    function ApiTaskcServiceProvider(commonService) {
        this.commonService = commonService;
    }
    //GETCATEGORY
    ApiTaskcServiceProvider.prototype.getCategory = function (storeNo) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/category/' + '?storeNo=' + storeNo)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    //GETSHITF
    ApiTaskcServiceProvider.prototype.getShift = function (storeNo) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/shift/' + '?storeNo=' + storeNo)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    //GETWORKERandSHIFT
    ApiTaskcServiceProvider.prototype.getWorkerShift = function (storeNo, categoryId, opId, date, shiftId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/worker/' + storeNo + "/" + categoryId + "/" + opId + '?date=' + date + '&shiftId=' + shiftId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    //GETWORKERandTIME
    ApiTaskcServiceProvider.prototype.getWorkerTime = function (storeNo, categoryId, opId, date, sTime, eTime) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/worker/' + storeNo + "/" + categoryId + "/" + opId + '?date=' + date + '&sTime=' + sTime + '&eTime=' + eTime)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    //CREATTASK
    ApiTaskcServiceProvider.prototype.createTask = function (opId, opNm, workerId, categoryId, taskPoolKbn, taskPriorityKbn, planSTime, planETime, storeNo, taskDate) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            "opId": opId,
                            "opNm": opNm,
                            "workerId": workerId,
                            "categoryId": categoryId,
                            "taskPoolKbn": taskPoolKbn,
                            "taskPriorityKbn": taskPriorityKbn,
                            "planSTime": planSTime,
                            "planETime": planETime,
                            "storeNo": storeNo,
                            "taskDate": taskDate
                        };
                        return [4 /*yield*/, this.commonService.doPut('/task', param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiTaskcServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiTaskcServiceProvider);
    return ApiTaskcServiceProvider;
}());

//# sourceMappingURL=api-taskc-service.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selstore_selstore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_login_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sqlite_sqlite__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, service, formBuilder, loadingCtrl, sqlite, storage, keyboard, device) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.sqlite = sqlite;
        this.storage = storage;
        this.keyboard = keyboard;
        this.device = device;
        this.imgHid = false;
        this.loginForm = this.formBuilder.group({
            aplUserId: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
        this.password = this.loginForm.controls['password'];
        this.aplUserId = this.loginForm.controls['aplUserId'];
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.getUser();
        this.keyboard.onKeyboardShow().subscribe(function () {
            _this.imgHid = true;
            document.body.classList.add('keyboard-is-open');
            var sContent = document.getElementsByClassName('scroll-content');
            if (sContent.length > 0) {
                if (sContent[0] != undefined && sContent[0] != null) {
                    sContent[0].setAttribute('style', 'padding-bottom: 0px;');
                }
            }
        });
        this.keyboard.onKeyboardHide().subscribe(function () {
            _this.imgHid = false;
            document.body.classList.remove('keyboard-is-open');
        });
    };
    LoginPage.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sqlite.selectData()];
                    case 1:
                        result = _a.sent();
                        if (result != undefined && result != null) {
                            this.userId = result.userID;
                            this.passwd = result.passWD;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 入力のユーザーID、パスワードでログインする
     * @param value フォームの項目バリュー
     */
    LoginPage.prototype.login = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var uuid, res, result, msgInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // isShowの初期化
                        this.storage.remove('isShow');
                        LoginPage_1.loginLoading = this.loadingCtrl.create({
                            content: ''
                        });
                        LoginPage_1.loginLoading.present();
                        if (this.device.uuid == null) {
                            uuid = 'hasnotuuid';
                        }
                        else {
                            uuid = this.device.uuid;
                        }
                        return [4 /*yield*/, this.service.login(value.aplUserId, uuid, value.password)];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            LoginPage_1.loginLoading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (msgInfo.statusCd == 'SB200') {
                            this.storage.set('accessToken', result.accessToken);
                            this.sqlite.deleteData();
                            this.sqlite.insertData(value.aplUserId, value.password);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__selstore_selstore__["a" /* SelstorePage */], { aplUserId: value.aplUserId, deviceId: uuid });
                        }
                        else {
                            LoginPage_1.loginLoading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.hidImg = function () {
        this.imgHid = true;
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\login\login.html"*/'<!-- ログイン画面 -->\n\n<ion-content>\n\n    <form [formGroup]="loginForm" (ngSubmit)="login(loginForm.value)" novalidate style="height: 100%;">\n\n        <ion-grid style="height: 100%; display: flex; padding: 0;">\n\n            <ion-row justify-content-center style="flex: 3; align-items:flex-end" id="loginImg" [hidden]="imgHid">\n\n                <ion-col col-5>\n\n                        <div class="con-img">\n\n                            <img src="assets/imgs/sign.png" /><span></span> \n\n                        </div>\n\n                </ion-col>\n\n            </ion-row>  \n\n            <ion-row style="flex: 2;">\n\n                <ion-col>\n\n                    <div class="pw-con" style="height: 100%; width: 100%; margin: 0;">\n\n                        <ion-item style="width:40%">\n\n                            <ion-label stacked style="font-size: 1vw;">ユーザー ID</ion-label>\n\n                            <ion-input type="text" style="font-size: 1.5vw;" [formControl]="aplUserId" maxlength="8" [(ngModel)]=\'userId\' (ionFocus)=\'hidImg()\' clearInput=true></ion-input>\n\n                        </ion-item>\n\n                        <div *ngIf="aplUserId.hasError(\'required\') && aplUserId.touched" class="error-message" style="font-size: 1vw;">アプリユーザー IDを入力してください。</div>\n\n                        <ion-item style="width:40%">\n\n                            <ion-label stacked style="font-size: 1vw;">パスワード</ion-label>\n\n                            <ion-input type="password" style="font-size: 1.5vw;" [formControl]="password" maxlength="20" [(ngModel)]=\'passwd\' (ionFocus)=\'hidImg()\' clearInput=true></ion-input>\n\n                        </ion-item>\n\n                        <div *ngIf="password.hasError(\'required\') && password.touched" class="error-message" style="font-size: 1vw;">パスワードを入力してください。</div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row justify-content-center style="flex: 1; padding-bottom: 2%;">\n\n                <ion-col>\n\n                    <div class="con-button">\n\n                        <button ion-button round color="warn" class="login-button" type="submit" [disabled]="!loginForm.valid">\n\n                            ログイン\n\n                        </button>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\login\login.html"*/,
        })
        /**
         *
         * 概 要： ログイン処理
         * 作成日：2018.01.30
         * 作成者：DHC孫志棟
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_login_service__["a" /* ApiLoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_sqlite_sqlite__["a" /* SQLiteProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelstorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_selstore_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_view_common_ViewCommon__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the SelstorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelstorePage = /** @class */ (function () {
    function SelstorePage(navCtrl, navParams, alertCtrl, loadingCtrl, appCtrl, service, push, scheduleProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.service = service;
        this.push = push;
        this.scheduleProvider = scheduleProvider;
        this.shopList = [];
        this.userId = this.navParams.get('aplUserId');
    }
    SelstorePage.prototype.ionViewDidLoad = function () {
        this.selstore();
    };
    SelstorePage.prototype.shopChecked = function (no, nm) {
        this.storeNoChecked = no;
        this.storeNmChecked = nm;
    };
    SelstorePage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SelstorePage.prototype.goHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, date, selDate, selTime, res, result, msgInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        date = new Date();
                        selDate = __WEBPACK_IMPORTED_MODULE_6__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(date);
                        selTime = __WEBPACK_IMPORTED_MODULE_6__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.storeNoChecked, selDate, selTime, '0')];
                    case 1:
                        res = _a.sent();
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (msgInfo.msgCd == 'MSE400003') {
                            __WEBPACK_IMPORTED_MODULE_8__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            loading.dismiss();
                            return [2 /*return*/];
                        }
                        loading.dismiss();
                        // 自動通知　要件がなくなるので、一旦コメントアウト
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */], {
                            storeNo: this.storeNoChecked, storeNm: this.storeNmChecked,
                            res: res, aplUserId: this.userId, viewKbn: '0', selectedText: 'カレンダー( 業務別 )',
                            selectedDate: selDate
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SelstorePage.prototype.selstore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, result, msgInfo, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.selstore(this.userId)];
                    case 1:
                        res = _a.sent();
                        __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */].loginLoading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_8__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.shopList = result['storeList'];
                                if (this.shopList.length > 0) {
                                    this.storeNoChecked = this.shopList[0].storeNo;
                                    this.storeNmChecked = this.shopList[0].storeNm;
                                }
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_1 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_1.present();
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_8__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SelstorePage.prototype.initPushNotification = function () {
        var _this = this;
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        }).catch(function (err) {
            console.error('Error', err);
            return;
        });
        // to initialize push notifications
        var options = {
            android: {
                senderID: '759576800446'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
            browser: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            var xmsg = notification.additionalData.default;
            var jmsg = JSON.parse(xmsg.GCM);
            var msg = jmsg.data.Message;
            var alert = _this.alertCtrl.create({
                title: '警告',
                subTitle: msg,
                buttons: ['OK']
            });
            alert.present();
        });
        pushObject.on('registration').subscribe(function (registration) {
            console.log('on registration');
            _this.registrationId = registration.registrationId;
            _this.insertPush(_this.registrationId);
        });
    };
    // registrationIdのデータを挿入する
    SelstorePage.prototype.insertPush = function (deviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var res, result, msgInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.registDevice(this.userId, deviceId, this.storeNoChecked)];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_8__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (msgInfo.statusCd != 'SB200') {
                            __WEBPACK_IMPORTED_MODULE_8__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SelstorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selstore',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\selstore\selstore.html"*/'<!-- 店舗一覧選択画面 -->\n\n<ion-content>\n\n  <ion-grid style="height: 100%; display: flex; padding: 0;">\n\n    <ion-row justify-content-center style="flex: 1;">\n\n      <ion-col style="flex: 1;">\n\n        <div class="width-100 sel-header">お店を選択して下さい</div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row style="flex: 4;">\n\n      <ion-col style="flex: 1;">\n\n        <div class="width-100 sel-con">\n\n          <ion-list radio-group class="margin-0" style="width:50%;" no-lines>\n\n            <ion-item *ngFor="let item of shopList; let i= index" style="border-top:0;border-bottom: 0.0625em solid #ccc;">\n\n              <ion-label style="font-size: 1.8vw;">{{item.storeNm}}</ion-label>\n\n              <ion-radio value="{{item.storeNm}}" checked="{{i==0? true: false}}" (click)="shopChecked(item.storeNo,item.storeNm)"></ion-radio>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row style="flex: 1; padding-bottom: 2%;">\n\n      <ion-col>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button round color="heaButton" style="width:40%;" class="go-button" (click)="goBack()">戻る</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button round color="warn" style="width:54%;float:right" class="go-button" (click)="goHome()" [disabled]="shopList.length == 0 ? true:false">決定</button>\n\n      </ion-col>\n\n      <ion-col>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\selstore\selstore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_selstore_service__["a" /* ApiSelstoreServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */]])
    ], SelstorePage);
    return SelstorePage;
}());

//# sourceMappingURL=selstore.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_manual_service__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManualPage = /** @class */ (function () {
    function ManualPage(navCtrl, navParams, alertCtrl, loadingCtrl, service, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.events = events;
        this.manualList = [];
    }
    ManualPage.prototype.ionViewDidLoad = function () {
        this.headerName = '留意点';
        this.manualList = this.navParams.get('manualList');
    };
    ManualPage.prototype.goBackPop = function () {
        this.navCtrl.pop();
    };
    ManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manual',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\manual\manual.html"*/'<!-- manual画面 -->\n\n<ion-header>\n\n    <ion-item no-lines color="warn" style="height:50px;">\n\n      <ion-label item-start>\n\n        <ion-icon name="md-arrow-dropleft" color="light" class="font-30 font-w" (click)="goBackPop()"></ion-icon>\n\n      </ion-label>\n\n      <ion-label item-content></ion-label>\n\n      <ion-label item-start class="text-center font-18 bold-white" icon-right>\n\n        {{headerName}}\n\n        <ion-icon name="alert-outline" class="font-20 font-w" hidden></ion-icon>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <div class="width-100 font-18 font-w">\n\n      <div class="width-100 con border-top" *ngFor="let item of manualList">\n\n        <div class="width-20 con-center pad-10 white">{{item.datetime}}</div>\n\n        <div class="width-80 wid-left pad-10 border-bottom">{{item.manualContents}}</div>\n\n      </div>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\manual\manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_manual_service__["a" /* ApiManualServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ManualPage);
    return ManualPage;
}());

//# sourceMappingURL=manual.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandoveruPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_s3_common_s3_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_handover_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__schedule_schedule__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__board_board__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var HandoveruPage = /** @class */ (function () {
    function HandoveruPage(navCtrl, navParams, alertCtrl, appCtrl, camera, s3Util, loadingCtrl, handoverProvider, scheduleProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appCtrl = appCtrl;
        this.camera = camera;
        this.s3Util = s3Util;
        this.loadingCtrl = loadingCtrl;
        this.handoverProvider = handoverProvider;
        this.scheduleProvider = scheduleProvider;
        this.events = events;
        this.isShowWorkerFlg = true;
        this.showWorkerList = [];
        this.selectWorker = '';
        this.workerId = '';
    }
    HandoveruPage.prototype.ionViewDidLoad = function () {
        this.getData = this.navParams.data;
        this.frameNm = '引継修正';
        this.minDateTime = new Date().toISOString();
        this.maxDateTime = '2050-01-01';
        this.taskId = this.getData['taskId'];
        this.handoverId = this.getData['handoverId'];
        this.handoverOpId = this.getData['handoverOpId'];
        this.handoverOp = this.getData['handoverOp'];
        this.timeSlotId = this.getData['timeSlotId'];
        this.handoverTimeSolt = this.getData['handoverTimeSolt'];
        this.workerId = this.getData['workerId'];
        this.handoverWorker = this.getData['handoverWorker'];
        this.handoverContents = this.getData['handoverContents'];
        this.handoverPicFlg = false;
        if (this.getData['handoverDate'] != undefined && this.getData['handoverDate'] != '') {
            this.handoverDate = this.getData['handoverDate'];
            this.handoverDateF = this.getData['handoverDate'].substr(0, 4)
                + '-' + this.getData['handoverDate'].substr(4, 2)
                + '-' + this.getData['handoverDate'].substr(6, 2)
                + 'T' + this.getData['handoverDate'].substr(8, 2)
                + ':' + this.getData['handoverDate'].substr(10, 2)
                + ':00Z';
        }
        this.imgPath = this.getData['imgPath'];
        this.selectWorker = this.handoverWorker;
        //getWorker
        this.getWorker();
        var mythis = this;
        var callback = function (data, mythis) {
            if (data != null) {
                var bin = '';
                for (var i = 0, l = data.Body.length; i < l; i++) {
                    bin += String.fromCharCode(data.Body[i]);
                }
                mythis.base64Data = btoa(bin);
                mythis.handoverPic = 'data:image/png;base64,' + mythis.base64Data;
                mythis.handoverPicFlg = true;
            }
            else {
                mythis.handoverPic = 'assets/imgs/noImage/NoImage.png';
                mythis.handoverPicFlg = true;
            }
            //スピナー削除
            if (mythis.loading != null) {
                mythis.loading.dismiss();
            }
        };
        var errcallback = function () {
            mythis.handoverPicFlg = true;
        };
        //S3検索
        if (this.imgPath != undefined && this.imgPath != null && this.imgPath != '') {
            this.s3Util.getObject(callback, errcallback, mythis);
        }
        else {
            this.handoverPic = 'assets/imgs/noImage/NoImage.png';
            this.handoverPicFlg = true;
        }
    };
    HandoveruPage.prototype.isShowWorker = function () {
        if (this.isShowWorkerFlg) {
            this.isShowWorkerFlg = false;
        }
        else {
            this.isShowWorkerFlg = true;
        }
    };
    HandoveruPage.prototype.selectedName = function (id, name) {
        this.selectWorker = name;
        this.workerId = id;
    };
    HandoveruPage.prototype.doNoCameraAlert = function () {
        var alert = this.alertCtrl.create({
            title: '警告',
            subTitle: 'このデバイスにはカメラがありません。',
            buttons: ['OK']
        });
        alert.present(alert);
    };
    HandoveruPage.prototype.takePicture = function () {
        var _this = this;
        if (navigator.camera === undefined) {
            // カメラがない
            this.doNoCameraAlert();
        }
        else {
            this.camera.getPicture({
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: this.camera.EncodingType.PNG,
                targetWidth: 600,
                targetHeight: 600,
                saveToPhotoAlbum: false // 写真撮影後に端末に画像を保存するかどうか
            }).then(function (imageData) {
                // base64Imageの更新
                _this.base64Image = imageData;
                _this.handoverPic = 'data:image/png;base64,' + imageData;
            }, function (error) {
                console.log("ERROR -> " + JSON.stringify(error));
            });
        }
    };
    HandoveruPage.prototype.uploads3 = function (delFlg) {
        var mythis = this;
        var callback1 = function (data, mythis) {
        };
        var callback2 = function (data, mythis) {
            //スピナー削除
            if (mythis.loading != null) {
                mythis.loading.dismiss();
            }
        };
        if (delFlg) {
            this.s3Util.delObject(callback1, mythis);
        }
        //S3upload
        this.s3Util.uploadToS3(callback2, mythis);
    };
    HandoveruPage.prototype.updHandover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert_1, alert_2, delFlg, alert_3, lockHandoverInfo, res, result, msgInfo, alert_4, alert_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.selectWorker == '') {
                            alert_1 = this.alertCtrl.create({
                                title: '入力者はご入力してください。',
                                buttons: ['OK']
                            });
                            alert_1.present();
                            return [2 /*return*/];
                        }
                        if (this.handoverDate == undefined || this.handoverDate == '') {
                            alert_2 = this.alertCtrl.create({
                                title: '引継日時はご入力してください。',
                                buttons: ['OK']
                            });
                            alert_2.present();
                            return [2 /*return*/];
                        }
                        delFlg = true;
                        if (this.imgPath == undefined || this.imgPath == null || this.imgPath == '') {
                            if (this.base64Image != undefined) {
                                if (this.taskId != undefined) {
                                    this.imgPath = 'img/' + this.getData['aplUserId'] + '/'
                                        + this.getData['storeNo'] + '/task/' + this.taskId + __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__["a" /* UtilityService */].fmtSysDateTime(new Date()) + '.png';
                                }
                                else if (this.timeSlotId != undefined) {
                                    this.imgPath = 'img/' + this.getData['aplUserId'] + '/'
                                        + this.getData['storeNo'] + '/timeslot/' + this.timeSlotId + __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__["a" /* UtilityService */].fmtSysDateTime(new Date()) + '.png';
                                }
                                delFlg = false;
                            }
                        }
                        if ((this.handoverContents == undefined || this.handoverContents == '')
                            && (this.imgPath == undefined || this.imgPath == '')) {
                            alert_3 = this.alertCtrl.create({
                                title: '引継内容や画像はいずれかご入力してください。',
                                buttons: ['OK']
                            });
                            alert_3.present();
                            return [2 /*return*/];
                        }
                        this.goBackLoading = this.loadingCtrl.create({
                            content: ''
                        });
                        this.goBackLoading.present();
                        lockHandoverInfo = __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__["a" /* ObjUti */].getLockHandoverObject(this.getData);
                        if (this.timeSlotId != null) {
                            lockHandoverInfo['taskId'] = null;
                        }
                        return [4 /*yield*/, this.handoverProvider.uptHandover(this.handoverId, this.workerId, this.handoverContents, this.imgPath, this.handoverDate, lockHandoverInfo)];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                if (this.base64Image != undefined) {
                                    if (this.base64Data != this.base64Image) {
                                        this.uploads3(delFlg);
                                    }
                                }
                                this.getData['workerId'] = this.workerId;
                                this.getData['handoverWorker'] = this.selectWorker;
                                this.getData['handoverContents'] = this.handoverContents;
                                this.getData['handoverDate'] = this.handoverDate;
                                this.getData['imgPath'] = this.imgPath;
                                this.goBackLoading.dismiss();
                                this.goBackPop();
                            }
                            else if (msgInfo.statusCd == 'SB400') {
                                this.goBackLoading.dismiss();
                                alert_4 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.selAlert();
                                            }
                                        },
                                    ],
                                    enableBackdropDismiss: false
                                });
                                alert_4.present();
                                return [2 /*return*/];
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                this.goBackLoading.dismiss();
                                alert_5 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_5.present();
                                return [2 /*return*/];
                            }
                            else {
                                this.goBackLoading.dismiss();
                                __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HandoveruPage.prototype.goBackPop = function () {
        this.navCtrl.pop();
    };
    HandoveruPage.prototype.getWorker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, result, msgInfo, alert_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handoverProvider.getWorker(this.getData['storeNo'])];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.showWorkerList = result['workerList'];
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_6 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_6.present();
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HandoveruPage.prototype.changeDate = function (sdate) {
        this.handoverDate = sdate.substr(0, 4)
            + sdate.substr(5, 2)
            + sdate.substr(8, 2)
            + sdate.substr(11, 2)
            + sdate.substr(14, 2);
    };
    HandoveruPage.prototype.clearHandoverDate = function () {
        this.handoverDate = '';
        this.handoverDateF = '';
    };
    //アラートが発生する時、再検索処理
    HandoveruPage.prototype.selAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, loading, selTime, res, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        selTime = __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.getData['storeNo'], this.getData['selectedDate'], selTime, this.getData['viewKbn'])];
                    case 1:
                        res = _a.sent();
                        params = {
                            res: res, selectedText: this.getData['selectedText'], storeNo: this.getData['storeNo'],
                            storeNm: this.getData['storeNm'], viewKbn: this.getData['viewKbn'], aplUserId: this.getData['aplUserId'],
                            selectedDate: this.getData['selectedDate'], currentTimeSlotId: this.getData['currentTimeSlotId'],
                            dragFlg: true
                        };
                        loading.dismiss().then(function () {
                            if (_this.getData['viewKbn'] == '0' || _this.getData['viewKbn'] == '1') {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__schedule_schedule__["a" /* SchedulePage */], params);
                            }
                            else {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__board_board__["a" /* BoardPage */], params);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HandoveruPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-handoveru',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\handoveru\handoveru.html"*/'<ion-header>\n\n    <ion-item no-lines color="warn" style="height:50px;">\n\n        <ion-label item-start>\n\n            <ion-icon name="md-arrow-dropleft" color="light" class="font-30 font-w" (click)="goBackPop()"></ion-icon>\n\n        </ion-label>\n\n        <ion-label item-content></ion-label>\n\n        <ion-label item-start class="text-center font-18 bold-white" icon-right>\n\n            {{frameNm}}\n\n            <ion-icon name="alert-outline" class="font-20 font-w" hidden></ion-icon>\n\n        </ion-label>\n\n    </ion-item>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="width-100 con-left" style="height:90%;margin-bottom:1%;overflow:scroll">\n\n        <div class="width-50 font-16 font-w">\n\n            <div class="width-95 border-top">\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">入力者</div>\n\n                    <div class="pad-5 border-right border-bottom text-right" style="width:55%;padding-right:1%;display:flex;align-items:center;justify-content:flex-end">\n\n                        {{selectWorker}}\n\n                    </div>\n\n                    <div class="pad-10 border-right border-bottom con-on-off {{isShowWorkerFlg?\'wb-color\':\'gw-color\'}}" style="width:5%" (click)="isShowWorker()">\n\n                        <ion-icon name="md-arrow-dropright"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">引継日時</div>\n\n                    <ion-datetime class="contain pad-10 border-bottom text-right" style="width:55%" displayFormat="YYYY/MM/DD HH:mm" text-right\n\n                        min="{{minDateTime}}" max="{{maxDateTime}}" [(ngModel)]="handoverDateF" (ngModelChange)="changeDate(handoverDateF)"\n\n                        doneText="OK" cancelText="Cancel"></ion-datetime>\n\n                    <div class="pad-10 border-right border-bottom con-on-off" style="width:5%" (click)="clearHandoverDate()">\n\n                        <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left" *ngIf="handoverOpId != null">\n\n                    <div class="width-40 pad-10 con-center color">引継先業務</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{handoverOp}}</div>\n\n                </div>\n\n                <div class="con-left" *ngIf="timeSlotId != null">\n\n                    <div class="width-40 pad-10 con-center color">引継先時間帯</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{handoverTimeSolt}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">引継内容</div>\n\n                    <textarea type="text" maxlength="434" class="width-60 pad-10 border-0 border-right border-bottom text-left" style="height:300px;"\n\n                        name="handoverContents" [(ngModel)]="handoverContents"></textarea>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">\n\n                        <div>画像</div>\n\n                        <div>\n\n                            <ion-icon name="md-camera" color="warn" style="font-size:40px;" (click)="takePicture()"></ion-icon>\n\n                        </div>\n\n                    </div>\n\n                    <div class="width-60 pad-10 border-right border-bottom con-pic" style="height:300px;">\n\n                        <ion-spinner name="crescent" class="spinner spinner-ios spinner-crescent spinner-ios-crescent" *ngIf="!handoverPicFlg"></ion-spinner>\n\n                        <img src="{{handoverPic}}" width="100%" height="100%" *ngIf="handoverPicFlg" />\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="width-50 font-16 font-w border-left">\n\n            <div class="width-100 height-100" style="overflow: scroll">\n\n                <div [hidden]="isShowWorkerFlg">\n\n                    <div *ngFor="let item of showWorkerList; let i= index" (click)="selectedName(item.workerId,item.workerNm)">\n\n                        <div class="width-100 pad-10 border-right border-top border-bottom text-right">\n\n                            {{item.workerNm}}\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-item no-lines style="padding-left:5px;">\n\n        <ion-label item-start></ion-label>\n\n        <button ion-button round item-start color="warn" style="height:40px;width:200px;" class="bold-white" (click)="updHandover()">\n\n            <ion-label class="font-16 font-w">登録</ion-label>\n\n        </button>\n\n        <ion-label item-end></ion-label>\n\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\handoveru\handoveru.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__providers_s3_common_s3_service__["a" /* S3Util */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_handover_service__["a" /* ApiHandoverServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], HandoveruPage);
    return HandoveruPage;
}());

//# sourceMappingURL=handoveru.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskrd_taskrd__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_tasku_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_service_api_handover_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__schedule_schedule__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__board_board__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_store_timer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_keyboard__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















/**
 * Generated class for the TaskuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskuPage = /** @class */ (function () {
    function TaskuPage(navCtrl, appCtrl, storeTimer, navParams, alertCtrl, loadingCtrl, service, handoverProvider, scheduleProvider, events, keyboard) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.storeTimer = storeTimer;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.handoverProvider = handoverProvider;
        this.scheduleProvider = scheduleProvider;
        this.events = events;
        this.keyboard = keyboard;
        this.checkList = [];
        this.getData = {};
        this.idxH = 0;
        this.idxM = 0;
    }
    TaskuPage.prototype.ionViewDidLoad = function () {
        this.initTime();
    };
    TaskuPage.prototype.ionViewWillEnter = function () {
        this.keyboard.onKeyboardShow().subscribe(function () {
            document.body.classList.add('keyboard-is-open');
            var pageTaskU = document.getElementById('ion-tasku');
            if (pageTaskU != undefined && pageTaskU != null) {
                var sContent = pageTaskU.getElementsByClassName('scroll-content');
                if (sContent.length > 0) {
                    if (sContent[0] != undefined && sContent[0] != null) {
                        sContent[0].setAttribute('style', 'padding-bottom: 0px;margin-top: 50px;');
                    }
                }
            }
        });
        this.keyboard.onKeyboardHide().subscribe(function () {
            document.body.classList.remove('keyboard-is-open');
            var pageMainPad = document.getElementById('mainPad');
            if (pageMainPad != undefined && pageMainPad != null) {
                var sContent = pageMainPad.getElementsByClassName('scroll-content');
                if (sContent.length > 0) {
                    if (sContent[0] != undefined && sContent[0] != null) {
                        sContent[0].setAttribute('style', 'padding-bottom: 0px;margin-top: 100px;');
                    }
                }
            }
        });
        this.getData = this.navParams.data;
        this.getTaskID = this.getData['taskId'];
        this.getWorkerId = this.getData['workerId'];
        this.viewKbn = this.getData['viewKbn'];
        this.minDateTime = '1950-01-01';
        this.maxDateTime = '2050-01-01';
        this.pageNm = '業務登録';
        this.timeSlotInfoList = this.getData['obj']['timeSlotInfoList'];
        this.categoryInfoLists = this.getData['obj']['categoryInfoLists'];
        this.categoryInfoList = this.getData['obj']['categoryInfoList'];
        this.activeIndex = this.getData['obj']['activeIndex'];
        this.noAssign = this.getData['obj']['noAssign'];
        this.slideList = this.getData['obj']['slideList'];
        this.getWorkerAgain = false;
        this.getTaskDetail();
    };
    TaskuPage.prototype.initTime = function () {
        var hours = [];
        var minutes = [];
        for (var i = 0; i < 24; i++) {
            var obj = new Object();
            obj['description'] = __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(i);
            hours.push(obj);
        }
        for (var j = 0; j < 60; j++) {
            var obj = new Object();
            obj['description'] = __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(j);
            minutes.push(obj);
        }
        this.timePicker = {
            hours: hours,
            minutes: minutes
        };
    };
    TaskuPage.prototype.changeWorker = function (item) {
        this.getWorkerId = item.workerId == '' ? undefined : item.workerId;
        this.workerNm = item.workerNm;
    };
    TaskuPage.prototype.changeDate = function (date) {
    };
    TaskuPage.prototype.opnmChange = function (nm) {
        var opName = nm.trim();
        if (opName != "" || opName != undefined || opName != null) {
            this.opNm = opName;
        }
    };
    TaskuPage.prototype.changeON = function (flg) {
        if (flg) {
            this.OFF = false;
            this.taskPoolKbn = 0;
        }
        else {
            this.OFF = true;
            this.taskPoolKbn = 1;
        }
    };
    TaskuPage.prototype.changeOFF = function (flg) {
        if (flg) {
            this.ON = false;
            this.taskPoolKbn = 1;
        }
        else {
            this.ON = true;
            this.taskPoolKbn = 0;
        }
    };
    TaskuPage.prototype.changeLOW = function (Flg) {
        if (Flg) {
            this.LOW = true;
            this.HIGH = false;
            this.taskPriorityKbn = 0;
        }
        else {
            this.LOW = false;
            this.HIGH = true;
            this.taskPriorityKbn = 1;
        }
    };
    TaskuPage.prototype.changeHIGH = function (Flg) {
        if (Flg) {
            this.LOW = false;
            this.HIGH = true;
            this.taskPriorityKbn = 1;
        }
        else {
            this.LOW = true;
            this.HIGH = false;
            this.taskPriorityKbn = 0;
        }
    };
    TaskuPage.prototype.goBackPop = function () {
        this.navCtrl.pop();
    };
    //登録 ボータン押下
    TaskuPage.prototype.updateTask = function () {
        var _this = this;
        if (((this.startDate == '' && this.startTime == '' && this.endDate == '' && this.endTime == '') ||
            (this.startDate != '' && this.startTime != '' && this.endDate != '' && this.endTime != '')) &&
            (this.opNm != "" && this.opNm != undefined && this.opNm != null)) {
            if (this.startDate == this.endDate && this.startTime.substr(0, 2) > this.endTime.substr(0, 2)) {
                var alert_1 = this.alertCtrl.create({
                    title: '開始時間より大きい終了時間を入力ください。',
                    buttons: ['OK']
                });
                alert_1.present();
                return;
            }
            if (this.startDate == this.endDate &&
                this.startTime.substr(0, 2) == this.endTime.substr(0, 2) &&
                this.startTime.substr(3, 2) > this.endTime.substr(3, 2)) {
                var alert_2 = this.alertCtrl.create({
                    title: '開始時間より大きい終了時間を入力ください。',
                    buttons: ['OK']
                });
                alert_2.present();
                return;
            }
            var alert_3 = this.alertCtrl.create({
                title: '修正してよろしいでしょうか？',
                buttons: [
                    {
                        text: 'キャンセル ',
                        handler: function () {
                        }
                    },
                    {
                        text: '確認',
                        handler: function () {
                            _this.taskUpdateCheck();
                        }
                    }
                ]
            });
            alert_3.present();
        }
        else if (!this.opNm) {
            var alert_4 = this.alertCtrl.create({
                title: '業務名を入力してください。',
                buttons: ['OK']
            });
            alert_4.present();
            return;
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: '開始時間と終了時間は同時に入力、または同時に未入力の状態です。ご確認してください。',
                buttons: ['OK']
            });
            alert_5.present();
        }
    };
    TaskuPage.prototype.getTaskDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, result, msgInfo, startD, startT, endD, endT, alert_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getTaskDetail(this.getTaskID)];
                    case 1:
                        res = _a.sent();
                        if (!(res == undefined)) return [3 /*break*/, 2];
                        __WEBPACK_IMPORTED_MODULE_2__taskrd_taskrd__["a" /* TaskrdPage */].goTaskUpdateLoading.dismiss();
                        __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                        return [2 /*return*/];
                    case 2:
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (!(msgInfo.statusCd == 'SB200')) return [3 /*break*/, 4];
                        this.taskContent = result['taskDetail'];
                        this.opNm = this.taskContent.opNm;
                        this.opId = this.taskContent.opId;
                        this.workerId = this.taskContent.workerId;
                        this.workerNm = this.taskContent.workerNm;
                        this.checkList = this.taskContent.chkList;
                        if (this.taskContent.status == 'S') {
                            this.statusContent = '未着手';
                        }
                        else if (this.taskContent.status == 'I') {
                            this.statusContent = '進行中';
                        }
                        else {
                            this.statusContent = '終了';
                        }
                        //曜日
                        if (this.taskContent.opCircle != '' && this.taskContent.opCircle != null) {
                            this.selectedDate = this.taskContent.opCircle.split(',');
                        }
                        else {
                            this.selectedDate = '';
                        }
                        if (this.taskContent.planSDay != '' &&
                            this.taskContent.planSTime != '' &&
                            this.taskContent.planEDay != '' &&
                            this.taskContent.planETime != '' &&
                            this.taskContent.planSDay != null &&
                            this.taskContent.planSTime != null &&
                            this.taskContent.planEDay != null &&
                            this.taskContent.planETime != null) {
                            startD = this.taskContent.planSDay.substr(0, 4)
                                + "-"
                                + this.taskContent.planSDay.substr(4, 2)
                                + "-"
                                + this.taskContent.planSDay.substr(6, 2);
                            this.startDate = startD;
                            startT = this.taskContent.planSTime.substr(0, 2)
                                + ":"
                                + this.taskContent.planSTime.substr(2, 2);
                            this.startTime = startT;
                            endD = this.taskContent.planEDay.substr(0, 4)
                                + "-"
                                + this.taskContent.planEDay.substr(4, 2)
                                + "-"
                                + this.taskContent.planEDay.substr(6, 2);
                            this.endDate = endD;
                            endT = this.taskContent.planETime.substr(0, 2)
                                + ":"
                                + this.taskContent.planETime.substr(2, 2);
                            this.endTime = endT;
                            this.planSTime = this.taskContent.planSTime;
                            this.planETime = this.taskContent.planETime;
                        }
                        else {
                            this.startDate = '';
                            this.startTime = '';
                            this.endDate = '';
                            this.endTime = '';
                            this.planSTime = '';
                            this.planETime = '';
                        }
                        //task pool kbn
                        if (this.taskContent.taskPoolKbn == 0) {
                            this.ON = true;
                            this.OFF = false;
                            this.taskPoolKbn = 0;
                        }
                        else if (this.taskContent.taskPoolKbn == 1) {
                            this.OFF = true;
                            this.ON = false;
                            this.taskPoolKbn = 1;
                        }
                        //task Priority kbn
                        if (this.taskContent.taskPriorityKbn == 0) {
                            this.LOW = true;
                            this.HIGH = false;
                            this.taskPriorityKbn = 0;
                        }
                        else if (this.taskContent.taskPriorityKbn == 1) {
                            this.LOW = false;
                            this.HIGH = true;
                            this.taskPriorityKbn = 1;
                        }
                        //getWorker
                        this.getWorkerFlg = false;
                        return [4 /*yield*/, this.getTaskWorker()];
                    case 3:
                        _a.sent();
                        this.getWorkerFlg = true;
                        __WEBPACK_IMPORTED_MODULE_2__taskrd_taskrd__["a" /* TaskrdPage */].goTaskUpdateLoading.dismiss();
                        return [3 /*break*/, 5];
                    case 4:
                        if (msgInfo.statusCd == 'SB900') {
                            alert_6 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: msgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.events.unsubscribe("res:created");
                                            _this.events.unsubscribe("res:creat");
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                                        }
                                    },
                                ]
                            });
                            __WEBPACK_IMPORTED_MODULE_2__taskrd_taskrd__["a" /* TaskrdPage */].goTaskUpdateLoading.dismiss();
                            alert_6.present();
                            return [2 /*return*/];
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_2__taskrd_taskrd__["a" /* TaskrdPage */].goTaskUpdateLoading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            return [2 /*return*/];
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //checkWork
    TaskuPage.prototype.isWorkerTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isExisted, getWorkerAgainloading, res, result, msgInfo, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isExisted = false;
                        getWorkerAgainloading = this.loadingCtrl.create({ content: '' });
                        return [4 /*yield*/, this.requestTaskWorker(getWorkerAgainloading)];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd != 'SB200') {
                                getWorkerAgainloading.dismiss();
                                return [2 /*return*/, isExisted];
                            }
                            this.selectedWorkerList = result['workerList'];
                            for (i = 0; i < this.selectedWorkerList.length; i++) {
                                if (this.selectedWorkerList[i].workerId == this.getWorkerId) {
                                    this.item = this.selectedWorkerList[i];
                                    isExisted = true;
                                    break;
                                }
                            }
                        }
                        getWorkerAgainloading.dismiss();
                        return [2 /*return*/, isExisted];
                }
            });
        });
    };
    TaskuPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1['workerId'] === e2['workerId'] : e1 === e2;
    };
    //GETWORKER
    TaskuPage.prototype.getTaskWorker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getWorkerAgainloading, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getWorkerAgainloading = this.loadingCtrl.create({ content: '' });
                        return [4 /*yield*/, this.requestTaskWorker(getWorkerAgainloading)];
                    case 1:
                        res = _a.sent();
                        if (res != null) {
                            this.dealTaskWorkerRequestResult(res, getWorkerAgainloading);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskuPage.prototype.requestTaskWorker = function (getWorkerAgainloading) {
        return __awaiter(this, void 0, void 0, function () {
            var planSDay, date, alert_7, alert_8, alert_9, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.startDate != undefined && this.startDate != '') {
                            planSDay = this.startDate.substr(0, 4) + this.startDate.substr(5, 2) + this.startDate.substr(8, 2);
                        }
                        else {
                            date = new Date();
                            planSDay = date.toISOString().substr(0, 4) + date.toISOString().substr(5, 2) + date.toISOString().substr(8, 2);
                        }
                        if (this.startTime != '' && this.startTime != undefined && this.endTime != '' && this.endTime != undefined) {
                            this.planSTime = this.startTime.substr(0, 2) + this.startTime.substr(3, 2);
                            this.planETime = this.endTime.substr(0, 2) + this.endTime.substr(3, 2);
                        }
                        if ((this.startTime == '' || this.startTime == undefined) && (this.endTime == '' || this.endTime == undefined)) {
                            this.planSTime = '';
                            this.planETime = '';
                        }
                        if (this.getWorkerFlg) {
                            if ((this.startDate == '' && this.startTime == '' && this.endDate == '' && this.endTime == '') ||
                                (this.startDate != '' && this.startTime != '' && this.endDate != '' && this.endTime != '')) {
                                if (this.startDate == this.endDate && this.startTime.substr(0, 2) > this.endTime.substr(0, 2)) {
                                    alert_7 = this.alertCtrl.create({
                                        title: '開始時間より大きい終了時間を入力ください。',
                                        buttons: ['OK']
                                    });
                                    alert_7.present();
                                    return [2 /*return*/, null];
                                }
                                if (this.startDate == this.endDate &&
                                    this.startTime.substr(0, 2) == this.endTime.substr(0, 2) &&
                                    this.startTime.substr(3, 2) > this.endTime.substr(3, 2)) {
                                    alert_8 = this.alertCtrl.create({
                                        title: '開始時間より大きい終了時間を入力ください。',
                                        buttons: ['OK']
                                    });
                                    alert_8.present();
                                    return [2 /*return*/, null];
                                }
                            }
                            else {
                                alert_9 = this.alertCtrl.create({
                                    title: '開始時間と終了時間は同時に入力、または同時に未入力の状態です。ご確認してください。',
                                    buttons: ['OK']
                                });
                                alert_9.present();
                                return [2 /*return*/, null];
                            }
                        }
                        if (this.getWorkerAgain) {
                            getWorkerAgainloading.present();
                        }
                        return [4 /*yield*/, this.service.getWorker(this.getData['storeNo'], this.getData['cgId'], this.getData['opId'], planSDay, this.planSTime, this.planETime)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    TaskuPage.prototype.dealTaskWorkerRequestResult = function (res, getWorkerAgainloading) {
        var _this = this;
        if (res == undefined) {
            if (this.getWorkerAgain) {
                getWorkerAgainloading.dismiss();
            }
            __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
            return;
        }
        else {
            var result = res.json();
            var msgInfo = result['msgInfo'];
            if (msgInfo.statusCd == 'SB200') {
                this.selectedWorkerFlg = false;
                this.selectedWorkerList = result['workerList'];
                var idFlg = true;
                for (var i = 0; i < this.selectedWorkerList.length; i++) {
                    if (this.selectedWorkerList[i].workerId == this.getWorkerId) {
                        idFlg = false;
                    }
                }
                if (idFlg) {
                    this.getWorkerId = '';
                    this.workerNm = '';
                }
                if (this.getWorkerAgain) {
                    getWorkerAgainloading.dismiss();
                    this.getWorkerAgain = false;
                    setTimeout(function () {
                        _this.workerSelect.open();
                    }, 100);
                }
            }
            else if (msgInfo.statusCd == 'SB900') {
                var alert_10 = this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: msgInfo.msg,
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                _this.events.unsubscribe("res:created");
                                _this.events.unsubscribe("res:creat");
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                            }
                        },
                    ]
                });
                alert_10.present();
                if (this.getWorkerAgain) {
                    getWorkerAgainloading.dismiss();
                }
                return;
            }
            else {
                if (this.getWorkerFlg) {
                    __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                }
                if (this.getWorkerAgain) {
                    getWorkerAgainloading.dismiss();
                }
                this.selectedWorkerList = [];
                this.getWorkerId = '';
                this.workerNm = '';
                return;
            }
        }
    };
    //UPDATECHECK
    TaskuPage.prototype.taskUpdateCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, stime, etime, res, result, msgInfo, alert_11, alert_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = '';
                        stime = '';
                        etime = '';
                        if (this.startDate != '' &&
                            this.startDate != undefined &&
                            this.startTime != '' &&
                            this.startTime != undefined &&
                            this.endTime != '' &&
                            this.endTime != undefined) {
                            date = this.startDate.substr(0, 4) + this.startDate.substr(5, 2) + this.startDate.substr(8, 2);
                            stime = this.startTime.substr(0, 2) + this.startTime.substr(3, 2);
                            etime = this.endTime.substr(0, 2) + this.endTime.substr(3, 2);
                        }
                        if (this.getWorkerId == undefined ||
                            this.getWorkerId == '' ||
                            date == '' ||
                            stime == '' ||
                            etime == '') {
                            this.goBackLoading = this.loadingCtrl.create({
                                content: ''
                            });
                            this.goBackLoading.present();
                            this.taskUpdate();
                            return [2 /*return*/];
                        }
                        this.goBackLoading = this.loadingCtrl.create({
                            content: ''
                        });
                        this.goBackLoading.present();
                        return [4 /*yield*/, this.service.taskUpdateCheck(this.getData['storeNo'], this.getWorkerId, date, stime, etime, this.getData['cgId'], this.getData['opId'])];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            this.goBackLoading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (msgInfo.statusCd == 'SB200') {
                            this.taskUpdate();
                        }
                        else if (msgInfo.statusCd == 'SB900') {
                            alert_11 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: msgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.events.unsubscribe("res:created");
                                            _this.events.unsubscribe("res:creat");
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                                        }
                                    },
                                ]
                            });
                            this.goBackLoading.dismiss();
                            alert_11.present();
                            return [2 /*return*/];
                        }
                        else if (msgInfo.statusCd == 'SB400') {
                            alert_12 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: msgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.selAlert();
                                        }
                                    },
                                ],
                                enableBackdropDismiss: false
                            });
                            this.goBackLoading.dismiss();
                            alert_12.present();
                            return [2 /*return*/];
                        }
                        else {
                            this.goBackLoading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //UPDATE
    TaskuPage.prototype.taskUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var selectedDateForU, planSDate, planEDate, planSTime, planETime, lockTaskInfo, updTaskInfo, taskInfo, res, result, msgInfo, taskUObj, matchKey, matchValue, alert_13, alert_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedDateForU = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(this.selectedDate.toString());
                        planSDate = '';
                        planEDate = '';
                        planSTime = '';
                        planETime = '';
                        if (this.startDate != '' &&
                            this.startDate != undefined &&
                            this.endDate != '' &&
                            this.endDate != undefined &&
                            this.startTime != '' &&
                            this.startTime != undefined &&
                            this.endTime != '' &&
                            this.endTime != undefined) {
                            planSDate = this.startDate.substr(0, 4) + this.startDate.substr(5, 2) + this.startDate.substr(8, 2);
                            planEDate = this.endDate.substr(0, 4) + this.endDate.substr(5, 2) + this.endDate.substr(8, 2);
                            planSTime = this.startTime.substr(0, 2) + this.startTime.substr(3, 2);
                            planETime = this.endTime.substr(0, 2) + this.endTime.substr(3, 2);
                        }
                        if (this.getWorkerId == '' || this.getWorkerId == undefined) {
                            this.getWorkerId = null;
                        }
                        lockTaskInfo = __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__["a" /* ObjUti */].getLockTaskInfo(this.getData['obj']);
                        updTaskInfo = {
                            'workerId': this.getWorkerId, 'opNm': this.getData['obj']['opId'] != 0 ? null : this.opNm,
                            'taskPoolKbn': this.taskPoolKbn, 'taskPriorityKbn': this.taskPriorityKbn,
                            'opCircle': selectedDateForU, 'planSDate': planSDate,
                            'planEDate': planEDate, 'planSTime': planSTime, 'planETime': planETime
                        };
                        taskInfo = { "updTaskInfo": updTaskInfo, "lockTaskInfo": lockTaskInfo };
                        return [4 /*yield*/, this.service.taskUpdate(this.getTaskID, taskInfo)];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            this.goBackLoading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                //最新のデータを設定する
                                this.getData["obj"].opNm = this.opNm;
                                this.getData["obj"].taskPoolKbn = this.taskPoolKbn;
                                this.getData["obj"].taskPriorityKbn = this.taskPriorityKbn;
                                this.getData["obj"].taskId = this.getTaskID;
                                this.getData["obj"].workerId = this.getWorkerId;
                                this.getData["obj"].opCircle = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(selectedDateForU);
                                this.getData["obj"].planEDay = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(planSDate);
                                this.getData["obj"].planSDay = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(planEDate);
                                this.getData["obj"].planEHour = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(planETime);
                                this.getData["obj"].planSHour = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(planSTime);
                                this.getData["obj"].planSTime = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(planSDate + planSTime);
                                this.getData["obj"].planETime = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(planEDate + planETime);
                                this.getData["obj"].workerNm = this.workerNm;
                                if (!__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(planSDate)) {
                                    this.getData["obj"].taskDate = planSDate;
                                }
                                taskUObj = this.getData["obj"];
                                // 非同期処理
                                if (__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(taskUObj['workerId'])
                                    || (__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(taskUObj['planSTime']) && __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(taskUObj['planETime']))) {
                                    // 未割当タスク
                                    if (__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(taskUObj['workerId'])) {
                                        taskUObj['workerId'] = null;
                                    }
                                    // 更新前オブジェクトを削除
                                    this.removeBefor();
                                    if (!(__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(taskUObj['taskDate'])) && this.getData['selectedDate'] == taskUObj['taskDate']) {
                                        // 更新後オブジェクトを挿入
                                        this.inUnList(taskUObj);
                                    }
                                }
                                else {
                                    matchKey = void 0, matchValue = void 0;
                                    if (this.viewKbn == '0' || this.viewKbn == '2') {
                                        // 業務別
                                        matchKey = taskUObj['cgId'];
                                        matchValue = taskUObj['cgNm'];
                                    }
                                    else if (this.viewKbn == '1' || this.viewKbn == '3') {
                                        // 担当者別
                                        matchKey = taskUObj['workerId'];
                                        matchValue = taskUObj['workerNm'];
                                    }
                                    // 更新前オブジェクトを削除
                                    this.removeBefor();
                                    if (this.getData['selectedDate'] == taskUObj['taskDate']) {
                                        // 更新後オブジェクトを挿入
                                        this.inCgList(this.planSTime, this.planETime, matchKey, matchValue, taskUObj);
                                    }
                                }
                                this.navCtrl.pop();
                                this.goBackLoading.dismiss();
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                this.goBackLoading.dismiss();
                                alert_13 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_13.present();
                                return [2 /*return*/];
                            }
                            else if (msgInfo.statusCd == 'SB400') {
                                this.goBackLoading.dismiss();
                                alert_14 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.selAlert();
                                            }
                                        },
                                    ],
                                    enableBackdropDismiss: false
                                });
                                alert_14.present();
                            }
                            else {
                                this.goBackLoading.dismiss();
                                __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskuPage.prototype.displayMsg = function () {
        this.getWorkerAgain = true;
        this.getTaskWorker();
    };
    TaskuPage.prototype.resetWorkerSDate = function (startDate) {
        return __awaiter(this, void 0, void 0, function () {
            var flg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.startDate = startDate;
                        this.endDate = startDate;
                        if (!this.startTime || !this.endTime) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.isWorkerTime()];
                    case 1:
                        flg = _a.sent();
                        if (!flg) {
                            this.item = undefined;
                            this.getWorkerId = '';
                            this.workerNm = '';
                            this.selectedWorkerList = [];
                            this.selectedWorkerFlg = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskuPage.prototype.resetWorkerEDate = function (endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var flg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.startDate = endDate;
                        this.endDate = endDate;
                        if (!this.startTime || !this.endTime) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.isWorkerTime()];
                    case 1:
                        flg = _a.sent();
                        if (!flg) {
                            this.item = undefined;
                            this.getWorkerId = '';
                            this.workerNm = '';
                            this.selectedWorkerList = [];
                            this.selectedWorkerFlg = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskuPage.prototype.resetWorkerSTime = function (startTime) {
        return __awaiter(this, void 0, void 0, function () {
            var flg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.startTime = startTime;
                        if (!this.startTime || !this.endTime) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.isWorkerTime()];
                    case 1:
                        flg = _a.sent();
                        if (!flg) {
                            this.item = undefined;
                            this.getWorkerId = '';
                            this.workerNm = '';
                            this.selectedWorkerList = [];
                            this.selectedWorkerFlg = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskuPage.prototype.resetWorkerETime = function (EndTime) {
        return __awaiter(this, void 0, void 0, function () {
            var flg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.endTime = EndTime;
                        if (!this.startTime || !this.endTime) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.isWorkerTime()];
                    case 1:
                        flg = _a.sent();
                        if (!flg) {
                            this.item = undefined;
                            this.getWorkerId = '';
                            this.workerNm = '';
                            this.selectedWorkerList = [];
                            this.selectedWorkerFlg = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskuPage.prototype.clearStartDate = function () {
        if (this.startDate == '') {
            return;
        }
        this.startDate = '';
        if (this.isDateTimeAllClear()) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
        }
    };
    TaskuPage.prototype.clearEndDate = function () {
        if (this.endDate == '') {
            return;
        }
        this.endDate = '';
        if (this.isDateTimeAllClear()) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
        }
    };
    TaskuPage.prototype.clearStartTime = function () {
        if (this.startTime == '') {
            return;
        }
        this.startTime = '';
        if (this.isDateTimeAllClear()) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
        }
    };
    TaskuPage.prototype.clearEndTime = function () {
        if (this.endTime == '') {
            return;
        }
        this.endTime = '';
        if (this.isDateTimeAllClear()) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
        }
    };
    TaskuPage.prototype.isDateTimeAllClear = function () {
        // 全部存在しないtrue
        return !this.startDate && !this.endDate && !this.startTime && !this.endTime;
    };
    //タスク編集後、非同期処理
    TaskuPage.prototype.inUnList = function (taskCObj) {
        taskCObj["len"] = 2;
        taskCObj["taskStyle"] = '200%';
        taskCObj["textFlag"] = true;
        this.getData['obj']['noAssingFlg'] = true;
        if (this.noAssign != undefined) {
            if (this.noAssign['taskInfoList'] != undefined) {
                this.noAssign['taskInfoList'].push(taskCObj);
            }
            else {
                this.noAssign['taskInfoList'] = new Array();
                this.noAssign['taskInfoList'].push(taskCObj);
            }
        }
        else {
            this.noAssign = new Object();
            this.noAssign['taskInfoList'] = new Array();
            this.noAssign['taskInfoList'].push(taskCObj);
        }
        this.getData['obj']['taskIndex'] = this.changeIndex(this.noAssign['taskInfoList']);
    };
    TaskuPage.prototype.removeBefor = function () {
        var activeIndex = this.getData['obj']['activeIndex'];
        var categoryIndex = this.getData['obj']['categoryIndex'];
        var taskIndex = this.getData['obj']['taskIndex'];
        if (this.getData['obj']['noAssingFlg']) {
            // 未割当
            this.noAssign['taskInfoList'].splice(taskIndex, 1);
        }
        else {
            // 割当済
            if (__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '1') {
                // スケジュール画面
                this.delFromCategoryList(categoryIndex, taskIndex);
            }
            else if (this.viewKbn == '2' || this.viewKbn == '3') {
                // カンバン画面
                var categoryInfo = this.categoryInfoLists[activeIndex][categoryIndex];
                var taskInfo = categoryInfo.sTaskInforList[0].taskInfoList;
                var categoryId = categoryInfo['categoryId'];
                var taskId = taskInfo[taskIndex]['taskId'];
                this.delOtherShiftToKanban(categoryId, taskId);
            }
        }
    };
    TaskuPage.prototype.delOtherShiftToKanban = function (categoryId, taskId) {
        var taskInforList = [];
        this.categoryInfoLists.forEach(function (element) {
            element.forEach(function (categoryInfo) {
                if (categoryId == categoryInfo['categoryId']) {
                    var sTaskInforList = categoryInfo.sTaskInforList;
                    if (sTaskInforList.length < 1) {
                        return;
                    }
                    taskInforList = sTaskInforList[0].taskInfoList;
                    for (var i = 0; i < taskInforList.length; i++) {
                        if (taskInforList[i]['taskId'] == taskId) {
                            taskInforList.splice(i, 1);
                            break;
                        }
                    }
                    return;
                }
            });
        });
    };
    TaskuPage.prototype.delFromCategoryList = function (categoryIndex, taskIndex) {
        var categoryInfoLists = this.categoryInfoLists;
        var timeSlot = this.getData['obj']['timeSlot'];
        var categoryInfo = categoryInfoLists[0];
        var hourList = categoryInfo[categoryIndex]['halfHourList'];
        var slotSTime = this.timeSlotInfoList[0].startTime;
        var slotETime = this.timeSlotInfoList[this.timeSlotInfoList.length - 1].endTime;
        var taskInfoList = [];
        for (var i = 0; i < hourList.length; i++) {
            var tmp = hourList[i];
            if (timeSlot == tmp['halfHour']) {
                taskInfoList = tmp['taskInfoList'];
                break;
            }
        }
        taskInfoList.splice(taskIndex, 1);
        __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(categoryInfo, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), 35);
    };
    TaskuPage.prototype.inCgList = function (pstime, petime, matchKey, matchValue, taskCObj) {
        if (__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '1') {
            // スケジュール画面
            if (this.timeSlotInfoList.length <= 0) {
                return;
            }
            // 時間帯計算
            var slotSTime = this.timeSlotInfoList[0].startTime;
            var slotETime = this.timeSlotInfoList[this.timeSlotInfoList.length - 1].endTime;
            if ((pstime >= slotSTime && pstime < slotETime)
                || (petime > slotSTime && petime <= slotETime)
                || (pstime < slotSTime && petime > slotETime)) {
                __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__["a" /* ObjUti */].addLen(taskCObj, slotSTime, slotETime);
                this.intoSchedule(0, matchKey, matchValue, taskCObj, slotSTime, slotETime);
            }
            if (__WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__["a" /* ObjUti */].isNull(this.categoryInfoLists)) {
                this.categoryInfoLists.push(this.categoryInfoList);
            }
            else {
                this.categoryInfoLists[0] = this.categoryInfoList;
            }
        }
        else if (this.viewKbn == '2' || this.viewKbn == '3') {
            // カンバン画面
            for (var index = 0; index < this.timeSlotInfoList.length; index++) {
                var slot = this.timeSlotInfoList[index];
                // 時間帯計算
                if ((pstime >= slot.startTime && pstime < slot.endTime)
                    || (petime > slot.startTime && petime <= slot.endTime)
                    || (pstime < slot.startTime && petime > slot.endTime)) {
                    this.intoKanban(index, matchKey, matchValue, taskCObj);
                }
            }
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
        this.getData['obj']['noAssingFlg'] = false;
    };
    TaskuPage.prototype.getStartTime = function (slotSTime, slotETime) {
        var hh = this.planSTime.substr(0, 2);
        var mm = this.planSTime.substr(2, 2);
        // 表示時間帯の開始時刻と比較
        if (hh < slotSTime.substr(0, 2)) {
            hh = slotSTime.substr(0, 2);
            mm = slotSTime.substr(2, 2);
        }
        if (mm < "30") {
            return hh + "00";
        }
        else {
            return hh + "30";
        }
    };
    TaskuPage.prototype.intoSchedule = function (index, matchKey, matchValue, taskCObj, slotSTime, slotETime) {
        var _this = this;
        var cgList = this.categoryInfoList;
        var startHalf = this.getStartTime(slotSTime, slotETime);
        this.getData['obj']['timeSlot'] = startHalf;
        var insertFlg = false;
        var indexCg = 0;
        cgList.forEach(function (cgInfo) {
            var sList;
            // 縦ヘッダーは存在
            if (matchKey == cgInfo.categoryId) {
                var inHalfFlg_1 = false;
                cgInfo.halfHourList.forEach(function (halfList) {
                    if (startHalf == halfList.halfHour) {
                        if (__WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__["a" /* ObjUti */].isNull(halfList.taskInfoList)) {
                            halfList.taskInfoList = new Array();
                            halfList.taskInfoList.push(taskCObj);
                        }
                        else {
                            halfList.taskInfoList.push(taskCObj);
                        }
                        _this.getData['obj']['taskIndex'] = _this.changeIndex(halfList.taskInfoList);
                        inHalfFlg_1 = true;
                        insertFlg = true;
                        _this.getData['obj']['categoryIndex'] = indexCg;
                        return;
                    }
                });
                if (!inHalfFlg_1) {
                    var newObj = new Object();
                    newObj['halfHour'] = startHalf;
                    var taskList = new Array();
                    taskList.push(taskCObj);
                    _this.getData['obj']['taskIndex'] = _this.changeIndex(taskList);
                    newObj['taskInfoList'] = taskList;
                    cgInfo.halfHourList.push(newObj);
                    insertFlg = true;
                }
                if (insertFlg) {
                    return;
                }
            }
            indexCg++;
        });
        if (!insertFlg) {
            // 縦ヘッダーは不存在
            var newCgInfo = new Object();
            newCgInfo['categoryId'] = matchKey;
            newCgInfo['categoryNm'] = matchValue;
            newCgInfo['halfHourList'] = [];
            var newObj = new Object();
            newObj['halfHour'] = startHalf;
            var taskList = new Array();
            taskList.push(taskCObj);
            this.getData['obj']['taskIndex'] = this.changeIndex(taskList);
            newObj['taskInfoList'] = taskList;
            newCgInfo['halfHourList'].push(newObj);
            cgList.push(newCgInfo);
            this.getData['obj']['categoryIndex'] = this.changeIndex(cgList);
        }
        var intLen = 35;
        // タスクリスト整備
        __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(cgList, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), intLen);
    };
    TaskuPage.prototype.intoKanban = function (index, matchKey, matchValue, taskCObj) {
        var _this = this;
        var cgList = this.categoryInfoLists[index];
        var insertFlg = false;
        var indexCg = 0;
        cgList.forEach(function (cgInfo) {
            var sList;
            if (matchKey == cgInfo.categoryId) {
                // 縦ヘッダーは存在
                if (cgInfo.sTaskInforList.length > 0) {
                    sList = cgInfo.sTaskInforList[0]['taskInfoList'];
                }
                else {
                    var newObj = new Object();
                    sList = new Array();
                    newObj['taskInfoList'] = sList;
                    cgInfo.sTaskInforList.push(newObj);
                }
                sList.push(taskCObj);
                _this.getData['obj']['taskIndex'] = _this.changeIndex(sList);
                insertFlg = true;
                _this.getData['obj']['categoryIndex'] = indexCg;
                return;
            }
            indexCg++;
        });
        if (!insertFlg) {
            // 縦ヘッダーは不存在
            var newCgInfo = new Object();
            newCgInfo['categoryId'] = matchKey;
            newCgInfo['categoryNm'] = matchValue;
            newCgInfo['sTaskInforList'] = [];
            newCgInfo['iTaskInforList'] = [];
            newCgInfo['eTaskInforList'] = [];
            newCgInfo['aTaskInforList'] = [];
            var newObj = new Object();
            var sList = new Array();
            newObj['taskInfoList'] = sList;
            sList.push(taskCObj);
            this.getData['obj']['taskIndex'] = this.changeIndex(sList);
            newCgInfo['sTaskInforList'].push(newObj);
            cgList.push(newCgInfo);
            this.getData['obj']['categoryIndex'] = this.changeIndex(cgList);
        }
    };
    TaskuPage.prototype.changeIndex = function (taskList) {
        return taskList.length - 1;
    };
    //アラートが発生する時、再検索処理
    TaskuPage.prototype.selAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, loading, selTime, res, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        selTime = __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.getData['storeNo'], this.getData['selectedDate'], selTime, this.getData['viewKbn'])];
                    case 1:
                        res = _a.sent();
                        params = {
                            res: res, selectedText: this.getData['selectedText'], storeNo: this.getData['storeNo'],
                            storeNm: this.getData['storeNm'], viewKbn: this.getData['viewKbn'], aplUserId: this.getData['aplUserId'],
                            selectedDate: this.getData['selectedDate'], currentTimeSlotId: this.getData['currentTimeSlotId'],
                            dragFlg: true
                        };
                        loading.dismiss().then(function () {
                            if (_this.getData['viewKbn'] == '0' || _this.getData['viewKbn'] == '1') {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__schedule_schedule__["a" /* SchedulePage */], params);
                            }
                            else {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__board_board__["a" /* BoardPage */], params);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskuPage.prototype.selectSTime = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.startTime)) {
            this.idxH = parseInt(this.startTime.substr(0, 2));
            this.idxM = parseInt(this.startTime.substr(3, 2));
        }
        else {
            var now = __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].fmtSysDateTime(new Date());
            console.log(now);
            this.idxH = parseInt(now.substr(8, 2));
            this.idxM = parseInt(now.substr(10, 2));
            console.log(this.idxH, this.idxM);
        }
        this.timeArea(this.endTime, 1);
        this.storeTimer.show({
            title: '',
            items: [
                this.timePicker.hours,
                this.timePicker.minutes
            ],
            positiveButtonText: "OK",
            negativeButtonText: "CANCEL",
            wrapWheelText: true,
            defaultItems: [
                { index: 0, value: __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(this.idxH) },
                { index: 1, value: __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(this.idxM) }
            ]
        }).then(function (result) {
            _this.startTime = result[0].description + ':' + result[1].description;
            console.log(result[0].description + ':' + result[1].description);
            _this.resetWorkerSTime(_this.startTime);
        }, function (err) { return console.log('Error: ' + JSON.stringify(err)); });
    };
    TaskuPage.prototype.timeArea = function (time, flg) {
        if (!__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(time)) {
            var hoursLimit = void 0;
            hoursLimit = parseInt(time.substr(0, 2));
            var hours = [];
            if (flg == 0) {
                for (var i = hoursLimit; i < 24; i++) {
                    var obj = new Object();
                    obj['description'] = __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(i);
                    hours.push(obj);
                }
            }
            if (flg == 1) {
                for (var i = 0; i <= hoursLimit; i++) {
                    var obj = new Object();
                    obj['description'] = __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(i);
                    hours.push(obj);
                }
            }
            this.timePicker.hours = hours;
        }
        else {
            this.initTime();
        }
    };
    TaskuPage.prototype.selectETime = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.endTime)) {
            this.idxH = parseInt(this.endTime.substr(0, 2));
            this.idxM = parseInt(this.endTime.substr(3, 2));
        }
        else {
            var now = __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].fmtSysDateTime(new Date());
            this.idxH = parseInt(now.substr(8, 2));
            this.idxM = parseInt(now.substr(10, 2));
            console.log(this.idxH, this.idxM);
        }
        this.timeArea(this.startTime, 0);
        this.storeTimer.show({
            title: '',
            items: [
                this.timePicker.hours,
                this.timePicker.minutes
            ],
            positiveButtonText: "OK",
            negativeButtonText: "CANCEL",
            wrapWheelText: true,
            defaultItems: [
                { index: 0, value: __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(this.idxH) },
                { index: 1, value: __WEBPACK_IMPORTED_MODULE_12__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(this.idxM) }
            ]
        }).then(function (result) {
            _this.endTime = result[0].description + ':' + result[1].description;
            console.log(result[0].description + ':' + result[1].description);
            _this.resetWorkerETime(_this.endTime);
        }, function (err) { return console.log('Error: ' + JSON.stringify(err)); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('workerSelect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Select */])
    ], TaskuPage.prototype, "workerSelect", void 0);
    TaskuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tasku',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\tasku\tasku.html"*/'<ion-header>\n\n    <ion-item no-lines color="warn" style="height:50px;">\n\n        <ion-label item-start>\n\n            <ion-icon name="md-arrow-dropleft" color="light" class="font-30 font-w" (click)="goBackPop()"></ion-icon>\n\n        </ion-label>\n\n        <ion-label item-content></ion-label>\n\n        <ion-label item-start class="text-center font-18 bold-white" icon-right>\n\n            {{pageNm}}\n\n            <ion-icon name="alert-outline" class="font-20 font-w" hidden></ion-icon>\n\n        </ion-label>\n\n    </ion-item>\n\n</ion-header>\n\n\n\n<ion-content padding id="ion-tasku" style="height: 100%;">\n\n    <div class="width-100 con-left" style="height: 90%; min-height: 500px;">\n\n        <div class="width-50 font-16 font-w">\n\n            <div class="width-95 border-top">\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">業務名</div>\n\n                    <ion-input  no-margin text-right maxLength="20" type="text" class="width-60 pad-10 border-right border-bottom text-right" name="opNm" [(ngModel)]="opNm"\n\n                    (ngModelChange)="opnmChange(opNm)" *ngIf="opId == 000">{{opNm}}</ion-input>\n\n                    <div  class="width-60 pad-10 border-right border-bottom text-right"  *ngIf="opId !== 000">{{opNm}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">業務ステータス</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{statusContent}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">業務サイクル</div>\n\n                    <div class="width-60 border-right border-bottom text-right font-w">\n\n                        <ion-item no-lines style="padding:0;">\n\n                            <ion-select text-right style="min-width:100%;" [(ngModel)]="selectedDate" (ngModelChange)="changeDate($event)" multiple="true"\n\n                                okText="確定" cancelText="キャンセル">\n\n                                <ion-option value="日">日</ion-option>\n\n                                <ion-option value="月">月</ion-option>\n\n                                <ion-option value="火">火</ion-option>\n\n                                <ion-option value="水">水</ion-option>\n\n                                <ion-option value="木">木</ion-option>\n\n                                <ion-option value="金">金</ion-option>\n\n                                <ion-option value="土">土</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">開始日</div>\n\n                    <ion-datetime class="contain border-bottom" style="width:56.5%;" displayFormat="YYYY/MM/DD" text-right min="{{endDate!=\'\'?endDate:minDateTime}}"\n\n                        max="{{endDate!=\'\'?endDate:maxDateTime}}" name="startDate" [(ngModel)]="startDate" doneText="OK" cancelText="Cancel"\n\n                        (ngModelChange)="resetWorkerSDate(startDate)"></ion-datetime>\n\n                    <div style="width:3.5%;height:100%;padding:11px 5px;" class="border-bottom border-right" (click)="clearStartDate()">\n\n                        <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">開始時間</div>\n\n                    <!-- <ion-datetime class="contain border-bottom" style="width:56.5%;" displayFormat="HH:mm" text-right max="{{startDate == endDate ? (endTime == \'\' ? \'23:59\' : endTime) : \'23:59\'}}"\n\n                        name="startTime" [(ngModel)]="startTime" doneText="OK" cancelText="Cancel" (ngModelChange)="resetWorkerSTime(startTime)"></ion-datetime> -->\n\n                        <div class="con-center worker-right border-bottom" style="width:56.5%;padding-right: 8px" text-right name="startTime" (click)="selectSTime()">{{startTime}}</div>\n\n                        \n\n                        <div style="width:3.5%;height:100%;padding:11px 5px;" class="border-bottom border-right" (click)="clearStartTime()">\n\n                        <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">終了日</div>\n\n                    <ion-datetime class="contain border-bottom" style="width:56.5%;" displayFormat="YYYY/MM/DD" text-right min="{{startDate!=\'\'?startDate:minDateTime}}"\n\n                        max="{{startDate!=\'\'?startDate:maxDateTime}}" name="endDate" [(ngModel)]="endDate" doneText="OK" cancelText="Cancel"\n\n                        (ngModelChange)="resetWorkerEDate(endDate)"></ion-datetime>\n\n                    <div style="width:3.5%;height:100%;padding:11px 5px;" class="border-bottom border-right" (click)="clearEndDate()">\n\n                        <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">終了時間</div>\n\n                    <!-- <ion-datetime class="contain border-bottom" style="width:56.5%;" displayFormat="HH:mm" text-right min="{{startDate == endDate ? (startTime == \'\' ? \'00:00\' : startTime) : \'00:00\'}}"\n\n                        name="endTime" [(ngModel)]="endTime" doneText="OK" cancelText="Cancel" (ngModelChange)="resetWorkerETime(endTime)"></ion-datetime> -->\n\n                    <div class="con-center worker-right border-bottom" style="width:56.5%;padding-right: 8px" text-right name="endTime" (click)="selectETime()">{{endTime}}</div>\n\n                    <div style="width:3.5%;height:100%;padding:11px 5px;" class="border-bottom border-right" (click)="clearEndTime()">\n\n                        <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">担当者</div>\n\n                    <div class="width-60 border-right border-bottom text-right">\n\n                        <ion-item no-lines no-padding *ngIf="selectedWorkerList!=undefined && selectedWorkerList.length != 0">\n\n                            <ion-label></ion-label>\n\n                            <ion-select name="item" [(ngModel)]="item" (ngModelChange)="changeWorker(item)" okText="確定" cancelText="キャンセル" #workerSelect\n\n                                [compareWith]="compareFn">\n\n                                <ion-option value=""></ion-option>\n\n                                <ion-option [value]="item" *ngFor="let item of selectedWorkerList" [selected]="item.workerId == getWorkerId">{{item.workerNm}}</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                        <div style="width:100%;height:100%;display:flex;justify-content:flex-end;align-items:center;" *ngIf="selectedWorkerList!=undefined && selectedWorkerList.length == 0"\n\n                            (click)=displayMsg()>\n\n                            <div style="color: red;" *ngIf="selectedWorkerFlg">再度担当者を選択してください</div>\n\n                            <div style="padding: 10px 14px 9px 10px;">\n\n                                <ion-icon name="md-arrow-dropdown" color="borderc" style="font-size: 17px;"></ion-icon>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">繰返しタスク</div>\n\n                    <div class="width-60 border-right border-bottom con-on-off">\n\n                        <div class="width-60 onOff-div">\n\n                            <div class="width-30 onOff-div">\n\n                                <div>ON</div>\n\n                                <ion-checkbox color="dark" checked="ON" [(ngModel)]="ON" (ngModelChange)="changeON(ON)"></ion-checkbox>\n\n                            </div>\n\n                            <div class="width-30 onOff-div">\n\n                                <div>OFF</div>\n\n                                <ion-checkbox color="dark" checked="OFF" [(ngModel)]="OFF" (ngModelChange)="changeOFF(ON)"></ion-checkbox>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">優先度</div>\n\n                    <div class="width-60 border-right border-bottom con-on-off">\n\n                        <div class="width-60 onOff-div">\n\n                            <div class="width-30 onOff-div">\n\n                                <div>通常</div>\n\n                                <ion-checkbox color="dark" checked="LOW"  [(ngModel)]="LOW" (ngModelChange)="changeLOW(LOW)"></ion-checkbox>\n\n                            </div>\n\n                            <div class="width-30 onOff-div">\n\n                                <div>高</div>\n\n                                <ion-checkbox color="dark" checked="HIGH"  [(ngModel)]="HIGH" (ngModelChange)="changeHIGH(HIGH)"></ion-checkbox>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="width-50 font-16 font-w border-left">\n\n            <div class="width-95" style="margin-left:5%;">\n\n                <div class="con-left border-top" *ngFor="let item of checkList; let i=index">\n\n                    <div class="width-40 pad-10 con-center color">\n\n                        チェック{{i+1}}\n\n                    </div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{item.chkContents}}</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n \n\n    <ion-item no-lines style="padding-left:5px;">\n\n        <ion-label item-start></ion-label>\n\n        <button ion-button round item-start color="warn" style="height:40px;width:200px;" class="bold-white" (click)="updateTask()">\n\n            <ion-label class="font-16 font-w">登録</ion-label>\n\n        </button>\n\n        <ion-label item-end></ion-label>\n\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\tasku\tasku.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_store_timer__["a" /* StoreTimer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_tasku_service__["a" /* ApiTaskuServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_api_service_api_handover_service__["a" /* ApiHandoverServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_keyboard__["a" /* Keyboard */]])
    ], TaskuPage);
    return TaskuPage;
}());

//# sourceMappingURL=tasku.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.formatDate = function (date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return [year, month, day].map(this.formatNumber).join('');
    };
    UtilityService.formatTime = function (hh, mm) {
        return this.formatNumber(hh) + this.formatNumber(mm);
    };
    UtilityService.fmtSysDateTime = function (now) {
        var stime = now.toISOString();
        return stime.replace(/[-T:]/g, '').substr(0, 14);
    };
    UtilityService.formatNumber = function (n) {
        n = n.toString();
        return n[1] ? n : '0' + n;
    };
    UtilityService.setISODateTime = function () {
        Date.prototype.toISOString = function () {
            function pad(number) {
                if (number < 10) {
                    return '0' + number;
                }
                return number;
            }
            return this.getUTCFullYear() +
                '-' + pad(this.getUTCMonth() + 1) +
                '-' + pad(this.getUTCDate()) +
                'T' + pad(this.getUTCHours()) +
                ':' + pad(this.getUTCMinutes()) +
                ':' + pad(this.getUTCSeconds()) +
                '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                'Z';
        };
    };
    UtilityService.setISODateTimeWithZone = function () {
        Date.prototype.toISOString = function () {
            var tzo = -this.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
                var norm = Math.floor(Math.abs(num));
                return (norm < 10 ? '0' : '') + norm;
            };
            return this.getFullYear() +
                '-' + pad(this.getMonth() + 1) +
                '-' + pad(this.getDate()) +
                'T' + pad(this.getHours()) +
                ':' + pad(this.getMinutes()) +
                ':' + pad(this.getSeconds()) +
                dif + pad(tzo / 60) +
                ':' + pad(tzo % 60);
        };
    };
    return UtilityService;
}());

//# sourceMappingURL=UtilityService.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/board/board.module": [
		341,
		12
	],
	"../pages/control/control.module": [
		343,
		11
	],
	"../pages/handoverc/handoverc.module": [
		342,
		10
	],
	"../pages/handoverpop/handoverpop.module": [
		344,
		9
	],
	"../pages/handoverrd/handoverrd.module": [
		345,
		8
	],
	"../pages/handoveru/handoveru.module": [
		346,
		7
	],
	"../pages/manual/manual.module": [
		347,
		6
	],
	"../pages/schedule/schedule.module": [
		348,
		5
	],
	"../pages/selschedule/selschedule.module": [
		351,
		4
	],
	"../pages/selstore/selstore.module": [
		350,
		3
	],
	"../pages/taskc/taskc.module": [
		349,
		2
	],
	"../pages/taskrd/taskrd.module": [
		352,
		1
	],
	"../pages/tasku/tasku.module": [
		353,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
  Generated class for the ApiCommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 *
 * 概 要： AWSの通信処理
 * 作成日：2018.01.30
 * 作成者：DHC孫志棟
 */
var ApiCommonProvider = /** @class */ (function () {
    function ApiCommonProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        //  host = 'https://zm7tf6uimg.execute-api.ap-northeast-1.amazonaws.com/dev';
        //  host = 'https://bmd91rtw4a.execute-api.ap-northeast-1.amazonaws.com/dev';
        this.host = 'https://seoej0sn2b.execute-api.ap-northeast-1.amazonaws.com/dev';
    }
    ApiCommonProvider.prototype.doPost = function (path, param) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, addHeaders, res, result, accessToken, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('accessToken')];
                    case 1:
                        _a.accessToken = _b.sent();
                        addHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Authorization': this.accessToken });
                        this.storage.set('autoRefreshTimeCounter', 0);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.http.post(this.host + path, JSON.stringify(param), { headers: addHeaders }).toPromise()];
                    case 3:
                        res = _b.sent();
                        result = res.json();
                        accessToken = result['accessToken'];
                        this.storage.set('accessToken', accessToken);
                        return [2 /*return*/, res];
                    case 4:
                        error_1 = _b.sent();
                        console.log("http post error:" + error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ApiCommonProvider.prototype.doGet = function (path, param) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, addHeaders, res, result, accessToken, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('accessToken')];
                    case 1:
                        _a.accessToken = _b.sent();
                        addHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Authorization': this.accessToken });
                        this.storage.set('autoRefreshTimeCounter', 0);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.http.get(this.host + path, { headers: addHeaders }).toPromise()];
                    case 3:
                        res = _b.sent();
                        result = res.json();
                        accessToken = result['accessToken'];
                        this.storage.set('accessToken', accessToken);
                        return [2 /*return*/, res];
                    case 4:
                        error_2 = _b.sent();
                        console.log("http get error:" + error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ApiCommonProvider.prototype.doDelete = function (path, param) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, addHeaders, res, result, accessToken, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('accessToken')];
                    case 1:
                        _a.accessToken = _b.sent();
                        addHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Authorization': this.accessToken });
                        this.storage.set('autoRefreshTimeCounter', 0);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.http.delete(this.host + path, { headers: addHeaders }).toPromise()];
                    case 3:
                        res = _b.sent();
                        result = res.json();
                        accessToken = result['accessToken'];
                        this.storage.set('accessToken', accessToken);
                        return [2 /*return*/, res];
                    case 4:
                        error_3 = _b.sent();
                        console.log("http delete error:" + error_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ApiCommonProvider.prototype.doPut = function (path, param) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, addHeaders, res, result, accessToken, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('accessToken')];
                    case 1:
                        _a.accessToken = _b.sent();
                        addHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Authorization': this.accessToken });
                        this.storage.set('autoRefreshTimeCounter', 0);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.http.put(this.host + path, JSON.stringify(param), { headers: addHeaders }).toPromise()];
                    case 3:
                        res = _b.sent();
                        result = res.json();
                        accessToken = result['accessToken'];
                        this.storage.set('accessToken', accessToken);
                        return [2 /*return*/, res];
                    case 4:
                        error_4 = _b.sent();
                        console.log("http put error:" + error_4);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ApiCommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ApiCommonProvider);
    return ApiCommonProvider;
}());

//# sourceMappingURL=api-common.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTaskrdServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiTaskrdServiceProvider = /** @class */ (function () {
    function ApiTaskrdServiceProvider(commonService) {
        this.commonService = commonService;
    }
    /**
     * タスクIDで、AWSへ通信する
     *
     * @param taskId
     */
    ApiTaskrdServiceProvider.prototype.getTaskDetail = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/task/' + taskId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiTaskrdServiceProvider.prototype.deleteTask = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doDelete('/task/' + taskId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * タスク削除の楽観ロック
     *
     * @param taskId タスクID
     */
    ApiTaskrdServiceProvider.prototype.lockTask = function (taskId, lockTaskInfo, lockTaskChklistInfo, lockChklist, lockHandover) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            "lockTaskInfo": lockTaskInfo,
                            "lockTaskChklistInfo": lockTaskChklistInfo,
                            "lockChklist": lockChklist,
                            "lockHandover": lockHandover,
                        };
                        return [4 /*yield*/, this.commonService.doPost('/locktask/' + taskId, param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiTaskrdServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiTaskrdServiceProvider);
    return ApiTaskrdServiceProvider;
}());

//# sourceMappingURL=api-taskrd-service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiSelstoreServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiSelstoreServiceProvider = /** @class */ (function () {
    function ApiSelstoreServiceProvider(commonService) {
        this.commonService = commonService;
    }
    ApiSelstoreServiceProvider.prototype.selstore = function (getUserID) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/store/' + getUserID)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiSelstoreServiceProvider.prototype.registDevice = function (userId, deviceId, storeNo) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = { 'userId': userId, 'deviceId': deviceId, 'storeNo': storeNo };
                        return [4 /*yield*/, this.commonService.doPut('/device', param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiSelstoreServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiSelstoreServiceProvider);
    return ApiSelstoreServiceProvider;
}());

//# sourceMappingURL=api-selstore-service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiLoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 *
 * 概 要： ログインのロジック処理
 * 作成日：2018.01.30
 * 作成者：DHC孫志棟
 */
var ApiLoginServiceProvider = /** @class */ (function () {
    function ApiLoginServiceProvider(commonService) {
        this.commonService = commonService;
    }
    /**
     * ユーザーID、パスワードで、AWSへ通信する
     *
     * @param userId ユーザーID
     * @param password パスワード
     */
    ApiLoginServiceProvider.prototype.login = function (userId, deviceId, password) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = { 'aplUser': userId, 'deviceId': deviceId, 'passwd': password };
                        return [4 /*yield*/, this.commonService.doPost('/auth', param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiLoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiLoginServiceProvider);
    return ApiLoginServiceProvider;
}());

//# sourceMappingURL=api-login-service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SQLiteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_buffer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SQLiteProvider = /** @class */ (function () {
    function SQLiteProvider(sqlite) {
        this.sqlite = sqlite;
        this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        this.creatDB();
    }
    SQLiteProvider.prototype.creatDB = function () {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS USER(USERID VARCHAR(8),PASSWORD VARCHAR(50))', {})
                .then(function () { return console.log('creatDB'); })
                .catch(function (e) { return console.log(e); });
            _this.database = db;
        }).catch(function (e) { return console.log(e); });
    };
    SQLiteProvider.prototype.insertData = function (userId, password) {
        password = this.encryptio(password);
        password = new __WEBPACK_IMPORTED_MODULE_2_buffer__["Buffer"](password).toString('base64');
        console.log("this is encryptio", password);
        if (this.database == undefined || this.database == null) {
            return null;
        }
        this.database.executeSql("INSERT INTO USER(USERID, PASSWORD) VALUES (?,?)", [userId, password])
            .then(function () { return console.log('insertData'); })
            .catch(function (e) { return console.log(e); });
    };
    SQLiteProvider.prototype.deleteData = function () {
        if (this.database == undefined || this.database == null) {
            return null;
        }
        this.database.executeSql("DELETE FROM USER", {})
            .then(function () { return console.log('deleteData'); })
            .catch(function (e) { return console.log(e); });
    };
    SQLiteProvider.prototype.selectData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var rlt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.database == undefined || this.database == null) {
                            return [2 /*return*/, rlt];
                        }
                        return [4 /*yield*/, this.database.executeSql("SELECT USERID AS userid, PASSWORD AS passwd FROM USER;", {})
                                .then(function (data) {
                                if (data.rows.length > 0) {
                                    var password = _this.decryption(new __WEBPACK_IMPORTED_MODULE_2_buffer__["Buffer"](data.rows.item(0).passwd, 'base64').toString());
                                    console.log("this is  nn", password);
                                    rlt = { "userID": data.rows.item(0).userid, "passWD": password };
                                }
                            })
                                .catch(function (e) { return console.log(e); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, rlt];
                }
            });
        });
    };
    SQLiteProvider.prototype.encryptio = function (password) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        var input = this._utf8_encryption(password);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    };
    SQLiteProvider.prototype._utf8_encryption = function (password) {
        var utftext = "";
        password = password.replace(/\r\n/g, "\n");
        for (var i = 0; i < password.length; i++) {
            var c = password.charCodeAt(i);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    SQLiteProvider.prototype.decryption = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = this._utf8_decryption(output);
        return output;
    };
    SQLiteProvider.prototype._utf8_decryption = function (utftext) {
        var string = "";
        var i = 0;
        var c = 0, c2 = 0, c3 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    };
    SQLiteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], SQLiteProvider);
    return SQLiteProvider;
}());

//# sourceMappingURL=sqlite.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCommon; });
var ViewCommon = /** @class */ (function () {
    function ViewCommon() {
    }
    ViewCommon.showAlert = function (alertCtrl, msg) {
        var alert = alertCtrl.create({
            title: 'エラー',
            subTitle: msg,
            buttons: ['確定']
        });
        alert.present();
    };
    return ViewCommon;
}());

//# sourceMappingURL=ViewCommon.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackExitServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_common_api_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_minimize__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BackExitServiceProvider = /** @class */ (function () {
    function BackExitServiceProvider(commonService, platform, appMinimize, appCtrl) {
        this.commonService = commonService;
        this.platform = platform;
        this.appMinimize = appMinimize;
        this.appCtrl = appCtrl;
    }
    // 最小化
    BackExitServiceProvider.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var activeNav = _this.appCtrl.getActiveNav();
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                if (_this.backButtonFlg) {
                    // 最小化
                    _this.appMinimize.minimize();
                }
                else {
                    _this.backButtonFlg = true;
                    setTimeout(function () { return _this.backButtonFlg = false; }, 1500);
                }
            }
        });
    };
    BackExitServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_common_api_common__["a" /* ApiCommonProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_minimize__["a" /* AppMinimize */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* App */]])
    ], BackExitServiceProvider);
    return BackExitServiceProvider;
}());

//# sourceMappingURL=back-Exit.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiScheduleServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the ApischeduleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 *
 * 概 要： スゲジュール表示用情報取得処理
 * 作成日：2018.02.03
 * 作成者：DHC徐磊健
 */
var ApiScheduleServiceProvider = /** @class */ (function () {
    function ApiScheduleServiceProvider(commonService) {
        this.commonService = commonService;
    }
    /**
     * タスクIDで、AWSへ通信する
     *
     * @param storeNo 店No
     * @param date 日付
     * @param time 時間
     * @param kbn 区分
     */
    ApiScheduleServiceProvider.prototype.getScheduleInit = function (storeNo, date, time, kbn) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/schedule/' + storeNo
                            + '?date=' + date + '&time=' + time + '&kbn=' + kbn)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 店舗ログアウト
     *
     * @param aplUserId ユーザーID
     */
    ApiScheduleServiceProvider.prototype.logout = function (aplUserId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doDelete('/auth/' + aplUserId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * タスク情報
     * @param params パラメータ
     * @param taskId タスクID
     */
    ApiScheduleServiceProvider.prototype.modifyTask = function (taskId, params) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doPost('/task/' + taskId, params)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiScheduleServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiScheduleServiceProvider);
    return ApiScheduleServiceProvider;
}());

//# sourceMappingURL=api-schedule-service.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_minimize__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_control_control__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_taskrd_taskrd__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_selstore_selstore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tasku_tasku__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_manual_manual__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_handoverc_handoverc__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_handoveru_handoveru__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_handoverrd_handoverrd__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_taskc_taskc__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_handoverpop_handoverpop__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_dragula__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_date_picker__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_board_board__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_keyboard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_sqlite__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_api_service_api_control_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_api_service_api_handover_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_api_service_api_login_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_api_service_api_manual_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_api_service_api_selstore_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_api_service_api_taskrd_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_api_service_api_tasku_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_api_service_api_taskc_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_back_exit_back_Exit__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_api_common_api_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_http__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_selschedule_selschedule__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_sqlite_sqlite__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_s3_common_s3_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_push__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_store_timer__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_control_control__["a" /* ControlPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_taskrd_taskrd__["a" /* TaskrdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_selstore_selstore__["a" /* SelstorePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tasku_tasku__["a" /* TaskuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_manual_manual__["a" /* ManualPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_handoverc_handoverc__["a" /* HandovercPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_handoveru_handoveru__["a" /* HandoveruPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_handoverrd_handoverrd__["a" /* HandoverrdPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_taskc_taskc__["a" /* TaskcPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_handoverpop_handoverpop__["a" /* HandoverpopPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_selschedule_selschedule__["a" /* SelschedulePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_board_board__["a" /* BoardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/board/board.module#BoardPageModule', name: 'BoardPage', segment: 'board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/handoverc/handoverc.module#HandovercPageModule', name: 'HandovercPage', segment: 'handoverc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/control/control.module#ControlPageModule', name: 'ControlPage', segment: 'control', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/handoverpop/handoverpop.module#HandoverpopPageModule', name: 'HandoverpopPage', segment: 'handoverpop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/handoverrd/handoverrd.module#HandoverrdPageModule', name: 'HandoverrdPage', segment: 'handoverrd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/handoveru/handoveru.module#HandovercPageModule', name: 'HandoveruPage', segment: 'handoveru', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manual/manual.module#ManualPageModule', name: 'ManualPage', segment: 'manual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taskc/taskc.module#TaskcPageModule', name: 'TaskcPage', segment: 'taskc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selstore/selstore.module#SelstorePageModule', name: 'SelstorePage', segment: 'selstore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selschedule/selschedule.module#SelschedulePageModule', name: 'SelschedulePage', segment: 'selschedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taskrd/taskrd.module#TaskrdPageModule', name: 'TaskrdPage', segment: 'taskrd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasku/tasku.module#TaskuPageModule', name: 'TaskuPage', segment: 'tasku', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__storedb',
                    driverOrder: ['indexeddb', 'websql', 'sqlite']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_control_control__["a" /* ControlPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_taskrd_taskrd__["a" /* TaskrdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_selstore_selstore__["a" /* SelstorePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tasku_tasku__["a" /* TaskuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_manual_manual__["a" /* ManualPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_handoverc_handoverc__["a" /* HandovercPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_handoveru_handoveru__["a" /* HandoveruPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_handoverrd_handoverrd__["a" /* HandoverrdPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_taskc_taskc__["a" /* TaskcPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_handoverpop_handoverpop__["a" /* HandoverpopPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_selschedule_selschedule__["a" /* SelschedulePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_board_board__["a" /* BoardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_minimize__["a" /* AppMinimize */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_store_timer__["a" /* StoreTimer */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_37__providers_api_common_api_common__["a" /* ApiCommonProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_api_service_api_control_service__["a" /* ApiControlServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_api_service_api_handover_service__["a" /* ApiHandoverServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_api_service_api_login_service__["a" /* ApiLoginServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_api_service_api_manual_service__["a" /* ApiManualServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_api_service_api_selstore_service__["a" /* ApiSelstoreServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_api_service_api_taskrd_service__["a" /* ApiTaskrdServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_api_service_api_tasku_service__["a" /* ApiTaskuServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_api_service_api_taskc_service__["a" /* ApiTaskcServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_sqlite_sqlite__["a" /* SQLiteProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_s3_common_s3_service__["a" /* S3Util */],
                __WEBPACK_IMPORTED_MODULE_36__providers_back_exit_back_Exit__["a" /* BackExitServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_back_exit_back_Exit__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, screenOrientation, splashScreen, backExitService) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.backExitService = backExitService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            screenOrientation.lock(screenOrientation.ORIENTATIONS.LANDSCAPE).catch(function (e) { return console.log(e); });
            _this.backExitService.registerBackButtonAction();
            // タイムゾーンを設定
            __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__["a" /* UtilityService */].setISODateTimeWithZone();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_back_exit_back_Exit__["a" /* BackExitServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjUti; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_utility_service_StrUti__ = __webpack_require__(54);

var ObjUti = /** @class */ (function () {
    function ObjUti() {
    }
    ObjUti.isUndef = function (obj) {
        return obj == undefined;
    };
    ObjUti.isNull = function (obj) {
        return obj == undefined || obj == null;
    };
    ObjUti.getLockObject = function (obj) {
        var opNm = obj['opNm'];
        if (obj['opId'] != 0) {
            opNm = null;
        }
        var lockObject = {
            'taskId': obj['taskId'], 'opId': obj['opId'],
            'opNm': opNm, 'workerId': obj['workerId'],
            'categoryId': obj['cgId'], 'storeNo': obj['storeNo'],
            'taskPoolKbn': obj['taskPoolKbn'], 'opCircle': obj['opCircle'],
            'planSDayTime': obj['planSTime'], 'planEDayTime': obj['planETime'],
            'actualSDayTime': obj['actualSTime'], 'actualEDayTime': obj['actualETime'],
            'status': obj['status'], 'alertKbn': obj['alertKbn'],
            'taskDate': obj['taskDate'], 'taskPriorityKbn': obj['taskPriorityKbn']
        };
        return lockObject;
    };
    ObjUti.getLockHandoverObject = function (obj) {
        var lockObject = {
            'handoverId': obj['handoverId'],
            'handoverContents': obj['handoverContents'],
            'handoverDate': obj['handoverDate'],
            'handoverWorkerId': obj['workerId'],
            'imgPath': obj['imgPath'],
            'timeSlotId': obj['timeSlotId'],
            'taskId': obj['taskId'],
            'date': obj['date']
        };
        return lockObject;
    };
    // タスク長さを追加
    ObjUti.addLen = function (obj, sTime, eTime) {
        var psTime, peTime, intShh, intSmm, intEhh, intEmm, apsTime, apeTime;
        var intaShh, intaSmm, intaEhh, intaEmm;
        // eTime = (parseInt(eTime) - 100).toString();
        if (obj.planSTime != null && obj.planSTime != "") {
            apsTime = obj.planSTime.substr(8, 4);
            psTime = obj.planSTime.substr(8, 4) < sTime ? sTime : obj.planSTime.substr(8, 4);
        }
        if (obj.planETime != null && obj.planETime != "") {
            apeTime = obj.planETime.substr(8, 4);
            peTime = obj.planETime.substr(8, 4) > eTime ? eTime : obj.planETime.substr(8, 4);
        }
        if (apsTime != null && apsTime != "") {
            intaShh = parseInt(apsTime.substr(0, 2));
            intaSmm = parseInt(apsTime.substr(2, 2));
        }
        if (apeTime != null && apeTime != "") {
            intaEhh = parseInt(apeTime.substr(0, 2));
            intaEmm = parseInt(apeTime.substr(2, 2));
        }
        var actLen = (intaEhh - intaShh) * 2 + (Math.ceil((intaEmm - intaSmm) / 30)) * 1;
        var acLine = (intaEhh - intaShh) * 2 + ((intaEmm - intaSmm) / 30) * 1;
        if (!(actLen > 1)) {
            actLen = 1;
        }
        if (psTime != null && psTime != "") {
            intShh = parseInt(psTime.substr(0, 2));
            intSmm = parseInt(psTime.substr(2, 2));
        }
        if (peTime != null && peTime != "") {
            intEhh = parseInt(peTime.substr(0, 2));
            intEmm = parseInt(peTime.substr(2, 2));
        }
        var tLen = (intEhh - intShh) * 2 + (Math.ceil((intEmm - intSmm) / 30)) * 1;
        if (!(tLen > 1)) {
            tLen = 1;
        }
        obj["actlen"] = actLen;
        obj["len"] = tLen;
        obj["taskStyle"] = tLen * 100 + '%';
        obj["topCStyle"] = acLine / tLen * 100 + '%';
        if (obj["status"] == 'I') {
            obj["topCStyleColor"] = '#78909C';
        }
        else {
            obj["topCStyleColor"] = '#78909C';
        }
        obj["top"] = '0px';
        obj["textFlag"] = true;
        if (tLen == 1) {
            obj["textFlag"] = false;
        }
    };
    ObjUti.mkTaskPos = function (categoryInfoList, slideList, stime, etime, intLen, positionFlg, timeInSlideLen) {
        categoryInfoList.forEach(function (category) {
            var taskObj = new Object();
            var posArray = new Array();
            var initArray = new Array();
            var intSTime = parseInt(stime);
            var intETime = parseInt(etime);
            var slot = intETime - intSTime;
            for (var index = 0; index < slot * 2; index++) {
                initArray[index] = 0;
            }
            var xArray = initArray.slice(0);
            var iSlide = 0;
            slideList.forEach(function (timeSlide) {
                var indTime = 0;
                timeSlide.forEach(function (timeItem) {
                    category.halfHourList.forEach(function (hfInfo) {
                        if (timeItem.timeO + '00' == hfInfo.halfHour) {
                            taskObj[hfInfo.halfHour] = hfInfo.taskInfoList;
                            hfInfo.taskInfoList.forEach(function (task) {
                                if ((task.status == 'E' && positionFlg == true) || (task.status == 'A' && positionFlg == true)) {
                                    return;
                                }
                                var top = 0;
                                if (posArray.length == 0) {
                                    posArray.push(xArray);
                                }
                                for (var i = 0; i < task.len; i++) {
                                    var index = 0;
                                    if (i == 0) {
                                        for (var k = 0; k < posArray.length; k++) {
                                            index = k;
                                            xArray = posArray[k];
                                            var pos = xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + i];
                                            if (pos == 1) {
                                                top = top + 57;
                                                if (k == posArray.length - 1) {
                                                    var xArray_1 = initArray.slice(0);
                                                    posArray.push(xArray_1);
                                                    index = k + 1;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                            else if (pos == 2) {
                                                top = 0;
                                                if (k == posArray.length - 1) {
                                                    var xArray_2 = initArray.slice(0);
                                                    posArray.push(xArray_2);
                                                    index = k + 1;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        xArray = posArray[index];
                                        xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + i] = 2;
                                    }
                                    else {
                                        xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + i] = 1;
                                    }
                                    task.top = top + 'px';
                                }
                            });
                        }
                        if (timeItem.timeO + '30' == hfInfo.halfHour) {
                            taskObj[hfInfo.halfHour] = hfInfo.taskInfoList;
                            hfInfo.taskInfoList.forEach(function (task) {
                                if ((task.status == 'E' && positionFlg == true) || (task.status == 'A' && positionFlg == true)) {
                                    return;
                                }
                                var top = 0;
                                if (posArray.length == 0) {
                                    posArray.push(xArray);
                                }
                                for (var i = 0; i < task.len; i++) {
                                    var index = 0;
                                    if (i == 0) {
                                        for (var k = 0; k < posArray.length; k++) {
                                            index = k;
                                            xArray = posArray[k];
                                            var pos = xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + 1 + i];
                                            if (pos == 1) {
                                                top = top + 57;
                                                if (k == posArray.length - 1) {
                                                    var xArray_3 = initArray.slice(0);
                                                    posArray.push(xArray_3);
                                                    index = k + 1;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                            else if (pos == 2) {
                                                top = 0;
                                                if (k == posArray.length - 1) {
                                                    var xArray_4 = initArray.slice(0);
                                                    posArray.push(xArray_4);
                                                    index = k + 1;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        xArray = posArray[index];
                                        xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + 1 + i] = 2;
                                    }
                                    else {
                                        xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + 1 + i] = 1;
                                    }
                                }
                                task.top = top + 'px';
                            });
                        }
                    });
                    indTime = indTime + 1;
                });
                iSlide = iSlide + 1;
            });
            category['htask'] = taskObj;
            category['position'] = posArray;
            if (posArray.length * 57 > 228) {
                category['mheight'] = posArray.length * 57 + 'px';
                intLen = intLen + posArray.length * 57;
            }
            else {
                category['mheight'] = '228px';
                intLen = intLen + 228;
            }
        });
        return intLen;
    };
    ObjUti.getLockTaskInfo = function (obj) {
        var opNm = obj['opNm'];
        if (obj['opId'] != 0) {
            opNm = null;
        }
        var lockTaskInfo = {
            'taskId': obj['taskId'], 'opId': obj['opId'],
            'opNm': opNm, 'workerId': obj['workerId'],
            'categoryId': obj['cgId'], 'storeNo': obj['storeNo'],
            'taskPoolKbn': obj['taskPoolKbn'], 'taskPriorityKbn': obj['taskPriorityKbn'], 'opCircle': __WEBPACK_IMPORTED_MODULE_0__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(obj['opCircle']),
            'planSDayTime': __WEBPACK_IMPORTED_MODULE_0__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(obj['planSTime']), 'planEDayTime': __WEBPACK_IMPORTED_MODULE_0__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(obj['planETime']),
            'actualSDayTime': __WEBPACK_IMPORTED_MODULE_0__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(obj['actualSTime']), 'actualEDayTime': __WEBPACK_IMPORTED_MODULE_0__providers_utility_service_StrUti__["a" /* StrUti */].strNullFormat(obj['actualETime']),
            'status': obj['status'], 'alertKbn': obj['alertKbn'],
            'taskDate': obj['taskDate']
        };
        return lockTaskInfo;
    };
    return ObjUti;
}());

//# sourceMappingURL=ObjUti.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__control_control__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selschedule_selschedule__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_service_api_tasku_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_taskc_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__taskc_taskc__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__handoverpop_handoverpop__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_utility_service_StrUti__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


















var SchedulePage = /** @class */ (function () {
    function SchedulePage(navController, dragulaService, appCtrl, datePicker, popoverCtrl, scheduleProvider, alertCtrl, navParams, loadingCtrl, events, cd, service, taskcServiceProvider, storage) {
        var _this = this;
        this.navController = navController;
        this.dragulaService = dragulaService;
        this.appCtrl = appCtrl;
        this.datePicker = datePicker;
        this.popoverCtrl = popoverCtrl;
        this.scheduleProvider = scheduleProvider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.cd = cd;
        this.service = service;
        this.taskcServiceProvider = taskcServiceProvider;
        this.storage = storage;
        //カテゴリーの表示用リスト
        this.categoryInfoList = new Array();
        this.noAssingFlg = false;
        //最後のクリックタイム
        this.lastClickTime = 0;
        //画面表示用：アラートがあるフラッグ
        this.hasAlert = false;
        this.hasAlertS = false;
        this.hasAlertE = false;
        //画面表示用：引継があるフラッグ
        this.hasHandover = false;
        this.timeSlotInfo = {};
        //初期「移動不可」状態
        this.flag = false;
        //touchイベント判断用フラグ
        this.touchFlag = false;
        this.mFlg = true;
        this.slideList = new Array();
        //move判断flag
        this.moveFlag = false;
        //touch判断flag
        this.clickFlag = false;
        //event判断flag
        this.eventFlag = false;
        this.scrollYFlg = true;
        this.dragFlg = false;
        this.dragMoveFlg = true;
        this.otherDateFlg = false;
        this.n = 0;
        this.timeSlotList = [];
        //選択日付
        this.selByCalandarDate = new Date();
        this.beforeDate = new Date();
        this.addOrReduceValue = 0;
        this.timeInSlideLen = 4;
        this.zoomFlag = false;
        this.zoominDisabled = true;
        this.zoomoutDisabled = false;
        //前画面がら取得する値
        this.storeNo = this.navParams.get('storeNo');
        this.storeNm = this.navParams.get('storeNm');
        this.res = this.navParams.get('res');
        this.aplUserId = this.navParams.get('aplUserId');
        this.viewKbn = this.navParams.get('viewKbn');
        this.selectedText = this.navParams.get('selectedText');
        this.selectedDate = this.navParams.get('selectedDate');
        this.selByCalandarDate = new Date(Date.parse(this.dateShowFormat(this.selectedDate)));
        this.currentTimeSlotId = this.navParams.get('currentTimeSlotId');
        this.getData();
        this.scrollStartSet = true;
        //画面のデータ再表示
        this.events.subscribe('res:created', function (params) {
            if (params.res != undefined) {
                _this.storeNo = params.storeNo;
                _this.storeNm = params.storeNm;
                _this.selectedText = params.selectedText;
                _this.aplUserId = params.aplUserId;
                _this.viewKbn = params.viewKbn;
                _this.selectedDate = params.selectedDate;
                _this.currentTimeSlotId = params.currentTimeSlotId;
                _this.res = params.res;
                if (_this.flag) {
                    _this.flag = false;
                }
                if (params.dragFlg) {
                    _this.dragSub.unsubscribe();
                    _this.dragendSub.unsubscribe();
                }
                _this.getData();
                _this.timeSlotInfo = _this.result["timeSlotInfoList"][_this.timeSlotSheet];
                _this.timeSlotSheetNm = _this.result['timeSlotInfoList'][_this.timeSlotSheet].timeSlotNm;
                _this.currentTimeSlotId = _this.result['timeSlotInfoList'][_this.timeSlotSheet].timeSlotId;
                if (!_this.cd['destroyed']) {
                    _this.cd.detectChanges();
                }
                if (_this.eventFlag || params.dragFlg) {
                    _this.ionViewDidEnter();
                    _this.eventFlag = false;
                }
            }
            if (params != undefined && params.TaskHasHandover != undefined) {
                _this.currentTaskObj['hasHandover'] = params.TaskHasHandover;
            }
            else if (params != undefined && params.hasHandover != undefined) {
                for (var i = 0; i < _this.result['timeSlotInfoList'].length; i++) {
                    if (_this.result['timeSlotInfoList'][i].timeSlotId == _this.currentTimeSlotId) {
                        _this.result['timeSlotInfoList'][i].hasHandover = params.hasHandover;
                        break;
                    }
                }
                _this.hasHandover = params.hasHandover;
            }
            _this.enableScroll();
            _this.content.scrollToTop(0);
        });
    }
    SchedulePage.prototype.zoomin = function () {
        if (this.timeInSlideLen - 2 >= 4) {
            this.timeInSlideLen = this.timeInSlideLen - 2;
            this.set();
        }
    };
    SchedulePage.prototype.zoomout = function () {
        if (this.timeInSlideLen + 2 <= 8) {
            this.timeInSlideLen = this.timeInSlideLen + 2;
            this.set();
        }
    };
    SchedulePage.prototype.set = function () {
        this.zoomFlag = true;
        this.scrollStartSet = true;
        // ドラッグ解除
        if (this.flag) {
            this.updateAfterCtl();
        }
        var params = {
            res: '', selectedText: this.selectedText, storeNo: this.storeNo,
            storeNm: this.storeNm, viewKbn: this.viewKbn, aplUserId: this.aplUserId,
            selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
            dragFlg: true
        };
        this.events.publish('res:created', params);
        this.zoomFlag = false;
        this.scrollStartSet = false;
        if (this.timeInSlideLen == 4) {
            this.zoominDisabled = true;
        }
        else if (this.timeInSlideLen == 8) {
            this.zoomoutDisabled = true;
        }
        else {
            this.zoominDisabled = false;
            this.zoomoutDisabled = false;
        }
    };
    //全画面表示用データ整備
    SchedulePage.prototype.getData = function () {
        var _this = this;
        if (this.res == undefined) {
            __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
            return;
        }
        else {
            if (this.zoomFlag == false) {
                this.result = this.res.json();
            }
            var msgInfo = this.result['msgInfo'];
            if (this.zoomFlag == false) {
                if (msgInfo.statusCd == 'SB900') {
                    var alert_1 = this.alertCtrl.create({
                        title: 'エラー',
                        subTitle: msgInfo.msg,
                        buttons: [
                            {
                                text: 'OK',
                                handler: function (data) {
                                    _this.events.unsubscribe("res:created");
                                    _this.events.unsubscribe("res:creat");
                                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
                                }
                            },
                        ]
                    });
                    alert_1.present();
                    return;
                }
                if (msgInfo.statusCd == 'SB400') {
                    __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                    return;
                }
            }
            //時間帯の情報設定
            //DATEの設定
            var date = new Date();
            if (this.selectedDate == undefined) {
                this.selectedDate = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(date);
            }
            this.selectedShowDate = this.dateShowFormat(this.selectedDate);
            this.activeIndex = this.result["activeIndex"];
            if (this.otherDateFlg) {
                if (__WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(this.selByCalandarDate) > __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(this.beforeDate)) {
                    //次のシフトに移動する
                    // this.result["activeIndex"] = 0;
                    this.activeIndex = 0;
                }
                else if (__WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(this.selByCalandarDate) < __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(this.beforeDate)) {
                    // this.result["activeIndex"] = this.result["timeSlotInfoList"].length - 1;
                    this.activeIndex = this.result["timeSlotInfoList"].length - 1;
                }
                else {
                    //当日の場合
                    if (this.addOrReduceValue == 1) {
                        // this.result["activeIndex"] = 0;
                        this.activeIndex = 0;
                    }
                    else if (this.addOrReduceValue == -1) {
                        // this.result["activeIndex"] = this.result["timeSlotInfoList"].length - 1;
                        this.activeIndex = this.result["timeSlotInfoList"].length - 1;
                    }
                }
            }
            else {
                if (this.selectedDate != __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(date)) {
                    // this.result["activeIndex"] = 0;
                    this.activeIndex = 0;
                }
            }
            this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
            this.timeSlotInfoList = this.result["timeSlotInfoList"];
            //時間帯の設定
            this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
            //引継情報有無フラグの設定
            this.hasHandover = this.timeSlotInfo["hasHandover"];
            //時間帯の情報設定
            this.sTime = this.result["timeSlotInfoList"][0]["startTime"];
            this.eTime = this.result["timeSlotInfoList"][this.result["timeSlotInfoList"].length - 1]["endTime"];
            this.categoryInfoLists = this.result["categoryInfoLists"];
            if (__WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].isNull(this.categoryInfoLists)) {
                this.categoryInfoLists = new Array();
                this.categoryInfoLists.push(new Array());
                this.categoryInfoList = this.categoryInfoLists[0];
            }
            //時間帯のリスト切り
            this.timeListCut(this.eTime, this.sTime);
            if (msgInfo.statusCd == 'SB300') {
                if (this.zoomFlag == false) {
                    __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                }
                this.categoryInfoList = new Array();
                // this.slideList = new Array<any>();
                this.noAssign = new Object();
                this.noAssign['taskInfoList'] = new Array();
                return;
            }
            //カテゴリの設定
            if (this.categoryInfoLists.length > 0) {
                if (this.viewKbn == '1') {
                    this.categoryInfoLists[0] = this.filterNotShift4AllDay(this.categoryInfoLists[0], this.result['workershiftInfoLists']);
                }
                this.categoryInfoList = this.categoryInfoLists[0];
            }
            //カテゴリ情報の整備
            this.categoryInfoListSet();
        }
    };
    SchedulePage.prototype.filterNotShift4AllDay = function (categoryInfoList, workerShifts) {
        var workers = [];
        workerShifts.forEach(function (e) {
            if (e.workershifList.length == 0) {
                workers.push(e.workerId);
            }
        });
        return categoryInfoList.filter(function (e) { return workers.indexOf(e.categoryId) < 0; });
    };
    //画面ロードする時、初期設定
    SchedulePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var margin;
        //ドラッグ開始
        this.dragSub = this.dragulaService.drag.subscribe(function (value) {
            _this.dragFlg = true;
            _this.dragIdStart = value[2].id;
            margin = document.getElementById(value[1].id).style.marginTop;
            document.getElementById(value[1].id).style.marginTop = '0px';
        });
        //ドラッグ移動終了
        this.dragendSub = this.dragulaService.dragend.subscribe(function (value) {
            //スクロール利用可のメソッドを呼び出す
            _this.enableScroll();
            _this.dragFlg = false;
            document.getElementById(value[1].id).style.marginTop = margin;
            //重複利用できるタスク場合、COPYされたタスクを削除する。
            if (_this.currentTaskObj.taskPoolKbn == 0 && _this.dragulaService.find("drag-bag") != undefined) {
                _this.dragulaService.destroy("drag-bag");
            }
            document.getElementById(_this.currentTaskId).className = 'taskButton';
            if (value[1].parentElement == null) {
                _this.flag = false;
                return;
            }
            _this.dragIdEnd = value[1].parentElement.id;
            var param;
            if (_this.dragIdStart != _this.dragIdEnd) {
                if (_this.noAssingFlg) {
                    var len = parseInt(String(_this.currentTaskObj.duration / 30));
                    param = _this.getDrakTaskTime(_this.dragIdEnd, len, _this.currentTaskObj.duration % 30);
                }
                else {
                    param = _this.getDrakTaskTime(_this.dragIdEnd, _this.currentTaskObj.actlen);
                }
                var planETimeHour = parseInt(param.planETime.substr(0, 2));
                if (planETimeHour > 24) {
                    var days = parseInt(String(planETimeHour / 24));
                    planETimeHour = planETimeHour - days * 24;
                }
                var planETimeHourTemp = void 0;
                planETimeHour > 9 ? planETimeHourTemp = planETimeHour : planETimeHourTemp = "0" + planETimeHour;
                planETimeHour = planETimeHourTemp;
                param.planETime = String(planETimeHour) + param.planETime.substr(2, 2);
                var result = _this.taskUpdateCheck(param);
                result.then(function (res) {
                    if (res['msgInfo'].statusCd == 'SB200') {
                        _this.currentStartTime = param.planSTime;
                        _this.currentTaskObj["planSTime"] = _this.selectedDate + param.planSTime;
                        _this.currentTaskObj["planETime"] = _this.selectedDate + param.planETime;
                        if (res['taskId'] != undefined) {
                            //重複利用できる場合
                            _this.currentTaskObj['taskId'] = res['taskId'];
                            _this.currentTaskObj['hasHandover'] = 0;
                            _this.currentTaskObj['opCircle'] = null;
                            _this.currentTaskObj['status'] = "S";
                            _this.currentTaskObj['precOpList'] = [];
                            _this.currentTaskObj['subsOpList'] = [];
                            _this.currentTaskObj['actualETime'] = null;
                            _this.currentTaskObj['actualSTime'] = null;
                            _this.currentTaskObj['alertKbn'] = 0;
                        }
                        if (_this.newWorkerId != undefined) {
                            _this.currentTaskObj['workerId'] = _this.newWorkerId;
                        }
                        _this.flag = true;
                        _this.updateListSet();
                        _this.updateAfterCtl();
                        if (!_this.cd['destroyed']) {
                            _this.cd.detectChanges();
                        }
                        if (_this.noAssingFlg) {
                            var noAssingObj = document.getElementById(_this.currentTaskObj['taskId']);
                            if (noAssingObj != undefined && noAssingObj != null) {
                                var noAssingObjParent = document.getElementById(_this.currentTaskObj['taskId']).parentElement;
                                for (var i = 0; i < noAssingObjParent.children.length; i++) {
                                    if (noAssingObjParent.children[i].getAttribute("name") == 'noAssign') {
                                        noAssingObjParent.removeChild(noAssingObjParent.children[i]);
                                        break;
                                    }
                                }
                            }
                            if (document.getElementById(_this.currentTaskId) != null) {
                                document.getElementById(_this.currentTaskId).className = 'taskButton';
                                _this.enableScroll();
                            }
                        }
                        if (!_this.cd['destroyed']) {
                            _this.cd.detectChanges();
                        }
                    }
                    else {
                        if (!_this.cd['destroyed']) {
                            _this.cd.detectChanges();
                        }
                    }
                });
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_15__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(_this.dragIdStart)) {
                    _this.updateListSet();
                }
                _this.updateAfterCtl();
            }
        });
        this.dragAreaSet();
        this._leftHeight();
        if (this.scrollStartSet) {
            //SCROLL
            if (this.slideList.length != 0) {
                this.len = this.slideList.length;
                this.clientWidth = document.getElementById('scrollX').clientWidth;
                this.gbWidth = (this.clientWidth / this.timeInSlideLen);
                this.n = 0;
                this.gbWidthCount = 0;
                this.timeSlotSheetCount = 0;
                //NOWSHEET
                if (!this.zoomFlag) {
                    this.timeSlotSheet = this.result.activeIndex;
                    this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                    this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
                    this.screenClientWidthRight = document.getElementById('div-outermost').clientWidth - document.getElementById('div-left').clientWidth;
                    this.screenClientWidthRightChange = this.screenClientWidthRight;
                    this.screenClientWidthLeft = 0;
                }
                this.scrollStartSet = false;
                //NOWTIMESHEET
                this.getNowTime();
                var se = this.result['timeSlotInfoList'][this.result['timeSlotInfoList'].length - 1].endTime.substr(0, 2) - this.result['timeSlotInfoList'][0].startTime.substr(0, 2);
                if (this.zoomFlag) {
                    this.scrollTouchE(this.scrollHoursCount);
                    for (var i = 0; i < this.timeSlotSheet; i++) {
                        this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[i];
                    }
                }
                else {
                    if (this.timeSE >= this.timeInSlideLen && this.timeSE < se) {
                        this.scrollTouchE(this.timeSE);
                        for (var i = 0; i < this.timeSlotSheet; i++) {
                            this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[i];
                        }
                    }
                    else if (this.timeSE == 9999) {
                        for (var i = 0; i < this.timeSlotSheet; i++) {
                            this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[i];
                        }
                        this.scrollTouchE(this.timeSlotSheetCount);
                    }
                    else {
                        if (this.otherDateFlg) {
                            for (var i = 0; i < this.timeSlotSheet; i++) {
                                this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[i];
                            }
                            this.scrollTouchE(this.timeSlotSheetCount);
                        }
                        else {
                            this.timeSlotSheetCount = 0;
                            this.scrollTouchE(this.timeSlotSheetCount);
                        }
                    }
                }
            }
        }
        this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
        // ログイン画面でメモリーから削除
        this.storage.get('isShow').then(function (val) {
            _this.isShow = val;
            // 自動リフレッシュ後、タスクの並べ替え
            _this._positionChange();
        });
        // 自動リフレッシュ
        this.startAutoRefresh();
    };
    //画面終了する
    SchedulePage.prototype.ionViewDidLeave = function () {
        //ドラッグ事件を取り消す
        this.dragSub.unsubscribe();
        this.dragendSub.unsubscribe();
        this.stopAutoRefresh();
    };
    //カレンダー
    SchedulePage.prototype.dateSelect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.datePicker.show({
                    mode: 'date',
                    date: new Date(),
                    androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
                    titleText: '日付を選択'
                }).then(function (date) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.selByCalandarDate = date;
                        this.selByDate(0);
                        return [2 /*return*/];
                    });
                }); }, function (err) { return console.log('Error occurred while getting date: ', err); });
                return [2 /*return*/];
            });
        });
    };
    SchedulePage.prototype.longPress = function (taskObj, dragName, timeSlot, categoryIndex, taskIndex) {
        //スクロール利用不可のメソッドを呼び出す
        this.disableScroll();
        if (this.touchFlag) {
            return;
        }
        if (timeSlot != null) {
            this.oldStartTime = timeSlot;
        }
        //未着手以外の場合、ドラッグ不可
        if (taskObj.status != "S") {
            this.touchFlag = true;
            return;
        }
        //未割当のタスクは担当者指定されていない場合、ドラッグ不可
        if (this.viewKbn == '0') {
            if (taskObj.workerId == null) {
                this.touchFlag = true;
                return;
            }
        }
        var drag;
        document.getElementById(taskObj.taskId).style.width = taskObj.taskStyle;
        document.getElementById(taskObj.taskId).style.marginTop = taskObj.top;
        if (this.noAssingFlg && dragName != 'drag-bag') {
            this.noAssingFlg = false;
        }
        //未割当の場合、フラッグの設定
        if (dragName == 'drag-bag') {
            this.noAssingFlg = true;
            drag = 'drag-bag';
        }
        else if (this.viewKbn == '1') {
            //ワーカー別タイムスケジュール画面の場合
            drag = 'drag-worker';
        }
        else {
            drag = taskObj.cgId;
        }
        this.currentTaskLen = taskObj.len;
        if (taskObj['taskPoolKbn'] == 0) {
            var seen_1 = [];
            var replacer = function (key, value) {
                if (value != null && typeof value == "object") {
                    if (seen_1.indexOf(value) >= 0) {
                        return;
                    }
                    seen_1.push(value);
                }
                return value;
            };
            this.currentTaskObj = new Object();
            this.currentTaskObj = JSON.parse(JSON.stringify(taskObj, replacer));
        }
        else {
            this.currentTaskObj = taskObj;
        }
        this.currentCgId = taskObj.cgId;
        this.currentTaskObj["noAssingFlg"] = this.noAssingFlg;
        this.currentTaskObj['timeSlot'] = timeSlot;
        this.currentTaskObj['taskIndex'] = taskIndex;
        this.currentTaskObj['categoryIndex'] = categoryIndex;
        if (!this.flag) {
            this.currentTaskId = taskObj.taskId;
            this.dragSet(drag, taskObj.cgId, taskObj.taskId, taskObj.taskPoolKbn);
            //未割当の場合、ドラッグのコンテナに追加す
            if (this.noAssingFlg) {
                this.dragulaService.find(drag).drake.containers.push(document.getElementById(taskObj.taskId).parentElement);
            }
            // 「移動可」状態フラグに変更
            this.flag = true;
        }
        else {
            if (this.currentTaskId == taskObj.taskId) {
                this.flag = false;
                this.touchFlag = true;
                document.getElementById(taskObj.taskId).className = 'taskButton';
                this.enableScroll();
                //ドラッグ区域の制御
                this.dragAreaSet();
                this.noAssingFlg = false;
            }
            else {
                if (this.noAssingFlg) {
                    //ドラッグ区域の制御
                    this.dragAreaSet();
                }
                document.getElementById(this.currentTaskId).className = 'taskButton';
                this.enableScroll();
                this.currentTaskId = taskObj.taskId;
                //ドラッグ区域の設定
                this.dragSet(drag, taskObj.cgId, taskObj.taskId, taskObj.taskPoolKbn);
                if (this.noAssingFlg) {
                    this.dragulaService.find(drag).drake.containers.push(document.getElementById(taskObj.taskId).parentElement);
                }
                // 「移動可」状態フラグに変更
                if (!this.noAssingFlg) {
                    this.flag = true;
                    this.noAssingFlg = false;
                }
            }
        }
        //可視区域の限界になると、スクロールする。
        // document.addEventListener('touchmove', this.dragWheelHandler.bind(this), true);
    };
    //タスクイベント(クリック、ダブりクリック)
    SchedulePage.prototype.goControl = function (taskObj, categoryId, noAssingFlg, categoryIndex, timeSlot, taskIndex) {
        var _this = this;
        //pressイベント発生する時、touchイベントを阻止する
        if (this.flag == true || this.touchFlag == true || this.moveFlag == true) {
            if (this.touchFlag == true) {
                this.touchFlag = false;
            }
            if (this.moveFlag == true) {
                this.moveFlag = false;
            }
            return;
        }
        this.noAssingFlg = noAssingFlg;
        this.currentTaskObj = taskObj;
        this.currentTaskObj["storeNm"] = this.storeNm;
        this.currentTaskObj["currentTimeSlotId"] = this.currentTimeSlotId;
        this.currentTaskObj["categoryId"] = categoryId;
        this.currentTaskObj["storeNo"] = this.storeNo;
        this.currentTaskObj["viewKbn"] = this.viewKbn;
        this.currentTaskObj["selectedText"] = this.selectedText;
        this.currentTaskObj["aplUserId"] = this.aplUserId;
        this.currentTaskObj["selectedDate"] = this.selectedDate;
        this.currentTaskObj["noAssingFlg"] = this.noAssingFlg;
        this.currentTaskObj['categoryInfoList'] = this.categoryInfoList;
        this.currentTaskObj['categoryIndex'] = categoryIndex;
        this.currentTaskObj['timeSlot'] = timeSlot;
        this.currentTaskObj['taskIndex'] = taskIndex;
        this.currentTaskObj['noAssign'] = this.noAssign;
        this.currentTaskObj['timeSlotInfoList'] = this.timeSlotInfoList;
        this.currentTaskObj['categoryInfoLists'] = this.categoryInfoLists;
        this.currentTaskObj['activeIndex'] = this.activeIndex;
        this.currentTaskObj['slideList'] = this.slideList;
        //引続画面ポップ
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__control_control__["a" /* ControlPage */], this.currentTaskObj, { cssClass: 'animated bounceInDown' });
        popover.present();
        //コントローラー画面の非同期処理(タスクのSTATUS変更)
        popover.onDidDismiss(function (data) {
            //処理がない場合
            if (data == undefined) {
                return;
            }
            else {
                if (data == "1") {
                    //未着手の場合
                    taskObj["status"] = "S";
                    taskObj["topCStyleColor"] = '#78909C';
                }
                else if (data == "2") {
                    //進行中の場合
                    taskObj["status"] = "I";
                    taskObj["topCStyleColor"] = '#78909C';
                }
                else if (data == "3") {
                    //中止の場合
                    taskObj["status"] = "A";
                    taskObj["topCStyleColor"] = '#78909C';
                }
                else {
                    //完了の場合
                    taskObj["status"] = "E";
                    taskObj["topCStyleColor"] = '#78909C';
                }
                // タスクリスト整備
                __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(_this.categoryInfoList, _this.slideList, _this.sTime.substring(0, 2), _this.eTime.substring(0, 2), 35, _this.isShow, _this.timeInSlideLen);
            }
            _this.flag = false;
        });
    };
    //時間帯のリスト切り
    SchedulePage.prototype.timeListCut = function (endTime, startTime) {
        this.slideList = new Array();
        var intETime = parseInt(endTime.substring(0, 2));
        var intSTime = parseInt(startTime.substring(0, 2));
        var timeTemp;
        var timeInSlide = new Array();
        var workerShifList = [];
        if (this.result['workershiftInfoLists']) {
            this.result['workershiftInfoLists'].forEach(function (e) {
                if (e.workershifList.length != 0) {
                    workerShifList.push(e);
                }
            });
        }
        var formatK;
        for (var k = intSTime; k < intETime; k++) {
            if (k > 12) {
                timeTemp = { "time": k - 12, "amOrpm": "PM", "timeO": k };
                formatK = k;
            }
            else {
                var m = null;
                k < 10 ? m = '0' + k : m = k;
                timeTemp = { "time": k, "amOrpm": "AM", "timeO": m };
                formatK = m;
            }
            // Free Time Is Gray ---
            if (this.viewKbn == '1' && workerShifList != null) {
                var xxx = new Array();
                var _loop_1 = function (j) {
                    var ttt = new Object();
                    ttt['x'] = '#ccc';
                    ttt['y'] = '#ccc';
                    if (workerShifList[j]['workershifList'].length > 0) {
                        workerShifList[j]['workershifList'].forEach(function (workeTimeItem) {
                            if (workeTimeItem.startTime <= formatK + '00'
                                && formatK + '00' < workeTimeItem.endTime
                                && ttt['x'] != '') {
                                ttt['x'] = '';
                            }
                            if (workeTimeItem.startTime <= formatK + '30'
                                && formatK + '30' < workeTimeItem.endTime
                                && ttt['y'] != '') {
                                ttt['y'] = '';
                            }
                        });
                    }
                    else {
                        ttt['x'] = '#ccc';
                        ttt['y'] = '#ccc';
                    }
                    xxx.push(ttt);
                };
                for (var j = 0; j < workerShifList.length; j++) {
                    _loop_1(j);
                }
                timeTemp['bkColor'] = xxx;
            }
            // ---
            timeInSlide.push(timeTemp);
            if (timeInSlide.length == this.timeInSlideLen) {
                this.slideList.push(timeInSlide);
                timeInSlide = new Array();
            }
        }
        if (timeInSlide.length != 0) {
            this.slideList.push(timeInSlide);
        }
        if (this.timeSlotList.length == 0) {
            if (this.result["timeSlotInfoList"].length > 1) {
                var timeSoltCount = void 0;
                for (var i = 0; i < this.result["timeSlotInfoList"].length; i++) {
                    if (i + 1 <= this.result["timeSlotInfoList"].length - 1) {
                        timeSoltCount = this.result["timeSlotInfoList"][i + 1].startTime.substr(0, 2)
                            - this.result["timeSlotInfoList"][i].startTime.substr(0, 2);
                        this.timeSlotList.push(timeSoltCount);
                    }
                    else {
                        return;
                    }
                }
            }
        }
    };
    // 時間線
    SchedulePage.prototype.getNowTime = function () {
        if (this.result['timeSlotInfoList'].length > 0 &&
            this.result['timeSlotInfoList'] != null &&
            this.result['timeSlotInfoList'] != undefined) {
            var nowTime = new Date();
            if (!this.otherDateFlg && this.selectedDate != __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(nowTime)) {
                this.timeSE = 0;
                document.getElementById("timeLine").setAttribute("style", "margin-left: 0%;");
                return;
            }
            if (__WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(this.beforeDate) < this.selectedDate) {
                if (this.selectedDate != __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(nowTime)) {
                    this.timeSE = 0;
                    document.getElementById("timeLine").setAttribute("style", "margin-left: 0%;");
                    this.beforeDate.setDate(this.beforeDate.getDate() + 1);
                    return;
                }
                else {
                    this.beforeDate.setDate(this.beforeDate.getDate() + 1);
                }
            }
            else if (__WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(this.beforeDate) > this.selectedDate) {
                if (this.selectedDate != __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(nowTime)) {
                    this.timeSE = 9999;
                    document.getElementById("timeLine").setAttribute("style", "margin-left: 0%;");
                    this.beforeDate.setDate(this.beforeDate.getDate() - 1);
                    return;
                }
                else {
                    this.beforeDate.setDate(this.beforeDate.getDate() - 1);
                }
            }
            else {
                if (this.selectedDate != __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(nowTime)) {
                    return;
                }
            }
            var timeHours = nowTime.getHours();
            var startHours = this.result['timeSlotInfoList'][0].startTime.substr(0, 2);
            if (timeHours - startHours > 0) {
                if (!this.otherDateFlg) {
                    this.timeSE = timeHours - startHours;
                }
                var timeMinutes = nowTime.getMinutes();
                var width = (timeHours - startHours) * 0.2085 * 6 * 2 * 4.0 / this.timeInSlideLen + timeMinutes / 5 * 0.2085 * 4.0 / this.timeInSlideLen;
                var timeMargin = "margin-left:" + width + "%;";
                var elTimeLine = document.getElementById("timeLine");
                if (elTimeLine != undefined && elTimeLine != null) {
                    elTimeLine.setAttribute("style", timeMargin);
                }
            }
        }
    };
    //更新用時間取得
    SchedulePage.prototype.getDrakTaskTime = function (value, taskLen, DurationMinute) {
        //slide位置
        var conIndexSlid = parseInt(value.substring(0, 1));
        var conMinute = value.substring(1, 2);
        var conIndexHour = value.substring(2, 3);
        var sHour;
        var amOrpm;
        var sMinute;
        var eHour;
        var eMinute;
        var planSTime;
        var planETime;
        conMinute == "x" ? sMinute = "00" : sMinute = "30";
        sHour = this.slideList[conIndexSlid][conIndexHour].time;
        amOrpm = this.slideList[conIndexSlid][conIndexHour].amOrpm;
        amOrpm == "PM" ? sHour = sHour + 12 : sHour;
        if (taskLen % 2 == 0) {
            eHour = taskLen / 2 + sHour;
            eMinute = sMinute;
        }
        else {
            eHour = parseInt(String(taskLen / 2)) + sHour;
            if (sMinute == "30") {
                eHour = eHour + 1;
                eMinute = "00";
            }
            else {
                eMinute = "30";
            }
        }
        if (DurationMinute != undefined) {
            eMinute = parseInt(eMinute) + parseInt(DurationMinute);
            eMinute > 9 ? eMinute = String(eMinute) : eMinute = "0" + eMinute;
        }
        sHour > 9 ? sHour : sHour = "0" + sHour;
        eHour > 9 ? eHour : eHour = "0" + eHour;
        planSTime = sHour + sMinute;
        planETime = eHour + eMinute;
        var param = { "planSTime": planSTime, "planETime": planETime };
        return param;
    };
    //画面表示用フォーマット(yyyy/mm/dd)
    SchedulePage.prototype.dateShowFormat = function (date) {
        date = date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + date.slice(6, 8);
        return date;
    };
    //未割当部分表示(非表示)
    SchedulePage.prototype.changMFlgFalse = function () {
        this.mFlg = false;
    };
    //未割当部分表示(表示)
    SchedulePage.prototype.changMFlgTrue = function () {
        this.mFlg = true;
    };
    //pulldownの区域
    SchedulePage.prototype.presentPopover = function (myEvent) {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__selschedule_selschedule__["a" /* SelschedulePage */], {
            'aplUserId': this.aplUserId, 'timeRun': this.timeRun, 'storeNo': this.storeNo,
            'storeNm': this.storeNm, 'viewKbn': this.viewKbn, 'selectedDate': this.selectedDate, 'currentTimeSlotId': this.currentTimeSlotId
        });
        this.popover.present({
            ev: myEvent
        });
    };
    //ドラッグ部分の制御
    SchedulePage.prototype.dragAreaSet = function () {
        var _this = this;
        //未割当の場合
        if (this.dragulaService.find("drag-bag") != undefined) {
            this.dragulaService.destroy("drag-bag");
        }
        //担当者の場合
        if (this.dragulaService.find("drag-worker") != undefined) {
            this.dragulaService.destroy("drag-worker");
        }
        //業務の場合
        this.categoryInfoList.forEach(function (category) {
            if (!__WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].isNull(category)) {
                if (_this.dragulaService.find(category.categoryId) != undefined) {
                    _this.dragulaService.destroy(category.categoryId);
                }
            }
        });
    };
    //更新後の画面制御
    SchedulePage.prototype.updateAfterCtl = function () {
        document.getElementById(this.currentTaskId).className = 'taskButton';
        this.enableScroll();
        this.flag = false;
        this.dragAreaSet();
    };
    //ドラッグ関連の設定
    SchedulePage.prototype.dragSet = function (drag, cgId, taskId, taskPoolKbn) {
        var _this = this;
        document.getElementById(taskId).className = 'taskButton' + ' animated infinite pulse';
        if (this.dragulaService.find(drag) != undefined) {
            this.dragulaService.destroy(drag);
        }
        if (this.dragulaService.find("drag-bag") != undefined) {
            this.dragulaService.destroy("drag-bag");
        }
        this.dragulaService.setOptions(drag, {
            revertOnSpill: true,
            invalid: function (el, handle) {
                return _this.handle(handle);
            },
            copy: function () {
                if (_this.noAssingFlg && taskPoolKbn == 0) {
                    return true;
                }
            },
        });
        for (var n = 0; n < document.getElementsByName('conName').length; n++) {
            if (this.viewKbn == '1') {
                //ワーカー別タイムスケジュール画面の場合、各行に移動できる
                this.dragulaService.find(drag).drake.containers.push(document.getElementsByName('conName')[n]);
            }
            else {
                if (document.getElementsByName('conName')[n].attributes['ng-reflect-dragula'].value == cgId) {
                    this.dragulaService.find(drag).drake.containers.push(document.getElementsByName('conName')[n]);
                }
            }
        }
        if (this.viewKbn == '1' && this.noAssign != undefined && this.noAssign.taskInfoList != undefined) {
            this.dragulaService.find(drag).drake.containers = this.dragulaService.find(drag).drake.containers.slice(0, (this.dragulaService.find(drag).drake.containers.length - this.noAssign.taskInfoList.length));
        }
    };
    //タスク新規画面に遷移
    SchedulePage.prototype.goTaskC = function () {
        var param = new Object();
        param["storeNm"] = this.storeNm;
        param["currentTimeSlotId"] = this.currentTimeSlotId;
        param["storeNo"] = this.storeNo;
        param["viewKbn"] = this.viewKbn;
        param["selectedText"] = this.selectedText;
        param["aplUserId"] = this.aplUserId;
        param["hasHandover"] = this.hasHandover;
        param["selectedDate"] = this.selectedDate;
        param["slideList"] = this.slideList;
        param["noAssign"] = this.noAssign;
        param["activeIndex"] = this.activeIndex;
        param["timeSlotInfoList"] = this.result["timeSlotInfoList"];
        param["categoryInfoLists"] = this.categoryInfoLists;
        param["categoryInfoList"] = this.categoryInfoList;
        this.navController.push(__WEBPACK_IMPORTED_MODULE_10__taskc_taskc__["a" /* TaskcPage */], param);
    };
    //引き続き画面に遷移
    SchedulePage.prototype.goHandoverpopPage = function (timeSlotNm) {
        var timeSlotObj = new Object();
        timeSlotObj["storeNm"] = this.storeNm;
        timeSlotObj["currentTimeSlotId"] = this.currentTimeSlotId;
        timeSlotObj["currentTimeSlotNm"] = this.timeSlotSheetNm;
        timeSlotObj["storeNo"] = this.storeNo;
        timeSlotObj["viewKbn"] = this.viewKbn;
        timeSlotObj["selectedText"] = this.selectedText;
        timeSlotObj["aplUserId"] = this.aplUserId;
        // timeSlotObj["hasHandover"] = this.hasHandover;
        timeSlotObj["hasHandover"] = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
        timeSlotObj["timeSlotNm"] = timeSlotNm;
        timeSlotObj["selectedDate"] = this.selectedDate;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__handoverpop_handoverpop__["a" /* HandoverpopPage */], timeSlotObj, { cssClass: 'animated bounceInDown' });
        popover.present();
    };
    //タスク情報の更新前チェック処理
    SchedulePage.prototype.taskUpdateCheck = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var workerId, res, result, msgInfo, result_1, alert_2, alert_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = this.loadingCtrl.create({ content: '' });
                        this.loading.present();
                        if (this.viewKbn == '0') {
                            workerId = this.currentTaskObj.workerId;
                        }
                        else {
                            workerId = this.dragIdEnd.substr(3);
                        }
                        workerId = parseInt(workerId);
                        return [4 /*yield*/, this.service.taskUpdateCheck(this.storeNo, workerId, this.selectedDate, param.planSTime, param.planETime, this.currentTaskObj.cgId, this.currentTaskObj.opId)];
                    case 1:
                        res = _a.sent();
                        // loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            this.loading.dismiss();
                            return [2 /*return*/];
                        }
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (!(msgInfo.statusCd == 'SB200')) return [3 /*break*/, 6];
                        if (!(this.currentTaskObj.taskPoolKbn == 0 && this.noAssingFlg)) return [3 /*break*/, 3];
                        this.currentTaskObj['workerId'] = workerId;
                        return [4 /*yield*/, this.createTask(param, this.currentTaskObj, workerId)];
                    case 2:
                        result_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.modifyTask(param, this.currentTaskObj, workerId)];
                    case 4:
                        result_1 = _a.sent();
                        _a.label = 5;
                    case 5: 
                    // this.loading.dismiss();
                    return [2 /*return*/, result_1];
                    case 6:
                        if (msgInfo.statusCd == 'SB900') {
                            this.loading.dismiss();
                            alert_2 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: msgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.events.unsubscribe("res:created");
                                            _this.events.unsubscribe("res:creat");
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
                                        }
                                    },
                                ]
                            });
                            alert_2.present();
                            return [2 /*return*/, result];
                        }
                        else if (msgInfo.statusCd == 'SB400') {
                            this.loading.dismiss();
                            alert_3 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: msgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.selAlert();
                                        }
                                    },
                                ],
                                enableBackdropDismiss: false
                            });
                            alert_3.present();
                            return [2 /*return*/, result];
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            return [2 /*return*/, result];
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.modifyTask = function (param, taskObj, workerId) {
        return __awaiter(this, void 0, void 0, function () {
            var lockTaskInfo, updTaskInfo, taskInfo, res, resJson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // タスク更新Parameterの作成
                        taskObj['opCircle'] = taskObj.opCircle;
                        lockTaskInfo = __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].getLockTaskInfo(taskObj);
                        updTaskInfo = {
                            'workerId': workerId, 'opNm': taskObj.opId == 0 ? taskObj.opNm : null, 'taskPoolKbn': taskObj.taskPoolKbn, 'taskPriorityKbn': taskObj.taskPriorityKbn,
                            'opCircle': taskObj.opCircle, 'planSDate': this.selectedDate,
                            'planEDate': this.selectedDate, 'planSTime': param.planSTime, 'planETime': param.planETime
                        };
                        taskInfo = { "updTaskInfo": updTaskInfo, "lockTaskInfo": lockTaskInfo };
                        return [4 /*yield*/, this.service.taskUpdate(taskObj['taskId'], taskInfo)];
                    case 1:
                        res = _a.sent();
                        resJson = res.json();
                        this.newWorkerId = workerId;
                        this.resCheck(resJson);
                        return [2 /*return*/, resJson];
                }
            });
        });
    };
    //未割当のタスクは重複利用できるタスクドラグする場合、タスク新規処理
    SchedulePage.prototype.createTask = function (param, taskObj, workerId) {
        return __awaiter(this, void 0, void 0, function () {
            var res, resJson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskcServiceProvider.createTask(taskObj.opId, taskObj.opId == 0 ? taskObj.opNm : null, workerId, taskObj.cgId, taskObj.taskPoolKbn, taskObj.taskPriorityKbn, param.planSTime, param.planETime, this.storeNo, this.selectedDate)];
                    case 1:
                        res = _a.sent();
                        resJson = res.json();
                        this.resCheck(resJson);
                        return [2 /*return*/, resJson];
                }
            });
        });
    };
    //返却のレスポンス値の共通処理
    SchedulePage.prototype.resCheck = function (result) {
        var _this = this;
        if (result == undefined) {
            __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
            this.loading.dismiss();
            return;
        }
        else {
            var msgInfo = result['msgInfo'];
            if (msgInfo.statusCd == 'SB200') {
                this.loading.dismiss();
            }
            else if (msgInfo.statusCd == 'SB900') {
                this.loading.dismiss();
                var alert_4 = this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: msgInfo.msg,
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                _this.events.unsubscribe("res:created");
                                _this.events.unsubscribe("res:creat");
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
                            }
                        },
                    ]
                });
                alert_4.present();
                return;
            }
            else if (msgInfo.statusCd == 'SB400') {
                this.loading.dismiss();
                var alert_5 = this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: msgInfo.msg,
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                _this.selAlert();
                            }
                        },
                    ],
                    enableBackdropDismiss: false
                });
                alert_5.present();
                return result;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                this.loading.dismiss();
                return;
            }
        }
    };
    //移動不可のタスク判断
    SchedulePage.prototype.handle = function (handle) {
        if (handle.id == "") {
            if (handle.parentElement.id == "") {
                if (handle.parentElement.parentElement.id == "") {
                    if (handle.parentElement.parentElement.parentElement.id == this.currentTaskId) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    if (handle.parentElement.parentElement.id == this.currentTaskId) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
            else {
                if (handle.parentElement.id == this.currentTaskId) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else {
            if (handle.id == this.currentTaskId) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    SchedulePage.prototype.moveSet = function (touchEvent, flag) {
        this.moveFlag = true;
        this.dragWheelHandler(touchEvent);
        if (flag) {
            this.scrollTouchM(touchEvent);
        }
    };
    //カテゴリー情報の整備
    SchedulePage.prototype.categoryInfoListSet = function () {
        var _this = this;
        // タスク長さ設定
        this.categoryInfoList.forEach(function (category) {
            if (category.categoryNm != "未割当") {
                category.halfHourList.forEach(function (halfHour) {
                    halfHour.taskInfoList.forEach(function (task) {
                        __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].addLen(task, _this.sTime, _this.eTime);
                    });
                });
            }
            else {
                category.halfHourList.forEach(function (halfHour) {
                    halfHour.taskInfoList.forEach(function (task) {
                        task["len"] = 2;
                        task["taskStyle"] = '200%';
                        task["textFlag"] = true;
                    });
                });
            }
        });
        //未割当のリスト作成
        if (this.categoryInfoList.length > 0) {
            if (this.categoryInfoList[this.categoryInfoList.length - 1].categoryId == -1) {
                this.noAssign = this.categoryInfoList[this.categoryInfoList.length - 1].halfHourList[0];
                //カテゴリーリストから未割当のリストを削除する。
                this.categoryInfoList.pop();
            }
            else {
                if (!this.zoomFlag) {
                    this.noAssign = new Object();
                    this.noAssign['taskInfoList'] = new Array();
                }
            }
        }
        var intLen = 35;
        // タスクリスト整備
        __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(this.categoryInfoList, this.slideList, this.result["timeSlotInfoList"][0]["startTime"].substring(0, 2), this.result["timeSlotInfoList"][this.result["timeSlotInfoList"].length - 1]["endTime"].substring(0, 2), intLen, this.isShow, this.timeInSlideLen);
        this.timeLength = 'height: ' + intLen + 'px;';
    };
    //SCROLL
    SchedulePage.prototype.scrollTouchS = function (event) {
        if (this.dragFlg) {
            return;
        }
        if (!event.touches.length) {
            return;
        }
        this.startX = event.touches[0].pageX;
        this.moveX = 0;
    };
    SchedulePage.prototype.scrollTouchM = function (event) {
        if (this.dragFlg && this.dragMoveFlg) {
            if (event.touches[0].clientX >= this.screenClientWidthRightChange - 2) {
                this.screenClientWidthRightChange = this.screenClientWidthRight * 2;
                this.dragMoveFlg = false;
                this.anHourAdd();
                this.anHourAdd();
                this.dragMoveFlg = true;
            }
            if (event.touches[0].clientX < this.screenClientWidthRight + 2) {
                this.screenClientWidthRightChange = this.screenClientWidthRight;
            }
            if (event.touches[0].clientX <= this.screenClientWidthLeft) {
                this.screenClientWidthLeft = -100;
                this.dragMoveFlg = false;
                this.anHourReduce();
                this.anHourReduce();
                this.dragMoveFlg = true;
            }
            if (event.touches[0].clientX > 0) {
                this.screenClientWidthLeft = 1;
            }
        }
        if (this.dragFlg) {
            return;
        }
        if (!event.touches.length) {
            return;
        }
        this.moveX = event.touches[0].pageX - this.startX;
        // document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.clientWidthN + this.moveX) + 'px)';
    };
    SchedulePage.prototype.scrollTouchHourE = function () {
        if (this.moveX > 100) {
            this.anHourReduce();
        }
        else if (this.moveX < -100) {
            this.anHourAdd();
        }
    };
    SchedulePage.prototype.scrollTouchE = function (timeSlot) {
        if (this.dragFlg) {
            return;
        }
        if (this.moveX < -100)
            this.n++;
        if (this.moveX > 100)
            this.n--;
        if (this.n < 0)
            this.n = 0;
        if (this.n > this.len - 1)
            this.n = this.len - 1;
        if (timeSlot != undefined) {
            document.getElementById('scrollCon').style.transform = 'translateX(' + (-timeSlot * this.gbWidth) + 'px)';
            this.clientWidthN = timeSlot * this.gbWidth;
            this.n = parseInt((this.clientWidthN / this.clientWidth).toLocaleString());
            this.gbWidthCount = this.clientWidthN - this.n * this.clientWidth;
            this.scrollHoursCount = timeSlot;
            return;
        }
        if (-this.clientWidthN > -this.clientWidth && this.moveX > 0) {
            document.getElementById('scrollCon').style.transform = 'translateX(' + (0) + 'px)';
            this.clientWidthN = 0;
            this.gbWidthCount = 0;
            this.scrollHoursCount = 0;
            if (this.clientWidthN < this.timeSlotSheetCount * this.gbWidth) {
                if (this.timeSlotSheet > 0) {
                    this.timeSlotSheet--;
                }
                this.timeSlotSheetCount = this.timeSlotSheetCount - this.timeSlotList[this.timeSlotSheet];
                this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
            }
            return;
        }
        if (-this.clientWidthN < -this.clientWidth * (this.len - 1) + this.clientWidth && this.moveX < 0) {
            document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.n * this.clientWidth) + 'px)';
            this.clientWidthN = this.clientWidth * this.n;
            this.gbWidthCount = 0;
            this.scrollHoursCount = this.clientWidthN / this.gbWidth;
            if (this.timeSlotSheet == this.timeSlotList.length) {
                return;
            }
            if (this.clientWidthN >= (this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet]) * this.gbWidth) {
                this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet];
                if (this.timeSlotSheet < this.timeSlotList.length) {
                    this.timeSlotSheet++;
                }
                this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
            }
            return;
        }
        document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.n * this.clientWidth - this.gbWidthCount) + 'px)';
        this.clientWidthN = this.n * this.clientWidth + this.gbWidthCount;
        this.scrollHoursCount = this.clientWidthN / this.gbWidth;
        if (this.moveX < 0) {
            if (this.timeSlotSheet == this.timeSlotList.length) {
                return;
            }
            if (this.clientWidthN >= (this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet]) * this.gbWidth) {
                this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet];
                if (this.timeSlotSheet < this.timeSlotList.length) {
                    this.timeSlotSheet++;
                }
                this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
                this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
            }
        }
        if (this.moveX > 0) {
            if (this.clientWidthN < this.timeSlotSheetCount * this.gbWidth) {
                if (this.timeSlotSheet > 0) {
                    this.timeSlotSheet--;
                }
                this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
                this.timeSlotSheetCount = this.timeSlotSheetCount - this.timeSlotList[this.timeSlotSheet];
                this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
            }
        }
        this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
    };
    SchedulePage.prototype.anHourAdd = function () {
        // if (this.dragFlg) {
        // 	return;
        // }
        if (this.clientWidthN < this.clientWidth * (this.len - 1)) {
            document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.clientWidthN - this.gbWidth) + 'px)';
            this.clientWidthN = this.clientWidthN + this.gbWidth;
            this.gbWidthCount = this.gbWidthCount + this.gbWidth;
            this.scrollHoursCount = this.clientWidthN / this.gbWidth;
            if (this.gbWidthCount == this.clientWidth) {
                this.gbWidthCount = this.gbWidthCount - this.clientWidth;
                this.n = this.n + 1;
            }
            ;
            if (this.timeSlotSheet == this.timeSlotList.length) {
                return;
            }
            if (this.clientWidthN >= (this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet]) * this.gbWidth) {
                this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet];
                if (this.timeSlotSheet < this.timeSlotList.length) {
                    this.timeSlotSheet++;
                }
                this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
                this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
            }
        }
        this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
    };
    SchedulePage.prototype.anHourReduce = function () {
        // if (this.dragFlg) {
        // 	return;
        // }
        if (this.clientWidthN > 0) {
            document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.clientWidthN + this.gbWidth) + 'px)';
            this.clientWidthN = this.clientWidthN - this.gbWidth;
            this.gbWidthCount = this.gbWidthCount - this.gbWidth;
            this.scrollHoursCount = this.clientWidthN / this.gbWidth;
            if (this.gbWidthCount == this.clientWidth) {
                this.gbWidthCount = this.gbWidthCount - this.clientWidth;
                this.n = this.n - 1;
            }
            ;
            if (this.clientWidthN < this.timeSlotSheetCount * this.gbWidth) {
                if (this.timeSlotSheet > 0) {
                    this.timeSlotSheet--;
                }
                this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
                this.timeSlotSheetCount = this.timeSlotSheetCount - this.timeSlotList[this.timeSlotSheet];
                this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
            }
        }
        this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
    };
    SchedulePage.prototype.sheetAdd = function () {
        if (this.dragFlg) {
            return;
        }
        if (this.timeSlotList.length > 0) {
            if (this.timeSlotSheet < this.timeSlotList.length) {
                this.moveX = -110;
                this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet];
                this.timeSlotSheet++;
                this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
                this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
                this.scrollTouchE(this.timeSlotSheetCount);
            }
            else {
                //翌日の検索
                this.selByDate(1);
            }
        }
        this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
    };
    SchedulePage.prototype.sheetReduce = function () {
        if (this.dragFlg) {
            return;
        }
        if (this.timeSlotList.length > 0) {
            if (this.timeSlotSheet > 0) {
                this.moveX = 110;
                this.timeSlotSheet--;
                this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
                this.timeSlotSheetCount = this.timeSlotSheetCount - this.timeSlotList[this.timeSlotSheet];
                this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
                this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
                this.scrollTouchE(this.timeSlotSheetCount);
            }
            else {
                //前日の検索
                this.selByDate(-1);
            }
        }
        this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
    };
    SchedulePage.prototype.selAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, loading, selTime, res, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        selTime = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.storeNo, this.selectedDate, selTime, this.viewKbn)];
                    case 1:
                        res = _a.sent();
                        loading.dismiss().then(function () {
                            params = {
                                res: res, selectedText: _this.selectedText, storeNo: _this.storeNo,
                                storeNm: _this.storeNm, viewKbn: _this.viewKbn, aplUserId: _this.aplUserId,
                                selectedDate: _this.selectedDate, currentTimeSlotId: _this.currentTimeSlotId,
                                dragFlg: true
                            };
                            _this.events.publish('res:created', params);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.scrollHandler = function (event) {
        if (event == null) {
            return;
        }
        var headers = document.getElementsByName('scrollHeader');
        this.eventScroll = event;
        for (var i = 0; i < headers.length; i++) {
            if (event.scrollTop > 0) {
                headers[i].style.transform = 'translateY(' + (event.scrollTop) + 'px)';
            }
            else {
                headers[i].style.transform = 'translateY(0px)';
            }
        }
    };
    SchedulePage.prototype.updateListSet = function () {
        // 非同期処理 割当済タスク
        var matchKey, matchValue;
        if (this.viewKbn == '0') {
            // 業務別
            matchKey = this.currentTaskObj['cgId'];
            matchValue = this.currentTaskObj['cgNm'];
        }
        else if (this.viewKbn == '1') {
            // 担当者別
            matchKey = this.currentTaskObj['workerId'];
            matchValue = this.currentTaskObj['workerNm'];
        }
        // 更新前オブジェクトを削除
        this.removeBefor();
        if (this.selectedDate == this.currentTaskObj['taskDate']) {
            // 更新後オブジェクトを挿入
            this.inCgList(this.currentTaskObj['planSTime'], this.currentTaskObj['planETime'], matchKey, matchValue, this.currentTaskObj);
            this._leftHeight();
        }
    };
    SchedulePage.prototype.inCgList = function (pstime, petime, matchKey, matchValue, taskCObj) {
        // スケジュール画面
        if (this.timeSlotInfoList.length <= 0) {
            return;
        }
        // 時間帯計算
        var slotSTime = this.sTime;
        var slotETime = this.eTime;
        var taskStime = pstime.substring(8, 11);
        var taskEtime = petime.substring(8, 11);
        if ((taskStime >= slotSTime && taskStime < slotETime)
            || (taskEtime > slotSTime && taskEtime <= slotETime)
            || (taskStime < slotSTime && taskEtime > slotETime)) {
            __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].addLen(taskCObj, slotSTime, slotETime);
            this.intoSchedule(0, matchKey, matchValue, taskCObj, slotSTime, slotETime);
        }
        this.currentTaskObj['noAssingFlg'] = false;
    };
    SchedulePage.prototype.intoSchedule = function (index, matchKey, matchValue, taskCObj, slotSTime, slotETime) {
        var _this = this;
        var cgList;
        if (this.categoryInfoLists.length > 0) {
            cgList = this.categoryInfoLists[index];
        }
        else {
            cgList = new Array();
        }
        var startHalf = this.getStartTime(slotSTime, slotETime);
        var insertFlg = false;
        var indexCg = 0;
        cgList.forEach(function (cgInfo) {
            // 縦ヘッダーは存在
            if (matchKey == cgInfo.categoryId) {
                if (_this.viewKbn == '1') {
                    _this.currentTaskObj['workerNm'] = cgInfo.categoryNm;
                }
                var inHalfFlg_1 = false;
                cgInfo.halfHourList.forEach(function (halfList) {
                    if (startHalf == halfList.halfHour) {
                        if (__WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].isNull(halfList.taskInfoList)) {
                            halfList.taskInfoList = new Array();
                            halfList.taskInfoList.push(taskCObj);
                        }
                        else {
                            halfList.taskInfoList.push(taskCObj);
                        }
                        _this.currentTaskObj['taskIndex'] = _this.changeIndex(halfList.taskInfoList);
                        inHalfFlg_1 = true;
                        insertFlg = true;
                        _this.currentTaskObj['categoryIndex'] = indexCg;
                        return;
                    }
                });
                if (!inHalfFlg_1) {
                    var newObj = new Object();
                    newObj['halfHour'] = startHalf;
                    var taskList = new Array();
                    taskList.push(taskCObj);
                    _this.currentTaskObj['taskIndex'] = _this.changeIndex(taskList);
                    newObj['taskInfoList'] = taskList;
                    cgInfo.halfHourList.push(newObj);
                    insertFlg = true;
                }
                if (insertFlg) {
                    return;
                }
            }
            indexCg++;
        });
        if (!insertFlg) {
            // 縦ヘッダーは不存在
            var newCgInfo = new Object();
            newCgInfo['categoryId'] = matchKey;
            newCgInfo['categoryNm'] = matchValue;
            newCgInfo['halfHourList'] = [];
            var newObj = new Object();
            newObj['halfHour'] = startHalf;
            var taskList = new Array();
            taskList.push(taskCObj);
            this.currentTaskObj['taskIndex'] = this.changeIndex(taskList);
            newObj['taskInfoList'] = taskList;
            newCgInfo['halfHourList'].push(newObj);
            cgList.push(newCgInfo);
            this.currentTaskObj['categoryIndex'] = this.changeIndex(cgList);
        }
        var intLen = 35;
        // タスクリスト整備
        __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(cgList, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), intLen, this.isShow, this.timeInSlideLen);
    };
    SchedulePage.prototype.removeBefor = function () {
        var categoryIndex = this.currentTaskObj['categoryIndex'];
        var taskIndex = this.currentTaskObj['taskIndex'];
        if (this.currentTaskObj['noAssingFlg']) {
            // 未割当
            if (this.currentTaskObj.taskPoolKbn != 0) {
                //重複利用できない未割当の場合
                if (this.noAssign['taskInfoList'] != undefined && this.noAssign['taskInfoList'] != null) {
                    this.noAssign['taskInfoList'].splice(taskIndex, 1);
                }
            }
        }
        else {
            // 割当済
            this.delFromCategoryList(categoryIndex, taskIndex);
        }
    };
    SchedulePage.prototype.inUnList = function (taskCObj) {
        taskCObj["len"] = 2;
        taskCObj["taskStyle"] = '200%';
        taskCObj["textFlag"] = true;
        this.currentTaskObj['noAssingFlg'] = true;
        if (this.noAssign != undefined) {
            if (this.noAssign['taskInfoList'] != undefined) {
                this.noAssign['taskInfoList'].push(taskCObj);
            }
            else {
                this.noAssign['taskInfoList'] = new Array();
                this.noAssign['taskInfoList'].push(taskCObj);
            }
        }
        else {
            this.noAssign = new Object();
            this.noAssign['taskInfoList'] = new Array();
            this.noAssign['taskInfoList'].push(taskCObj);
        }
        this.currentTaskObj['taskIndex'] = this.changeIndex(this.noAssign['taskInfoList']);
    };
    SchedulePage.prototype.delFromCategoryList = function (categoryIndex, taskIndex) {
        var categoryInfoLists = this.categoryInfoLists;
        var timeSlot = this.currentTaskObj['timeSlot'];
        var categoryInfo = categoryInfoLists[0];
        var hourList = categoryInfo[categoryIndex]['halfHourList'];
        var slotSTime = this.timeSlotInfoList[0].startTime;
        var slotETime = this.timeSlotInfoList[this.timeSlotInfoList.length - 1].endTime;
        var taskInfoList;
        for (var i = 0; i < hourList.length; i++) {
            var tmp = hourList[i];
            if (timeSlot == tmp['halfHour']) {
                taskInfoList = tmp['taskInfoList'];
                break;
            }
        }
        if (taskInfoList != undefined && taskInfoList != null) {
            taskInfoList.splice(taskIndex, 1);
        }
        __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(categoryInfo, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), 35, this.isShow, this.timeInSlideLen);
    };
    SchedulePage.prototype.getStartTime = function (slotSTime, slotETime) {
        var hm = this.currentTaskObj['planSTime'].substr(8, 4);
        var hh = hm.substr(0, 2);
        var mm = hm.substr(2, 2);
        // 表示時間帯の開始時刻と比較
        if (hh < slotSTime.substr(0, 2)) {
            hh = slotSTime.substr(0, 2);
            mm = slotSTime.substr(2, 2);
        }
        if (mm < "30") {
            return hh + "00";
        }
        else {
            return hh + "30";
        }
    };
    SchedulePage.prototype.changeIndex = function (taskList) {
        return taskList.length - 1;
    };
    //スクロール利用不可の設定
    SchedulePage.prototype.disableScroll = function () {
        this.scrollable = 'no-scroll';
    };
    //スクロール利用可の設定
    SchedulePage.prototype.enableScroll = function () {
        this.scrollable = 'enable-scroll';
    };
    //スクロールの設定
    SchedulePage.prototype.dragWheelHandler = function (touchEvent) {
        var _this = this;
        //deviceの可視区域の高度
        var currentSrennHeight = document.body.clientHeight;
        //タッチの縦座標
        var clientY = touchEvent.touches[0].clientY;
        //スクロールのtop取得
        var currentScrollTop = this.content.scrollTop;
        if (currentSrennHeight - clientY <= 100) {
            if (this.scrollYFlg) {
                //下へ移動
                this.scrollYFlg = false;
                this.content.scrollTo(0, currentScrollTop + currentSrennHeight, 3000).then(function () {
                    _this.scrollYFlg = true;
                });
            }
        }
        if (clientY < 200 && currentSrennHeight != 0) {
            if (this.scrollYFlg) {
                //上へ移動
                this.scrollYFlg = false;
                this.content.scrollTo(0, currentScrollTop - currentSrennHeight, 3000).then(function () {
                    _this.scrollYFlg = true;
                });
            }
        }
    };
    SchedulePage.prototype.refreshTask = function (refreshLoading) {
        return __awaiter(this, void 0, void 0, function () {
            var date, selTime, res, result, msgInfo, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!refreshLoading) {
                            refreshLoading = this.loadingCtrl.create({
                                content: '',
                            });
                            refreshLoading.present();
                        }
                        date = new Date();
                        if (this.selectedDate == undefined) {
                            this.selectedDate = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(date);
                        }
                        selTime = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.storeNo, this.selectedDate, selTime, this.viewKbn)];
                    case 1:
                        res = _a.sent();
                        refreshLoading.dismiss();
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (msgInfo.msgCd == 'MSE400003') {
                            __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            return [2 /*return*/];
                        }
                        this.activeIndex = this.result["activeIndex"];
                        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
                        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
                        params = {
                            res: res, selectedText: this.selectedText, storeNo: this.storeNo,
                            storeNm: this.storeNm, viewKbn: this.viewKbn, aplUserId: this.aplUserId,
                            selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
                            dragFlg: true
                        };
                        this.events.publish('res:created', params);
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.selByDate = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, newDate, selTime, selDate, res, result, params, alert_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addOrReduceValue = count;
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        newDate = new Date();
                        this.selByCalandarDate.setDate(this.selByCalandarDate.getDate() + count);
                        selDate = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(this.selByCalandarDate);
                        if (count == 0) {
                            if (__WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(newDate) == selDate) {
                                selTime = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(newDate.getHours(), newDate.getMinutes());
                            }
                            else {
                                // selTime = '0000';
                                selTime = this.sTime;
                            }
                        }
                        else if (count < 0) {
                            // selTime = '2359';
                            selTime = this.eTime;
                        }
                        else {
                            // selTime = '0000';
                            selTime = this.sTime;
                        }
                        this.scrollStartSet = true;
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.storeNo, selDate, selTime, this.viewKbn)];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        result = res.json();
                        if (result['msgInfo'].statusCd == 'SB200' || result['msgInfo'].statusCd == 'SB300') {
                            this.selectedDate = selDate;
                            this.selectedShowDate = this.dateShowFormat(this.selectedDate);
                            params = {
                                storeNo: this.storeNo, storeNm: this.storeNm,
                                res: res, aplUserId: this.aplUserId, selectedText: this.selectedText, viewKbn: this.viewKbn,
                                selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId, reStatusCd: result['msgInfo'].statusCd
                            };
                            this.dragSub.unsubscribe();
                            this.dragendSub.unsubscribe();
                            this.eventFlag = true;
                            if (count == 0) {
                                this.otherDateFlg = false;
                            }
                            else {
                                this.otherDateFlg = true;
                            }
                            if (this.timeRun != undefined) {
                                clearInterval(this.timeRun);
                                this.timeRun = undefined;
                            }
                            this.events.publish('res:created', params);
                            loading.dismiss();
                        }
                        else if (result['msgInfo'].statusCd == 'SB900') {
                            loading.dismiss();
                            alert_6 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: result['msgInfo'].msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.events.unsubscribe("res:created");
                                            _this.events.unsubscribe("res:creat");
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
                                        }
                                    },
                                ]
                            });
                            alert_6.present();
                            return [2 /*return*/];
                        }
                        else {
                            loading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_13__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, result['msgInfo'].msg);
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.positionChange = function () {
        var _this = this;
        this.isShow = !this.isShow;
        this.storage.set('isShow', this.isShow);
        this._positionChange();
        var headers = document.getElementsByName('scrollHeader');
        setTimeout(function () {
            if (_this.eventScroll != undefined) {
                for (var i = 0; i < headers.length; i++) {
                    headers[i].style.transform = 'translateY(' + (_this.eventScroll['scrollTop']) + 'px)';
                }
            }
        }, 50);
    };
    SchedulePage.prototype._positionChange = function () {
        if (this.res == undefined) {
            return;
        }
        var msgInfo = this.result['msgInfo'];
        if (msgInfo.statusCd == 'SB900'
            || msgInfo.statusCd == 'SB400') {
            return;
        }
        var intLen = 35;
        // タスクリスト整備
        __WEBPACK_IMPORTED_MODULE_14__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(this.categoryInfoList, this.slideList, this.result["timeSlotInfoList"][0]["startTime"].substring(0, 2), this.result["timeSlotInfoList"][this.result["timeSlotInfoList"].length - 1]["endTime"].substring(0, 2), intLen, this.isShow, this.timeInSlideLen);
        this.timeLength = 'height: ' + intLen + 'px;';
        this._leftHeight();
    };
    SchedulePage.prototype._leftHeight = function () {
        for (var i = 0; i < this.categoryInfoList.length; i++) {
            var maxLeftHeight = Math.max(document.getElementById('leftheadercon' + i).offsetHeight, this.categoryInfoList[i].mheight.replace('px', ''));
            if (maxLeftHeight >= 228) {
                this.categoryInfoList[i].mheight = maxLeftHeight + 'px';
            }
            else {
                this.categoryInfoList[i].mheight = 228 + 'px';
            }
        }
    };
    SchedulePage.prototype.stopAutoRefresh = function () {
        if (this.timeRun != undefined) {
            clearInterval(this.timeRun);
            this.timeRun = undefined;
        }
    };
    SchedulePage.prototype.startAutoRefresh = function () {
        var _this = this;
        // 時間初期化
        this.storage.set('autoRefreshTimeCounter', 0);
        var refreshLoading;
        if (!this.timeRun
            && this.selectedDate == __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(new Date())) {
            this.timeRun = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                var counter, accessToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.storage.get('autoRefreshTimeCounter')];
                        case 1:
                            counter = _a.sent();
                            return [4 /*yield*/, this.storage.get('accessToken')];
                        case 2:
                            accessToken = _a.sent();
                            if (!accessToken) {
                                return [2 /*return*/];
                            }
                            if (counter == 299) {
                                refreshLoading = this.loadingCtrl.create({
                                    content: '',
                                    duration: 5000
                                });
                                refreshLoading.present();
                            }
                            if (counter > 300) {
                                this.refreshTask(refreshLoading);
                                counter = 0;
                            }
                            counter = counter + 1;
                            this.storage.set('autoRefreshTimeCounter', counter);
                            return [2 /*return*/];
                    }
                });
            }); }, 1000);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SchedulePage.prototype, "content", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-schedule',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\schedule\schedule.html"*/'<!-- スゲジュールのメイン画面 -->\n\n<ion-header>\n\n    <div class="headerMenuTop" style="background-color: #FFB300;">\n\n        <div class="header-con" style="margin-left: 0.8%;">{{storeNm}}</div>\n\n        <div class="header-con">\n\n            <span class="mar-r-15">{{selectedText}}</span>\n\n        </div>\n\n        <div class="header-con" style="margin-right:0.8%;">\n\n            <span class="mar-r-20">\n\n                <ion-icon name="apps" item-end class="font-30" color="light" (touchstart)="dateSelect()"></ion-icon>\n\n            </span>\n\n            <span (click)="presentPopover($event)">\n\n                <ion-icon name="md-arrow-dropdown" class="font-30" color="light"></ion-icon>\n\n            </span>\n\n        </div>\n\n    </div>\n\n    <div class="headerMenubottom">\n\n        <div class="headerMenubottom-zero"></div>\n\n        <div class="headerMenubottom-con">\n\n            <div class="header-con">\n\n                <button ion-button icon-right color="heaButton" class="mar-l-10" style="font-size:15px;" (click)="goHandoverpopPage(timeSlotInfo.timeSlotNm)">\n\n                    {{selectedShowDate}}　{{timeSlotSheetNm}}\n\n                    <ion-icon name="ios-attention-red" style="font-size: 28px;font-weight: bold;" *ngIf="hasHandover" color="warn"></ion-icon>\n\n                    <ion-icon name="ios-attention-white" style="font-size: 28px;font-weight: bold;" *ngIf="!hasHandover" color="warn"></ion-icon>\n\n                </button>\n\n            </div>\n\n            <div class="header-con">\n\n                <button ion-button no-padding class="mar-r-10 font-17 pad-5" color="header" (click)="sheetReduce()">\n\n                    <ion-icon name="md-arrow-dropleft" class="mar-r-10 font-30"></ion-icon> 前のシフト\n\n                </button>\n\n                <button ion-button no-padding class="mar-r-50 font-17 pad-5" color="header" (click)="anHourReduce()">\n\n                    <ion-icon name="md-arrow-dropleft" class="mar-r-10 font-30"></ion-icon> 前の１時間\n\n                </button>\n\n                <button ion-button no-padding class="mar-r-10 font-17 pad-5" color="header" (click)="anHourAdd()">\n\n                    次の１時間\n\n                    <ion-icon name="md-arrow-dropright" class="mar-l-10 font-30"></ion-icon>\n\n                </button>\n\n                <button ion-button no-padding class="mar-r-10 font-17 pad-5" color="header" (click)="sheetAdd()">\n\n                    次のシフト\n\n                    <ion-icon name="md-arrow-dropright" class="mar-l-10 font-30"></ion-icon>\n\n                </button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-header>\n\n<ion-content (ionScroll)="scrollHandler($event)" id="mainPad" [class]="scrollable">\n\n    <div class="div-outermost" id="div-outermost">\n\n        <div class="div-left" id="div-left">\n\n            <div class="left-zero"></div>\n\n            <div id="leftHeader{{i}}" class="left-header" [ngStyle]="{\'height\': categoryNmItem.mheight}" *ngFor="let categoryNmItem of categoryInfoList;let i=index">\n\n                <div id="leftheadercon{{i}}" class="left-header-con">{{categoryNmItem.categoryNm}}</div>\n\n            </div>\n\n            <div style="width: 100%;height:228px;"></div>\n\n        </div>\n\n        <div class="div-slide">\n\n            <div id="scrollX" class="slide-scrollX" (touchstart)="scrollTouchS($event)" (touchmove)="scrollTouchM($event)" (touchend)="scrollTouchHourE()">\n\n                <div id="scrollCon" class="slide-scrollCon">\n\n                    <div id="timeLine" class="time-line" [hidden]="false"></div>\n\n                    <div class="scrollCon" *ngFor="let timeSlide of slideList;let p=index">\n\n                        <div name="scrollHeader" class="scrollCon-header">\n\n                            <div name=\'time\' class="con-content" *ngFor="let timeItem of timeSlide">\n\n                                <div [ngStyle]="{\'width\': gbWidth - 11 + \'px\'}">\n\n                                    {{timeItem.time}} {{timeItem.amOrpm}}\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                        <div class="scrollCon-content" [ngStyle]="{\'height\': categoryNameItem.mheight}" *ngFor="let categoryNameItem of categoryInfoList; let categoryIndex=index">\n\n                            <div *ngFor="let timeItem of timeSlide;let q=index" class="con-box">\n\n                                <div id="{{p}}x{{q}}{{categoryNameItem.categoryId}}" name=\'conName\' class="con-half" [ngStyle]="{\'width\': gbWidth/2 + \'px\', \'background-color\': viewKbn==1?timeItem.bkColor[categoryIndex].x:\'\' }" [dragula]="categoryNameItem.categoryId">\n\n                                    <div id="{{task.taskId}}" class="taskButton" [ngStyle]="{\'width\': task.taskStyle, \'margin-top\': task.top, \'background-color\':task.status==\'E\'?\'#90A4AE\':task.status==\'A\'?\'#BDBDBD\':\'white\'}"\n\n                                        *ngFor="let task of categoryNameItem.htask[timeItem.timeO + \'00\']; let taskIndex=index"\n\n                                        (touchend)="goControl(task,categoryNameItem.categoryId, false, categoryIndex, timeItem.timeO + \'00\', taskIndex)"\n\n                                        (touchmove)="moveSet($event)" (press)="longPress(task,null,timeItem.timeO + \'00\',categoryIndex,taskIndex)" [hidden]="task.status==\'E\'||task.status==\'A\'?isShow:false">\n\n                                        <div class="taskButtonTop">\n\n                                            <div class="taskButtonTopC" [ngStyle]="{\'width\': task.topCStyle, \'background-color\': task.topCStyleColor}"></div>\n\n                                        </div>\n\n                                        <div class="taskButtonBottom" [ngStyle]="{border:task.status==\'I\'?\'solid red\':\'none\'}">\n\n                                            <div class="font-16 taskB-left">\n\n                                                <div class="taskB-title">{{viewKbn==\'0\'?task.opNm:task.cgNm}}</div>\n\n                                                <div class="taskB-content">{{viewKbn==\'0\'?task.workerNm:task.opNm}}</div>\n\n                                            </div>\n\n                                            <div class="taskB-right">\n\n                                                <ion-icon name="ios-attention-red" class="font-33 font-w" style="margin-right:3px;font-weight: bold" [hidden]="task.hasHandover==0"></ion-icon>\n\n                                                <ion-icon name="ios-flag" class="font-33 font-w" style="margin-right:3px;" [hidden]="task.opId!=0"></ion-icon>\n\n                                            </div>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                                <div id="{{p}}y{{q}}{{categoryNameItem.categoryId}}" name=\'conName\' class="con-half" [ngStyle]="{\'width\': gbWidth/2 + \'px\',\'background-color\': viewKbn==1?timeItem.bkColor[categoryIndex].y:\'\' }" [dragula]="categoryNameItem.categoryId">\n\n                                    <div id="{{task.taskId}}" class="taskButton" [ngStyle]="{\'width\': task.taskStyle, \'margin-top\': task.top, \'background-color\':task.status==\'E\'?\'#90A4AE\':task.status==\'A\'?\'#BDBDBD\':\'white\'}"\n\n                                        *ngFor="let task of categoryNameItem.htask[timeItem.timeO + \'30\']; let taskIndex=index"\n\n                                        (touchend)="goControl(task,categoryNameItem.categoryId, false, categoryIndex, timeItem.timeO + \'30\', taskIndex)"\n\n                                        (touchmove)="moveSet($event)" (press)="longPress(task,null,timeItem.timeO + \'30\',categoryIndex,taskIndex)" [hidden]="task.status==\'E\'||task.status==\'A\'?isShow:false">\n\n                                        <div class="taskButtonTop">\n\n                                            <div class="taskButtonTopC" [ngStyle]="{\'width\': task.topCStyle, \'background-color\': task.topCStyleColor}"></div>\n\n                                        </div>\n\n                                        <div class="taskButtonBottom" [ngStyle]="{border:task.status==\'I\'?\'solid red\':\'none\'}">\n\n                                            <div class="font-16 taskB-left">\n\n                                                <div class="taskB-title">{{viewKbn==\'0\'?task.opNm:task.cgNm}}</div>\n\n                                                <div class="taskB-content">{{viewKbn==\'0\'?task.workerNm:task.opNm}}</div>\n\n                                            </div>\n\n                                            <div class="taskB-right">\n\n                                                <ion-icon name="ios-attention-red" class="font-33 font-w" style="margin-right:3px;font-weight: bold" [hidden]="task.hasHandover==0"></ion-icon>\n\n                                                <ion-icon name="ios-flag" class="font-33 font-w" style="margin-right:3px;" [hidden]="task.opId!=0"></ion-icon>\n\n                                            </div>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-fab bottom right style="z-index: 999999; right: 336px;" (click)="zoomin()">\n\n        <button ion-fab color="warn" [disabled]="zoominDisabled">\n\n            <ion-icon name="ios-zoom-in" color="light" style="font-size: 3.0rem;"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n    <ion-fab bottom right style="z-index: 999999; right: 254px;" (click)="zoomout()">\n\n        <button ion-fab color="warn" [disabled]="zoomoutDisabled">\n\n            <ion-icon name="ios-zoom-out" color="light" style="font-size: 3.0rem;"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n    <ion-fab bottom right style="z-index: 999999; right: 172px;" (click)="refreshTask()">\n\n        <button ion-fab color="warn">\n\n            <ion-icon name="md-refresh" color="light" style="font-size: 3.4rem;"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n    <ion-fab bottom right style="z-index: 999999;" (click)="goTaskC()">\n\n        <button ion-fab color="warn">\n\n            <ion-icon name="add" color="light"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n    <ion-fab bottom right style="z-index: 999999;right: 90px;" (click)="positionChange()">\n\n        <button ion-fab color="warn">\n\n            <ion-icon name="{{isShow?\'ios-change2\':\'ios-change\'}}"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n    <div class="lef-bot-but" (click)="changMFlgFalse()">\n\n        <div class="let-bot-but-con">未割当</div>\n\n    </div>\n\n    <div class="lb-box" [hidden]="mFlg">\n\n        <div class="lb-box-left" (click)="changMFlgTrue()">\n\n            <div class="lb-box-left-con">未割当</div>\n\n        </div>\n\n        <div class="lb-box-right" *ngIf="noAssign!=undefined">\n\n            <div class="lb-box-right-con" *ngFor="let task of noAssign.taskInfoList;let taskIndex=index">\n\n                <div class="lb-box-right-con-half" [dragula]="\'drag-bag\'" name="conName">\n\n                    <div id=\'{{task.taskId}}\' name="noAssign" class="taskButton" [ngStyle]="{\'width\': task.taskStyle, \'top\': task.top}" (press)="longPress(task,\'drag-bag\',null,null,taskIndex)"\n\n                        (touchmove)="moveSet($event,true)" (touchend)="goControl(task,task.cgId,true,null,null,taskIndex)">\n\n                        <div class="taskButtonTop">\n\n                            <div class="lb-taskButtonTopC"></div>\n\n                        </div>\n\n                        <div class="taskButtonBottom">\n\n                            <div class="font-16 taskB-left">\n\n                                <div class="taskB-title">{{task.opNm}}</div>\n\n                                <div class="lb-taskB-content" *ngIf="task.workerNm!=\'\'&&task.workerNm!=null">\n\n                                    <div class="taskB-content-workerNm">{{task.workerNm}}</div>\n\n                                    <div class="taskB-content-time" *ngIf="(task.planSTime!=\'\'&&task.planSTime!=null&&task.planETime!=\'\'&&task.planETime!=null)">{{task.planSTime.substr(8,2)>12?((task.planSTime.substr(8,2)-12)>9?(task.planSTime.substr(8,2)-12+\':\'+task.planSTime.substr(10,2)+\'PM\'):(\'0\'+(task.planSTime.substr(8,2)-12)+\':\'+task.planSTime.substr(10,2)+\'PM\')):(task.planSTime.substr(8,2)+\':\'+task.planSTime.substr(10,2)+\'AM\')}}-{{task.planETime.substr(8,2)>12?((task.planETime.substr(8,2)-12)>9?(task.planETime.substr(8,2)-12+\':\'+task.planETime.substr(10,2)+\'PM\'):(\'0\'+(task.planETime.substr(8,2)-12)+\':\'+task.planETime.substr(10,2)+\'PM\')):(task.planETime.substr(8,2)+\':\'+task.planETime.substr(10,2)+\'AM\')}}</div>\n\n                                    <div class="taskB-content-time" style="color:#fdbb2b" *ngIf="!(task.planSTime!=\'\'&&task.planSTime!=null&&task.planETime!=\'\'&&task.planETime!=null)">未</div>\n\n                                </div>\n\n                                <div class="lb-taskB-content" *ngIf="!(task.workerNm!=\'\'&&task.workerNm!=null)">\n\n                                    <div class="taskB-content-workerNm" style="color: #fdbb2b;">未</div>\n\n                                    <div class="taskB-content-time" *ngIf="task.planSTime!=\'\'&&task.planSTime!=null&&task.planETime!=\'\'&&task.planETime!=null">{{task.planSTime.substr(8,2)>12?((task.planSTime.substr(8,2)-12)>9?(task.planSTime.substr(8,2)-12+\':\'+task.planSTime.substr(10,2)+\'PM\'):(\'0\'+(task.planSTime.substr(8,2)-12)+\':\'+task.planSTime.substr(10,2)+\'PM\')):(task.planSTime.substr(8,2)+\':\'+task.planSTime.substr(10,2)+\'AM\')}}-{{task.planETime.substr(8,2)>12?((task.planETime.substr(8,2)-12)>9?(task.planETime.substr(8,2)-12+\':\'+task.planETime.substr(10,2)+\'PM\'):(\'0\'+(task.planETime.substr(8,2)-12)+\':\'+task.planETime.substr(10,2)+\'PM\')):(task.planETime.substr(8,2)+\':\'+task.planETime.substr(10,2)+\'AM\')}}</div>\n\n                                    <div class="taskB-content-time" style="color:#fdbb2b" *ngIf="!(task.planSTime!=\'\'&&task.planSTime!=null&&task.planETime!=\'\'&&task.planETime!=null)">未</div>\n\n                                </div>\n\n                            </div>\n\n                            <div class="taskB-right">\n\n                                <ion-icon name="ios-attention-red" class="font-33" style="margin-right:3px;font-weight: bold" [hidden]="task.hasHandover==0"></ion-icon>\n\n                                <ion-icon name="ios-flag" class="font-33 font-w" style="margin-right:3px;" [hidden]="task.opId!=0"></ion-icon>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="lb-box-right-con-half"></div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\schedule\schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_8__providers_api_service_api_tasku_service__["a" /* ApiTaskuServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_taskc_service__["a" /* ApiTaskcServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["b" /* Storage */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selschedule_selschedule__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_control_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__control_control__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__taskc_taskc__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__handoverpop_handoverpop__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_utility_service_ObjUti__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















/**
 * Generated class for the BoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoardPage = /** @class */ (function () {
    function BoardPage(navCtrl, navParams, navController, alertCtrl, popoverCtrl, loadingCtrl, appCtrl, scheduleProvider, events, cd, dragulaService, service, datePicker, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.scheduleProvider = scheduleProvider;
        this.events = events;
        this.cd = cd;
        this.dragulaService = dragulaService;
        this.service = service;
        this.datePicker = datePicker;
        this.storage = storage;
        //画面表示用：引継があるフラッグ
        this.hasHandover = false;
        //時間帯対象情報
        this.timeSlotInfo = {};
        //カテゴリーの表示用リスト
        this.categoryInfoList = new Array();
        this.timeSlotInfoList = new Array();
        this.categoryInfoLists = new Array();
        this.noAssingFlg = false;
        //未割当区域表示/非表示用
        this.mFlg = true;
        //touchイベント判断用フラグ
        this.touchFlag = false;
        //初期「移動不可」状態
        this.flag = false;
        //move判断flag
        this.moveFlag = false;
        //event判断flag
        this.eventFlag = false;
        //未着手のリスト
        this.sTaskInforList = new Array();
        //進行中のリスト
        this.iTaskInforList = new Array();
        //完了のリスト
        this.eTaskInforList = new Array();
        //中止のリスト
        this.aTaskInforList = new Array();
        //シフト切り替える日付
        this.selByCalandarDate = new Date();
        //前、次の判断用変数
        this.count = 0;
        //前画面がら取得する値
        this.result = this.navParams.get('res').json();
        this.storeNo = this.navParams.get('storeNo');
        this.storeNm = this.navParams.get('storeNm');
        this.viewKbn = this.navParams.get('viewKbn');
        this.aplUserId = this.navParams.get('aplUserId');
        this.selectedText = this.navParams.get('selectedText');
        this.selectedDate = this.navParams.get('selectedDate');
        if (this.selectedDate != __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(new Date())) {
            this.result["activeIndex"] = 0;
        }
        this.activeIndex = this.result["activeIndex"];
        this.selByCalandarDate = new Date(Date.parse(this.dateShowFormat(this.selectedDate)));
        this.currentTimeSlotId = this.navParams.get('currentTimeSlotId');
        events.subscribe('res:creat', function (params) {
            if (params.res != undefined) {
                _this.result = params.res.json();
                if (_this.count == 1) {
                    _this.activeIndex = 0;
                    _this.count = 0;
                }
                else if (_this.count == -1) {
                    _this.activeIndex = _this.result["timeSlotInfoList"].length - 1;
                    _this.count = 0;
                }
                else {
                    _this.activeIndex = params.activeIndex != undefined
                        ? params.activeIndex : _this.result["activeIndex"];
                }
                _this.storeNo = params.storeNo;
                _this.storeNm = params.storeNm;
                _this.viewKbn = params.viewKbn;
                _this.aplUserId = params.aplUserId;
                _this.selectedText = params.selectedText;
                _this.selectedDate = params.selectedDate;
                _this.currentTimeSlotId = params.currentTimeSlotId;
                if (_this.flag) {
                    _this.flag = false;
                }
                if (params.dragFlg) {
                    _this.dragSub.unsubscribe();
                    _this.dragendSub.unsubscribe();
                }
                _this.getData();
                if (!_this.cd['destroyed']) {
                    _this.cd.detectChanges();
                }
                if (_this.eventFlag || params.dragFlg) {
                    _this.ionViewDidEnter();
                    _this.eventFlag = false;
                }
            }
            if (params != undefined && params.TaskHasHandover != undefined) {
                _this.currentTaskObj['hasHandover'] = params.TaskHasHandover;
            }
            else if (params != undefined && params.hasHandover != undefined) {
                for (var i = 0; i < _this.result['timeSlotInfoList'].length; i++) {
                    if (_this.result['timeSlotInfoList'][i].timeSlotId == _this.currentTimeSlotId) {
                        _this.result['timeSlotInfoList'][i].hasHandover = params.hasHandover;
                        break;
                    }
                }
                _this.hasHandover = params.hasHandover;
            }
            _this.enableScroll();
            if (!_this.cd['destroyed']) {
                _this.cd.detectChanges();
            }
        });
        //画面のデータ再表示
        this.getData();
    }
    //画面ロードする時、初期設定
    BoardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //ドラッグ開始
        this.dragSub = this.dragulaService.drag.subscribe(function (value) {
            if (value[2].id.length < 8) {
                _this.dragIdStart = value[2].id.slice(1);
            }
            else {
                _this.dragIdStart = value[2].id.slice(8);
            }
        });
        //ドラッグ移動終了
        this.dragendSub = this.dragulaService.dragend.subscribe(function (value) {
            //スクロール利用可のメソッドを呼び出す
            _this.enableScroll();
            document.getElementById(_this.currentTaskId).className = 'taskButton';
            if (value[1].parentElement.id.length < 8) {
                _this.dragIdEnd = value[1].parentElement.id.slice(1);
            }
            else {
                _this.dragIdEnd = value[1].parentElement.id.slice(8);
            }
            //更新
            if (_this.dragIdStart != _this.dragIdEnd) {
                var status_1;
                if (_this.dragIdEnd == 'S') {
                    //未着手の場合
                    status_1 = '1';
                }
                else if (_this.dragIdEnd == 'I') {
                    //進行中の場合
                    status_1 = '2';
                }
                else if (_this.dragIdEnd == 'A') {
                    //中止の場合
                    status_1 = '3';
                }
                else {
                    //完了の場合
                    status_1 = '4';
                }
                var result = _this.changeStatus(_this.currentTaskId, status_1);
                result.then(function (data) {
                    if (data != false) {
                        _this.currentTaskObj['status'] = _this.dragIdEnd;
                        _this.dragTaskList.splice(_this.dragIndex, 1);
                        var taskInfoList = new Array();
                        if (_this.dragIdEnd == "S") {
                            //未着手の場合
                            if (_this.categoryInfoList[_this.dragI].sTaskInforList.length > 0) {
                                _this.categoryInfoList[_this.dragI].sTaskInforList[0].taskInfoList.push(_this.currentTaskObj);
                            }
                            else {
                                taskInfoList.push(_this.currentTaskObj);
                                _this.categoryInfoList[_this.dragI].sTaskInforList.push({ "taskInfoList": taskInfoList });
                            }
                        }
                        else if (_this.dragIdEnd == "I") {
                            //進行中の場合
                            if (_this.categoryInfoList[_this.dragI].iTaskInforList.length > 0) {
                                _this.categoryInfoList[_this.dragI].iTaskInforList[0].taskInfoList.push(_this.currentTaskObj);
                            }
                            else {
                                taskInfoList.push(_this.currentTaskObj);
                                _this.categoryInfoList[_this.dragI].iTaskInforList.push({ "taskInfoList": taskInfoList });
                            }
                        }
                        else if (_this.dragIdEnd == "A") {
                            //中止の場合
                            if (_this.categoryInfoList[_this.dragI].aTaskInforList.length > 0) {
                                _this.categoryInfoList[_this.dragI].aTaskInforList[0].taskInfoList.push(_this.currentTaskObj);
                            }
                            else {
                                taskInfoList.push(_this.currentTaskObj);
                                _this.categoryInfoList[_this.dragI].aTaskInforList.push({ "taskInfoList": taskInfoList });
                            }
                        }
                        else {
                            //完了の場合
                            if (_this.categoryInfoList[_this.dragI].eTaskInforList.length > 0) {
                                _this.categoryInfoList[_this.dragI].eTaskInforList[0].taskInfoList.push(_this.currentTaskObj);
                            }
                            else {
                                taskInfoList.push(_this.currentTaskObj);
                                _this.categoryInfoList[_this.dragI].eTaskInforList.push({ "taskInfoList": taskInfoList });
                            }
                        }
                        taskInfoList = new Array();
                        for (var i = 0; i < _this.categoryInfoLists.length; i++) {
                            if (i != _this.activeIndex) {
                                var categoryInfoList = _this.categoryInfoLists[i];
                                for (var j = 0; j < categoryInfoList.length; j++) {
                                    switch (_this.dragIdStart) {
                                        case "S":
                                            if (categoryInfoList[j].sTaskInforList.length > 0) {
                                                taskInfoList = categoryInfoList[j].sTaskInforList[0].taskInfoList;
                                                for (var k = 0; k < taskInfoList.length; k++) {
                                                    if (taskInfoList[k].taskId == _this.currentTaskId) {
                                                        taskInfoList.splice(k, 1);
                                                        _this.taskShiftSet(categoryInfoList, j);
                                                        break;
                                                    }
                                                }
                                            }
                                            break;
                                        case "I":
                                            if (categoryInfoList[j].iTaskInforList.length > 0) {
                                                taskInfoList = categoryInfoList[j].iTaskInforList[0].taskInfoList;
                                                for (var k = 0; k < taskInfoList.length; k++) {
                                                    if (taskInfoList[k].taskId == _this.currentTaskId) {
                                                        taskInfoList.splice(k, 1);
                                                        _this.taskShiftSet(categoryInfoList, j);
                                                        break;
                                                    }
                                                }
                                            }
                                            break;
                                        case "A":
                                            if (categoryInfoList[j].aTaskInforList.length > 0) {
                                                taskInfoList = categoryInfoList[j].aTaskInforList[0].taskInfoList;
                                                for (var k = 0; k < taskInfoList.length; k++) {
                                                    if (taskInfoList[k].taskId == _this.currentTaskId) {
                                                        taskInfoList.splice(k, 1);
                                                        _this.taskShiftSet(categoryInfoList, j);
                                                        break;
                                                    }
                                                }
                                            }
                                            break;
                                        case "E":
                                            if (categoryInfoList[j].eTaskInforList.length > 0) {
                                                taskInfoList = categoryInfoList[j].eTaskInforList[0].taskInfoList;
                                                for (var k = 0; k < taskInfoList.length; k++) {
                                                    if (taskInfoList[k].taskId == _this.currentTaskId) {
                                                        taskInfoList.splice(k, 1);
                                                        _this.taskShiftSet(categoryInfoList, j);
                                                        break;
                                                    }
                                                }
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                        _this.updateAfterCtl();
                    }
                });
            }
            else {
                _this.updateAfterCtl();
            }
        });
        this.hasHandover = this.timeSlotInfoList[this.activeIndex]['hasHandover'];
        this.dragAreaSet();
        this.startAutoRefresh();
    };
    BoardPage.prototype.ionViewDidLeave = function () {
        //ドラッグ事件を取り消す
        if (this.dragSub != undefined && this.dragendSub != undefined) {
            this.dragSub.unsubscribe();
            this.dragendSub.unsubscribe();
        }
        this.stopAutoRefresh();
    };
    //全画面表示用データ整備
    BoardPage.prototype.getData = function () {
        var _this = this;
        var msgInfo = this.result['msgInfo'];
        if (msgInfo.statusCd == 'SB900') {
            var alert_1 = this.alertCtrl.create({
                title: 'エラー',
                subTitle: msgInfo.msg,
                buttons: [
                    {
                        text: 'OK',
                        handler: function (data) {
                            _this.events.unsubscribe("res:created");
                            _this.events.unsubscribe("res:creat");
                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
                        }
                    },
                ]
            });
            alert_1.present();
            return;
        }
        if (msgInfo.statusCd == 'SB400') {
            __WEBPACK_IMPORTED_MODULE_12__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
            return;
        }
        this.selectedShowDate = this.dateShowFormat(this.selectedDate);
        this.timeSlotInfoList = this.result["timeSlotInfoList"];
        this.categoryInfoLists = this.result["categoryInfoLists"];
        if (__WEBPACK_IMPORTED_MODULE_13__providers_utility_service_ObjUti__["a" /* ObjUti */].isNull(this.categoryInfoLists)) {
            this.categoryInfoLists = new Array();
            this.timeSlotInfoList.forEach(function (element) {
                _this.categoryInfoLists.push(new Array());
            });
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
        if (this.result["timeSlotInfoList"].length > 1) {
            this.activeIndexFlg = 0;
            if (this.activeIndex == this.result["timeSlotInfoList"].length - 1) {
                this.activeIndexFlg = 1;
            }
            if (this.activeIndex == 0) {
                this.activeIndexFlg = 2;
            }
        }
        else {
            this.activeIndexFlg = 9;
        }
        //時間帯の設定
        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
        //引継情報有無フラグの設定
        this.hasHandover = this.timeSlotInfo["hasHandover"];
        this.noAssign = new Object();
        this.noAssign['taskInfoList'] = new Array();
        if (msgInfo.statusCd == 'SB300') {
            //時間帯の情報設定
            __WEBPACK_IMPORTED_MODULE_12__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
            return;
        }
        //カテゴリの設定
        for (var i = 0; i < this.timeSlotInfoList.length; i++) {
            this.categoryInfoList = this.categoryInfoLists[i];
            this.categoryInfoList.forEach(function (category) {
                _this.sTaskInforList = new Array();
                _this.iTaskInforList = new Array();
                _this.eTaskInforList = new Array();
                _this.aTaskInforList = new Array();
                var temp = {};
                category.halfHourList.forEach(function (board) {
                    temp = { "taskInfoList": board.taskInfoList };
                    if (board.halfHour == "未着手") {
                        _this.sTaskInforList.push(temp);
                    }
                    else if (board.halfHour == "進行中") {
                        _this.iTaskInforList.push(temp);
                    }
                    else if (board.halfHour == "完了") {
                        _this.eTaskInforList.push(temp);
                    }
                    else {
                        _this.aTaskInforList.push(temp);
                    }
                });
                //未割当のリスト作成
                if (_this.categoryInfoList[_this.categoryInfoList.length - 1].categoryId == -1) {
                    _this.noAssign = _this.categoryInfoList[_this.categoryInfoList.length - 1].halfHourList[0];
                    //カテゴリーリストから未割当のリストを削除する。
                    _this.categoryInfoList.pop();
                }
                category["sTaskInforList"] = _this.sTaskInforList;
                category["iTaskInforList"] = _this.iTaskInforList;
                category["eTaskInforList"] = _this.eTaskInforList;
                category["aTaskInforList"] = _this.aTaskInforList;
            });
            if (this.viewKbn == '3') {
                this.categoryInfoLists = this.filterNotShift4AllDay(this.categoryInfoLists, this.result['workershiftInfoLists']);
            }
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
        //DATEの設定
        if (this.selectedDate == undefined) {
            var date = new Date();
            this.selectedDate = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(date);
        }
        this.selectedShowDate = this.dateShowFormat(this.selectedDate);
    };
    BoardPage.prototype.filterNotShift4AllDay = function (categoryInfoLists, workerShifts) {
        var workers = [];
        workerShifts.forEach(function (e) {
            if (e.workershifList.length == 0) {
                workers.push(e.workerId);
            }
        });
        var filterRlt = [];
        var len = categoryInfoLists.length;
        for (var i = 0; i < len; i++) {
            filterRlt[i] = categoryInfoLists[i].filter(function (e) { return workers.indexOf(e.categoryId) < 0; });
        }
        return filterRlt;
    };
    //pulldownの区域
    BoardPage.prototype.presentPopover = function (myEvent) {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__selschedule_selschedule__["a" /* SelschedulePage */], {
            'aplUserId': this.aplUserId, 'storeNo': this.storeNo, 'storeNm': this.storeNm,
            'viewKbn': this.viewKbn, 'selectedDate': this.selectedDate, 'currentTimeSlotId': this.currentTimeSlotId
        });
        this.popover.present({
            ev: myEvent
        });
    };
    BoardPage.prototype.activeAdd = function () {
        this.enableScroll();
        this.flag = false;
        if (this.activeIndexFlg == 1 || this.activeIndexFlg == 9) {
            this.count = 1;
            this.selByDate(1);
            return;
        }
        this.activeIndexFlg = 0;
        this.activeIndex = this.activeIndex + 1;
        if (this.categoryInfoLists != null && this.categoryInfoLists != undefined && this.categoryInfoLists.length > 0) {
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
        //時間帯の設定
        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
        //引継情報有無フラグの設定
        this.hasHandover = this.timeSlotInfo["hasHandover"];
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        this.dragAreaSet();
        if (this.activeIndex == this.result["timeSlotInfoList"].length - 1) {
            this.activeIndexFlg = 1;
        }
        this.hasHandover = this.timeSlotInfoList[this.activeIndex]['hasHandover'];
    };
    BoardPage.prototype.activeReduce = function () {
        this.enableScroll();
        this.flag = false;
        if (this.activeIndexFlg == 2 || this.activeIndexFlg == 9) {
            this.count = -1;
            this.selByDate(-1);
            return;
        }
        this.activeIndex = this.activeIndex - 1;
        this.activeIndexFlg = 0;
        if (this.categoryInfoLists != null && this.categoryInfoLists != undefined && this.categoryInfoLists.length > 0) {
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
        //時間帯の設定
        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
        //引継情報有無フラグの設定
        this.hasHandover = this.timeSlotInfo["hasHandover"];
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        this.dragAreaSet();
        if (this.activeIndex == 0) {
            this.activeIndexFlg = 2;
        }
        this.hasHandover = this.timeSlotInfoList[this.activeIndex]['hasHandover'];
    };
    BoardPage.prototype.longPress = function (taskObj, dragName, taskList, index, i) {
        //スクロール利用不可のメソッドを呼び出す
        this.disableScroll();
        //未割当のタスクは担当者指定されていない場合、ドラッグ不可
        if (taskObj.workerId == null) {
            this.touchFlag = true;
            return;
        }
        var drag;
        if (this.viewKbn == '2') {
            drag = taskObj.cgId;
        }
        else {
            drag = taskObj.workerId;
        }
        this.dragIndex = index;
        this.dragI = i;
        this.dragTaskList = taskList;
        this.currentTaskObj = taskObj;
        if (!this.flag) {
            this.currentTaskId = taskObj.taskId;
            this.dragSet(drag, taskObj.cgId, taskObj.taskId, taskObj.status);
            // 「移動可」状態フラグに変更
            this.flag = true;
        }
        else {
            if (this.currentTaskId == taskObj.taskId) {
                this.flag = false;
                this.touchFlag = true;
                document.getElementById(taskObj.taskId).className = 'taskButton';
                this.enableScroll();
                //ドラッグ区域の制御
                this.dragAreaSet();
            }
            else {
                document.getElementById(this.currentTaskId).className = 'taskButton';
                this.enableScroll();
                this.currentTaskId = taskObj.taskId;
                //ドラッグ区域の設定
                this.dragSet(drag, taskObj.cgId, taskObj.taskId, taskObj.status);
                // 「移動可」状態フラグに変更
                this.flag = true;
            }
        }
    };
    //未割当部分表示(非表示)
    BoardPage.prototype.changMFlgFalse = function () {
        this.mFlg = false;
    };
    //未割当部分表示(表示)
    BoardPage.prototype.changMFlgTrue = function () {
        this.mFlg = true;
    };
    //新規画面へ遷移
    BoardPage.prototype.goNewTask = function () {
        return;
    };
    //ドラッグ部分の制御
    BoardPage.prototype.dragAreaSet = function () {
        var _this = this;
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        this.categoryInfoList.forEach(function (category) {
            if (_this.dragulaService.find(category.categoryId) != undefined) {
                _this.dragulaService.destroy(category.categoryId);
            }
            if (_this.viewKbn == '3' && _this.currentTaskObj != undefined) {
                if (_this.dragulaService.find(_this.currentTaskObj.cgId) != undefined) {
                    _this.dragulaService.destroy(_this.currentTaskObj.cgId);
                }
            }
        });
    };
    BoardPage.prototype.dragSet = function (drag, cgId, taskId, status) {
        var _this = this;
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        document.getElementById(taskId).className = 'taskButton' + ' animated infinite pulse';
        if (this.dragulaService.find(drag) != undefined) {
            this.dragulaService.destroy(drag);
        }
        this.dragulaService.setOptions(drag, {
            revertOnSpill: true,
            invalid: function (el, handle) {
                return _this.handle(handle);
            }
        });
        var containers = this.dragulaService.find(drag).drake.containers;
        this.categoryInfoList.forEach(function (category) {
            if (_this.viewKbn == '2' && category.categoryId == _this.currentTaskObj["cgId"]) {
                containers.push(document.getElementById(category.categoryId + "S"));
                containers.push(document.getElementById(category.categoryId + "I"));
                containers.push(document.getElementById(category.categoryId + "E"));
                containers.push(document.getElementById(category.categoryId + "A"));
            }
            else {
                if (_this.viewKbn == '3' && category.categoryId == _this.currentTaskObj["workerId"]) {
                    containers.push(document.getElementById(category.categoryId + "S"));
                    containers.push(document.getElementById(category.categoryId + "I"));
                    containers.push(document.getElementById(category.categoryId + "E"));
                    containers.push(document.getElementById(category.categoryId + "A"));
                }
            }
        });
    };
    BoardPage.prototype.changeStatus = function (taskId, status) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, lockTask, res, result, msgInfo, alert_2, alert_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        lockTask = __WEBPACK_IMPORTED_MODULE_13__providers_utility_service_ObjUti__["a" /* ObjUti */].getLockObject(this.currentTaskObj);
                        return [4 /*yield*/, this.service.changeStatus(taskId, status, lockTask)];
                    case 1:
                        res = _a.sent();
                        loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_12__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/, false];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.currentTaskObj['status'] = status;
                                this.currentTaskObj['actualSTime'] = result['lockTaskInfo'].actualSDayTime;
                                this.currentTaskObj['actualETime'] = result['lockTaskInfo'].actualEDayTime;
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_2 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_2.present();
                                return [2 /*return*/, false];
                            }
                            else if (msgInfo.statusCd == 'SB400') {
                                alert_3 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.selAlert();
                                            }
                                        },
                                    ],
                                    enableBackdropDismiss: false
                                });
                                alert_3.present();
                                return [2 /*return*/, false];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_12__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/, false];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //更新後の画面制御
    BoardPage.prototype.updateAfterCtl = function () {
        document.getElementById(this.currentTaskId).className = 'taskButton';
        this.enableScroll();
        this.flag = false;
        this.dragAreaSet();
    };
    //画面表示用フォーマット(yyyy/mm/dd)
    BoardPage.prototype.dateShowFormat = function (date) {
        date = date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + date.slice(6, 8);
        return date;
    };
    //カレンダー
    BoardPage.prototype.dateSelect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.datePicker.show({
                    mode: 'date',
                    date: new Date(),
                    androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
                    titleText: '日付を選択'
                }).then(function (date) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.selByCalandarDate = date;
                        this.selByDate(0);
                        return [2 /*return*/];
                    });
                }); }, function (err) { return console.log('Error occurred while getting date: ', err); });
                return [2 /*return*/];
            });
        });
    };
    //タスクイベント(クリック、ダブりクリック)
    BoardPage.prototype.goControl = function (taskObj, categoryId, flg, taskList, index, i) {
        var _this = this;
        //pressイベント発生する時、touchイベントを阻止する
        if (this.flag == true || this.touchFlag == true || this.moveFlag == true) {
            if (this.touchFlag == true) {
                this.touchFlag = false;
            }
            if (this.moveFlag == true) {
                this.moveFlag = false;
            }
            return;
        }
        this.noAssingFlg = flg;
        this.currentTaskObj = taskObj;
        this.currentTaskObj["storeNm"] = this.storeNm;
        this.currentTaskObj["currentTimeSlotId"] = this.currentTimeSlotId;
        this.currentTaskObj["categoryId"] = categoryId;
        this.currentTaskObj["storeNo"] = this.storeNo;
        this.currentTaskObj["viewKbn"] = this.viewKbn;
        this.currentTaskObj["selectedText"] = this.selectedText;
        this.currentTaskObj["aplUserId"] = this.aplUserId;
        this.currentTaskObj["selectedDate"] = this.selectedDate;
        this.currentTaskObj["noAssingFlg"] = this.noAssingFlg;
        this.currentTaskObj['categoryInfoList'] = this.categoryInfoList;
        this.currentTaskObj['categoryIndex'] = i;
        this.currentTaskObj['taskIndex'] = index;
        this.currentTaskObj['noAssign'] = this.noAssign;
        this.currentTaskObj['timeSlotInfoList'] = this.timeSlotInfoList;
        this.currentTaskObj['categoryInfoLists'] = this.categoryInfoLists;
        this.currentTaskObj['activeIndex'] = this.activeIndex;
        //引続画面ポップ
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__control_control__["a" /* ControlPage */], this.currentTaskObj, { cssClass: 'animated bounceInDown' });
        popover.present();
        //コントローラー画面の非同期処理(タスクのSTATUS変更)
        popover.onDidDismiss(function (data) {
            //処理がない場合
            if (data == undefined) {
                return;
            }
            taskList.splice(index, 1);
            var taskInfoList = new Array();
            if (data == "1") {
                //未着手の場合
                taskObj["status"] = "S";
                var len = _this.categoryInfoList[i].sTaskInforList.length;
                if (len > 0) {
                    _this.categoryInfoList[i].sTaskInforList[0]['taskInfoList'].push(taskObj);
                }
                else {
                    taskInfoList.push(taskObj);
                    _this.categoryInfoList[i].sTaskInforList.push({ 'taskInfoList': taskInfoList });
                }
            }
            else if (data == "2") {
                //進行中の場合
                taskObj["status"] = "I";
                var len = _this.categoryInfoList[i].iTaskInforList.length;
                if (len > 0) {
                    _this.categoryInfoList[i].iTaskInforList[0]['taskInfoList'].push(taskObj);
                }
                else {
                    taskInfoList.push(taskObj);
                    _this.categoryInfoList[i].iTaskInforList.push({ 'taskInfoList': taskInfoList });
                }
            }
            else if (data == "3") {
                //中止の場合
                taskObj["status"] = "A";
                var len = _this.categoryInfoList[i].aTaskInforList.length;
                if (len > 0) {
                    _this.categoryInfoList[i].aTaskInforList[0]['taskInfoList'].push(taskObj);
                }
                else {
                    taskInfoList.push(taskObj);
                    _this.categoryInfoList[i].aTaskInforList.push({ 'taskInfoList': taskInfoList });
                }
            }
            else {
                //完了の場合
                taskObj["status"] = "E";
                var len = _this.categoryInfoList[i].eTaskInforList.length;
                if (len > 0) {
                    _this.categoryInfoList[i].eTaskInforList[0]['taskInfoList'].push(taskObj);
                }
                else {
                    taskInfoList.push(taskObj);
                    _this.categoryInfoList[i].eTaskInforList.push({ 'taskInfoList': taskInfoList });
                }
            }
            _this.dragAreaSet();
        });
    };
    //タスク新規画面に遷移
    BoardPage.prototype.goTaskC = function () {
        var param = new Object();
        param["storeNm"] = this.storeNm;
        param["currentTimeSlotId"] = this.currentTimeSlotId;
        param["timeSlotInfoList"] = this.result["timeSlotInfoList"];
        param["storeNo"] = this.storeNo;
        param["viewKbn"] = this.viewKbn;
        param["selectedText"] = this.selectedText;
        param["aplUserId"] = this.aplUserId;
        param["hasHandover"] = this.hasHandover;
        param["selectedDate"] = this.selectedDate;
        param["noAssign"] = this.noAssign;
        param["activeIndex"] = this.activeIndex;
        param["categoryInfoLists"] = this.categoryInfoLists;
        param["categoryInfoList"] = this.categoryInfoList;
        this.navController.push(__WEBPACK_IMPORTED_MODULE_9__taskc_taskc__["a" /* TaskcPage */], param);
    };
    //引き続き画面に遷移
    BoardPage.prototype.goHandoverpopPage = function () {
        var timeSlotObj = new Object();
        timeSlotObj["storeNm"] = this.storeNm;
        timeSlotObj["currentTimeSlotId"] = this.currentTimeSlotId;
        timeSlotObj["currentTimeSlotNm"] = this.timeSlotInfo['timeSlotNm'];
        timeSlotObj["storeNo"] = this.storeNo;
        timeSlotObj["viewKbn"] = this.viewKbn;
        timeSlotObj["selectedText"] = this.selectedText;
        timeSlotObj["aplUserId"] = this.aplUserId;
        // timeSlotObj["hasHandover"] = this.hasHandover;
        timeSlotObj["hasHandover"] = this.timeSlotInfoList[this.activeIndex]['hasHandover'];
        timeSlotObj["selectedDate"] = this.selectedDate;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_10__handoverpop_handoverpop__["a" /* HandoverpopPage */], timeSlotObj, { cssClass: 'animated bounceInDown' });
        popover.present();
    };
    //移動不可のタスク判断
    BoardPage.prototype.handle = function (handle) {
        if (handle.id == "") {
            if (handle.parentElement.id == "") {
                if (handle.parentElement.parentElement.id == "") {
                    if (handle.parentElement.parentElement.parentElement.id == this.currentTaskId) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    if (handle.parentElement.parentElement.id == this.currentTaskId) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
            else {
                if (handle.parentElement.id == this.currentTaskId) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else {
            if (handle.id == this.currentTaskId) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    BoardPage.prototype.moveSet = function () {
        this.moveFlag = true;
    };
    //アラートが発生する時、再検索処理
    BoardPage.prototype.selAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, loading, res, selTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        selTime = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.storeNo, this.selectedDate, selTime, this.viewKbn)];
                    case 1:
                        res = _a.sent();
                        this.result = res.json();
                        loading.present();
                        loading.dismiss().then(function () {
                            _this.getData();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardPage.prototype.taskShiftSet = function (categoryInfoList, index) {
        var taskInfoList = new Array();
        switch (this.dragIdEnd) {
            case 'S':
                if (categoryInfoList[index].sTaskInforList.length > 0) {
                    categoryInfoList[index].sTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                }
                else {
                    taskInfoList.push(this.currentTaskObj);
                    categoryInfoList[index].sTaskInforList.push({ "taskInfoList": taskInfoList });
                }
                break;
            case 'A':
                if (categoryInfoList[index].aTaskInforList.length > 0) {
                    categoryInfoList[index].aTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                }
                else {
                    taskInfoList.push(this.currentTaskObj);
                    categoryInfoList[index].aTaskInforList.push({ "taskInfoList": taskInfoList });
                }
                break;
            case 'E':
                if (categoryInfoList[index].eTaskInforList.length > 0) {
                    categoryInfoList[index].eTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                }
                else {
                    taskInfoList.push(this.currentTaskObj);
                    categoryInfoList[index].eTaskInforList.push({ "taskInfoList": taskInfoList });
                }
                break;
            case 'I':
                if (categoryInfoList[index].iTaskInforList.length > 0) {
                    categoryInfoList[index].iTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                }
                else {
                    taskInfoList.push(this.currentTaskObj);
                    categoryInfoList[index].iTaskInforList.push({ "taskInfoList": taskInfoList });
                }
                break;
        }
    };
    //スクロール利用不可の設定
    BoardPage.prototype.disableScroll = function () {
        this.scrollable = 'no-scroll';
    };
    //スクロール利用可の設定
    BoardPage.prototype.enableScroll = function () {
        this.scrollable = 'enable-scroll';
    };
    BoardPage.prototype.refreshTask = function (refreshLoading) {
        return __awaiter(this, void 0, void 0, function () {
            var date, selTime, res, result, msgInfo, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!refreshLoading) {
                            refreshLoading = this.loadingCtrl.create({
                                content: '',
                            });
                            refreshLoading.present();
                        }
                        date = new Date();
                        if (this.selectedDate == undefined) {
                            this.selectedDate = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(date);
                        }
                        selTime = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.storeNo, this.selectedDate, selTime, this.viewKbn)];
                    case 1:
                        res = _a.sent();
                        refreshLoading.dismiss();
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (msgInfo.msgCd == 'MSE400003') {
                            __WEBPACK_IMPORTED_MODULE_12__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            return [2 /*return*/];
                        }
                        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
                        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
                        params = {
                            res: res, selectedText: this.selectedText, storeNo: this.storeNo,
                            storeNm: this.storeNm, viewKbn: this.viewKbn, aplUserId: this.aplUserId,
                            selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
                            dragFlg: true, activeIndex: this.activeIndex
                        };
                        this.events.publish('res:creat', params);
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardPage.prototype.selByDate = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, newDate, selTime, selDate, res, result, params, alert_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        newDate = new Date();
                        this.selByCalandarDate.setDate(this.selByCalandarDate.getDate() + count);
                        selDate = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(this.selByCalandarDate);
                        if (count == 0) {
                            if (__WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(newDate) == selDate) {
                                selTime = __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(newDate.getHours(), newDate.getMinutes());
                            }
                            else {
                                selTime = '0000';
                            }
                        }
                        else if (count < 0) {
                            selTime = '2359';
                        }
                        else {
                            selTime = '0000';
                        }
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.storeNo, selDate, selTime, this.viewKbn)];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_12__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        result = res.json();
                        if (result['msgInfo'].statusCd == 'SB200' || result['msgInfo'].statusCd == 'SB300') {
                            this.selectedDate = selDate;
                            this.selectedShowDate = this.dateShowFormat(this.selectedDate);
                            params = {
                                storeNo: this.storeNo, storeNm: this.storeNm,
                                res: res, aplUserId: this.aplUserId, selectedText: this.selectedText, viewKbn: this.viewKbn,
                                selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId, reStatusCd: result['msgInfo'].statusCd
                            };
                            this.dragSub.unsubscribe();
                            this.dragendSub.unsubscribe();
                            this.eventFlag = true;
                            // if (count == 0) {
                            // 	this.otherDateFlg = false;
                            // } else {
                            // 	this.otherDateFlg = true;
                            // }
                            this.events.publish('res:creat', params);
                            loading.dismiss();
                        }
                        else if (result['msgInfo'].statusCd == 'SB900') {
                            loading.dismiss();
                            alert_4 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: result['msgInfo'].msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.events.unsubscribe("res:created");
                                            _this.events.unsubscribe("res:creat");
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
                                        }
                                    },
                                ]
                            });
                            alert_4.present();
                            return [2 /*return*/];
                        }
                        else {
                            loading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_12__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, result['msgInfo'].msg);
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardPage.prototype.stopAutoRefresh = function () {
        if (this.timedExecution != undefined) {
            clearInterval(this.timedExecution);
            this.timedExecution = undefined;
        }
    };
    BoardPage.prototype.startAutoRefresh = function () {
        var _this = this;
        // 時間初期化
        this.storage.set('autoRefreshTimeCounter', 0);
        var refreshLoading;
        if (!this.timedExecution
            && this.selectedDate == __WEBPACK_IMPORTED_MODULE_3__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(new Date())) {
            this.timedExecution = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                var counter, accessToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.storage.get('autoRefreshTimeCounter')];
                        case 1:
                            counter = _a.sent();
                            return [4 /*yield*/, this.storage.get('accessToken')];
                        case 2:
                            accessToken = _a.sent();
                            if (!accessToken) {
                                return [2 /*return*/];
                            }
                            if (counter == 299) {
                                refreshLoading = this.loadingCtrl.create({
                                    content: '',
                                    duration: 5000
                                });
                                refreshLoading.present();
                            }
                            if (counter > 300) {
                                this.refreshTask(refreshLoading);
                                counter = 0;
                            }
                            counter = counter + 1;
                            this.storage.set('autoRefreshTimeCounter', counter);
                            return [2 /*return*/];
                    }
                });
            }); }, 1000);
        }
    };
    BoardPage.prototype.scrollHandler = function (event) {
        if (event == null) {
            return;
        }
        var headers = document.getElementsByName('scrollHeader');
        for (var i = 0; i < headers.length; i++) {
            if (event.scrollTop > 0) {
                headers[i].style.transform = 'translateY(' + (event.scrollTop) + 'px)';
            }
            else {
                headers[i].style.transform = 'translateY(0px)';
            }
        }
    };
    BoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-board',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\board\board.html"*/'<!-- BOARD画面 -->\n\n<ion-header>\n\n    <div class="headerMenuTop" style="background-color: #FFB300;">\n\n        <div class="header-con" style="margin-left: 0.8%;">{{storeNm}}</div>\n\n        <div class="header-con">\n\n            <span class="mar-r-15">{{selectedText}}</span>\n\n        </div>\n\n        <div class="header-con" style="margin-right:0.8%;">\n\n            <span class="mar-r-20">\n\n                <ion-icon name="apps" item-end class="font-30" color="light" (touchstart)="dateSelect()"></ion-icon>\n\n            </span>\n\n            <span (click)="presentPopover($event)">\n\n                <ion-icon name="md-arrow-dropdown" class="font-30" color="light"></ion-icon>\n\n            </span>\n\n        </div>\n\n    </div>\n\n    <div class="headerMenubottom">\n\n        <div class="headerMenubottom-zero"></div>\n\n        <div class="headerMenubottom-con">\n\n            <div class="header-con">\n\n                <button ion-button icon-right color="heaButton" class="mar-l-10" style="font-size:15px;" (click)="goHandoverpopPage(timeSlotInfo.timeSlotNm)">\n\n                    {{selectedShowDate}}　{{timeSlotInfo.timeSlotNm}}\n\n                    <ion-icon name="ios-attention-red" style="font-size: 28px; font-weight: bold;" *ngIf="hasHandover" color="warn"></ion-icon>\n\n                    <ion-icon name="ios-attention-white" style="font-size: 28px;font-weight: bold;" *ngIf="!hasHandover" color="warn"></ion-icon>\n\n                </button>\n\n            </div>\n\n            <div class="header-con">\n\n                <button ion-button no-padding class="mar-r-16 font-17 pad-5" color="header" (click)="activeReduce()">\n\n                    <ion-icon name="md-arrow-dropleft" class="mar-r-10 font-30"></ion-icon> 前のシフト\n\n                </button>\n\n                <button ion-button no-padding class="mar-r-10 font-17 pad-5" color="header" (click)="activeAdd()">\n\n                    次のシフト\n\n                    <ion-icon name="md-arrow-dropright" class="mar-l-10 font-30"></ion-icon>\n\n                </button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-header>\n\n<ion-content (ionScroll)="scrollHandler($event)" id="mainPad" [class]="scrollable">\n\n    <div class="div-board">\n\n        <div name="scrollHeader" class="task-state-Name">\n\n            <div class="name-empty"></div>\n\n            <div class="name-ready">未着手</div>\n\n            <div class="name-start">進行中</div>\n\n            <div class="name-end">完了</div>\n\n            <div class="name-stop">中止</div>\n\n        </div>\n\n        <div class="task-state" *ngFor="let categoryItem of categoryInfoList;let i=index">\n\n            <div class="task-name border-bottom">\n\n                <div class="task-name-con">{{categoryItem.categoryNm}}</div>\n\n            </div>\n\n            <div class="task-ready">\n\n                <div id="{{categoryItem.categoryId}}S" style="width:100%" *ngFor="let sTaskInfor of categoryItem.sTaskInforList" [dragula]="categoryItem.categoryId">\n\n                    <div id="{{sTask.taskId}}" class="taskButton" *ngFor="let sTask of sTaskInfor.taskInfoList;let q=index" (press)="longPress(sTask,null,sTaskInfor.taskInfoList,q,i)"\n\n                        (touchend)="goControl(sTask,categoryItem.categoryId,null,sTaskInfor.taskInfoList,q,i)" [ngStyle]="{\'background-color\':sTask.status==\'E\'?\'#90A4AE\':sTask.status==\'A\'?\'#BDBDBD\':\'white\'}"\n\n                        (touchmove)="moveSet()">\n\n                        <div class="taskButtonTop">\n\n                            <div class="lb-taskButtonTopC"></div>\n\n                        </div>\n\n                        <div class="taskButtonBottom">\n\n                            <div class="font-16 taskB-left">\n\n                                <div class="taskB-title">{{viewKbn==\'2\'?sTask.opNm:sTask.cgNm}}</div>\n\n                                <div class="taskB-content">{{viewKbn==\'2\'?sTask.workerNm:sTask.opNm}}</div>\n\n                            </div>\n\n                            <div class="taskB-right">\n\n                                <ion-icon name="ios-attention-red" class="font-33 font-w" style="margin-right:3px; font-weight: bold;" [hidden]="sTask.hasHandover==0"></ion-icon>\n\n                                <ion-icon name="ios-flag" class="font-33 font-w" style="margin-right:3px;" [hidden]="sTask.opId!=0"></ion-icon>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div id="{{categoryItem.categoryId}}S" style="width: 100%;height: 100%;" *ngIf="categoryItem.sTaskInforList.length==0" [dragula]="categoryItem.categoryId"></div>\n\n            </div>\n\n            <div class="task-start" style="border-right: 1px solid rgb(255, 220, 208)">\n\n                <div id="{{categoryItem.categoryId}}I" style="width:100%" *ngFor="let iTaskInfor of categoryItem.iTaskInforList" [dragula]="categoryItem.categoryId">\n\n                    <div id="{{iTask.taskId}}" class="taskButton" *ngFor="let iTask of iTaskInfor.taskInfoList;let q=index" (press)="longPress(iTask,null,iTaskInfor.taskInfoList,q,i)"\n\n                        [ngStyle]="{\'background-color\':iTask.status==\'E\'?\'#90A4AE\':iTask.status==\'A\'?\'#BDBDBD\':\'white\'}" (touchend)="goControl(iTask,categoryItem.categoryId,null,iTaskInfor.taskInfoList,q,i)"\n\n                        (touchmove)="moveSet()">\n\n                        <div class="taskButtonTop">\n\n                            <div class="lb-taskButtonTopC"></div>\n\n                        </div>\n\n                        <div class="taskButtonBottom">\n\n                            <div class="font-16 font-w taskB-left">\n\n                                <div class="taskB-title">{{viewKbn==\'2\'?iTask.opNm:iTask.cgNm}}</div>\n\n                                <div class="taskB-content">{{viewKbn==\'2\'?iTask.workerNm:iTask.opNm}}</div>\n\n                            </div>\n\n                            <div class="taskB-right">\n\n                                <ion-icon name="ios-attention-red" class="font-33 font-w" style="margin-right:3px; font-weight: bold;" [hidden]="iTask.hasHandover==0"></ion-icon>\n\n                                <ion-icon name="ios-flag" class="font-33 font-w" style="margin-right:3px;" [hidden]="iTask.opId!=0"></ion-icon>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div id="{{categoryItem.categoryId}}I" style="width: 100%;height: 100%;" *ngIf="categoryItem.iTaskInforList.length==0" [dragula]="categoryItem.categoryId"></div>\n\n            </div>\n\n            <div class="task-end">\n\n                <div id="{{categoryItem.categoryId}}E" style="width:100%" *ngFor="let eTaskInfor of categoryItem.eTaskInforList" [dragula]="categoryItem.categoryId">\n\n                    <div id="{{eTask.taskId}}" class="taskButton" *ngFor="let eTask of eTaskInfor.taskInfoList;let q=index" [ngStyle]="{\'background-color\':eTask.status==\'E\'?\'#90A4AE\':eTask.status==\'A\'?\'#BDBDBD\':\'white\'}"\n\n                        (touchend)="goControl(eTask,categoryItem.categoryId,null,eTaskInfor.taskInfoList,q,i)" (press)="longPress(eTask,null,eTaskInfor.taskInfoList,q,i)"\n\n                        (touchmove)="moveSet()">\n\n                        <div class="taskButtonTop">\n\n                            <div class="lb-taskButtonTopC"></div>\n\n                        </div>\n\n                        <div class="taskButtonBottom">\n\n                            <div class="font-16 font-w taskB-left">\n\n                                <div class="taskB-title">{{viewKbn==\'2\'?eTask.opNm:eTask.cgNm}}</div>\n\n                                <div class="taskB-content">{{viewKbn==\'2\'?eTask.workerNm:eTask.opNm}}</div>\n\n                            </div>\n\n                            <div class="taskB-right">\n\n                                <ion-icon name="ios-attention-red" class="font-33 font-w" style="margin-right:3px; font-weight: bold;" [hidden]="eTask.hasHandover==0"></ion-icon>\n\n                                <ion-icon name="ios-flag" class="font-33 font-w" style="margin-right:3px;" [hidden]="eTask.opId!=0"></ion-icon>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div id="{{categoryItem.categoryId}}E" style="width: 100%;height: 100%;" *ngIf="categoryItem.eTaskInforList.length==0" [dragula]="categoryItem.categoryId"></div>\n\n            </div>\n\n            <div class="task-stop">\n\n                <div id="{{categoryItem.categoryId}}A" style="width:100%" *ngFor="let aTaskInfor of categoryItem.aTaskInforList" [dragula]="categoryItem.categoryId">\n\n                    <div id="{{aTask.taskId}}" class="taskButton" *ngFor="let aTask of aTaskInfor.taskInfoList;let q=index" (press)="longPress(aTask,null,aTaskInfor.taskInfoList,q,i)"\n\n                        [ngStyle]="{\'background-color\':aTask.status==\'E\'?\'#90A4AE\':aTask.status==\'A\'?\'#BDBDBD\':\'white\'}" (touchend)="goControl(aTask,categoryItem.categoryId,null,aTaskInfor.taskInfoList,q,i)"\n\n                        (touchmove)="moveSet()">\n\n                        <div class="taskButtonTop">\n\n                            <div class="lb-taskButtonTopC"></div>\n\n                        </div>\n\n                        <div class="taskButtonBottom">\n\n                            <div class="font-16 font-w taskB-left">\n\n                                <div class="taskB-title">{{viewKbn==\'2\'?aTask.opNm:aTask.cgNm}}</div>\n\n                                <div class="taskB-content">{{viewKbn==\'2\'?aTask.workerNm:aTask.opNm}}</div>\n\n                            </div>\n\n                            <div class="taskB-right">\n\n                                <ion-icon name="ios-attention-red" class="font-33 font-w" style="margin-right:3px; font-weight: bold;" [hidden]="aTask.hasHandover==0"></ion-icon>\n\n                                <ion-icon name="ios-flag" class="font-33 font-w" style="margin-right:3px;" [hidden]="aTask.opId!=0"></ion-icon>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div id="{{categoryItem.categoryId}}A" style="width: 100%;height: 100%;" *ngIf="categoryItem.aTaskInforList.length==0" [dragula]="categoryItem.categoryId"></div>\n\n            </div>\n\n        </div>\n\n        <div class="task-state"></div>\n\n    </div>\n\n    <ion-fab bottom right style="z-index: 999999; right: 90px;" (click)="refreshTask()">\n\n        <button ion-fab color="warn">\n\n            <ion-icon name="md-refresh" color="light" style="font-size: 3.4rem;"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n    <ion-fab bottom right style="z-index: 9999;">\n\n        <button ion-fab color="warn" (click)="goTaskC()">\n\n            <ion-icon name="add" color="light"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n    <div class="lef-bot-but" (click)="changMFlgFalse()">\n\n        <div class="let-bot-but-con">未割当</div>\n\n    </div>\n\n    <div class="lb-box" [hidden]="mFlg">\n\n        <div class="lb-box-left" (click)="changMFlgTrue()">\n\n            <div class="lb-box-left-con">未割当</div>\n\n        </div>\n\n        <div name="conName" class="lb-box-right" *ngIf="noAssign!=undefined">\n\n            <div id=\'{{task.taskId}}\' class="taskButton" style="width: 24.8%" *ngFor="let task of noAssign.taskInfoList;let q=index"\n\n                (touchend)="goControl(task,task.cgId,true,null,q,null)">\n\n                <div class="taskButtonTop">\n\n                    <div class="lb-taskButtonTopC"></div>\n\n                </div>\n\n                <div class="taskButtonBottom">\n\n                    <div class="font-16 taskB-left">\n\n                        <div class="taskB-title">{{task.opNm}}</div>\n\n                        <div class="lb-taskB-content" *ngIf="task.workerNm!=\'\'&&task.workerNm!=null">\n\n                            <div class="taskB-content-workerNm">{{task.workerNm}}</div>\n\n                            <div class="taskB-content-time" *ngIf="(task.planSTime!=\'\'&&task.planSTime!=null&&task.planETime!=\'\'&&task.planETime!=null)">{{task.planSTime.substr(8,2)>12?((task.planSTime.substr(8,2)-12)>9?(task.planSTime.substr(8,2)-12+\':\'+task.planSTime.substr(10,2)+\'PM\'):(\'0\'+(task.planSTime.substr(8,2)-12)+\':\'+task.planSTime.substr(10,2)+\'PM\')):(task.planSTime.substr(8,2)+\':\'+task.planSTime.substr(10,2)+\'AM\')}}-{{task.planETime.substr(8,2)>12?((task.planETime.substr(8,2)-12)>9?(task.planETime.substr(8,2)-12+\':\'+task.planETime.substr(10,2)+\'PM\'):(\'0\'+(task.planETime.substr(8,2)-12)+\':\'+task.planETime.substr(10,2)+\'PM\')):(task.planETime.substr(8,2)+\':\'+task.planETime.substr(10,2)+\'AM\')}}</div>\n\n                            <div class="taskB-content-time" style="color: #fdbb2b" *ngIf="!(task.planSTime!=\'\'&&task.planSTime!=null&&task.planETime!=\'\'&&task.planETime!=null)">未</div>\n\n                        </div>\n\n                        <div class="lb-taskB-content" *ngIf="!(task.workerNm!=\'\'&&task.workerNm!=null)">\n\n                            <div class="taskB-content-workerNm" style="color: #fdbb2b;">未</div>\n\n                            <div class="taskB-content-time" *ngIf="task.planSTime!=\'\'&&task.planSTime!=null&&task.planETime!=\'\'&&task.planETime!=null">{{task.planSTime.substr(8,2)>12?((task.planSTime.substr(8,2)-12)>9?(task.planSTime.substr(8,2)-12+\':\'+task.planSTime.substr(10,2)+\'PM\'):(\'0\'+(task.planSTime.substr(8,2)-12)+\':\'+task.planSTime.substr(10,2)+\'PM\')):(task.planSTime.substr(8,2)+\':\'+task.planSTime.substr(10,2)+\'AM\')}}-{{task.planETime.substr(8,2)>12?((task.planETime.substr(8,2)-12)>9?(task.planETime.substr(8,2)-12+\':\'+task.planETime.substr(10,2)+\'PM\'):(\'0\'+(task.planETime.substr(8,2)-12)+\':\'+task.planETime.substr(10,2)+\'PM\')):(task.planETime.substr(8,2)+\':\'+task.planETime.substr(10,2)+\'AM\')}}</div>\n\n                            <div class="taskB-content-time" style="color: #fdbb2b" *ngIf="!(task.planSTime!=\'\'&&task.planSTime!=null&&task.planETime!=\'\'&&task.planETime!=null)">未</div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="taskB-right">\n\n                        <ion-icon name="ios-attention-red" class="font-33 font-w" style="margin-right:3px; font-weight: bold;" [hidden]="task.hasHandover==0"></ion-icon>\n\n                        <ion-icon name="ios-flag" class="font-33 font-w" style="margin-right:3px;" [hidden]="task.opId!=0"></ion-icon>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\board\board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_control_service__["a" /* ApiControlServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["b" /* Storage */]])
    ], BoardPage);
    return BoardPage;
}());

//# sourceMappingURL=board.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHandoverServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_common_api_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 *
 * 概 要： 引継ぎ事項のロジック処理
 * 作成日：2018.02.23
 * 作成者：DHC王東亮
 */
var ApiHandoverServiceProvider = /** @class */ (function () {
    function ApiHandoverServiceProvider(commonService) {
        this.commonService = commonService;
    }
    /**
     * 引継ぎ事項を新規登録する
     *
     * @param taskId タスクID
     * @param workerId 引継者
     * @param handoverContents 引継内容
     * @param imgPath 画像パス
     * @param handoverDate 引継日時
     */
    ApiHandoverServiceProvider.prototype.creHandoverByTaskId = function (taskId, workerId, handoverContents, imgPath, handoverDate, selectedDate) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            "workerId": workerId,
                            "handoverContents": handoverContents,
                            "imgPath": imgPath,
                            "handoverDate": handoverDate
                        };
                        return [4 /*yield*/, this.commonService.doPut('/handover/' + '?date=' + selectedDate + '&taskId=' + taskId, param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 引継ぎ事項を新規登録する
     *
     * @param timesoltId 時間帯ID
     * @param workerId 引継者
     * @param handoverContents 引継内容
     * @param imgPath 画像パス
     * @param handoverDate 引継日時
     */
    ApiHandoverServiceProvider.prototype.creHandoverByTimesoltId = function (timeSlotId, workerId, handoverContents, imgPath, handoverDate, selectedDate) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            "workerId": workerId,
                            "handoverContents": handoverContents,
                            "imgPath": imgPath,
                            "handoverDate": handoverDate
                        };
                        return [4 /*yield*/, this.commonService.doPut('/handover/' + '?date=' + selectedDate + '&timeSlotId=' + timeSlotId, param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 引継ぎ事項を検索する
     *
     * @param taskId タスクID
     */
    ApiHandoverServiceProvider.prototype.selHandoverByTaskId = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/handover' + '?taskId=' + taskId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 引継ぎ事項を検索する
     *
     * @param timesoltId 時間帯ID
     */
    ApiHandoverServiceProvider.prototype.selHandoverByTimesoltId = function (timesoltId, selectedDate) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/handover' + '?timeSlotId=' + timesoltId + '&date=' + selectedDate)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 引継ぎ事項を更新する
     *
     * @param handoverId 引継ぎ事項ID
     * @param workerId 引継者
     * @param handoverContents 引継内容
     * @param imgPath 画像パス
     * @param handoverDate 引継日時
     */
    ApiHandoverServiceProvider.prototype.uptHandover = function (handoverId, workerId, handoverContents, imgPath, handoverDate, lockHandoverInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            "workerId": workerId,
                            "handoverContents": handoverContents,
                            "imgPath": imgPath,
                            "handoverDate": handoverDate,
                            "lockHandoverInfo": lockHandoverInfo
                        };
                        return [4 /*yield*/, this.commonService.doPost('/handover/' + handoverId, param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 引継ぎ事項を削除する
     *
     * @param handoverId 引継ぎ事項ID
     */
    ApiHandoverServiceProvider.prototype.delHandover = function (handoverId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doDelete('/handover/' + handoverId)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 引継ぎ事項を削除する
     *
     * @param handoverId 引継ぎ事項ID
     */
    ApiHandoverServiceProvider.prototype.getWorker = function (storeNo) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.doGet('/worker' + '?storeNo=' + storeNo)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 引継ぎ事項の楽観ロック
     *
     * @param handoverId 引継ぎ事項ID
     */
    ApiHandoverServiceProvider.prototype.lockHandover = function (handoverId, lockHandoverInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var param, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            "lockHandoverInfo": lockHandoverInfo
                        };
                        return [4 /*yield*/, this.commonService.doPost('/lockhandover/' + handoverId, param)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiHandoverServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_common_api_common__["a" /* ApiCommonProvider */]])
    ], ApiHandoverServiceProvider);
    return ApiHandoverServiceProvider;
}());

//# sourceMappingURL=api-handover-service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrUti; });
var StrUti = /** @class */ (function () {
    function StrUti() {
    }
    StrUti.isNothing = function (str) {
        return str == undefined || str == null || str == '';
    };
    StrUti.strNullFormat = function (str) {
        if (str == '' || str == undefined) {
            str = null;
        }
        return str;
    };
    return StrUti;
}());

//# sourceMappingURL=StrUti.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandoverrdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_s3_common_s3_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_handover_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handoveru_handoveru__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utility_service_ObjUti__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__schedule_schedule__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__board_board__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Generated class for the HandoverrdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HandoverrdPage = /** @class */ (function () {
    function HandoverrdPage(navCtrl, navParams, alertCtrl, loadingCtrl, appCtrl, s3Util, handoverProvider, scheduleProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.s3Util = s3Util;
        this.handoverProvider = handoverProvider;
        this.scheduleProvider = scheduleProvider;
        this.events = events;
    }
    HandoverrdPage.prototype.ionViewDidEnter = function () {
        if (this.params != undefined) {
            this.handoverWorker = this.params['handoverWorker'];
            this.handoverContents = this.params['handoverContents'];
            this.handoverDate = this.params['handoverDate'];
            this.workerId = this.params['workerId'];
            this.imgPath = this.params['imgPath'];
            this.handoverList[this.handoverIndex].handoverContents = this.handoverContents;
            this.handoverList[this.handoverIndex].workerNm = this.handoverWorker;
            this.handoverList[this.handoverIndex].handoverDate = this.handoverDate;
            this.handoverList[this.handoverIndex].date = this.handoverAddDate;
            this.handoverList[this.handoverIndex].workerId = this.workerId;
            this.handoverList[this.handoverIndex].imgPath = this.imgPath;
            this.handoverDateF = this.dateFormat();
            this.getImg();
        }
    };
    HandoverrdPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.page = 1;
        this.handoverIndex = 0;
        this.frameNm = '引継確認';
        this.handoverPicFlg = false;
        this.getData = this.navParams.data;
        this.getTaskId = this.getData['taskId'];
        this.currentTimeSlotId = this.getData['currentTimeSlotId'];
        this.selHandover().then(function () {
            if (_this.handoverList != undefined && _this.handoverList.length > 0) {
                _this.hiddenFlg = false;
                _this.getFrameData();
            }
            else {
                _this.hiddenFlg = true;
            }
        });
    };
    HandoverrdPage.prototype.getFrameData = function () {
        this.pages = this.handoverList.length;
        this.imgPath = this.handoverList[this.handoverIndex]['imgPath'];
        this.getImg();
        this.handoverDate = this.handoverList[this.handoverIndex]['handoverDate'];
        this.handoverAddDate = this.handoverList[this.handoverIndex]['date'];
        this.handoverId = this.handoverList[this.handoverIndex]['handoverId'];
        this.handoverOpId = this.handoverList[this.handoverIndex]['opId'];
        this.handoverOp = this.handoverList[this.handoverIndex]['opNm'];
        this.timeSlotId = this.handoverList[this.handoverIndex]['timeSlotId'];
        this.handoverTimeSolt = this.handoverList[this.handoverIndex]['timeSlotNm'];
        this.handoverWorker = this.handoverList[this.handoverIndex]['workerNm'];
        this.workerId = this.handoverList[this.handoverIndex]['workerId'];
        this.handoverContents = this.handoverList[this.handoverIndex]['handoverContents'];
        this.handoverDateF = this.dateFormat();
    };
    HandoverrdPage.prototype.getImg = function () {
        var mythis = this;
        var callback = function (data, mythis) {
            if (data != null) {
                var bin = '';
                for (var i = 0, l = data.Body.length; i < l; i++) {
                    bin += String.fromCharCode(data.Body[i]);
                }
                var base64Data = btoa(bin);
                mythis.handoverPic = 'data:image/png;base64,' + base64Data;
                mythis.handoverPicFlg = true;
            }
            else {
                mythis.handoverPic = 'assets/imgs/noImage/NoImage.png';
                mythis.handoverPicFlg = true;
            }
            //スピナー削除
            if (mythis.loading != null) {
                mythis.loading.dismiss();
            }
        };
        var errcallback = function () {
            mythis.handoverPicFlg = true;
        };
        //S3検索
        if (this.imgPath != undefined && this.imgPath != null && this.imgPath != '') {
            this.s3Util.getObject(callback, errcallback, mythis);
        }
        else {
            this.handoverPic = 'assets/imgs/noImage/NoImage.png';
            this.handoverPicFlg = true;
        }
    };
    HandoverrdPage.prototype.pageAdd = function () {
        if (this.page != this.pages) {
            this.page = this.page + 1;
            this.handoverIndex = this.handoverIndex + 1;
            this.handoverPic = 'assets/imgs/noImage/NoImage.png';
            this.handoverPicFlg = false;
            this.getFrameData();
        }
    };
    HandoverrdPage.prototype.pageReduce = function () {
        if (this.page != '1') {
            this.page = this.page - 1;
            this.handoverIndex = this.handoverIndex - 1;
            this.handoverPic = 'assets/imgs/noImage/NoImage.png';
            this.handoverPicFlg = false;
            this.getFrameData();
        }
    };
    HandoverrdPage.prototype.selHandover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, res, selectedDate, result, msgInfo, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        res = undefined;
                        selectedDate = this.navParams.data.selectedDate;
                        if (!(this.getTaskId != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handoverProvider.selHandoverByTaskId(this.getTaskId)];
                    case 1:
                        res = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.currentTimeSlotId != undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.handoverProvider.selHandoverByTimesoltId(this.currentTimeSlotId, selectedDate)];
                    case 3:
                        res = _a.sent();
                        _a.label = 4;
                    case 4:
                        loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_3__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.handoverList = result['handoverList'];
                                console.log('this.handoverList', this.handoverList);
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_1 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_1.present();
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_3__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HandoverrdPage.prototype.delHandover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, lockHandoverInfo, lockRes, result, msgInfo, res, result_1, msgInfo_1, mythis, callback, alert_2, alert_3, alert_4, alert_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        lockHandoverInfo = this.handoverList[this.handoverIndex];
                        lockHandoverInfo = __WEBPACK_IMPORTED_MODULE_8__providers_utility_service_ObjUti__["a" /* ObjUti */].getLockHandoverObject(lockHandoverInfo);
                        if (this.timeSlotId != null) {
                            lockHandoverInfo['taskId'] = null;
                        }
                        else {
                            lockHandoverInfo['taskId'] = this.getData['taskId'];
                        }
                        return [4 /*yield*/, this.handoverProvider.lockHandover(this.handoverId, lockHandoverInfo)];
                    case 1:
                        lockRes = _a.sent();
                        if (!(lockRes == undefined)) return [3 /*break*/, 2];
                        __WEBPACK_IMPORTED_MODULE_3__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                        loading.dismiss();
                        return [2 /*return*/];
                    case 2:
                        result = lockRes.json();
                        msgInfo = result['msgInfo'];
                        if (!(msgInfo.statusCd == 'SB200')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.handoverProvider.delHandover(this.handoverId)];
                    case 3:
                        res = _a.sent();
                        loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_3__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result_1 = res.json();
                            msgInfo_1 = result_1['msgInfo'];
                            if (msgInfo_1.statusCd == 'SB200') {
                                mythis = this;
                                callback = function (data, mythis) {
                                    //スピナー削除
                                    if (mythis.loading != null) {
                                        mythis.loading.dismiss();
                                    }
                                };
                                this.s3Util.delObject(callback, mythis);
                                this.handoverList.splice(this.handoverIndex, 1);
                                if (this.handoverList.length == 0) {
                                    if (this.getData['taskId'] != undefined) {
                                        //スゲジュール画面
                                        if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                                            //タスクの引継ぎ
                                            this.events.publish('res:created', { "TaskHasHandover": 0 });
                                        }
                                        else {
                                            //タスクの引継ぎ
                                            this.events.publish('res:creat', { "TaskHasHandover": 0 });
                                        }
                                    }
                                    else {
                                        //スゲジュール画面
                                        if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                                            this.events.publish('res:created', { "hasHandover": false });
                                        }
                                        else {
                                            //シフトの引継ぎ
                                            this.events.publish('res:creat', { "hasHandover": false });
                                        }
                                    }
                                    this.goBackPop();
                                }
                                else {
                                    if (this.handoverIndex == 0) {
                                        this.handoverIndex = 1;
                                    }
                                    if (this.page == 1) {
                                        this.page = 2;
                                    }
                                    this.pageReduce();
                                }
                            }
                            else if (msgInfo_1.statusCd == 'SB900') {
                                alert_2 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo_1.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_2.present();
                                return [2 /*return*/];
                            }
                            else if (msgInfo_1.statusCd == 'SB400') {
                                alert_3 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo_1.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.selAlert();
                                            }
                                        },
                                    ],
                                    enableBackdropDismiss: false
                                });
                                alert_3.present();
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_3__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo_1.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (msgInfo.statusCd == 'SB900') {
                            alert_4 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: msgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            loading.dismiss();
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                                        }
                                    },
                                ]
                            });
                            alert_4.present();
                            return [2 /*return*/];
                        }
                        else if (msgInfo.statusCd == 'SB400') {
                            loading.dismiss();
                            alert_5 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: msgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.selAlert();
                                        }
                                    },
                                ],
                                enableBackdropDismiss: false
                            });
                            alert_5.present();
                            return [2 /*return*/];
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_3__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            loading.dismiss();
                            return [2 /*return*/];
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //削除ボータン押下
    HandoverrdPage.prototype.deleteButton = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '当該引継事項を削除してよろしいでしょうか？',
            buttons: [
                {
                    text: 'キャンセル ',
                    handler: function () {
                    }
                },
                {
                    text: '確認',
                    handler: function () {
                        _this.delHandover();
                    }
                }
            ]
        });
        alert.present();
    };
    HandoverrdPage.prototype.goBackPop = function () {
        this.navCtrl.pop();
    };
    HandoverrdPage.prototype.goEdit = function () {
        var storeNo = this.navParams.data.storeNo;
        var storeNm = this.navParams.data.storeNm;
        var aplUserId = this.navParams.data.aplUserId;
        var viewKbn = this.navParams.data.viewKbn;
        var selectedText = this.navParams.data.selectedText;
        var selectedDate = this.navParams.data.selectedDate;
        this.params = {
            taskId: this.getTaskId,
            currentTimeSlotId: this.currentTimeSlotId,
            handoverId: this.handoverId,
            handoverOpId: this.handoverOpId,
            handoverOp: this.handoverOp,
            timeSlotId: this.timeSlotId,
            handoverTimeSolt: this.handoverTimeSolt,
            workerId: this.workerId,
            handoverWorker: this.handoverWorker,
            handoverContents: this.handoverContents,
            handoverDate: this.handoverDate,
            date: this.handoverAddDate,
            imgPath: this.imgPath,
            storeNo: storeNo, storeNm: storeNm, viewKbn: viewKbn,
            aplUserId: aplUserId, selectedText: selectedText, selectedDate: selectedDate,
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__handoveru_handoveru__["a" /* HandoveruPage */], this.params);
    };
    HandoverrdPage.prototype.dateFormat = function () {
        return this.handoverDate.substr(0, 4)
            + '/' + this.handoverDate.substr(4, 2)
            + '/' + this.handoverDate.substr(6, 2)
            + ' ' + this.handoverDate.substr(8, 2)
            + ':' + this.handoverDate.substr(10, 2);
    };
    //アラートが発生する時、再検索処理
    HandoverrdPage.prototype.selAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, loading, selTime, res, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        selTime = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.getData['storeNo'], this.getData['selectedDate'], selTime, this.getData['viewKbn'])];
                    case 1:
                        res = _a.sent();
                        params = {
                            res: res, selectedText: this.getData['selectedText'], storeNo: this.getData['storeNo'],
                            storeNm: this.getData['storeNm'], viewKbn: this.getData['viewKbn'], aplUserId: this.getData['aplUserId'],
                            selectedDate: this.getData['selectedDate'], currentTimeSlotId: this.getData['currentTimeSlotId'],
                            dragFlg: true
                        };
                        loading.dismiss().then(function () {
                            if (_this.getData['viewKbn'] == '0' || _this.getData['viewKbn'] == '1') {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__schedule_schedule__["a" /* SchedulePage */], params);
                            }
                            else {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__board_board__["a" /* BoardPage */], params);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HandoverrdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-handoverrd',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\handoverrd\handoverrd.html"*/'<ion-header>\n\n    <ion-item no-lines color="warn" style="height:50px;">\n\n      <ion-label item-start>\n\n        <ion-icon name="md-arrow-dropleft" color="light" class="font-30 font-w" (click)="goBackPop()"></ion-icon>\n\n      </ion-label>\n\n      <ion-label item-content></ion-label>\n\n      <ion-label item-start class="text-center font-18 bold-white" icon-right>\n\n          {{frameNm}}\n\n        <ion-icon name="alert-outline" class="font-20 font-w" hidden></ion-icon>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <div class="width-100 con-left" style="height:85.5%;overflow:scroll" [hidden]="hiddenFlg">\n\n        <div class="width-50 font-16 font-w">\n\n          <div class="width-95 border-top">\n\n            <div class="con-left">\n\n              <div class="width-40 pad-10 con-center color">入力者</div>\n\n              <div class="width-60 pad-10 border-right border-bottom text-right">{{handoverWorker}}</div>\n\n            </div>\n\n            <div class="con-left">\n\n              <div class="width-40 pad-10 con-center color">引継日時</div>\n\n              <div class="width-60 pad-10 border-right border-bottom text-right">{{handoverDateF}}</div>\n\n            </div>\n\n            <div class="con-left" *ngIf="handoverOpId != null">\n\n              <div class="width-40 pad-10 con-center color">引継先業務</div>\n\n              <div class="width-60 pad-10 border-right border-bottom text-right">{{handoverOp}}</div>\n\n            </div>\n\n            <div class="con-left" *ngIf="timeSlotId != null">\n\n              <div class="width-40 pad-10 con-center color">引継先時間帯</div>\n\n              <div class="width-60 pad-10 border-right border-bottom text-right">{{handoverTimeSolt}}</div>\n\n            </div>\n\n            <div class="con-left">\n\n              <div class="width-40 pad-10 con-center color">引継内容</div>\n\n              <div class="width-60 pad-10 border-0 border-right border-bottom text-left" style="height:300px;">{{handoverContents}}</div>\n\n            </div>\n\n\n\n\n\n            <div class="con-left">\n\n              <div class="width-40 pad-10 con-center color">画像</div>\n\n              <div class="width-60 pad-10 border-right border-bottom con-pic" style="height:300px;">\n\n                <ion-spinner name="crescent" class="spinner spinner-ios spinner-crescent spinner-ios-crescent" *ngIf="!handoverPicFlg"></ion-spinner>\n\n                <img src="{{handoverPic}}" width="100%" height="100%" *ngIf="handoverPicFlg" />\n\n              </div>\n\n            </div>\n\n\n\n\n\n          </div>\n\n        </div>\n\n        <div class="width-50 font-16 font-w border-left"></div>\n\n      </div>\n\n      <div class="page-slide" [hidden]="hiddenFlg">\n\n        <ion-icon name="md-arrow-dropleft" color="{{page > 1 ? \'warn\' : \'dark\'}}" (click)="pageReduce()" class="font-40 font-w"></ion-icon>\n\n        <div class="con-left pad-lr-20 font-18">　{{page}}　/　{{pages}}　件目　</div>\n\n        <ion-icon name="md-arrow-dropright" color="{{pages > 1 ? page != pages ? \'warn\' : \'dark\' :\'dark\'}}" (click)="pageAdd()" class="font-40 font-w"></ion-icon>\n\n      </div>\n\n      <ion-item no-lines style="padding-left:5px;" [hidden]="hiddenFlg">\n\n        <ion-label item-start></ion-label>\n\n        <button ion-button round item-start color="warn" style="height:40px;width:200px;" class="bold-white" (click)="deleteButton()">\n\n          <ion-label class="font-16 font-w">削除</ion-label>\n\n        </button>\n\n        <ion-label></ion-label>\n\n        <button ion-button round item-start color="warn" style="height:40px;width:200px;" class="bold-white" (click)="goEdit()">\n\n            <ion-label class="font-16 font-w">編集</ion-label>\n\n          </button>\n\n        <ion-label item-end></ion-label>\n\n      </ion-item>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\handoverrd\handoverrd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_s3_common_s3_service__["a" /* S3Util */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_handover_service__["a" /* ApiHandoverServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HandoverrdPage);
    return HandoverrdPage;
}());

//# sourceMappingURL=handoverrd.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var S3Util = /** @class */ (function () {
    function S3Util() {
        this.bucket = 'autostoremngcustomer';
        this.accessKeyId = 'AKIAIYBLDGABBF46AUCQ';
        this.secretAccessKey = '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';
        this.region = 'ap-northeast-1';
        this.contentType = 'image/jpeg';
        this.encoding = 'base64';
        this.acl = "public-read-write";
        console.log("S3Util() :constructor");
    }
    /*
     * バケット内のオブジェクトを取得
     */
    S3Util.prototype.getObject = function (callback, errcallback, mythis) {
        console.log('getObject');
        __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTime();
        var s3;
        var result = null;
        if (callback == null) {
            throw ("S3Util.getObject() :callback is null...returning");
        }
        AWS.config.update({ accessKeyId: this.accessKeyId, secretAccessKey: this.secretAccessKey });
        AWS.config.region = this.region;
        s3 = new AWS.S3();
        console.log(mythis.imgPath);
        var param = {
            Bucket: this.bucket,
            Key: mythis.imgPath
        };
        var objectPromise = s3.getObject(param).promise();
        objectPromise.then(function (data) {
            __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTimeWithZone();
            //読み込んだデータを引数にコールバック呼び出し
            callback(data, mythis);
        }).catch(function (err) {
            console.log(err, err.stack);
            __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTimeWithZone();
            errcallback();
            mythis.handoverPic = 'assets/imgs/noImage/NoImage.png';
        });
        return result;
    };
    /*
     * バケット内のオブジェクトリストを削除
     */
    S3Util.prototype.delObject = function (callback, mythis) {
        console.log('delObject');
        __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTime();
        var s3;
        var result = null;
        if (callback == null) {
            throw ("S3Util.getObject() :callback is null...returning");
        }
        AWS.config.update({ accessKeyId: this.accessKeyId, secretAccessKey: this.secretAccessKey });
        AWS.config.region = this.region;
        s3 = new AWS.S3();
        console.log(mythis.imgPath);
        if (!mythis.imgPath) {
            return;
        }
        var param = {
            Bucket: this.bucket,
            Key: mythis.imgPath
        };
        var objectPromise = s3.deleteObject(param).promise();
        objectPromise.then(function (data) {
            __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTimeWithZone();
            //読み込んだデータを引数にコールバック呼び出し
            callback(data, mythis);
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTimeWithZone();
            console.log(err, err.stack);
        });
        return result;
    };
    /*
     * S3に写真をupload
    */
    S3Util.prototype.uploadToS3 = function (callback, mythis) {
        console.log('uploadToS3');
        __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTime();
        var s3;
        var result = null;
        if (callback == null) {
            throw ("S3Util.uploadToS3() :callback is null...returning");
        }
        AWS.config.update({ accessKeyId: this.accessKeyId, secretAccessKey: this.secretAccessKey });
        AWS.config.region = this.region;
        s3 = new AWS.S3();
        console.log(mythis.imgPath);
        var buf = Buffer.from(mythis.base64Image, this.encoding);
        var params3 = {
            Bucket: this.bucket,
            Key: mythis.imgPath,
            Body: buf,
            ACL: this.acl,
            ContentEncoding: this.encoding,
            ContentType: this.contentType
        };
        console.log("params3:", params3);
        var retUploadPromise = s3.putObject(params3).promise();
        retUploadPromise.then(function (data) {
            __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTimeWithZone();
            //戻り値を引数にコールバック呼び出し
            callback(data, mythis);
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_1__utility_service_UtilityService__["a" /* UtilityService */].setISODateTimeWithZone();
            console.log(err, err.stack);
        });
        return result;
    };
    S3Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], S3Util);
    return S3Util;
}());

//# sourceMappingURL=s3.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(193).Buffer))

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelschedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_schedule__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__board_board__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the SelschedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelschedulePage = /** @class */ (function () {
    function SelschedulePage(navCtrl, navParams, loadingCtrl, viewCtrl, scheduleProvider, events, alertCtrl, appCtrl, device) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.scheduleProvider = scheduleProvider;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.appCtrl = appCtrl;
        this.device = device;
        this.aplUserId = this.navParams.data.aplUserId;
        this.timeRun = this.navParams.data.timeRun;
        this.storeNo = this.navParams.data.storeNo;
        this.storeNm = this.navParams.data.storeNm;
        this.viewKbn = this.navParams.data.viewKbn;
        this.selectedDate = this.navParams.data.selectedDate;
        this.currentTimeSlotId = this.navParams.data.currentTimeSlotId;
    }
    SelschedulePage.prototype.ionViewDidLoad = function () {
        var pop = document.querySelector('.popover-content');
        if (pop != undefined && pop != null) {
            pop['style']['margin-top'] = '35.5px';
        }
    };
    SelschedulePage.prototype.selInfo = function (kbn, selectedText) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, date, res, selTime, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        date = new Date();
                        if (this.selectedDate == undefined) {
                            this.selectedDate = __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_UtilityService__["a" /* UtilityService */].formatDate(date);
                        }
                        selTime = __WEBPACK_IMPORTED_MODULE_4__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.storeNo, this.selectedDate, selTime, kbn)];
                    case 1:
                        res = _a.sent();
                        loading.dismiss().then(function () {
                            _this.viewCtrl.dismiss();
                        });
                        if (kbn == '0' || kbn == '1') {
                            //スゲジュール画面から遷移する場合
                            if (this.viewKbn == '0' || this.viewKbn == '1') {
                                params = {
                                    res: res, selectedText: selectedText, storeNo: this.storeNo,
                                    storeNm: this.storeNm, viewKbn: kbn, aplUserId: this.aplUserId,
                                    selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
                                    dragFlg: true
                                };
                                this.events.publish('res:created', params);
                            }
                            else {
                                //カンバン画面から遷移する場合
                                params = {
                                    res: res, selectedText: selectedText, storeNo: this.storeNo,
                                    storeNm: this.storeNm, viewKbn: kbn, aplUserId: this.aplUserId,
                                    selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId
                                };
                                this.events.unsubscribe('res:created');
                                this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__schedule_schedule__["a" /* SchedulePage */], params);
                            }
                        }
                        if (kbn == '2' || kbn == '3') {
                            //カンバン画面から遷移する場合
                            if (this.viewKbn == '2' || this.viewKbn == '3') {
                                params = {
                                    res: res, selectedText: selectedText, storeNo: this.storeNo,
                                    storeNm: this.storeNm, viewKbn: kbn, aplUserId: this.aplUserId,
                                    selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
                                    dragFlg: true
                                };
                                this.events.publish('res:creat', params);
                            }
                            else {
                                //スゲジュール画面から遷移する場合
                                params = {
                                    res: res, selectedText: selectedText, storeNo: this.storeNo,
                                    storeNm: this.storeNm, viewKbn: kbn, aplUserId: this.aplUserId,
                                    selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId
                                };
                                this.events.unsubscribe('res:creat');
                                this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__board_board__["a" /* BoardPage */], params);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SelschedulePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var uuid, loading, res, result, msgInfo, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.device.uuid == null) {
                            uuid = 'hasnotuuid';
                        }
                        else {
                            uuid = this.device.uuid;
                        }
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        return [4 /*yield*/, this.scheduleProvider.logout(this.aplUserId + uuid)];
                    case 1:
                        res = _a.sent();
                        loading.dismiss();
                        result = res.json();
                        msgInfo = result['msgInfo'];
                        if (msgInfo.statusCd != 'SB200') {
                        }
                        else if (msgInfo.statusCd == 'SB900') {
                            alert_1 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: msgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.events.unsubscribe("res:created");
                                            _this.events.unsubscribe("res:creat");
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                        }
                                    },
                                ]
                            });
                            alert_1.present();
                            return [2 /*return*/];
                        }
                        clearInterval(this.timeRun);
                        this.viewCtrl.dismiss();
                        this.events.unsubscribe("res:created");
                        this.events.unsubscribe("res:creat");
                        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    SelschedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selschedule',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\selschedule\selschedule.html"*/'\n\n<ion-content>\n\n    <ion-list no-line style="margin:0;">\n\n        <ion-item no-lines color="warn" style="padding:0;border-bottom:1px solid white" (touchstart)="selInfo(\'0\',\'カレンダー( 業務別 )\')">\n\n            <ion-label item-content style="padding-left:10px;font-size:18px;" color="light">カレンダー( 業務別 )</ion-label>\n\n            <ion-icon name="ios-cal" item-end color="light"></ion-icon>\n\n        </ion-item>\n\n        <ion-item no-lines color="warn" style="padding:0;border-bottom:1px solid white" (touchstart)="selInfo(\'1\',\'カレンダー( 担当者別 )\')">\n\n            <ion-label item-content style="padding-left:10px;font-size:18px;" color="light">カレンダー( 担当者別 )</ion-label>\n\n            <ion-icon name="ios-cal" item-end color="light"></ion-icon>\n\n        </ion-item>\n\n        <ion-item no-lines color="warn" style="padding:0;border-bottom:1px solid white" (touchstart)="selInfo(\'2\',\'かんばん( 業務別 )\')">\n\n            <ion-label item-content style="padding-left:10px;font-size:18px;" color="light">かんばん( 業務別 )</ion-label>\n\n            <ion-icon name="ios-kanban" item-end color="light"></ion-icon>\n\n        </ion-item>\n\n        <ion-item no-lines color="warn" style="padding:0;border-bottom:1px solid white" (touchstart)="selInfo(\'3\',\'かんばん( 担当者別 )\')">\n\n            <ion-label item-content style="padding-left:10px;font-size:18px;" color="light">かんばん( 担当者別 )</ion-label>\n\n            <ion-icon name="ios-kanban" item-end color="light"></ion-icon>\n\n        </ion-item>\n\n        <ion-item no-lines color="lgoutColor" style="padding:0;" (click)="logout()">\n\n            <ion-label item-content style="padding-left:10px;font-size:18px;" color="dark">ログアウト</ion-label>\n\n            <ion-icon name="ios-logout" color="dark" item-end></ion-icon>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\selschedule\selschedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */]])
    ], SelschedulePage);
    return SelschedulePage;
}());

//# sourceMappingURL=selschedule.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manual_manual__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_control_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handoverc_handoverc__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handoverrd_handoverrd__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__taskrd_taskrd__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_manual_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utility_service_ObjUti__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_service_api_schedule_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var ControlPage = /** @class */ (function () {
    function ControlPage(navCtrl, navParams, viewCtrl, alertCtrl, loadingCtrl, service, toastCtrl, manualService, scheduleProvider, appCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.manualService = manualService;
        this.scheduleProvider = scheduleProvider;
        this.appCtrl = appCtrl;
        this.events = events;
        this.checkListNew = [];
        this.taskFromList = [];
        this.taskToList = [];
        this.startTime = '';
        this.endTime = '';
        this.getData = {};
        this.viewFlg = true;
        this.viewFlgCon = true;
        this.manualFlg = true;
        this.manualList = new Array();
        this.getData = this.navParams.data;
    }
    ControlPage.prototype.ionViewWillEnter = function () {
        if (this.viewFlg) {
            var pop = document.querySelector('.popover-content');
            if (pop != undefined && pop != null) {
                pop['style'].top = '51px';
                pop['style'].width = '400px';
                var left = pop['style'].left;
                left = (left.replace('px', '') - 55) + 'px';
                pop['style'].left = left;
                this.viewFlg = false;
            }
        }
    };
    ControlPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.viewFlgCon) {
            if (this.getData['status'] == 'S') {
                this.taskUndoneFlg = false;
                this.taskDoingFlg = true;
                this.taskStopFlg = true;
                this.taskDoneFlg = true;
                this.taskButtonUndoneFlg = true;
                this.taskButtonDoingFlg = false;
                this.taskButtonStopFlg = false;
                this.taskButtonDoneFlg = false;
            }
            else if (this.getData['status'] == 'I') {
                this.taskUndoneFlg = true;
                this.taskDoingFlg = false;
                this.taskStopFlg = true;
                this.taskDoneFlg = true;
                this.taskButtonUndoneFlg = false;
                this.taskButtonDoingFlg = true;
                this.taskButtonStopFlg = false;
                this.taskButtonDoneFlg = false;
            }
            else if (this.getData['status'] == 'A') {
                this.taskUndoneFlg = true;
                this.taskDoingFlg = true;
                this.taskStopFlg = false;
                this.taskDoneFlg = true;
                this.taskButtonUndoneFlg = false;
                this.taskButtonDoingFlg = false;
                this.taskButtonStopFlg = true;
                this.taskButtonDoneFlg = false;
                document.getElementById('taskButton').setAttribute('style', 'background-color:#BDBDBD');
            }
            else if (this.getData['status'] == 'E') {
                this.taskUndoneFlg = true;
                this.taskDoingFlg = true;
                this.taskStopFlg = true;
                this.taskDoneFlg = false;
                this.taskButtonUndoneFlg = false;
                this.taskButtonDoingFlg = false;
                this.taskButtonStopFlg = false;
                this.taskButtonDoneFlg = true;
                document.getElementById('taskButton').setAttribute('style', 'background-color:#90A4AE');
            }
            this.startTime = this.timeFmt(this.getData['planSTime']);
            this.endTime = this.timeFmt(this.getData['planETime']);
            this.taskButtonN = '未着手';
            this.taskButtonS = '開始';
            this.taskButtonSu = '中止';
            this.taskButtonE = '完了';
            this.advice = '留意点確認';
            this.detail = '詳細・編集';
            this.transferDone = '引継作成';
            this.transferOk = '引継確認';
            this.firstW = '先行業務：';
            this.secondW = '後続業務：';
            if (this.getData['alertKbn'] == '1') {
                this.warnFLG = false;
                this.warnContent = 'タスク未開始！！';
            }
            else if (this.getData['alertKbn'] == '2') {
                this.warnFLG = false;
                this.warnContent = 'タスク未終了！！';
            }
            else {
                this.warnFLG = true;
            }
            // if (this.getData['precOpList'].length != 0 && this.getData['subsOpList'].length != 0) {
            //     this.taskIcon = false;
            //     this.taskIconOne = true;
            //     this.taskIconTwo = false;
            //     this.taskIconThree = true;
            //     this.taskContentFromFLG = false;
            //     this.taskFromList = this.getData['precOpList']
            //     this.taskContentToFLG = false;
            //     this.taskToList = this.getData['subsOpList']
            // } else if (this.getData['precOpList'].length != 0 && this.getData['subsOpList'].length == 0) {
            //     this.taskIcon = false;
            //     this.taskIconOne = true;
            //     this.taskIconTwo = true;
            //     this.taskIconThree = false;
            //     this.taskContentFromFLG = false;
            //     this.taskFromList = this.getData['precOpList']
            //     this.taskContentToFLG = true;
            // } else if (this.getData['precOpList'].length == 0 && this.getData['subsOpList'].length != 0) {
            //     this.taskIcon = false;
            //     this.taskIconOne = false;
            //     this.taskIconTwo = true;
            //     this.taskIconThree = true;
            //     this.taskContentFromFLG = true;
            //     this.taskContentToFLG = false;
            //     this.taskToList = this.getData['subsOpList']
            // } else {
            this.taskIcon = true;
            // }
            this.getCheckList().then(function (result) {
                if (result != undefined) {
                    _this.manualSel();
                }
            });
            this.viewFlgCon = false;
        }
        //未割当の場合
        if (this.getData['noAssingFlg']) {
            this.taskButtonUndoneFlg = true;
            this.taskButtonDoingFlg = true;
            this.taskButtonStopFlg = true;
            this.taskButtonDoneFlg = true;
        }
    };
    ControlPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ControlPage.prototype.checkListInvalid = function (flg, i) {
        this.lockStatus = this.checkListContent[i].chkStatus;
        var statusbk = this.checkListNew[i].chkStatus;
        if (flg) {
            this.checkListNew[i].chkStatus = 0;
        }
        else {
            this.checkListNew[i].chkStatus = 2;
        }
        this.lineNo = this.checkListNew[i].lineNo;
        this.checkListId = this.checkListNew[i].taskChklistId;
        this.chkStatus = this.checkListNew[i].chkStatus;
        this.changeCheckList(i, statusbk);
    };
    ControlPage.prototype.check = function (i) {
        this.lockStatus = this.checkListContent[i].chkStatus;
        var statusbk = this.checkListNew[i].chkStatus;
        if (this.checkListNew[i].chkStatus == 0) {
            this.checkListNew[i].chkStatus = 1;
            this.lineNo = this.checkListNew[i].lineNo;
            this.checkListId = this.checkListNew[i].taskChklistId;
            this.chkStatus = this.checkListNew[i].chkStatus;
            this.changeCheckList(i, statusbk);
            return;
        }
        if (this.checkListNew[i].chkStatus == 1) {
            this.checkListNew[i].chkStatus = 0;
            this.lineNo = this.checkListNew[i].lineNo;
            this.checkListId = this.checkListNew[i].taskChklistId;
            this.chkStatus = this.checkListNew[i].chkStatus;
            this.changeCheckList(i, statusbk);
            return;
        }
    };
    ControlPage.prototype.goManual = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__manual_manual__["a" /* ManualPage */], {
            manualList: this.manualList
        });
    };
    ControlPage.prototype.goTaskrd = function () {
        this.viewCtrl.dismiss();
        this.getData['chkList'] = this.checkListNew;
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__taskrd_taskrd__["a" /* TaskrdPage */], this.getData);
    };
    ControlPage.prototype.goHandoverc = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__handoverc_handoverc__["a" /* HandovercPage */], {
            taskId: this.getData['taskId'],
            storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'],
            currentTimeSlotId: this.getData['currentTimeSlotId'],
            opId: this.getData['opId'],
            opNm: this.getData['opNm'],
            aplUserId: this.getData['aplUserId'],
            viewKbn: this.getData['viewKbn'],
            selectedText: this.getData['selectedText'],
            selectedDate: this.getData['selectedDate'],
            hasHandover: this.getData['hasHandover']
        });
    };
    ControlPage.prototype.goHandoverrd = function () {
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__handoverrd_handoverrd__["a" /* HandoverrdPage */], {
            taskId: this.getData['taskId'],
            storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'],
            currentTimeSlotId: this.getData['currentTimeSlotId'],
            aplUserId: this.getData['aplUserId'],
            viewKbn: this.getData['viewKbn'],
            selectedText: this.getData['selectedText'],
            selectedDate: this.getData['selectedDate']
        });
        this.viewCtrl.dismiss();
    };
    ControlPage.prototype.getCheckList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, result, msgInfo, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = this.loadingCtrl.create({
                            content: ''
                        });
                        this.loading.present();
                        return [4 /*yield*/, this.service.getCheckList(this.getData['taskId'])];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            this.loading.dismiss();
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.checkListContent = result['checkList'];
                                this.checkListFLG = false;
                                this.checkListNew = JSON.parse(JSON.stringify(this.checkListContent));
                                return [2 /*return*/, result];
                            }
                            else if (msgInfo.statusCd == 'SB300') {
                                this.checkListFLG = true;
                                return [2 /*return*/, result];
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                this.loading.dismiss();
                                alert_1 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.viewCtrl.dismiss();
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_1.present();
                                return [2 /*return*/];
                            }
                            else {
                                this.loading.dismiss();
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlPage.prototype.changeStatus = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, lockTask, res, result_1, msgInfo, categoryInfoLists, activeIndex, categoryId, beforeStatus, taskId_1, i, categoryInfo, _loop_1, j, state_1, alert_2, alert_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //未割当の場合
                        if (this.getData['noAssingFlg']) {
                            return [2 /*return*/];
                        }
                        if (status == 1 && this.taskUndoneFlg == false) {
                            return [2 /*return*/];
                        }
                        if (status == 2 && this.taskDoingFlg == false) {
                            return [2 /*return*/];
                        }
                        if (status == 3 && this.taskStopFlg == false) {
                            return [2 /*return*/];
                        }
                        if (status == 4 && this.taskDoneFlg == false) {
                            return [2 /*return*/];
                        }
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        lockTask = __WEBPACK_IMPORTED_MODULE_10__providers_utility_service_ObjUti__["a" /* ObjUti */].getLockObject(this.getData);
                        return [4 /*yield*/, this.service.changeStatus(this.getData['taskId'], status, lockTask)];
                    case 1:
                        res = _a.sent();
                        loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result_1 = res.json();
                            msgInfo = result_1['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                categoryInfoLists = this.getData['categoryInfoLists'];
                                activeIndex = this.getData['activeIndex'];
                                categoryId = this.getData['categoryId'];
                                beforeStatus = this.getData['status'];
                                taskId_1 = this.getData['taskId'];
                                for (i = 0; i < categoryInfoLists.length; i++) {
                                    if (activeIndex == i) {
                                        continue;
                                    }
                                    categoryInfo = categoryInfoLists[i];
                                    _loop_1 = function (j) {
                                        var temp = categoryInfo[j];
                                        if (categoryId == temp['categoryId']) {
                                            var beforeTaskList = [];
                                            switch (beforeStatus) {
                                                case 'S':
                                                    beforeTaskList = temp.sTaskInforList;
                                                    break;
                                                case 'I':
                                                    beforeTaskList = temp.iTaskInforList;
                                                    break;
                                                case 'A':
                                                    beforeTaskList = temp.aTaskInforList;
                                                    break;
                                                case 'E':
                                                    beforeTaskList = temp.eTaskInforList;
                                                    break;
                                                default:
                                                    break;
                                            }
                                            var afterCopy_1;
                                            if (!beforeTaskList) {
                                                beforeTaskList = [];
                                            }
                                            beforeTaskList.forEach(function (e) {
                                                var infoList = e['taskInfoList'];
                                                for (var k = 0; k < infoList.length; k++) {
                                                    if (infoList[k].taskId == taskId_1) {
                                                        afterCopy_1 = infoList[k];
                                                        infoList.splice(k, 1);
                                                        break;
                                                    }
                                                }
                                            });
                                            if (!afterCopy_1) {
                                                return "continue";
                                            }
                                            var afterTaskList = [];
                                            var afterStatus_1;
                                            switch (status) {
                                                case 1:
                                                    afterStatus_1 = 'S';
                                                    afterTaskList = temp.sTaskInforList;
                                                    break;
                                                case 2:
                                                    afterStatus_1 = 'I';
                                                    afterTaskList = temp.iTaskInforList;
                                                    break;
                                                case 3:
                                                    afterStatus_1 = 'A';
                                                    afterTaskList = temp.aTaskInforList;
                                                    break;
                                                case 4:
                                                    afterStatus_1 = 'E';
                                                    afterTaskList = temp.eTaskInforList;
                                                    break;
                                                default:
                                                    break;
                                            }
                                            if (afterTaskList.length == 0) {
                                                afterTaskList.push({ taskInfoList: [] });
                                            }
                                            afterTaskList.forEach(function (e) {
                                                var infoList = e['taskInfoList'];
                                                afterCopy_1.status = afterStatus_1;
                                                afterCopy_1['actualETime'] = result_1['lockTaskInfo'].actualEDayTime;
                                                afterCopy_1['actualSTime'] = result_1['lockTaskInfo'].actualSDayTime;
                                                infoList.push(afterCopy_1);
                                            });
                                            return "break";
                                        }
                                    };
                                    for (j = 0; j < categoryInfo.length; j++) {
                                        state_1 = _loop_1(j);
                                        if (state_1 === "break")
                                            break;
                                    }
                                }
                                this.getData['actualETime'] = result_1['lockTaskInfo'].actualEDayTime;
                                this.getData['actualSTime'] = result_1['lockTaskInfo'].actualSDayTime;
                                this.viewCtrl.dismiss(status);
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_2 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.viewCtrl.dismiss(status);
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_2.present();
                                return [2 /*return*/];
                            }
                            else if (msgInfo.statusCd == 'SB400') {
                                alert_3 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.selAlert();
                                            }
                                        },
                                    ],
                                    enableBackdropDismiss: false
                                });
                                alert_3.present();
                                return [2 /*return*/, result_1];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                this.viewCtrl.dismiss();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlPage.prototype.changeCheckList = function (i, statusbk) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, lockChkListInfo, res, result, msgInfo, alert_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        lockChkListInfo = { 'taskChklistId': this.checkListId, 'lineNo': this.lineNo, 'chkStatus': this.lockStatus, 'chkContents': this.checkListContent[i].chkContents };
                        return [4 /*yield*/, this.service.changeCheckList(this.getData['taskId'], this.checkListId, this.lineNo, this.chkStatus, lockChkListInfo)];
                    case 1:
                        res = _a.sent();
                        loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.checkListContent[i].chkStatus = this.chkStatus;
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_4 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.viewCtrl.dismiss();
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_4.present();
                                return [2 /*return*/];
                            }
                            else {
                                this.checkListNew[i].chkStatus = statusbk;
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 時間をフォーマットする
     * @param datetime　YYYYMMDDHHMM
     */
    ControlPage.prototype.timeFmt = function (datetime) {
        if (datetime != undefined) {
            var hh = datetime.substr(8, 2);
            var mm = datetime.substr(10, 2);
            var sufix = 'AM';
            if (parseInt(hh) > 12) {
                hh = parseInt(hh) - 12;
                sufix = 'PM';
            }
            var fmtTime = hh + ':' + mm + sufix;
            return fmtTime;
        }
    };
    //留意点の検索
    ControlPage.prototype.manualSel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, result, msgInfo, alert_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manualService.manual(this.getData['opId'], this.getData['cgId'], this.getData['storeNo'])];
                    case 1:
                        res = _a.sent();
                        this.loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.manualList = result['manualList'];
                                this.manualFlg = false;
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_5 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.viewCtrl.dismiss();
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_5.present();
                                return [2 /*return*/];
                            }
                            else if (msgInfo.statusCd == 'SB300') {
                                this.manualFlg = true;
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //アラートが発生する時、再検索処理
    ControlPage.prototype.selAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, loading, res, selTime, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        selTime = __WEBPACK_IMPORTED_MODULE_11__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.getData['storeNo'], this.getData['selectedDate'], selTime, this.getData['viewKbn'])];
                    case 1:
                        res = _a.sent();
                        params = {
                            res: res, selectedText: this.getData['selectedText'], storeNo: this.getData['storeNo'],
                            storeNm: this.getData['storeNm'], viewKbn: this.getData['viewKbn'], aplUserId: this.getData['aplUserId'],
                            selectedDate: this.getData['selectedDate'], currentTimeSlotId: this.getData['currentTimeSlotId'],
                            dragFlg: true
                        };
                        loading.dismiss().then(function () {
                            _this.viewCtrl.dismiss();
                            if (_this.getData['viewKbn'] == '0' || _this.getData['viewKbn'] == '1') {
                                _this.events.publish('res:created', params);
                            }
                            else {
                                _this.events.publish('res:creat', params);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-control',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\control\control.html"*/'<ion-content>\n\n    <ion-list class="margin-0 text-center">\n\n        <div style="width: 400px;height: 45px;display: flex;justify-content: flex-end;" (click)="close()">\n\n            <ion-icon name="md-close" class="font-35" style="padding-left:10px;padding-right:10px;"></ion-icon>\n\n        </div>\n\n        <div style="margin-left:10px;margin-right:10px;">\n\n            <div id="taskButton" class="taskButton">\n\n                <div class="taskB-left">\n\n                    <ion-icon name="ios-will" class="font-40" [hidden]="taskUndoneFlg"></ion-icon>\n\n                    <ion-icon name="ios-doing" class="font-40" [hidden]="taskDoingFlg"></ion-icon>\n\n                    <ion-icon name="ios-stop" class="font-40" [hidden]="taskStopFlg"></ion-icon>\n\n                    <ion-icon name="ios-done" class="font-40" [hidden]="taskDoneFlg"></ion-icon>\n\n                </div>\n\n                <div class="taskB-right font-16">\n\n                    <div class="right-top">\n\n                        {{getData.opNm}}\n\n                    </div>\n\n                    <div class="right-next">\n\n                        <div class="right-left">{{getData.workerNm}}</div>\n\n                        <div class="right-right">\n\n                            <div>\n\n                                {{startTime}} {{endTime}}\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="ctrlbutton">\n\n            <!-- 未着手 -->\n\n            <div class="ctrlbutton-con">\n\n                <ion-icon name="{{taskButtonUndoneFlg?\'ios-will-grey\':\'ios-will\'}}" (touchstart)="changeStatus(1)" class="font-40" style="color:black;"></ion-icon>\n\n                <div class="font-16 font-w" [ngStyle]="{\'color\':taskButtonUndoneFlg?\'#ccc\':\'black\'}">{{taskButtonN}}</div>\n\n            </div>\n\n            <!-- start -->\n\n            <div class="ctrlbutton-con">\n\n                <ion-icon name="{{taskButtonDoingFlg?\'ios-doing-grey\':\'ios-doing\'}}" (touchstart)="changeStatus(2)" class="font-40"></ion-icon>\n\n                <div class="font-16 font-w" [ngStyle]="{\'color\':taskButtonDoingFlg?\'#ccc\':\'black\'}">{{taskButtonS}}</div>\n\n            </div>\n\n            <!-- 中止  -->\n\n            <div class="ctrlbutton-con">\n\n                <ion-icon name="{{taskButtonStopFlg?\'ios-stop-grey\':\'ios-stop\'}}" (touchstart)="changeStatus(3)" class="font-40"></ion-icon>\n\n                <div class="font-16 font-w" [ngStyle]="{\'color\':taskButtonStopFlg?\'#ccc\':\'black\'}">{{taskButtonSu}}</div>\n\n            </div>\n\n            <!-- end -->\n\n            <div class="ctrlbutton-con">\n\n                <ion-icon name="{{taskButtonDoneFlg?\'ios-done-grey\':\'ios-done\'}}" (touchstart)="changeStatus(4)" class="font-40"></ion-icon>\n\n                <div class="font-16 font-w" [ngStyle]="{\'color\':taskButtonDoneFlg?\'#ccc\':\'black\'}">{{taskButtonE}}</div>\n\n            </div>\n\n        </div>\n\n    </ion-list>\n\n    <ion-list class="margin-0" [hidden]="checkListFLG" style="border-top: 1px solid #ccc;">\n\n        <ion-item style="border-top:0;" class="font-16 font-w" *ngFor="let item of checkListNew; let i=index">\n\n            <ion-label text-wrap style="margin-right:0;">{{item.chkContents}}</ion-label>\n\n            <ion-checkbox class="contain" item-start checked="{{item.chkStatus==1}}" disabled="{{item.chkStatus==2}}" color="dark" (click)="check(i)"></ion-checkbox>\n\n            <ion-toggle class="contain" style="padding-left:5px" item-end ngModel="{{item.chkStatus!=2}}" (ngModelChange)="checkListInvalid($event,i)"></ion-toggle>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list class="margin-0" style="border-top: 1px solid #ccc;">\n\n        <button ion-item (click)="goManual()" [disabled]="manualFlg" class="font-16 font-w">\n\n            <ion-icon item-start name="ios-advice"></ion-icon>\n\n            {{advice}}\n\n        </button>\n\n        <button ion-item class="font-16 font-w" (click)="goHandoverc()">\n\n            <ion-icon item-start name="ios-attention-grey" style="font-weight: bold"></ion-icon>\n\n            {{transferDone}}\n\n        </button>\n\n        <button ion-item class="font-16 font-w" (click)="goHandoverrd()" [disabled]="!getData[\'hasHandover\']">\n\n            <ion-icon item-start name="ios-attention-red" style="font-weight: bold"></ion-icon>\n\n            {{transferOk}}\n\n        </button>\n\n        <button ion-item (click)="goTaskrd()" class="font-16 font-w">\n\n            <ion-icon item-start name="ios-Oval-2"></ion-icon>\n\n            {{detail}}\n\n        </button>\n\n    </ion-list>\n\n    <ion-list class="margin-0" [hidden]="true" style="border-top: 1px solid #ccc;">\n\n        <ion-item class="font-16 font-w">\n\n            <ion-icon color="warn" item-start name="ios-alert-outline"></ion-icon>\n\n            <ion-label>{{warnContent}}</ion-label>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list class="margin-0" style="border-top: 1px solid #ccc;">\n\n        <ion-item [hidden]="true">\n\n            <ion-icon item-start color="warn" name="ios-order_first" [hidden]="taskIconOne"></ion-icon>\n\n            <ion-icon item-start color="warn" name="ios-order_second" [hidden]="taskIconTwo"></ion-icon>\n\n            <ion-icon item-start color="warn" name="ios-order_third" [hidden]="taskIconThree"></ion-icon>\n\n            <div class="font-w font-16 fswn" [hidden]="taskContentFromFLG">\n\n                <div style="display: flex">{{firstW}}</div>\n\n                <div style="display: flex;flex-direction: column;">\n\n                    <div class="fsopnm" *ngFor="let item of taskFromList">{{item.opNm}}</div>\n\n                </div>\n\n            </div>\n\n            <div class="font-w font-16 fswn" [hidden]="taskContentToFLG">\n\n                <div style="display: flex">{{secondW}}</div>\n\n                <div style="display: flex;flex-direction: column;">\n\n                    <div class="fsopnm" *ngFor="let item of taskToList">{{item.opNm}}</div>\n\n                </div>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\control\control.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_control_service__["a" /* ApiControlServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_manual_service__["a" /* ApiManualServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ControlPage);
    return ControlPage;
}());

//# sourceMappingURL=control.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandovercPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_s3_common_s3_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_handover_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var HandovercPage = /** @class */ (function () {
    function HandovercPage(navCtrl, navParams, alertCtrl, camera, keyboard, s3Util, loadingCtrl, appCtrl, handoverProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.keyboard = keyboard;
        this.s3Util = s3Util;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.handoverProvider = handoverProvider;
        this.events = events;
        this.isShowWorkerFlg = true;
        this.showWorkerList = [];
        this.selectWorker = '';
        this.workerId = '';
    }
    HandovercPage.prototype.ionViewDidLoad = function () {
        this.getData = this.navParams.data;
        this.frameNm = '引継作成';
        this.minDateTime = new Date().toISOString();
        this.maxDateTime = '2050-01-01';
        this.taskId = this.getData['taskId'];
        this.handoverOpId = this.getData['opId'];
        this.handoverOp = this.getData['opNm'];
        this.handoverTimeSoltId = this.getData['currentTimeSlotId'];
        this.handoverTimeSolt = this.getData['currentTimeSlotNm'];
        this.handoverPic = 'assets/imgs/noImage/NoImage.png';
        this.getWorker();
    };
    HandovercPage.prototype.ionViewWillEnter = function () {
        this.keyboard.onKeyboardShow().subscribe(function () {
            document.body.classList.add('keyboard-is-open');
            var pageTaskC = document.getElementById('ion-taskc');
            if (pageTaskC != undefined && pageTaskC != null) {
                var sContent = pageTaskC.getElementsByClassName('scroll-content');
                if (sContent.length > 0) {
                    if (sContent[0] != undefined && sContent[0] != null) {
                        sContent[0].setAttribute('style', 'padding-bottom: 0px;margin-top: 50px;');
                    }
                }
            }
        });
        this.keyboard.onKeyboardHide().subscribe(function () {
            document.body.classList.remove('keyboard-is-open');
            var pageMainPad = document.getElementById('mainPad');
            if (pageMainPad != undefined && pageMainPad != null) {
                var sContent = pageMainPad.getElementsByClassName('scroll-content');
                if (sContent.length > 0) {
                    if (sContent[0] != undefined && sContent[0] != null) {
                        sContent[0].setAttribute('style', 'padding-bottom: 0px;margin-top: 100px;');
                    }
                }
            }
        });
    };
    HandovercPage.prototype.isShowWorker = function () {
        if (this.isShowWorkerFlg) {
            this.isShowWorkerFlg = false;
        }
        else {
            this.isShowWorkerFlg = true;
        }
    };
    HandovercPage.prototype.selectedName = function (id, name) {
        this.selectWorker = name;
        this.workerId = id;
    };
    HandovercPage.prototype.doNoCameraAlert = function () {
        var alert = this.alertCtrl.create({
            title: '警告',
            subTitle: 'このデバイスにはカメラがありません。',
            buttons: ['OK']
        });
        alert.present(alert);
    };
    HandovercPage.prototype.takePicture = function () {
        var _this = this;
        if (navigator.camera === undefined) {
            // カメラがない
            this.doNoCameraAlert();
        }
        else {
            this.camera.getPicture({
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: this.camera.EncodingType.PNG,
                targetWidth: 600,
                targetHeight: 600,
                saveToPhotoAlbum: false // 写真撮影後に端末に画像を保存するかどうか
            }).then(function (imageData) {
                // base64Imageの更新
                _this.base64Image = imageData;
                _this.handoverPic = 'data:image/png;base64,' + imageData;
            }, function (error) {
                console.log("ERROR -> " + JSON.stringify(error));
            });
        }
    };
    HandovercPage.prototype.uploads3 = function () {
        console.log('start uploads3');
        var mythis = this;
        var callback = function (data, mythis) {
            //スピナー削除
            if (mythis.loading != null) {
                mythis.loading.dismiss();
            }
        };
        //S3upload
        this.s3Util.uploadToS3(callback, mythis);
    };
    HandovercPage.prototype.creHandover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert_1, alert_2, alert_3, loading, selectedDate, res, result, msgInfo, alert_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.selectWorker == '') {
                            alert_1 = this.alertCtrl.create({
                                title: '入力者はご入力してください。',
                                buttons: ['OK']
                            });
                            alert_1.present();
                            return [2 /*return*/];
                        }
                        if (this.handoverDate == undefined || this.handoverDate == '') {
                            alert_2 = this.alertCtrl.create({
                                title: '引継日時はご入力してください。',
                                buttons: ['OK']
                            });
                            alert_2.present();
                            return [2 /*return*/];
                        }
                        if (this.base64Image != undefined) {
                            if (this.taskId != undefined) {
                                this.imgPath = 'img/' + this.getData['aplUserId'] + '/'
                                    + this.getData['storeNo'] + '/task/' + this.taskId + __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__["a" /* UtilityService */].fmtSysDateTime(new Date()) + '.png';
                            }
                            else if (this.handoverTimeSoltId != undefined) {
                                this.imgPath = 'img/' + this.getData['aplUserId'] + '/'
                                    + this.getData['storeNo'] + '/timeslot/' + this.handoverTimeSoltId + __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_UtilityService__["a" /* UtilityService */].fmtSysDateTime(new Date()) + '.png';
                            }
                        }
                        if ((this.handoverContent == undefined || this.handoverContent == '')
                            && (this.imgPath == undefined || this.imgPath == '')) {
                            alert_3 = this.alertCtrl.create({
                                title: '引継内容や画像はいずれかご入力してください。',
                                buttons: ['OK']
                            });
                            alert_3.present();
                            return [2 /*return*/];
                        }
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        selectedDate = this.navParams.data.selectedDate;
                        res = undefined;
                        if (!(this.taskId != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handoverProvider.creHandoverByTaskId(this.taskId, this.workerId, this.handoverContent, this.imgPath, this.handoverDate, selectedDate)];
                    case 1:
                        res = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.handoverTimeSoltId != undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.handoverProvider.creHandoverByTimesoltId(this.handoverTimeSoltId, this.workerId, this.handoverContent, this.imgPath, this.handoverDate, selectedDate)];
                    case 3:
                        res = _a.sent();
                        _a.label = 4;
                    case 4:
                        loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                if (this.base64Image != undefined) {
                                    this.uploads3();
                                }
                                if (this.taskId != undefined) {
                                    if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                                        //スゲジュールのタスクの引継ぎ
                                        this.events.publish('res:created', { "TaskHasHandover": 1 });
                                    }
                                    else {
                                        //カンバンのタスクの引継ぎ
                                        this.events.publish('res:creat', { "TaskHasHandover": 1 });
                                    }
                                }
                                else {
                                    if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                                        //スゲジュールのシフトの引継ぎ
                                        this.events.publish('res:created', { "hasHandover": true });
                                    }
                                    else {
                                        //カンバンのシフトの引継ぎ
                                        this.events.publish('res:creat', { "hasHandover": true });
                                    }
                                }
                                this.appCtrl.getRootNav().pop(this.getData);
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_4 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_4.present();
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HandovercPage.prototype.getWorker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, result, msgInfo, alert_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handoverProvider.getWorker(this.getData['storeNo'])];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.showWorkerList = result['workerList'];
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_5 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_5.present();
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_7__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //前画面へ遷移する
    HandovercPage.prototype.goBackPop = function () {
        this.navParams.data['hasHandover'] = 5;
        this.navCtrl.pop();
    };
    HandovercPage.prototype.changeDate = function (sdate) {
        this.handoverDate = sdate.substr(0, 4)
            + sdate.substr(5, 2)
            + sdate.substr(8, 2)
            + sdate.substr(11, 2)
            + sdate.substr(14, 2);
    };
    HandovercPage.prototype.clearHandoverDate = function () {
        this.handoverDate = '';
    };
    HandovercPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-handoverc',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\handoverc\handoverc.html"*/'<ion-header>\n\n    <ion-item no-lines color="warn" style="height:50px;">\n\n        <ion-label item-start>\n\n            <ion-icon name="md-arrow-dropleft" color="light" class="font-30 font-w" (click)="goBackPop()"></ion-icon>\n\n        </ion-label>\n\n        <ion-label item-content></ion-label>\n\n        <ion-label item-start class="text-center font-18 bold-white" icon-right>\n\n            {{frameNm}}\n\n            <ion-icon name="alert-outline" class="font-20 font-w" hidden></ion-icon>\n\n        </ion-label>\n\n    </ion-item>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="width-100 con-left" style="height:90%;margin-bottom:1%;overflow:scroll">\n\n        <div class="width-50 font-16 font-w">\n\n            <div class="width-95 border-top">\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">入力者</div>\n\n                    <div class="pad-5 border-right border-bottom" style="width:55%;padding-right:1%;display:flex;align-items:center;justify-content:flex-end">\n\n                        {{selectWorker}}\n\n                    </div>\n\n                    <div class="pad-10 border-right border-bottom con-on-off {{isShowWorkerFlg?\'wb-color\':\'gw-color\'}}" style="width:5%" (click)="isShowWorker()">\n\n                        <ion-icon name="md-arrow-dropright"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">引継日時</div>\n\n                    <ion-datetime class="contain pad-10 border-bottom text-right" style="width:55%" displayFormat="YYYY/MM/DD HH:mm" text-right\n\n                        min="{{minDateTime}}" max="{{maxDateTime}}" [(ngModel)]="handoverDate" (ngModelChange)="changeDate(handoverDate)"\n\n                        doneText="OK" cancelText="Cancel"></ion-datetime>\n\n                    <div class="pad-10 border-right border-bottom con-on-off" style="width:5%" (click)="clearHandoverDate()">\n\n                        <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left" *ngIf="handoverOpId != null">\n\n                    <div class="width-40 pad-10 con-center color">引継先業務</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{handoverOp}}</div>\n\n                </div>\n\n                <div class="con-left" *ngIf="handoverTimeSolt != null">\n\n                    <div class="width-40 pad-10 con-center color">引継先時間帯</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{handoverTimeSolt}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">引継内容</div>\n\n                    <textarea type="text" maxlength="434" class="width-60 pad-10 border-0 border-right border-bottom text-left" style="height:300px;"\n\n                        name="handoverContent" [(ngModel)]="handoverContent"></textarea>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">\n\n                        <div style="display:flex;">画像</div>\n\n                        <div>\n\n                            <ion-icon name="md-camera" color="warn" style="font-size:40px;" (click)="takePicture()"></ion-icon>\n\n                        </div>\n\n                    </div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-left" style="height:300px;">\n\n                        <img src="{{handoverPic}}" width="100%" height="100%" />\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="width-50 font-16 font-w border-left">\n\n            <div class="width-100 height-100" style="overflow: scroll">\n\n                <div [hidden]="isShowWorkerFlg">\n\n                    <div *ngFor="let item of showWorkerList; let i= index" (click)="selectedName(item.workerId,item.workerNm)">\n\n                        <div class="width-100 pad-10 border-right border-top border-bottom text-right">\n\n                            {{item.workerNm}}\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-item no-lines style="padding-left:5px;">\n\n        <ion-label item-start></ion-label>\n\n        <button ion-button round item-start color="warn" style="height:40px;width:200px;" class="bold-white" (click)="creHandover()">\n\n            <ion-label class="font-16 font-w">登録</ion-label>\n\n        </button>\n\n        <ion-label item-end></ion-label>\n\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\handoverc\handoverc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_3__providers_s3_common_s3_service__["a" /* S3Util */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_handover_service__["a" /* ApiHandoverServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */]])
    ], HandovercPage);
    return HandovercPage;
}());

//# sourceMappingURL=handoverc.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskrdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasku_tasku__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_schedule_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_taskrd_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_handover_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handoverrd_handoverrd__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utility_service_StrUti__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utility_service_ObjUti__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__schedule_schedule__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__board_board__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_utility_service_UtilityService__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














/**
 * Generated class for the TaskrdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskrdPage = /** @class */ (function () {
    function TaskrdPage(navCtrl, navParams, appCtrl, alertCtrl, loadingCtrl, service, scheduleProvider, handoverProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.scheduleProvider = scheduleProvider;
        this.handoverProvider = handoverProvider;
        this.events = events;
        this.checkList = [];
        //from schedulePage
        this.getData = {};
    }
    TaskrdPage_1 = TaskrdPage;
    TaskrdPage.prototype.ionViewWillEnter = function () {
        this.getData = this.navParams.data;
        var storeNo = this.getData['storeNo'];
        var storeNm = this.getData['storeNm'];
        var viewKbn = this.getData['viewKbn'];
        var aplUserId = this.getData['aplUserId'];
        var selectedText = this.getData['selectedText'];
    };
    TaskrdPage.prototype.ionViewDidEnter = function () {
        this.getTaskID = this.getData['taskId'];
        this.storeNm = '業務状況';
        this.getTaskDetail();
        this.selHandover();
    };
    TaskrdPage.prototype.getTaskDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var planSD, planST, planED, planET, actualSD, actualST, actualED, actualET;
            return __generator(this, function (_a) {
                this.taskContent = this.getData;
                if (this.taskContent.planSTime != null && this.taskContent.planSTime != '') {
                    this.taskContent['planSDay'] = this.taskContent.planSTime.substr(0, 8);
                    this.taskContent['planSHour'] = this.taskContent.planSTime.substr(8, 4);
                }
                if (this.taskContent.planETime != null && this.taskContent.planETime != '') {
                    this.taskContent['planEDay'] = this.taskContent.planETime.substr(0, 8);
                    this.taskContent['planEHour'] = this.taskContent.planETime.substr(8, 4);
                }
                if (this.taskContent.actualSTime != null && this.taskContent.actualSTime != '') {
                    this.taskContent['actualSDay'] = this.taskContent.actualSTime.substr(0, 8);
                    this.taskContent['actualSHour'] = this.taskContent.actualSTime.substr(8, 4);
                }
                if (this.taskContent.actualETime != null && this.taskContent.actualETime != '') {
                    this.taskContent['actualEDay'] = this.taskContent.actualETime.substr(0, 8);
                    this.taskContent['actualEHour'] = this.taskContent.actualETime.substr(8, 4);
                }
                this.opNm = this.taskContent.opNm;
                this.workerId = this.taskContent.workerId;
                this.workerNm = this.taskContent.workerNm;
                this.opCircle = this.taskContent.opCircle;
                this.hasHandover = this.taskContent.hasHandover;
                if (this.taskContent.planSDay != null
                    && this.taskContent.planSDay != '') {
                    planSD = this.taskContent.planSDay.substr(0, 4)
                        + '/'
                        + this.taskContent.planSDay.substr(4, 2)
                        + '/'
                        + this.taskContent.planSDay.substr(6, 2);
                    this.planSDay = planSD;
                }
                else {
                    this.planSDay = '';
                }
                if (this.taskContent.planSHour != null
                    && this.taskContent.planSHour != '') {
                    planST = this.taskContent.planSHour.substr(0, 2)
                        + ":"
                        + this.taskContent.planSHour.substr(2, 2);
                    this.planSHour = planST;
                }
                else {
                    this.planSHour = '';
                }
                if (this.taskContent.planEDay != null
                    && this.taskContent.planEDay != '') {
                    planED = this.taskContent.planEDay.substr(0, 4)
                        + '/'
                        + this.taskContent.planEDay.substr(4, 2)
                        + '/'
                        + this.taskContent.planEDay.substr(6, 2);
                    this.planEDay = planED;
                }
                else {
                    this.planEDay = '';
                }
                if (this.taskContent.planEHour != null
                    && this.taskContent.planEHour != '') {
                    planET = this.taskContent.planEHour.substr(0, 2)
                        + ":"
                        + this.taskContent.planEHour.substr(2, 2);
                    this.planEHour = planET;
                }
                else {
                    this.planEHour = '';
                }
                if (this.taskContent.actualSDay != null
                    && this.taskContent.actualSDay != '') {
                    actualSD = this.taskContent.actualSDay.substr(0, 4)
                        + '/'
                        + this.taskContent.actualSDay.substr(4, 2)
                        + '/'
                        + this.taskContent.actualSDay.substr(6, 2);
                    this.actualSDay = actualSD;
                }
                else {
                    this.actualSDay = '';
                }
                if (this.taskContent.actualSHour != null
                    && this.taskContent.actualSHour != '') {
                    actualST = this.taskContent.actualSHour.substr(0, 2)
                        + ":"
                        + this.taskContent.actualSHour.substr(2, 2);
                    this.actualSHour = actualST;
                }
                else {
                    this.actualSHour = '';
                }
                if (this.taskContent.actualEDay != null
                    && this.taskContent.actualEDay != '') {
                    actualED = this.taskContent.actualEDay.substr(0, 4)
                        + '/'
                        + this.taskContent.actualEDay.substr(4, 2)
                        + '/'
                        + this.taskContent.actualEDay.substr(6, 2);
                    this.actualEDay = actualED;
                }
                else {
                    this.actualEDay = '';
                }
                if (this.taskContent.actualEHour != null
                    && this.taskContent.actualEHour != '') {
                    actualET = this.taskContent.actualEHour.substr(0, 2)
                        + ":"
                        + this.taskContent.actualEHour.substr(2, 2);
                    this.actualEHour = actualET;
                }
                else {
                    this.actualEHour = '';
                }
                this.checkList = this.taskContent.chkList;
                if (this.taskContent.status == 'S') {
                    this.statusContent = '未着手';
                    this.editFlg = false;
                    this.actualStartFlg = true;
                    this.actualEndFlg = true;
                }
                else if (this.taskContent.status == 'I') {
                    this.statusContent = '進行中';
                    this.editFlg = true;
                    this.actualStartFlg = false;
                    this.actualEndFlg = true;
                }
                else if (this.taskContent.status == 'A') {
                    this.statusContent = '中止';
                    this.editFlg = true;
                    this.actualStartFlg = false;
                    this.actualEndFlg = false;
                }
                else {
                    this.statusContent = '完了';
                    this.editFlg = true;
                    this.actualStartFlg = false;
                    this.actualEndFlg = false;
                }
                if (this.taskContent.taskPoolKbn == '0') {
                    this.checkedON = true;
                    this.checkedOFF = false;
                }
                else if (this.taskContent.taskPoolKbn == '1') {
                    this.checkedON = false;
                    this.checkedOFF = true;
                }
                if (this.taskContent.taskPriorityKbn == '0') {
                    this.checkedLOW = true;
                    this.checkedHIGH = false;
                }
                else if (this.taskContent.taskPriorityKbn == '1') {
                    this.checkedLOW = false;
                    this.checkedHIGH = true;
                }
                return [2 /*return*/];
            });
        });
    };
    //削除ボータン押下
    TaskrdPage.prototype.deleteButton = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '当該タスクを削除してよろしいでしょうか？',
            buttons: [
                {
                    text: 'キャンセル ',
                    handler: function () {
                    }
                },
                {
                    text: '確認',
                    handler: function () {
                        _this.deleteTask();
                    }
                }
            ]
        });
        alert.present();
    };
    TaskrdPage.prototype.deleteTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, lockTaskInfo, lockTaskChklistInfo, lockChklist, lockHandover, opNm, handoverListTemp, lockRes, lockResult, lockMsgInfo, res, result, msgInfo, noAssign, taskIndex, categoryInfoList, categoryIndex, taskIndex, viewKbn, taskInforList, categoryId, taskId, alert_1, alert_2, alert_3, alert_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        opNm = this.getData['opNm'];
                        if (this.getData['opId'] != 0) {
                            opNm = null;
                        }
                        if (this.getData['planSTime'] == undefined) {
                            this.getData['planSTime'] = null;
                        }
                        if (this.getData['planETime'] == undefined) {
                            this.getData['planETime'] = null;
                        }
                        lockTaskInfo = {
                            'taskId': this.getData['taskId'],
                            'opId': this.getData['opId'],
                            'opNm': opNm,
                            'workerId': this.getData['workerId'],
                            'categoryId': this.getData['cgId'],
                            'storeNo': this.getData['storeNo'],
                            'taskPoolKbn': this.getData['taskPoolKbn'],
                            'taskPriorityKbn': this.getData['taskPriorityKbn'],
                            'opCircle': this.getData['opCircle'],
                            'planSDayTime': this.getData['planSTime'],
                            'planEDayTime': this.getData['planETime'],
                            'actualSDayTime': this.getData['actualSTime'],
                            'actualEDayTime': this.getData['actualETime'],
                            'status': this.getData['status'],
                            'alertKbn': this.getData['alertKbn'],
                            'taskDate': this.getData['taskDate'],
                        };
                        if (this.getData['chkList'].length > 0) {
                            lockTaskChklistInfo = {
                                'taskChklistId': this.getData['chkList'][0].taskChklistId,
                                'taskId': this.getData['taskId']
                            };
                        }
                        else {
                            lockTaskChklistInfo = null;
                        }
                        lockChklist = this.getData['chkList'];
                        handoverListTemp = new Array();
                        if (this.handoverList.length > 0) {
                            this.handoverList.forEach(function (handoverListtObj) {
                                var param = {
                                    'handoverId': handoverListtObj['handoverId'],
                                    'handoverContents': handoverListtObj['handoverContents'],
                                    'handoverDate': handoverListtObj['handoverDate'],
                                    'handoverWorkerId': handoverListtObj['workerId'],
                                    'imgPath': handoverListtObj['imgPath'],
                                    'timeSlotId': handoverListtObj['timeSlotId'],
                                    'taskId': _this.getData['taskId'],
                                    'date': handoverListtObj['date']
                                };
                                handoverListTemp.push(param);
                            });
                        }
                        else {
                            handoverListTemp = [];
                        }
                        lockHandover = handoverListTemp;
                        return [4 /*yield*/, this.service.lockTask(this.getTaskID, lockTaskInfo, lockTaskChklistInfo, lockChklist, lockHandover)];
                    case 1:
                        lockRes = _a.sent();
                        if (!(lockRes == undefined)) return [3 /*break*/, 2];
                        __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                        loading.dismiss();
                        return [2 /*return*/];
                    case 2:
                        lockResult = lockRes.json();
                        lockMsgInfo = lockResult['msgInfo'];
                        if (!(lockMsgInfo.statusCd == 'SB200')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.service.deleteTask(this.getTaskID)];
                    case 3:
                        res = _a.sent();
                        if (res == undefined) {
                            loading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            //未割当の場合
                            if (this.getData['noAssingFlg'] == true) {
                                noAssign = this.getData['noAssign'];
                                taskIndex = this.getData['taskIndex'];
                                noAssign.taskInfoList.splice(taskIndex, 1);
                                loading.dismiss();
                                this.goBackPop();
                                return [2 /*return*/];
                            }
                            if (msgInfo.statusCd == 'SB200') {
                                categoryInfoList = this.getData['categoryInfoList'];
                                categoryIndex = this.getData['categoryIndex'];
                                taskIndex = this.getData['taskIndex'];
                                viewKbn = this.getData['viewKbn'];
                                taskInforList = void 0;
                                categoryId = void 0;
                                taskId = void 0;
                                if (__WEBPACK_IMPORTED_MODULE_9__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(viewKbn) || viewKbn == '0' || viewKbn == '1') {
                                    this.delFromCategoryList();
                                }
                                else {
                                    if (this.getData['status'] == 'S') {
                                        taskInforList = categoryInfoList[categoryIndex].sTaskInforList[0].taskInfoList;
                                    }
                                    else if (this.getData['status'] == 'I') {
                                        taskInforList = categoryInfoList[categoryIndex].iTaskInforList[0].taskInfoList;
                                    }
                                    else if (this.getData['status'] == 'A') {
                                        taskInforList = categoryInfoList[categoryIndex].aTaskInforList[0].taskInfoList;
                                    }
                                    else if (this.getData['status'] == 'E') {
                                        taskInforList = categoryInfoList[categoryIndex].eTaskInforList[0].taskInfoList;
                                    }
                                    categoryId = categoryInfoList[categoryIndex]['categoryId'];
                                    taskId = taskInforList[taskIndex]['taskId'];
                                    this.delOtherShiftToKanban(categoryId, taskId);
                                }
                                loading.dismiss();
                                this.goBackPop();
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                loading.dismiss();
                                alert_1 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_1.present();
                                return [2 /*return*/];
                            }
                            else if (msgInfo.statusCd == 'SB400') {
                                alert_2 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.selAlert();
                                            }
                                        },
                                    ],
                                    enableBackdropDismiss: false
                                });
                                alert_2.present();
                                return [2 /*return*/];
                            }
                            else {
                                loading.dismiss();
                                __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (lockMsgInfo.statusCd == 'SB900') {
                            alert_3 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: lockMsgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            loading.dismiss();
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                        }
                                    },
                                ]
                            });
                            alert_3.present();
                            return [2 /*return*/];
                        }
                        else if (lockMsgInfo.statusCd == 'SB400') {
                            loading.dismiss();
                            alert_4 = this.alertCtrl.create({
                                title: 'エラー',
                                subTitle: lockMsgInfo.msg,
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.selAlert();
                                        }
                                    },
                                ],
                                enableBackdropDismiss: false
                            });
                            alert_4.present();
                            return [2 /*return*/];
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, lockMsgInfo.msg);
                            loading.dismiss();
                            return [2 /*return*/];
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //task編集画面
    TaskrdPage.prototype.goTaskUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cgId, opId, taskId, storeNo, categoryId, timeSlotId, viewKbn, aplUserId, selectedText, selectedDate;
            return __generator(this, function (_a) {
                TaskrdPage_1.goTaskUpdateLoading = this.loadingCtrl.create({
                    content: ''
                });
                TaskrdPage_1.goTaskUpdateLoading.present();
                cgId = this.getData['cgId'];
                opId = this.getData['opId'];
                taskId = this.getData['taskId'];
                storeNo = this.getData['storeNo'];
                categoryId = this.getData['categoryId'];
                timeSlotId = this.getData['currentTimeSlotId'];
                viewKbn = this.getData['viewKbn'];
                aplUserId = this.getData['aplUserId'];
                selectedText = this.getData['selectedText'];
                selectedDate = this.getData['selectedDate'];
                this.params = {
                    storeNo: this.navParams.data.storeNo,
                    storeNm: this.navParams.data.storeNm,
                    opId: opId,
                    taskId: taskId,
                    categoryId: categoryId,
                    currentTimeSlotId: timeSlotId,
                    viewKbn: viewKbn,
                    aplUserId: aplUserId,
                    selectedText: selectedText,
                    workerId: this.workerId,
                    selectedDate: this.navParams.data.selectedDate,
                    cgId: cgId,
                    obj: this.getData
                };
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tasku_tasku__["a" /* TaskuPage */], this.params);
                return [2 /*return*/];
            });
        });
    };
    TaskrdPage.prototype.goBackPop = function () {
        this.navCtrl.pop();
    };
    TaskrdPage.prototype.goHandoverrd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__handoverrd_handoverrd__["a" /* HandoverrdPage */], {
            taskId: this.getData['taskId'],
            storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'],
            currentTimeSlotId: this.getData['currentTimeSlotId'],
            aplUserId: this.getData['aplUserId'],
            viewKbn: this.getData['viewKbn'],
            selectedText: this.getData['selectedText'],
            selectedDate: this.getData['selectedDate']
        });
    };
    TaskrdPage.prototype.selHandover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, res, selectedDate, result, msgInfo, alert_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        res = undefined;
                        selectedDate = this.getData['selectedDate'];
                        if (!(this.getData['taskId'] != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handoverProvider.selHandoverByTaskId(this.getData['taskId'])];
                    case 1:
                        res = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.getData['currentTimeSlotId'] != undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.handoverProvider.selHandoverByTimesoltId(this.getData['currentTimeSlotId'], selectedDate)];
                    case 3:
                        res = _a.sent();
                        _a.label = 4;
                    case 4:
                        loading.dismiss();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.handoverList = result['handoverList'];
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_5 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_5.present();
                                return [2 /*return*/];
                            }
                            else if (msgInfo.statusCd == 'SB300') {
                                this.handoverList = [];
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_6__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskrdPage.prototype.delFromCategoryList = function () {
        var categoryInfoLists = this.getData['categoryInfoLists'];
        var categoryIndex = this.getData['categoryIndex'];
        var taskIndex = this.getData['taskIndex'];
        var timeSlot = this.getData['timeSlot'];
        var categoryInfoList = this.getData['categoryInfoList'];
        var hourList = categoryInfoList[categoryIndex]['halfHourList'];
        var slideList = this.getData['slideList'];
        var timeSlotInfoList = this.getData['timeSlotInfoList'];
        var slotSTime = timeSlotInfoList[0].startTime;
        var slotETime = timeSlotInfoList[timeSlotInfoList.length - 1].endTime;
        var taskInfoList = [];
        for (var i = 0; i < hourList.length; i++) {
            var tmp = hourList[i];
            if (timeSlot == tmp['halfHour']) {
                taskInfoList = tmp['taskInfoList'];
                break;
            }
        }
        taskInfoList.splice(taskIndex, 1);
        __WEBPACK_IMPORTED_MODULE_10__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(categoryInfoList, slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), 35);
    };
    //アラートが発生する時、再検索処理
    TaskrdPage.prototype.selAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, loading, selTime, res, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        selTime = __WEBPACK_IMPORTED_MODULE_13__providers_utility_service_UtilityService__["a" /* UtilityService */].formatTime(date.getHours(), date.getMinutes());
                        return [4 /*yield*/, this.scheduleProvider.getScheduleInit(this.getData['storeNo'], this.getData['selectedDate'], selTime, this.getData['viewKbn'])];
                    case 1:
                        res = _a.sent();
                        params = {
                            res: res, selectedText: this.getData['selectedText'], storeNo: this.getData['storeNo'],
                            storeNm: this.getData['storeNm'], viewKbn: this.getData['viewKbn'], aplUserId: this.getData['aplUserId'],
                            selectedDate: this.getData['selectedDate'], currentTimeSlotId: this.getData['currentTimeSlotId'],
                            dragFlg: true
                        };
                        loading.dismiss().then(function () {
                            if (_this.getData['viewKbn'] == '0' || _this.getData['viewKbn'] == '1') {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__schedule_schedule__["a" /* SchedulePage */], params);
                            }
                            else {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__board_board__["a" /* BoardPage */], params);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskrdPage.prototype.delOtherShiftToKanban = function (categoryId, taskId) {
        var _this = this;
        var categoryInfoLists = this.getData['categoryInfoLists'];
        var taskInforList = [];
        categoryInfoLists.forEach(function (element) {
            element.forEach(function (categoryInfo) {
                if (categoryId == categoryInfo['categoryId']) {
                    var taskInforLists = [];
                    if (_this.getData['status'] == 'S') {
                        taskInforLists = categoryInfo.sTaskInforList;
                    }
                    else if (_this.getData['status'] == 'I') {
                        taskInforLists = categoryInfo.iTaskInforList;
                    }
                    else if (_this.getData['status'] == 'A') {
                        taskInforLists = categoryInfo.aTaskInforList;
                    }
                    else if (_this.getData['status'] == 'E') {
                        taskInforLists = categoryInfo.eTaskInforList;
                    }
                    if (taskInforLists.length < 1) {
                        return;
                    }
                    taskInforList = taskInforLists[0].taskInfoList;
                    for (var i = 0; i < taskInforList.length; i++) {
                        if (taskInforList[i]['taskId'] == taskId) {
                            taskInforList.splice(i, 1);
                            break;
                        }
                    }
                    return;
                }
            });
        });
    };
    TaskrdPage = TaskrdPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-taskrd',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\taskrd\taskrd.html"*/'<ion-header>\n\n    <ion-item no-lines color="warn" style="height:50px;">\n\n        <ion-label item-start>\n\n            <ion-icon name="md-arrow-dropleft" color="light" class="font-30 font-w" (click)="goBackPop()"></ion-icon>\n\n        </ion-label>\n\n        <ion-label item-content></ion-label>\n\n        <ion-label item-start class="text-center font-18 bold-white" icon-right>\n\n            {{storeNm}}\n\n            <ion-icon name="alert-outline" class="font-20 font-w" hidden></ion-icon>\n\n        </ion-label>\n\n    </ion-item>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="width-100 con-left" style="height:90%;margin-bottom:1%;overflow:scroll;">\n\n        <div class="width-50 font-16 font-w">\n\n            <div class="width-95 border-top">\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">業務名</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{opNm}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">業務ステータス</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{statusContent}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">開始日</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{planSDay}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">終了日</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{planEDay}}</div>\n\n                </div>\n\n                <div class="con-left" [hidden]="actualStartFlg">\n\n                    <div class="width-40 pad-10 con-center color">実開始日</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{actualSDay}}</div>\n\n                </div>\n\n                <div class="con-left" [hidden]="actualEndFlg">\n\n                    <div class="width-40 pad-10 con-center color">実終了日</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{actualEDay}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">業務サイクル</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{opCircle}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">担当者</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{workerNm}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">開始時間</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{planSHour}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">終了時間</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{planEHour}}</div>\n\n                </div>\n\n                <div class="con-left" [hidden]="actualStartFlg">\n\n                    <div class="width-40 pad-10 con-center color">実開始時間</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{actualSHour}}</div>\n\n                </div>\n\n                <div class="con-left" [hidden]="actualEndFlg">\n\n                    <div class="width-40 pad-10 con-center color">実終了時間</div>\n\n                    <div class="width-60 pad-10 border-right border-bottom text-right">{{actualEHour}}</div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">繰返しタスク</div>\n\n                    <div class="width-60 border-right border-bottom con-on-off">\n\n                        <div class="width-60 onOff-div">\n\n                            <div class="width-30 onOff-div">\n\n                                <div>ON</div>\n\n                                <ion-checkbox color="dark" [checked]="checkedON" disabled></ion-checkbox>\n\n                            </div>\n\n                            <div class="width-30 onOff-div">\n\n                                <div>OFF</div>\n\n                                <ion-checkbox color="dark" [checked]="checkedOFF" disabled></ion-checkbox>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">優先度</div>\n\n                    <div class="width-60 border-right border-bottom con-on-off">\n\n                        <div class="width-60 onOff-div">\n\n                            <div class="width-30 onOff-div">\n\n                                <div>通常</div>\n\n                                <ion-checkbox color="dark" [checked]="checkedLOW" disabled></ion-checkbox>\n\n                            </div>\n\n                            <div class="width-30 onOff-div">\n\n                                <div>高</div>\n\n                                <ion-checkbox color="dark" [checked]="checkedHIGH" disabled></ion-checkbox>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="width-50 font-16 font-w border-left">\n\n            <div class="width-95" style="margin-left:5%;">\n\n                <div class="con-left border-top" *ngFor="let item of checkList; let i=index">\n\n                    <div class="width-40 pad-10 con-center" style="background-color: rgb(255, 179, 0);color:white;">\n\n                        チェック{{i+1}}\n\n                        <div class="con-right">\n\n                            <ion-icon name="{{item.chkStatus==1?\'md-checkmark\':item.chkStatus==2?\'md-close\':9}}" color="light" class="font-w"></ion-icon>\n\n                        </div>\n\n                    </div>\n\n                    <div class="con-checkList width-60 pad-10 border-right border-bottom">{{item.chkContents}}</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-item no-lines style="padding-left:5px;">\n\n        <ion-label item-start></ion-label>\n\n        <button ion-button round item-start color="warn" style="height:40px;width:260px;" class="bold-white" (click)="deleteButton()">\n\n            <ion-label class="font-16 font-w">削除</ion-label>\n\n        </button>\n\n        <button ion-button round item-start color="warn" style="height:40px;width:260px;" class="bold-white" (click)="goHandoverrd()"\n\n            [disabled]="!getData[\'hasHandover\']">\n\n            <ion-label class="font-16 font-w">引継確認</ion-label>\n\n        </button>\n\n        <button ion-button round item-start color="warn" style="height:40px;width:260px;" class="bold-white" [disabled]="editFlg"\n\n            (click)="goTaskUpdate()">\n\n            <ion-label class="font-16 font-w">編集</ion-label>\n\n        </button>\n\n        <ion-label item-end></ion-label>\n\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\taskrd\taskrd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_taskrd_service__["a" /* ApiTaskrdServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_schedule_service__["a" /* ApiScheduleServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_handover_service__["a" /* ApiHandoverServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], TaskrdPage);
    return TaskrdPage;
    var TaskrdPage_1;
}());

//# sourceMappingURL=taskrd.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_taskc_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utility_service_ObjUti__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_store_timer__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Generated class for the TaskcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskcPage = /** @class */ (function () {
    function TaskcPage(navCtrl, navParams, loadingCtrl, appCtrl, alertCtrl, taskcServiceProvider, keyboard, events, storeTimer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.taskcServiceProvider = taskcServiceProvider;
        this.keyboard = keyboard;
        this.events = events;
        this.storeTimer = storeTimer;
        this.selectedWorkerFlg = false;
        this.isShow = [];
        this.startDate = '';
        this.endDate = '';
        this.startTime = '';
        this.endTime = '';
        this.selectWorkerList = [];
        this.selectWorker = '';
        this.getData = {};
        this.shiftId = '';
        this.workerId = '';
        this.workerNm = '';
        this.planSTime = '';
        this.planETime = '';
        this.workerFlg = false;
        this.duration = 60;
        this.idxH = 0;
        this.idxM = 0;
    }
    TaskcPage.prototype.ionViewWillEnter = function () {
        this.frameNm = '業務登録';
        this.getData = this.navParams.data;
        this.minDateTime = '1950-01-01';
        this.maxDateTime = '2050-01-01';
        this.viewKbn = this.getData['viewKbn'];
        this.activeIndex = this.getData['activeIndex'];
        this.categoryInfoLists = this.getData['categoryInfoLists'];
        this.categoryInfoList = this.getData['categoryInfoList'];
        this.timeSlotInfoList = this.getData['timeSlotInfoList'];
        this.slideList = this.getData['slideList'];
        this.noAssign = this.getData['noAssign'];
        this.keyboard.onKeyboardShow().subscribe(function () {
            document.body.classList.add('keyboard-is-open');
            var pageTaskC = document.getElementById('ion-taskc');
            if (pageTaskC != undefined && pageTaskC != null) {
                var sContent = pageTaskC.getElementsByClassName('scroll-content');
                if (sContent.length > 0) {
                    if (sContent[0] != undefined && sContent[0] != null) {
                        sContent[0].setAttribute('style', 'padding-bottom: 0px;margin-top: 50px;');
                    }
                }
            }
        });
        this.keyboard.onKeyboardHide().subscribe(function () {
            document.body.classList.remove('keyboard-is-open');
            var pageMainPad = document.getElementById('mainPad');
            if (pageMainPad != undefined && pageMainPad != null) {
                var sContent = pageMainPad.getElementsByClassName('scroll-content');
                if (sContent.length > 0) {
                    if (sContent[0] != undefined && sContent[0] != null) {
                        sContent[0].setAttribute('style', 'padding-bottom: 0px;margin-top: 100px;');
                    }
                }
            }
        });
    };
    TaskcPage.prototype.ionViewDidEnter = function () {
        this.getCategoryAndShift();
    };
    TaskcPage.prototype.ionViewDidLoad = function () {
        this.isShowJobFlg = true;
        this.isShowTimeFlg = true;
        this.isShowWorkerFlg = true;
        this.ON = true;
        this.OFF = false;
        this.LOW = true;
        this.HIGH = false;
        this.taskPoolKbn = 0;
        this.taskPriorityKbn = 0;
        this.initTime();
    };
    TaskcPage.prototype.showOpList = function (index) {
        this.isShow[index] = !this.isShow[index];
    };
    TaskcPage.prototype.selectedWork = function (categroyId, cgNm, opId, work, duration) {
        this.categroyId = categroyId;
        this.categroyNm = cgNm;
        this.opId = opId;
        this.opNm = work;
        this.workerFlg = true;
        this.shiftId = '';
        this.startTime = '';
        this.planSTime = '';
        this.endTime = '';
        this.planETime = '';
        this.selectWorker = '';
        this.selectWorkerList = [];
        this.showWorkerList = [];
        this.duration = duration;
    };
    TaskcPage.prototype.opnmChange = function (nm) {
        var opName = nm.trim();
        if (opName != "" && opName != undefined && opName != null) {
            this.opId = 0;
            this.categroyId = 0;
            this.duration = 60;
            this.categroyNm = "非定常業務";
            this.opNm = opName;
            this.workerFlg = true;
        }
        else {
            this.opId = '000';
            this.workerFlg = false;
        }
    };
    TaskcPage.prototype.selectedDate = function (timeName) {
        for (var i = 0; i < this.showTimeList.length; i++) {
            if (this.showTimeList[i].shift_nm == timeName) {
                this.startTime = this.showTimeList[i].start_time.substr(0, 2)
                    + ':' + this.showTimeList[i].start_time.substr(2, 2);
                this.endTime = this.showTimeList[i].end_time.substr(0, 2)
                    + ':' + this.showTimeList[i].end_time.substr(2, 2);
                this.shiftId = this.showTimeList[i].shift_id;
                this.planSTime = this.showTimeList[i].start_time;
                this.planETime = this.showTimeList[i].end_time;
                break;
            }
        }
        this.selectWorker = '';
        this.selectWorkerList = [];
        this.showWorkerList = [];
    };
    TaskcPage.prototype.selectedName = function (index, id, name) {
        var addFlg = true;
        this.selectWorker = '';
        this.selectedWorkerFlg = false;
        if (this.selectWorkerList.length != 0) {
            for (var i = 0; i < this.selectWorkerList.length; i++) {
                if (this.selectWorkerList[i].Nm == name) {
                    this.selectWorkerList.splice(i, 1);
                    addFlg = false;
                    break;
                }
            }
            if (addFlg) {
                this.selectWorkerList.push({ 'id': this.showWorkerList[index].workerId, 'Nm': this.showWorkerList[index].workerNm });
            }
            for (var i = 0; i < this.selectWorkerList.length; i++) {
                this.selectWorker = this.selectWorkerList[i].Nm + '、' + this.selectWorker;
            }
            if (this.selectWorker.endsWith('、')) {
                this.selectWorker = this.selectWorker.substring(0, this.selectWorker.length - 1);
            }
        }
        else {
            this.selectWorkerList.push({ 'id': this.showWorkerList[index].workerId, 'Nm': this.showWorkerList[index].workerNm });
            this.selectWorker = this.selectWorkerList[0].Nm;
        }
    };
    TaskcPage.prototype.createTaskClick = function () {
        if (this.workerFlg) {
            if ((this.startDate == '' && this.endDate != '') || (this.endDate == '' && this.startDate != '')) {
                var alert_1 = this.alertCtrl.create({
                    title: '開始日と終了日は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert_1.present();
                return;
            }
            if ((this.startTime == '' && this.endTime != '') || (this.endTime == '' && this.startTime != '')) {
                var alert_2 = this.alertCtrl.create({
                    title: '開始時間と終了時間は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert_2.present();
                return;
            }
            if (this.startTime.substr(0, 2) == this.endTime.substr(0, 2) &&
                this.startTime.substr(3, 2) > this.endTime.substr(3, 2) ||
                this.startTime.substr(0, 2) > this.endTime.substr(0, 2)) {
                var alert_3 = this.alertCtrl.create({
                    title: '開始時間より大きい終了時間を入力ください。',
                    buttons: ['OK']
                });
                alert_3.present();
                return;
            }
            this.createTask();
        }
        else if (this.LOW == false && this.HIGH == false) {
            var alert_4 = this.alertCtrl.create({
                title: '優先度を入力してください。',
                buttons: ['OK']
            });
            alert_4.present();
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: '業務名を入力してください。',
                buttons: ['OK']
            });
            alert_5.present();
        }
    };
    TaskcPage.prototype.isShowWork = function () {
        if (this.isShowJobFlg) {
            this.isShowJobFlg = false;
            this.isShowTimeFlg = true;
            this.isShowWorkerFlg = true;
        }
        else {
            this.isShowJobFlg = true;
            this.isShowTimeFlg = true;
            this.isShowWorkerFlg = true;
        }
    };
    TaskcPage.prototype.isShowTime = function () {
        if (this.isShowTimeFlg) {
            this.isShowJobFlg = true;
            this.isShowTimeFlg = false;
            this.isShowWorkerFlg = true;
        }
        else {
            this.isShowJobFlg = true;
            this.isShowTimeFlg = true;
            this.isShowWorkerFlg = true;
        }
    };
    TaskcPage.prototype.isShowWorker = function () {
        if (this.workerFlg) {
            if ((this.startDate == '' && this.endDate != '') || (this.endDate == '' && this.startDate != '')) {
                var alert_6 = this.alertCtrl.create({
                    title: '開始日と終了日は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert_6.present();
                return;
            }
            if ((this.startTime == '' && this.endTime != '') || (this.endTime == '' && this.startTime != '')) {
                var alert_7 = this.alertCtrl.create({
                    title: '開始時間と終了時間は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert_7.present();
                return;
            }
            if (this.startTime.substr(0, 2) == this.endTime.substr(0, 2) &&
                this.startTime.substr(3, 2) > this.endTime.substr(3, 2) ||
                this.startTime.substr(0, 2) > this.endTime.substr(0, 2)) {
                var alert_8 = this.alertCtrl.create({
                    title: '開始時間より大きい終了時間を入力ください。',
                    buttons: ['OK']
                });
                alert_8.present();
                return;
            }
            if (this.isShowWorkerFlg) {
                this.isShowJobFlg = true;
                this.isShowTimeFlg = true;
                this.isShowWorkerFlg = false;
            }
            else {
                this.isShowJobFlg = true;
                this.isShowTimeFlg = true;
                this.isShowWorkerFlg = true;
            }
            if (this.workerFlg) {
                this.getWorker();
            }
        }
        else {
            var alert_9 = this.alertCtrl.create({
                title: '業務名を入力してください。',
                buttons: ['OK']
            });
            alert_9.present();
        }
    };
    TaskcPage.prototype.clearStartDate = function () {
        var _this = this;
        if (this.startDate) {
            this.isShowWorkerFlg = true;
            this.startDate = '';
            // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
            if (this.selectWorkerList && this.showWorkerList
                && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
                this.getWorkerList().then(function () {
                    var res = _this.isWorkerTime(_this.selectWorkerList, _this.showWorkerList);
                    if (res) {
                        _this.selectWorker = '';
                        _this.selectWorkerList = [];
                        _this.selectedWorkerFlg = true;
                    }
                });
            }
        }
    };
    TaskcPage.prototype.clearEndDate = function () {
        var _this = this;
        if (this.endDate) {
            this.isShowWorkerFlg = true;
            this.endDate = '';
            // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
            if (this.selectWorkerList && this.showWorkerList
                && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
                this.getWorkerList().then(function () {
                    var res = _this.isWorkerTime(_this.selectWorkerList, _this.showWorkerList);
                    if (res) {
                        _this.selectWorker = '';
                        _this.selectWorkerList = [];
                        _this.selectedWorkerFlg = true;
                    }
                });
            }
        }
    };
    TaskcPage.prototype.setSDate = function (startDate) {
        var _this = this;
        this.startDate = startDate;
        this.endDate = startDate;
        // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
        if (this.selectWorkerList && this.showWorkerList
            && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
            this.getWorkerList().then(function () {
                var res = _this.isWorkerTime(_this.selectWorkerList, _this.showWorkerList);
                if (res) {
                    _this.selectWorker = '';
                    _this.selectWorkerList = [];
                    _this.selectedWorkerFlg = true;
                }
            });
        }
    };
    TaskcPage.prototype.setEDate = function (endDate) {
        var _this = this;
        this.startDate = endDate;
        this.endDate = endDate;
        // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
        if (this.selectWorkerList && this.showWorkerList
            && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
            this.getWorkerList().then(function () {
                var res = _this.isWorkerTime(_this.selectWorkerList, _this.showWorkerList);
                if (res) {
                    _this.selectWorker = '';
                    _this.selectWorkerList = [];
                    _this.selectedWorkerFlg = true;
                }
            });
        }
    };
    TaskcPage.prototype.startTimeChange = function () {
        var _this = this;
        // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
        if (this.selectWorkerList && this.showWorkerList
            && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
            this.planSTime = this.startTime.substr(0, 2) + this.startTime.substr(3, 2);
            this.getWorkerList().then(function () {
                var res = _this.isWorkerTime(_this.selectWorkerList, _this.showWorkerList);
                if (res) {
                    _this.selectWorker = '';
                    _this.selectWorkerList = [];
                    _this.selectedWorkerFlg = true;
                }
            });
        }
        this.isShowWorkerFlg = true;
        this.showWorkerList = [];
        this.planSTime = this.startTime.substr(0, 2) + this.startTime.substr(3, 2);
    };
    TaskcPage.prototype.isWorkerTime = function (current, all) {
        var count = 0;
        var res = false;
        current.forEach(function (element) {
            for (var j = 0; j < all.length; j++) {
                if (element['id'] == all[j]['workerId']) {
                    count++;
                }
            }
        });
        if (count != current.length) {
            res = true;
        }
        return res;
    };
    TaskcPage.prototype.clearStartTime = function () {
        if (this.startTime != '') {
            this.isShowWorkerFlg = true;
            this.showWorkerList = [];
            this.startTime = '';
            this.planSTime = '';
        }
    };
    TaskcPage.prototype.endTimeChange = function () {
        var _this = this;
        // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
        if (this.selectWorkerList && this.showWorkerList
            && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
            this.planETime = this.endTime.substr(0, 2) + this.endTime.substr(3, 2);
            this.getWorkerList().then(function () {
                var res = _this.isWorkerTime(_this.selectWorkerList, _this.showWorkerList);
                if (res) {
                    _this.selectWorker = '';
                    _this.selectWorkerList = [];
                    _this.selectedWorkerFlg = true;
                }
            });
        }
        this.isShowWorkerFlg = true;
        this.planETime = this.endTime.substr(0, 2) + this.endTime.substr(3, 2);
    };
    TaskcPage.prototype.clearEndTime = function () {
        if (this.endTime != '') {
            this.isShowWorkerFlg = true;
            this.showWorkerList = [];
            this.endTime = '';
            this.planETime = '';
        }
    };
    TaskcPage.prototype.clearWorker = function () {
        this.selectWorker = '';
        this.selectWorkerList = [];
    };
    TaskcPage.prototype.changeON = function (Flg) {
        if (Flg) {
            this.ON = true;
            this.OFF = false;
            this.taskPoolKbn = 0;
        }
        else {
            this.ON = false;
            this.OFF = true;
            this.taskPoolKbn = 1;
        }
    };
    TaskcPage.prototype.changeOFF = function (Flg) {
        if (Flg) {
            this.ON = false;
            this.OFF = true;
            this.taskPoolKbn = 1;
        }
        else {
            this.ON = true;
            this.OFF = false;
            this.taskPoolKbn = 0;
        }
    };
    TaskcPage.prototype.changeLOW = function (Flg) {
        if (Flg) {
            this.LOW = true;
            this.HIGH = false;
            this.taskPriorityKbn = 0;
        }
        else {
            this.LOW = false;
            this.HIGH = true;
            this.taskPriorityKbn = 1;
        }
    };
    TaskcPage.prototype.changeHIGH = function (Flg) {
        if (Flg) {
            this.LOW = false;
            this.HIGH = true;
            this.taskPriorityKbn = 1;
        }
        else {
            this.LOW = true;
            this.HIGH = false;
            this.taskPriorityKbn = 0;
        }
    };
    TaskcPage.prototype.goBackPop = function () {
        this.navCtrl.pop();
    };
    TaskcPage.prototype.getCategoryAndShift = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, resCategory, result, msgInfo, i, alert_10, resShift, result, msgInfo, i, alert_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        return [4 /*yield*/, this.taskcServiceProvider.getCategory(this.getData['storeNo'])];
                    case 1:
                        resCategory = _a.sent();
                        if (resCategory == undefined) {
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            loading.dismiss();
                            return [2 /*return*/];
                        }
                        else {
                            result = resCategory.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.showWorkeList = result['categoryList'];
                                for (i = 0; i < this.showWorkeList.length; i++) {
                                    this.isShow.push(false);
                                }
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                loading.dismiss();
                                alert_10 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_10.present();
                                return [2 /*return*/];
                            }
                            else {
                                loading.dismiss();
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.taskcServiceProvider.getShift(this.getData['storeNo'])];
                    case 2:
                        resShift = _a.sent();
                        if (resShift == undefined) {
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            loading.dismiss();
                            return [2 /*return*/];
                        }
                        else {
                            result = resShift.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.showTimeList = result['shiftList'];
                                for (i = 0; i < this.showTimeList.length; i++) {
                                    if (this.showTimeList[i].start_time.substr(0, 2) > 12) {
                                        this.showTimeList[i]["start_timeF"] = this.showTimeList[i].start_time.substr(0, 2) - 12
                                            + ':' + this.showTimeList[i].start_time.substr(2, 2) + 'PM';
                                    }
                                    else {
                                        this.showTimeList[i]["start_timeF"] = this.showTimeList[i].start_time.substr(0, 2)
                                            + ':' + this.showTimeList[i].start_time.substr(2, 2) + 'AM';
                                    }
                                    if (this.showTimeList[i].end_time.substr(0, 2) > 12) {
                                        this.showTimeList[i]["end_timeF"] = this.showTimeList[i].end_time.substr(0, 2) - 12
                                            + ':' + this.showTimeList[i].end_time.substr(2, 2) + 'PM';
                                    }
                                    else {
                                        this.showTimeList[i]["end_timeF"] = this.showTimeList[i].end_time.substr(0, 2)
                                            + ':' + this.showTimeList[i].end_time.substr(2, 2) + 'AM';
                                    }
                                }
                                loading.dismiss();
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                loading.dismiss();
                                alert_11 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_11.present();
                                return [2 /*return*/];
                            }
                            else {
                                loading.dismiss();
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskcPage.prototype.getWorker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, selectedDate, res, result, msgInfo, alert_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        if (!this.startDate && !this.endDate) {
                            selectedDate = this.getData['selectedDate'];
                        }
                        else if (this.startDate) {
                            selectedDate = this.startDate.substr(0, 4) + this.startDate.substr(5, 2) + this.startDate.substr(8, 2);
                        }
                        else {
                            selectedDate = this.endDate.substr(0, 4) + this.endDate.substr(5, 2) + this.endDate.substr(8, 2);
                        }
                        return [4 /*yield*/, this.taskcServiceProvider.getWorkerTime(this.getData['storeNo'], this.categroyId, this.opId, selectedDate, this.planSTime, this.planETime)];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            loading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.selectedWorkerFlg = false;
                                this.showWorkerList = result['workerList'];
                                loading.dismiss();
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                alert_12 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_12.present();
                                loading.dismiss();
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                this.showWorkerList = [];
                                loading.dismiss();
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskcPage.prototype.getWorkerList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, selectedDate, res, result, msgInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        if (!this.startDate && !this.endDate) {
                            selectedDate = this.getData['selectedDate'];
                        }
                        else if (this.startDate) {
                            selectedDate = this.startDate.substr(0, 4) + this.startDate.substr(5, 2) + this.startDate.substr(8, 2);
                        }
                        else {
                            selectedDate = this.endDate.substr(0, 4) + this.endDate.substr(5, 2) + this.endDate.substr(8, 2);
                        }
                        return [4 /*yield*/, this.taskcServiceProvider.getWorkerTime(this.getData['storeNo'], this.categroyId, this.opId, selectedDate, this.planSTime, this.planETime)];
                    case 1:
                        res = _a.sent();
                        if (res == undefined) {
                            loading.dismiss();
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                this.selectedWorkerFlg = false;
                                this.showWorkerList = result['workerList'];
                                loading.dismiss();
                            }
                            else {
                                this.showWorkerList = [];
                                loading.dismiss();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskcPage.prototype.createTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, res, selectedDate, i, result, msgInfo, alert_13, taskId, pstime, petime, taskCObj, matchKey, matchValue, resultLast, msgInfoLast, alert_14, res_1, result, msgInfo, taskId, pstime, petime, taskCObj, matchKey, matchValue, alert_15, alert_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: ''
                        });
                        loading.present();
                        if (!this.startDate && !this.endDate) {
                            selectedDate = this.getData['selectedDate'];
                        }
                        else if (this.startDate) {
                            selectedDate = this.startDate.substr(0, 4) + this.startDate.substr(5, 2) + this.startDate.substr(8, 2);
                        }
                        else {
                            selectedDate = this.endDate.substr(0, 4) + this.endDate.substr(5, 2) + this.endDate.substr(8, 2);
                        }
                        if (!(this.selectWorkerList.length != 0)) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.selectWorkerList.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.taskcServiceProvider.createTask(this.opId, this.opNm, this.selectWorkerList[i].id, this.categroyId, this.taskPoolKbn, this.taskPriorityKbn, this.planSTime, this.planETime, this.getData['storeNo'], selectedDate)];
                    case 2:
                        res = _a.sent();
                        if (res == undefined) {
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            loading.dismiss();
                            return [2 /*return*/];
                        }
                        else {
                            result = res.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB900') {
                                loading.dismiss();
                                alert_13 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_13.present();
                                return [2 /*return*/];
                            }
                            else if (msgInfo.statusCd != 'SB200') {
                                loading.dismiss();
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                return [2 /*return*/];
                            }
                            else {
                                taskId = result['taskId'];
                                pstime = void 0, petime = void 0;
                                if (!(__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.planSTime) && __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.planETime))) {
                                    pstime = selectedDate + this.planSTime;
                                    petime = selectedDate + this.planETime;
                                }
                                taskCObj = {
                                    "cgId": this.categroyId,
                                    "cgNm": this.categroyNm,
                                    "opId": this.opId,
                                    "opNm": this.opNm,
                                    "storeNo": this.getData['storeNo'],
                                    "taskDate": selectedDate,
                                    "taskId": taskId,
                                    "taskPoolKbn": this.taskPoolKbn,
                                    "taskPriorityKbn": this.taskPriorityKbn,
                                    "planETime": petime,
                                    "planSTime": pstime,
                                    "workerId": this.selectWorkerList[i].id,
                                    "workerNm": this.selectWorkerList[i].Nm,
                                    "duration": this.duration,
                                    "hasHandover": 0,
                                    "opCircle": null,
                                    "status": "S",
                                    "precOpList": [],
                                    "subsOpList": [],
                                    "actualETime": null,
                                    "actualSTime": null,
                                    "alertKbn": 0
                                };
                                // 非同期処理
                                if (selectedDate == this.getData["selectedDate"]) {
                                    if (__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.planSTime) && __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.planETime)) {
                                        // 未割当タスク
                                        this.inUnList(taskCObj);
                                    }
                                    else {
                                        matchKey = void 0, matchValue = void 0;
                                        if (__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '2') {
                                            // 業務別
                                            matchKey = this.categroyId;
                                            matchValue = this.categroyNm;
                                        }
                                        else if (this.viewKbn == '1' || this.viewKbn == '3') {
                                            // 担当者別
                                            matchKey = this.selectWorkerList[i].id;
                                            matchValue = this.selectWorkerList[i].Nm;
                                        }
                                        this.inCgList(this.planSTime, this.planETime, matchKey, matchValue, taskCObj);
                                    }
                                }
                            }
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        resultLast = res.json();
                        msgInfoLast = resultLast['msgInfo'];
                        if (msgInfoLast.statusCd == 'SB200') {
                            loading.dismiss();
                            alert_14 = this.alertCtrl.create({
                                title: 'タスクは新規作成しました！'
                            });
                            alert_14.present();
                            setTimeout(function () {
                                alert_14.dismiss();
                                _this.goBackPop();
                            }, 850);
                        }
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.taskcServiceProvider.createTask(this.opId, this.opNm, this.workerId, this.categroyId, this.taskPoolKbn, this.taskPriorityKbn, this.planSTime, this.planETime, this.getData['storeNo'], selectedDate)];
                    case 6:
                        res_1 = _a.sent();
                        if (res_1 == undefined) {
                            __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, '通信エラーが発生しました');
                            loading.dismiss();
                            return [2 /*return*/];
                        }
                        else {
                            result = res_1.json();
                            msgInfo = result['msgInfo'];
                            if (msgInfo.statusCd == 'SB200') {
                                loading.dismiss();
                                taskId = result['taskId'];
                                pstime = void 0, petime = void 0;
                                if (!(__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.planSTime) && __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.planETime))) {
                                    pstime = selectedDate + this.planSTime;
                                    petime = selectedDate + this.planETime;
                                }
                                taskCObj = {
                                    "cgId": this.categroyId,
                                    "cgNm": this.categroyNm,
                                    "opId": this.opId,
                                    "opNm": this.opNm,
                                    "storeNo": this.getData['storeNo'],
                                    "taskDate": selectedDate,
                                    "taskId": taskId,
                                    "taskPoolKbn": this.taskPoolKbn,
                                    "taskPriorityKbn": this.taskPriorityKbn,
                                    "planETime": petime,
                                    "planSTime": pstime,
                                    "workerId": this.workerId,
                                    "workerNm": this.workerNm,
                                    "duration": this.duration,
                                    "hasHandover": 0,
                                    "opCircle": null,
                                    "status": "S",
                                    "precOpList": [],
                                    "subsOpList": [],
                                    "actualETime": null,
                                    "actualSTime": null,
                                    "alertKbn": 0
                                };
                                if (__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.workerId)
                                    || (__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.planSTime) && __WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.planETime))) {
                                    // 未割当タスク
                                    if (__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.workerId)) {
                                        taskCObj['workerId'] = null;
                                    }
                                    this.inUnList(taskCObj);
                                }
                                else {
                                    matchKey = void 0, matchValue = void 0;
                                    if (__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '2') {
                                        // 業務別
                                        matchKey = this.categroyId;
                                        matchValue = this.categroyNm;
                                    }
                                    else if (this.viewKbn == '1' || this.viewKbn == '3') {
                                        // 担当者別
                                        matchKey = this.workerId;
                                        matchValue = this.workerNm;
                                    }
                                    this.inCgList(this.planSTime, this.planETime, matchKey, matchValue, taskCObj);
                                }
                                alert_15 = this.alertCtrl.create({
                                    title: 'タスクは新規作成しました！'
                                });
                                alert_15.present();
                                setTimeout(function () {
                                    alert_15.dismiss();
                                    _this.goBackPop();
                                }, 850);
                            }
                            else if (msgInfo.statusCd == 'SB900') {
                                loading.dismiss();
                                alert_16 = this.alertCtrl.create({
                                    title: 'エラー',
                                    subTitle: msgInfo.msg,
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function (data) {
                                                _this.events.unsubscribe("res:created");
                                                _this.events.unsubscribe("res:creat");
                                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                                            }
                                        },
                                    ]
                                });
                                alert_16.present();
                                return [2 /*return*/];
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_4__providers_view_common_ViewCommon__["a" /* ViewCommon */].showAlert(this.alertCtrl, msgInfo.msg);
                                loading.dismiss();
                                return [2 /*return*/];
                            }
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TaskcPage.prototype.inUnList = function (taskCObj) {
        taskCObj["len"] = 2;
        taskCObj["taskStyle"] = '200%';
        taskCObj["textFlag"] = true;
        taskCObj["noAssingFlg"] = true;
        if (this.noAssign != undefined) {
            if (this.noAssign['taskInfoList'] != undefined) {
                this.noAssign['taskInfoList'].push(taskCObj);
            }
            else {
                this.noAssign['taskInfoList'] = new Array();
                this.noAssign['taskInfoList'].push(taskCObj);
            }
        }
        else {
            this.noAssign = new Object();
            this.noAssign['taskInfoList'] = new Array();
            this.noAssign['taskInfoList'].push(taskCObj);
        }
    };
    TaskcPage.prototype.inCgList = function (pstime, petime, matchKey, matchValue, taskCObj) {
        if (__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '1') {
            // スケジュール画面
            if (this.timeSlotInfoList.length <= 0) {
                return;
            }
            // 時間帯計算
            var slotSTime = this.timeSlotInfoList[0].startTime;
            var slotETime = this.timeSlotInfoList[this.timeSlotInfoList.length - 1].endTime;
            if ((pstime >= slotSTime && pstime < slotETime)
                || (petime > slotSTime && petime <= slotETime)
                || (pstime < slotSTime && petime > slotETime)) {
                __WEBPACK_IMPORTED_MODULE_6__providers_utility_service_ObjUti__["a" /* ObjUti */].addLen(taskCObj, slotSTime, slotETime);
                this.intoSchedule(0, matchKey, matchValue, taskCObj, slotSTime, slotETime);
            }
        }
        else if (this.viewKbn == '2' || this.viewKbn == '3') {
            // カンバン画面
            for (var index = 0; index < this.timeSlotInfoList.length; index++) {
                var slot = this.timeSlotInfoList[index];
                // 時間帯計算
                if ((pstime >= slot.startTime && pstime < slot.endTime)
                    || (petime > slot.startTime && petime <= slot.endTime)
                    || (pstime < slot.startTime && petime > slot.endTime)) {
                    this.intoKanban(index, matchKey, matchValue, taskCObj);
                }
            }
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
    };
    TaskcPage.prototype.getStartTime = function (slotSTime, slotETime) {
        var hh = this.planSTime.substr(0, 2);
        var mm = this.planSTime.substr(2, 2);
        // 表示時間帯の開始時刻と比較
        if (hh < slotSTime.substr(0, 2)) {
            hh = slotSTime.substr(0, 2);
            mm = slotSTime.substr(2, 2);
        }
        if (mm < "30") {
            return hh + "00";
        }
        else {
            return hh + "30";
        }
    };
    TaskcPage.prototype.intoSchedule = function (index, matchKey, matchValue, taskCObj, slotSTime, slotETime) {
        var cgList = this.categoryInfoList;
        var startHalf = this.getStartTime(slotSTime, slotETime);
        var insertFlg = false;
        cgList.forEach(function (cgInfo) {
            // 縦ヘッダーは存在
            if (matchKey == cgInfo.categoryId) {
                var inHalfFlg_1 = false;
                cgInfo.halfHourList.forEach(function (halfList) {
                    if (startHalf == halfList.halfHour) {
                        if (__WEBPACK_IMPORTED_MODULE_6__providers_utility_service_ObjUti__["a" /* ObjUti */].isNull(halfList.taskInfoList)) {
                            halfList.taskInfoList = new Array();
                            halfList.taskInfoList.push(taskCObj);
                        }
                        else {
                            halfList.taskInfoList.push(taskCObj);
                        }
                        inHalfFlg_1 = true;
                        insertFlg = true;
                        return;
                    }
                });
                if (!inHalfFlg_1) {
                    var newObj = new Object();
                    newObj['halfHour'] = startHalf;
                    var taskList = new Array();
                    taskList.push(taskCObj);
                    newObj['taskInfoList'] = taskList;
                    cgInfo.halfHourList.push(newObj);
                    insertFlg = true;
                }
                if (insertFlg) {
                    return;
                }
            }
        });
        if (!insertFlg) {
            // 縦ヘッダーは不存在
            var newCgInfo = new Object();
            newCgInfo['categoryId'] = matchKey;
            newCgInfo['categoryNm'] = matchValue;
            newCgInfo['halfHourList'] = [];
            var newObj = new Object();
            newObj['halfHour'] = startHalf;
            var taskList = new Array();
            taskList.push(taskCObj);
            newObj['taskInfoList'] = taskList;
            newCgInfo['halfHourList'].push(newObj);
            cgList.push(newCgInfo);
        }
        var intLen = 35;
        // タスクリスト整備
        __WEBPACK_IMPORTED_MODULE_6__providers_utility_service_ObjUti__["a" /* ObjUti */].mkTaskPos(cgList, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), intLen);
    };
    TaskcPage.prototype.intoKanban = function (index, matchKey, matchValue, taskCObj) {
        var cgList = this.categoryInfoLists[index];
        var insertFlg = false;
        cgList.forEach(function (cgInfo) {
            var sList;
            if (matchKey == cgInfo.categoryId) {
                // 縦ヘッダーは存在
                if (cgInfo.sTaskInforList.length > 0) {
                    sList = cgInfo.sTaskInforList[0]['taskInfoList'];
                }
                else {
                    var newObj = new Object();
                    sList = new Array();
                    newObj['taskInfoList'] = sList;
                    cgInfo.sTaskInforList.push(newObj);
                }
                sList.push(taskCObj);
                insertFlg = true;
                return;
            }
        });
        if (!insertFlg) {
            // 縦ヘッダーは不存在
            var newCgInfo = new Object();
            newCgInfo['categoryId'] = matchKey;
            newCgInfo['categoryNm'] = matchValue;
            newCgInfo['sTaskInforList'] = [];
            newCgInfo['iTaskInforList'] = [];
            newCgInfo['eTaskInforList'] = [];
            newCgInfo['aTaskInforList'] = [];
            var newObj = new Object();
            var sList = new Array();
            newObj['taskInfoList'] = sList;
            sList.push(taskCObj);
            newCgInfo['sTaskInforList'].push(newObj);
            cgList.push(newCgInfo);
        }
    };
    TaskcPage.prototype.initTime = function () {
        var hours = [];
        var minutes = [];
        for (var i = 0; i < 24; i++) {
            var obj = new Object();
            obj['description'] = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(i);
            hours.push(obj);
        }
        for (var j = 0; j < 60; j++) {
            var obj = new Object();
            obj['description'] = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(j);
            minutes.push(obj);
        }
        this.timePicker = {
            hours: hours,
            minutes: minutes
        };
    };
    TaskcPage.prototype.selectSTime = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.startTime)) {
            this.idxH = parseInt(this.startTime.substr(0, 2));
            this.idxM = parseInt(this.startTime.substr(3, 2));
        }
        else {
            var now = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].fmtSysDateTime(new Date());
            console.log(now);
            this.idxH = parseInt(now.substr(8, 2));
            this.idxM = parseInt(now.substr(10, 2));
            console.log(this.idxH, this.idxM);
        }
        this.timeArea(this.endTime, 1);
        this.storeTimer.show({
            title: '',
            items: [
                this.timePicker.hours,
                this.timePicker.minutes
            ],
            positiveButtonText: "OK",
            negativeButtonText: "CANCEL",
            wrapWheelText: true,
            defaultItems: [
                { index: 0, value: __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(this.idxH) },
                { index: 1, value: __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(this.idxM) }
            ]
        }).then(function (result) {
            _this.startTime = result[0].description + ':' + result[1].description;
            console.log(result[0].description + ':' + result[1].description);
            _this.startTimeChange();
        }, function (err) { return console.log('Error: ' + JSON.stringify(err)); });
    };
    TaskcPage.prototype.timeArea = function (time, flg) {
        if (!__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(time)) {
            var hoursLimit = void 0;
            hoursLimit = parseInt(time.substr(0, 2));
            var hours = [];
            if (flg == 0) {
                for (var i = hoursLimit; i < 24; i++) {
                    var obj = new Object();
                    obj['description'] = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(i);
                    hours.push(obj);
                }
            }
            if (flg == 1) {
                for (var i = 0; i <= hoursLimit; i++) {
                    var obj = new Object();
                    obj['description'] = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(i);
                    hours.push(obj);
                }
            }
            this.timePicker.hours = hours;
        }
        else {
            this.initTime();
        }
    };
    TaskcPage.prototype.selectETime = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_5__providers_utility_service_StrUti__["a" /* StrUti */].isNothing(this.endTime)) {
            this.idxH = parseInt(this.endTime.substr(0, 2));
            this.idxM = parseInt(this.endTime.substr(3, 2));
        }
        else {
            var now = __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].fmtSysDateTime(new Date());
            this.idxH = parseInt(now.substr(8, 2));
            this.idxM = parseInt(now.substr(10, 2));
            console.log(this.idxH, this.idxM);
        }
        this.timeArea(this.startTime, 0);
        this.storeTimer.show({
            title: '',
            items: [
                this.timePicker.hours,
                this.timePicker.minutes
            ],
            positiveButtonText: "OK",
            negativeButtonText: "CANCEL",
            wrapWheelText: true,
            defaultItems: [
                { index: 0, value: __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(this.idxH) },
                { index: 1, value: __WEBPACK_IMPORTED_MODULE_7__providers_utility_service_UtilityService__["a" /* UtilityService */].formatNumber(this.idxM) }
            ]
        }).then(function (result) {
            _this.endTime = result[0].description + ':' + result[1].description;
            console.log(result[0].description + ':' + result[1].description);
            _this.endTimeChange();
        }, function (err) { return console.log('Error: ' + JSON.stringify(err)); });
    };
    TaskcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-taskc',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\taskc\taskc.html"*/'<ion-header>\n\n    <ion-item no-lines color="warn" style="height:50px;">\n\n        <ion-label item-start>\n\n            <ion-icon name="md-arrow-dropleft" color="light" class="font-30 font-w" (click)="goBackPop()"></ion-icon>\n\n        </ion-label>\n\n        <ion-label item-content></ion-label>\n\n        <ion-label item-start class="text-center font-18 bold-white" icon-right>\n\n            {{frameNm}}\n\n            <ion-icon name="alert-outline" class="font-20 font-w" hidden></ion-icon>\n\n        </ion-label>\n\n    </ion-item>\n\n</ion-header>\n\n\n\n<ion-content id="ion-taskc" padding>\n\n    <div class="width-100 con-left" style="height:92%">\n\n        <div class="width-50 font-16 font-w border-right">\n\n            <div class="width-100 border-top height-top" style="position: relative;z-index: 99; min-height: 356px;">\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">業務名</div>\n\n                    <div class="pad-5 border-right border-bottom" style="width:55%;">\n\n                        <ion-input no-margin text-right clearInput maxLength="20" type="text" style="height: 100%;padding-top:5px;" name="opNm" [(ngModel)]="opNm"\n\n                            (ngModelChange)="opnmChange(opNm)">{{opNm}}</ion-input>\n\n                    </div>\n\n                    <div class="pad-10 border-right border-bottom con-on-off {{isShowJobFlg?\'wb-color\':\'gw-color\'}}" style="width:5%;" (click)="isShowWork()">\n\n                        <ion-icon name="md-arrow-dropright"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40">\n\n                        <div class="pad-10 con-center color" style="height:50%;">開始日</div>\n\n                        <div class="pad-10 con-center color" style="height:50%;">終了日</div>\n\n                    </div>\n\n                    <div style="width:50%">\n\n                        <ion-datetime class="contain border-bottom" displayFormat="YYYY/MM/DD" text-right doneText="OK" cancelText="Cancel" name="startDate" [(ngModel)]="startDate" \n\n                        min="{{endDate!=\'\'?endDate:minDateTime}}" max="{{endDate!=\'\'?endDate:maxDateTime}}" (ngModelChange)="setSDate(startDate)"></ion-datetime>\n\n                        <ion-datetime class="contain border-bottom" displayFormat="YYYY/MM/DD" text-right doneText="OK" cancelText="Cancel" name="endDate" [(ngModel)]="endDate"\n\n                        min="{{startDate!=\'\'?startDate:minDateTime}}" max="{{startDate!=\'\'?startDate:maxDateTime}}" (ngModelChange)="setEDate(endDate)"></ion-datetime>\n\n                    </div>\n\n                    <div style="width:5%;">\n\n                        <div class="pad-10 border-right text-right border-bottom con-on-off" style="height: 50%" (click)="clearStartDate()">\n\n                            <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                        </div>\n\n                        <div class="pad-10 border-right text-right border-bottom con-on-off" style="height: 50%" (click)="clearEndDate()">\n\n                            <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                        </div>\n\n                    </div>\n\n                    <div style="width:5%;">\n\n                        <div class="pad-10 border-right border-bottom height-100 "></div>\n\n                    </div>\n\n                </div>\n\n\n\n                <div class="con-left">\n\n                    <div class="width-40">\n\n                        <div class="pad-10 con-center color" style="height:50%;">開始時刻</div>\n\n                        <div class="pad-10 con-center color" style="height:50%;">終了時刻</div>\n\n                    </div>\n\n                    <div style="width:50%">\n\n                        <div class="con-center worker-right border-bottom" style="height:50%; padding-right: 8px" name="startTime" (click)="selectSTime()">{{startTime}}</div>\n\n                        <div class="con-center worker-right border-bottom" style="height:50%; padding-right: 8px" name="endTime" (click)="selectETime()">{{endTime}}</div>\n\n                    </div>\n\n                    <div style="width:5%;">\n\n                        <div class="pad-10 border-right text-right border-bottom con-on-off" style="height: 50%" (click)="clearStartTime()">\n\n                            <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                        </div>\n\n                        <div class="pad-10 border-right text-right border-bottom con-on-off" style="height: 50%" (click)="clearEndTime()">\n\n                            <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                        </div>\n\n                    </div>\n\n                    <div style="width:5%;">\n\n                        <div class="pad-10 border-right text-right border-bottom height-100 con-on-off {{isShowTimeFlg?\'wb-color\':\'gw-color\'}}" (click)="isShowTime()">\n\n                            <ion-icon name="md-arrow-dropright"></ion-icon>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">担当者</div>\n\n                    <div class="pad-5 border-bottom text-right" style="width:50%;">\n\n                        {{selectWorker}}\n\n                        <div style="color: red;" *ngIf="selectedWorkerFlg">再度担当者を選択してください</div>\n\n                    </div>\n\n                    <div style="width:5%;">\n\n                        <div class="pad-10 border-right text-right height-100 border-bottom con-on-off" (click)="clearWorker()">\n\n                            <ion-icon style="font-size:12px;" name="md-close"></ion-icon>\n\n                        </div>\n\n                    </div>\n\n                    <div class="pad-10 border-right border-bottom con-on-off {{isShowWorkerFlg?\'wb-color\':\'gw-color\'}}" style="width:5%;" (click)="isShowWorker()">\n\n                        <ion-icon name="md-arrow-dropright"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">繰返しタスク</div>\n\n                    <div class="width-60 border-right border-bottom con-on-off">\n\n                        <div class="width-60 onOff-div">\n\n                            <div class="width-30 onOff-div">\n\n                                <div>ON</div>\n\n                                <ion-checkbox color="dark" checked="ON" [(ngModel)]="ON" (ngModelChange)="changeON(ON)"></ion-checkbox>\n\n                            </div>\n\n                            <div class="width-30 onOff-div">\n\n                                <div>OFF</div>\n\n                                <ion-checkbox color="dark" checked="OFF" [(ngModel)]="OFF" (ngModelChange)="changeOFF(ON)"></ion-checkbox>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="con-left">\n\n                    <div class="width-40 pad-10 con-center color">優先度</div>\n\n                    <div class="width-60 border-right border-bottom con-on-off">\n\n                        <div class="width-60 onOff-div">\n\n                            <div class="width-30 onOff-div">\n\n                                <div>通常</div>\n\n                                <ion-checkbox color="dark" checked="LOW"  [(ngModel)]="LOW" (ngModelChange)="changeLOW(LOW)"></ion-checkbox>\n\n                            </div>\n\n                            <div class="width-30 onOff-div">\n\n                                <div>高</div>\n\n                                <ion-checkbox color="dark" checked="HIGH"  [(ngModel)]="HIGH" (ngModelChange)="changeHIGH(HIGH)"></ion-checkbox>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="width-100 height-center" style="position: relative;z-index: 9;"></div>\n\n            <ion-item no-lines style="padding-left:5px;">\n\n                <ion-label item-start></ion-label>\n\n                <button ion-button round item-start color="warn" style="height:40px;width:200px;" class="bold-white" (click)="createTaskClick()">\n\n                    <ion-label class="font-16 font-w">登録</ion-label>\n\n                </button>\n\n                <ion-label item-end></ion-label>\n\n            </ion-item>\n\n        </div>\n\n        <div class="width-50 font-18 font-w">\n\n            <div class="width-100 height-100" style="overflow: scroll;">\n\n                <div [hidden]="isShowJobFlg">\n\n                    <div *ngFor="let item of showWorkeList; let i= index">\n\n                        <div class="width-100 border-right border-bottom gw-color con-left" (click)="showOpList(i)">\n\n                            <div class="width-90 pad-10 text-left">{{item.categoryNm}}</div>\n\n                            <div class="width-10 pad-tb-10 text-center">\n\n                                <ion-icon name="ios-arrow-down" class="font-20 font-w" *ngIf="!isShow[i]"></ion-icon>\n\n                                <ion-icon name="ios-arrow-up" class="font-20 font-w" *ngIf="isShow[i]"></ion-icon>\n\n                            </div>\n\n                        </div>\n\n                        <div class="font-18 font-w" *ngIf="isShow[i]">\n\n                            <div class="width-100 pad-10 border-right border-bottom text-right" *ngFor="let ite of item.opList" (click)="selectedWork(item.categoryId, item.categoryNm, ite.opId, ite.opNm, ite.duration)">{{ite.opNm}}</div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div [hidden]="isShowTimeFlg">\n\n                    <div *ngFor="let item of showTimeList; let i= index" (click)="selectedDate(item.shift_nm)">\n\n                        <div class="width-100 pad-10 border-right border-top border-bottom text-right">\n\n                            {{item.shift_nm}}（{{item.start_timeF}}　－　{{item.end_timeF}}）\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div [hidden]="isShowWorkerFlg">\n\n                    <div *ngFor="let item of showWorkerList; let i= index" (click)="selectedName(i,item.workerId,item.workerNm)">\n\n                        <div class="width-100 pad-10 border-right border-top border-bottom text-right">\n\n                            {{item.workerNm}}\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\taskc\taskc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_taskc_service__["a" /* ApiTaskcServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_store_timer__["a" /* StoreTimer */]])
    ], TaskcPage);
    return TaskcPage;
}());

//# sourceMappingURL=taskc.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandoverpopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handoverrd_handoverrd__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handoverc_handoverc__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HandoverpopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HandoverpopPage = /** @class */ (function () {
    function HandoverpopPage(navCtrl, viewCtrl, navParams, appCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.getData = this.navParams.data;
    }
    HandoverpopPage.prototype.ionViewWillEnter = function () {
        var pop = document.querySelector('.popover-content');
        if (pop != undefined && pop != null) {
            pop['style'].top = '51px';
        }
    };
    HandoverpopPage.prototype.goHandoverc = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__handoverc_handoverc__["a" /* HandovercPage */], {
            storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'],
            currentTimeSlotId: this.getData['currentTimeSlotId'],
            currentTimeSlotNm: this.getData['currentTimeSlotNm'],
            aplUserId: this.getData['aplUserId'],
            viewKbn: this.getData['viewKbn'],
            selectedText: this.getData['selectedText'],
            selectedDate: this.getData['selectedDate']
        });
    };
    HandoverpopPage.prototype.goHandoverrd = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__handoverrd_handoverrd__["a" /* HandoverrdPage */], {
            storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'],
            currentTimeSlotId: this.getData['currentTimeSlotId'],
            aplUserId: this.getData['aplUserId'],
            viewKbn: this.getData['viewKbn'],
            selectedText: this.getData['selectedText'],
            selectedDate: this.getData['selectedDate']
        });
    };
    HandoverpopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-handoverpop',template:/*ion-inline-start:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\handoverpop\handoverpop.html"*/'<ion-content>\n\n  <ion-list style="margin:0;font-weight: bold;">\n\n    <button ion-item class="font-16 font-w" (click)="goHandoverc()">\n\n      <ion-icon item-start name="ios-attention-grey" style="font-weight: bold"></ion-icon>\n\n      引継作成\n\n    </button>\n\n    <button ion-item class="font-16 font-w" (click)="goHandoverrd()" [disabled]="!getData[\'hasHandover\']">\n\n      <ion-icon item-start name="ios-attention-red" style="font-weight: bold"></ion-icon>\n\n      引継確認\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\y4aoki\poc-store-develop\autostoremng-ionic\src\pages\handoverpop\handoverpop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HandoverpopPage);
    return HandoverpopPage;
}());

//# sourceMappingURL=handoverpop.js.map

/***/ })

},[244]);
//# sourceMappingURL=main.js.map