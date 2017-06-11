"use strict";
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
const e = require("express");
const BaseController_1 = require("./BaseController");
const Web_1 = require("../decorators/Web");
class IndexController extends BaseController_1.default {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('index', {});
        });
    }
}
__decorate([
    Web_1.router({
        method: 'get',
        path: '/'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "index", null);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IndexController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFDOUIscURBQThDO0FBQzlDLDJDQUEyQztBQUUzQyxxQkFBc0IsU0FBUSx3QkFBYztJQUtyQyxLQUFLLENBQUMsR0FBYyxFQUFFLEdBQWU7O1lBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7S0FBQTtDQUNEO0FBSEE7SUFKQyxZQUFNLENBQUM7UUFDUCxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxHQUFHO0tBQ1QsQ0FBQzs7Ozs0Q0FHRDs7QUFHRixrQkFBZSxlQUFlLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGUgPSByZXF1aXJlKCdleHByZXNzJyk7XG5pbXBvcnQgQmFzZUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL1dlYlwiO1xuXG5jbGFzcyBJbmRleENvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG5cdEByb3V0ZXIoe1xuXHRcdG1ldGhvZDogJ2dldCcsXG5cdFx0cGF0aDogJy8nXG5cdH0pXG5cdGFzeW5jIGluZGV4KHJlcTogZS5SZXF1ZXN0LCByZXM6IGUuUmVzcG9uc2UpIHtcblx0XHRyZXMucmVuZGVyKCdpbmRleCcsIHt9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleENvbnRyb2xsZXJcbiJdfQ==
