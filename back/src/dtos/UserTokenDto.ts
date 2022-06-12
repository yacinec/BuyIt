export class UserTokenDto {
  constructor(
    private _id: string,
    private username: string,
    private accessToken: string,
    private refreshToken: string
  ) {}
}
