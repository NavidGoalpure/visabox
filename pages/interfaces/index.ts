enum Languages {
  ir = 'ir',
  en = 'en',
}
interface MultiLanguageText {
  [Languages.en]: string;
  [Languages.ir]?: string;
}
export type { MultiLanguageText };
export { Languages };
