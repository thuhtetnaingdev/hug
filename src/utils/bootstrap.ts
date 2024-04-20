import { Container, ContainerModule } from "inversify";
import Koa from "koa";
import { ModuleOptions } from "./types";
import { HugRouterInterface } from "./hug-router";

interface BootstrapOptions {
  modules: ModuleOptions[];
  functionalInfras?: ContainerModule[];
}

export const bootstrap =
  (options: BootstrapOptions) => (cb: (app: Koa) => any) => (port: number) => {
    const app: Koa = new Koa();

    bootstrapContainer(options, app);
    cb(app);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  };

const bootstrapContainer = (options: BootstrapOptions, app: Koa) => {
  const container = new Container();
  const router = options.modules.map(module => {
    return constructModule(module)(container);
  });

  options.functionalInfras?.forEach(infra => {
    container.load(infra);
  });

  router.forEach(construct => construct(app));

  return container;
};

const constructModule = (moduleOptions: ModuleOptions) => {
  const module = new ContainerModule(bind => {
    moduleOptions?.controllers?.forEach(controller =>
      bind(controller).toSelf().inSingletonScope()
    );
    moduleOptions?.services?.forEach(service =>
      bind(service).toSelf().inSingletonScope()
    );
    moduleOptions?.repositories?.forEach(repository =>
      bind(repository).toSelf().inSingletonScope()
    );
    moduleOptions?.useCases?.forEach(useCase =>
      bind(useCase).toSelf().inSingletonScope()
    );
    if (moduleOptions?.route) {
      bind(moduleOptions.route).toSelf().inSingletonScope();
    }
  });

  return (container: Container) => {
    container.load(module);
    return (app: Koa) => {
      if (moduleOptions.route) {
        const router = container.get<HugRouterInterface>(moduleOptions.route);
        router.routes();
        return app.use(router.execute());
      }
    };
  };
};
