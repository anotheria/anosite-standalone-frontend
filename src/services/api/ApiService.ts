import axios from '@/plugins/axios'
import type { RequestOptions } from '@/services/api/Api.types'
import type { AxiosError, AxiosRequestConfig } from 'axios'
import ToastEventBus from 'primevue/toasteventbus'

export default class ApiService {
  public static get<T>(options: RequestOptions): Promise<T> {
    const { url, config, skipDefaultErrorHandling } = options
    return axios
      .get(url, config)
      .then((response) => response.data)
      .catch((error: AxiosError<T>): AxiosError<T> => {
        if (!skipDefaultErrorHandling) {
          this.handleError(error)
        }
        throw error
      })
  }

  public static post<T>(options: RequestOptions): Promise<T> {
    const { url, data, config, skipDefaultErrorHandling } = options
    return axios
      .post(url, data, config)
      .then((response) => response.data)
      .catch((error: AxiosError<T>): AxiosError<T> => {
        if (!skipDefaultErrorHandling) {
          this.handleError(error)
        }
        throw error
      })
  }

  public static put<T>(options: RequestOptions): Promise<T> {
    const { url, data, skipDefaultErrorHandling } = options
    return axios
      .put(url, data)
      .then((response) => response.data)
      .catch((error: AxiosError<T>): AxiosError<T> => {
        if (!skipDefaultErrorHandling) {
          this.handleError(error)
        }
        throw error
      })
  }

  public static delete<T>(options: RequestOptions): Promise<T> {
    const { url, data, skipDefaultErrorHandling } = options
    return axios
      .delete(url, { data } as AxiosRequestConfig)
      .then((response) => response.data)
      .catch((error: AxiosError<T>): AxiosError<T> => {
        if (!skipDefaultErrorHandling) {
          this.handleError(error)
        }
        throw error
      })
  }

  private static handleError<T>(error: AxiosError<T>) {
    ToastEventBus.emit('add', {
      severity: 'error',
      summary: 'Error Message',
      detail: error.message,
      life: 3000,
    })
  }
}
