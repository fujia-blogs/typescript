import { program } from 'commander';

import HttpServer, { IHttpServerOptions } from './http-serve';

program
  .option('--cache, <cache>', '设置缓存时间，单位：秒')
  .option('--root, <root>', '静态⽂件⽬录')
  .option('-p, --port, <port>', '监听端⼝', '3000')
  .action(
    (
      options: Omit<IHttpServerOptions, 'cache'> & {
        cache?: string;
        port: string;
      }
    ) => {
      const { root, cache, port } = options;

      const server = new HttpServer({
        root,
        cache: cache ? parseInt(cache) : undefined,
      });

      server.listen(+port);
      console.log(`The server is running on  http://localhost:${port}`);
    }
  );

program.parse(process.argv);
