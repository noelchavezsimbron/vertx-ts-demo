import {Router} from "@vertx/web";


const Thread = Java.type('java.lang.Thread');
const LinkedHashMap = Java.type('java.util.LinkedHashMap')
const TimeUnit = Java.type('java.util.concurrent.TimeUnit')

export const register=(router:Router)=>{


  router.get()
    .path("/")
    .handler(ctx=>{
      let shapes = new LinkedHashMap()
      shapes.put("1", "square")
      shapes.put("2", "circle")
      shapes.put("3","triangle")


      Thread.sleep(TimeUnit.SECONDS.toMillis(3));

      console.log("shapes",shapes)


      let response = ctx.response()
      response.putHeader("Content-type", "application/json")
      response.end("Hello World Es4x Vertx")

    })
    .failureHandler(ctx=>{

      ctx.failure()?.printStackTrace()

      ctx.response()
        .setStatusCode(500)
        .end("GET / Sorry! Not today");
    });

}
