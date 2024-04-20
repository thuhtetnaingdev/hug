export const TYPES = {
  CONTROLLER: Symbol.for("Controller"),
  SERVICE: Symbol.for("Service"),
  REPOSITORY: Symbol.for("Repository"),
  USE_CASE: Symbol.for("UseCase"),
  ROUTER: Symbol.for("Router"),
};

export interface Service {}

export interface Repository {}

export interface UseCase {}

export interface Controller {}

export interface Router {}

export interface Module {}

export interface ModuleOptions {
  controllers?: any[];
  services?: any[];
  repositories?: any[];
  useCases?: any[];
  route?: any;
}
