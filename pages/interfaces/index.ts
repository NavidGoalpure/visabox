enum Languages {
  ir = 'ir',
  en = 'en',
}
interface MultiLanguage {
  [Languages.ir]: string;
  [Languages.en]: string;
}
export type { MultiLanguage };
export { Languages };
