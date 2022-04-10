import { PixivPhoto, PixivProfileResponse } from "./@types/payload";

/**
 * Parse profile.
 *
 * @api private
 */
const parsePayload = function(json: object | string): PixivProfileResponse{
  const data =  typeof json === 'string' ? JSON.parse(json).response[0] : (json as any).response[0];
  return {
    id:String(data.id),
    displayName: data.name,
    username:data.account,
    photos: Object.entries(data.profile_image_urls).map(([type,value]) => ({type,value} as PixivPhoto))
  };
}
export const parse = parsePayload
export default {parse}