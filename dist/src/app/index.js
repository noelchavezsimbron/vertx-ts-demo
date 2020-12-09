"use strict";
/// <reference types="es4x" />
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./verticle/app");
const application = new app_1.Application();
application.run();
