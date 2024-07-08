import type { AxiosRequestConfig } from 'axios'

export interface ApiResponse<T> {
  success: boolean
  errorKey?: string | null
  message?: string | null
  results: T
}

export interface RequestOptions {
  url: string
  data?: any
  config?: AxiosRequestConfig
  skipDefaultErrorHandling?: boolean
}
