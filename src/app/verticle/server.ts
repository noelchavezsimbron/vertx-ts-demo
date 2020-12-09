import {router} from "../routes";

const port=8080

console.log("##### deploying Verticle Server #####")



vertx.createHttpServer()
  .requestHandler(router)
  .listen(port,res => {
    if (res.succeeded()){

      console.log(`Server listening at: http://localhost:${port}/`)

    }else{
      console.error('Error on start server')
    }
  })
