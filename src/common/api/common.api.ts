import axios from "axios"

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "46b63e5a-3617-4795-b158-8f82fffd20f6",
    "cookie": "_ym_uid=1672160761894593791; _ym_d=1674564345; ASP.NET_SessionId=ea4mbtwxmbieya2f0x5fdysp; _ym_isad=2; .ASPXAUTH=C41FE0C2DA96B739F3B515686497A761C364F93CC1C304554473901F20E2E0EE106004B9E027B9C03AB04D1EA7E175C1E803905A3F874C04FF376D9DC0B606ECAA126AAEAD5025826EAD89FC19CCC94852F0121C"
  },
}
export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  ...settings,
})