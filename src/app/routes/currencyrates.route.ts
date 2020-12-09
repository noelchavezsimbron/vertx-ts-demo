import {Router} from '@vertx/web';
import {Container} from "../container/container";

export const register=(router:Router)=>{

  const currencyRateService=Container.currencyRateService()

  router.get()
    .path("/rates")
    .handler( ctx=>{

      const date = ctx.queryParam("date")[0]

      console.log("date",date)

      currencyRateService.findByDate(date,res=>{

        if (res.succeeded()){

          const currencyRate = res.result();

          ctx.response()
            .putHeader("Content-type", "application/json")
            .end(currencyRate!.toJSONString())

        }else{
          ctx.response()
            .setStatusCode(500)
            .write(JSON.stringify('{"message":"an error occurred. "}'))
            .end()
        }
      })

    })
    .failureHandler( ctx=>{

      ctx.failure()?.printStackTrace()

      ctx.response()
        .setStatusCode(500)
        .end("Error in Get Currency Rates");
    });



}

