export class ResponseBase<T> {
  statusCode: ResponseStatusCode = ResponseStatusCode.Ok;
  message: string = "Succeed";
  data: T;

  success(): boolean {
    return this.statusCode === ResponseStatusCode.Ok;
  }
}

export enum ResponseStatusCode {
  Ok = 0,
  Error = 1,
}
