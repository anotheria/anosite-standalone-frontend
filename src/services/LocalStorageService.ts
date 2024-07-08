export default class LocalStorageService {
  private static LANGUAGE = 'language'
  private static AUTH_TOKEN = 'authToken'

  public static getLanguage(): string {
    return localStorage.getItem(this.LANGUAGE) || ''
  }

  public static setLanguage(language: string) {
    localStorage.setItem(this.LANGUAGE, language)
  }

  public static getAuthToken(): string {
    return localStorage.getItem(this.AUTH_TOKEN) || ''
  }

  public static setAuthToken(authToken: string) {
    localStorage.setItem(this.AUTH_TOKEN, authToken)
  }

  public static removeAuthToken() {
    localStorage.removeItem(this.AUTH_TOKEN)
  }
}
