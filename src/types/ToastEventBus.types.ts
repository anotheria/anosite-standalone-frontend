declare module 'primevue/toasteventbus' {
  interface ToastEventBus {
    emit(event: string, payload?: any): void
    on(event: string, callback: (payload?: any) => void): void
    off(event: string, callback: (payload?: any) => void): void
  }

  const toastEventBus: ToastEventBus
  export default toastEventBus
}
