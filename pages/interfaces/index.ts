enum Languages {
  ir = 'ir',
  en = 'en',
}
interface MultiLanguageText {
  [Languages.ir]: string;
  [Languages.en]: string;
}
export type { MultiLanguageText };
export { Languages };
