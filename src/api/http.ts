import axios, { type AxiosInstance, InternalAxiosRequestConfig } from 'axios'

import { ENV, SHARED_LOCALSTORAGE_KEYS } from '@/config'

class ApiRequesterFactory {
  private _instanse: AxiosInstance

  constructor() {
    this._instanse = axios.create({
      baseURL: ENV.API_URL,
      timeout: 2500
    })

    this.initAuthInterceptor()
  }

  public get instanse() {
    return this._instanse
  }

  private initAuthInterceptor() {
    this._instanse.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem(SHARED_LOCALSTORAGE_KEYS.TOKEN)
        if (token) {
          config.headers['Authorization'] = `Token ${token}`
        }

        return config
      }
    )
  }
}

const apiRequester = new ApiRequesterFactory()
export const http = apiRequester.instanse
