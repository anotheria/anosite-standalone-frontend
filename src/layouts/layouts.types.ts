export enum AppLayoutsEnum {
  main = 'main',
  basic = 'basic',
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  main: 'AppLayoutMain.vue',
  basic: 'AppLayoutBasic.vue',
}
