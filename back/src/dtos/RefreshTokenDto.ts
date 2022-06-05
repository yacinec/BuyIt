export class RefreshTokenDto {
  constructor(private refreshToken: string) {}

  public get_refreshToken() {
    return this.refreshToken;
  }
}
