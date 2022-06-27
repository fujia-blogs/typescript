// 显式地引⼊⼿动补⻬的缺失的类型声明⽂件
/// <reference path="../types.d.ts" />
import ecstatic from 'ecstatic';
import http from 'http';

export interface IHttpServerOptions {
  /** 静态⽂件⽬录，默认是当前⽬录 */
  root?: string;
  /** 缓存时间 */
  cache?: number;
}

/** 对外暴露的⽅法 */
export interface IHttpServer {
  /** 启动服务 */
  listen(port: number): void;
  /** 关闭服务 */
  close(): void;
}

export default class HttpServer implements IHttpServer {
  private server: http.Server;

  constructor(options: IHttpServerOptions) {
    const root = options.root || process.cwd();

    this.server = http.createServer(
      ecstatic({
        root,
        cache: options.cache === undefined ? 3600 : options.cache,
        showDir: true,
        defaultExt: 'html',
        gzip: true,
        contentType: 'application/octet-stream',
      })
    );
  }

  listen(port: number): void {
    this.server.listen(port);
  }

  close(): void {
    this.server.close();
  }
}
