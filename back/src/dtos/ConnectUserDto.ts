export class ConnectUserDto {
  constructor(private username: string, private password: string) {}

  public get_username() {
    return this.username;
  }

  public get_password() {
    return this.password;
  }
}
