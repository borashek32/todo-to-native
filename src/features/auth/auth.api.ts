import {ResponseType} from "./../../common/types/common.types"
import {LoginParamsType} from "./../../features/auth/auth.types"
import {instance} from "./../../common/api/common.api"

export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post<ResponseType<{ userId?: number }>>("auth/login", data)
  },
  logout() {
    return instance.delete<ResponseType<{ userId?: number }>>("auth/login")
  },
  me() {
    return instance.get<ResponseType<{ id: number; email: string; login: string }>>("auth/me")
  },
}