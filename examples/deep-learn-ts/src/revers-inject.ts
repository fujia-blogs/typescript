/**
 * Control reversal and dependency injection
 */
import 'reflect-metadata';

type Constructor<T = any> = new (...args: any[]) => T;

const Injectable = (): ClassDecorator => (target) => {};

class OtherService {
  a = 1;
}

@Injectable()
class TestService {
  constructor(public readonly otherService: OtherService) {}

  test() {
    console.log(this.otherService.a);
  }
}

const Factory = <T = any>(target: Constructor<T>): T => {
  // 获取所有注入的服务
  const providers = Reflect.getMetadata('design:paramtypes', target);

  const args = providers.map((provider: Constructor) => new provider());

  return new target(...args);
};

Factory(TestService).test();

export {};
