import {BodyHandler, Router} from "@vertx/web";
import {register as currencyRoute} from "./currencyrates.route";
import {register as helloRoute} from "./hello.route";


const routes:Array<((res: Router) => void)>=[
  helloRoute,
  currencyRoute,
]


const router = Router.router(vertx);

router.route()
  .handler(BodyHandler.create());

registerRoutes(router,routes);


export  {
  router
}

function registerRoutes(router:Router,routes :Array<((res: Router) => void)>):void{

  routes.forEach(register=>register(router))
}

