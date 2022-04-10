import OAuth2Strategy, { VerifyCallback } from "passport-oauth2";
import { PixivProfileResponse } from "./payload";

export type PixivStrategyOption = OAuth2Strategy.StrategyOptions & {
    userAgent?: string;
    userProfileURL?: string;
};
// export type PixivVerifyFunction = OAuth2Strategy.VerifyFunctionWithRequest;
export type PixivVerifyFunction = (
    ((accessToken: string, refreshToken: string, profile: PixivProfileResponse, verified: VerifyCallback) => void) |
    ((accessToken: string, refreshToken: string, results: any, profile: PixivProfileResponse, verified: VerifyCallback) => void)
)

export type UserProfileRaw = PixivProfileResponse & {
    provider: 'pixiv'
    _raw: string
    _json: object
} ;
// export type UserProfileCallback = (
//     (error: Error) => void |
//     ((error: null, data: UserProfileRaw) => void)
// );
export type UserProfileCallback = (error: Error | null, data?: UserProfileRaw) => void 