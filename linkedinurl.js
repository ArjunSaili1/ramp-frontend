import { getURLWithQueryParams } from "../utils/generic"

const LINKEDIN_SCOPE = 'r_emailaddress openid profile r_liteprofile email'
const LINKEDIN_REDIRECT = 'http://localhost:3000/'
const LINKEDIN_CLIENT_ID = '86b7wt9jq2pz9y'
export const LINKEDIN_URL = getURLWithQueryParams('https://www.linkedin.com/oauth/v2/authorization', {
  response_type: "code",
  client_id: LINKEDIN_CLIENT_ID,
  redirect_uri: LINKEDIN_REDIRECT,
  scope: LINKEDIN_SCOPE
})