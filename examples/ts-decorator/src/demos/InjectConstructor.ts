import 'reflect-metadata';

type ParameterDecorator = (
  target: Object,
  param: string | symbol,
  index: number
) => void;

export function InjectConstructor(injectId?: string): ParameterDecorator {
  return (targetClass, paramName, index) => {};
}
