function foo(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }

  return fail('Unexhaustive');
}

function fail(message: string): never {
  throw new Error(message);
}
