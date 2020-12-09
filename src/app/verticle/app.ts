import {DeploymentOptions} from "@vertx/core/options";

class VerticleConfig{
  name:string
  instances:number
  constructor(name:string,instances:number) {
    this.name=name
    this.instances=instances
  }
}

const verticles:Array<VerticleConfig>=[
  new VerticleConfig("dist/src/app/verticle/server.js",1)
]


export class Application {

  run(){
    console.info("[start] iniciando la carga de Verticles para el sistema")

    this.deployVerticles()
  }

 private deployVerticles(){

    verticles.forEach(verticle=>{

      const options = new DeploymentOptions().setInstances(verticle.instances);

      vertx.deployVerticle(verticle.name,options, res => {
        if (res.succeeded()){
          console.log(`[deployVerticle] ${verticle.name} -> ok`)
        }else{
          console.error(`[deployVerticle] error when deploying verticle ${verticle.name}`)
          res.cause()?.printStackTrace()
        }
      })

    })

  }

}
