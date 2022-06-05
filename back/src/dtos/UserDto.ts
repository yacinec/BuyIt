export class UserDto {
  constructor(private _id: string, private username: string) {}

  public get__id() {
    return this._id;
  }

  public get_username() {
    return this.username;
  }
}
