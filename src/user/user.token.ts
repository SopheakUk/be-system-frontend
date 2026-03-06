import { ResponseBase } from "@/base/response.base";

export class UserToken extends ResponseBase<string> {
  constructor(data: Partial<UserToken>) {
    super();
    Object.assign(this, data);
  }
}
