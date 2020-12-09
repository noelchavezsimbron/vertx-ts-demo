"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const options_1 = require("@vertx/core/options");
class VerticleConfig {
    constructor(name, instances) {
        this.name = name;
        this.instances = instances;
    }
}
const verticles = [
    new VerticleConfig("dist/src/app/verticle/server.js", 1)
];
class Application {
    run() {
        console.info("[start] iniciando la carga de Verticles para el sistema");
        this.deployVerticles();
    }
    deployVerticles() {
        verticles.forEach(verticle => {
            const options = new options_1.DeploymentOptions().setInstances(verticle.instances);
            vertx.deployVerticle(verticle.name, options, res => {
                var _a;
                if (res.succeeded()) {
                    console.log(`[deployVerticle] ${verticle.name} -> ok`);
                }
                else {
                    console.error(`[deployVerticle] error when deploying verticle ${verticle.name}`);
                    (_a = res.cause()) === null || _a === void 0 ? void 0 : _a.printStackTrace();
                }
            });
        });
    }
}
exports.Application = Application;
