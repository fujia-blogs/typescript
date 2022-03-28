export {};

declare global {
  interface String {
    endsWith(suffix: string): boolean;
  }
}
