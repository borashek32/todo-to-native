import axios from "axios";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "46b63e5a-3617-4795-b158-8f82fffd20f6",
    cookie:
      "_ym_uid=1672160761894593791; _ym_d=1674564345; ASP.NET_SessionId=ea4mbtwxmbieya2f0x5fdysp; _ym_isad=2; .ASPXAUTH=B4D3ECFD72139CFDC6D55C77F8DF4B5A4506D6CE3326CD33CB2CB8B315E8A51F211610C1B6BC79D9DAF8C1CDA0ED68729E14FC37406B51C2965BB133BAA49E96F73848924AAECE70431E1A0AA621BEFB988E53D7",
  },
};
export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  ...settings,
});
