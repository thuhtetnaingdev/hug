import { injectable } from "inversify";
import Router from "koa-router";

@injectable()
export class HugRouter implements HugRouterInterface {
  public router: Router;
  constructor() {
    this.router = new Router();
  }

  execute = () => {
    return this.router.routes();
  };
}

export interface HugRouterInterface {
  router?: Router;
  execute?: () => any;
  routes?: () => void;
}
