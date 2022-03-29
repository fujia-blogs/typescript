class Queue<T> {
  private data: T[] = [];

  push = (item: T) => this.data.push(item);

  pop = (): T | undefined => this.data.shift();
}

function reverse<T>(items: T[]): T[] {
  const ret = [];

  for (let i = items.length - 1; i >= 0; i--) {
    ret.push(items[i]);
  }

  return ret;
}

const getJSON = <T>(config: {
  url: string;
  headers?: {
    [key: string]: string;
  };
}): Promise<T> => {
  const fetchConfig = {
    method: 'GET',
    Accept: 'application/json',
    ...(config.headers || {}),
  };

  return fetch(config.url, fetchConfig).then<T>((response) => response.json());
};
