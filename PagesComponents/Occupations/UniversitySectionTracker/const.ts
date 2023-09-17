import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  Title = "Title",
  Desc = "Desc",
  Placeholder = "Placeholder"
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    en: "Find university section",
    fa: "جستجوی سکشن دانشگاه",
    zh: "查找大学部分",
  },
  Desc: {
    en: `with this tool, you can find out what section the university you studied in has according to the Australian Immigration Department.

For this, search for the name of the university or the city where the university is located and find your university among the available options. Note that you must enter at least three letters to start this search.`,
    fa: `        با استفاده از این ابزار می توانید بفهمید دانشگاهی که در آن درس خوانده
          اید از نظر اداره مهاجرت استرالیا دارای چه سکشنی می باشد.`,
    zh: `通过这个工具，您可以根据澳大利亚移民局的信息，了解您所就读的大学属于哪个部门。

          为此，请搜索大学名称或大学所在城市的名称，然后在可用选项中找到您的大学。 请注意，您必须输入至少三个字母才能开始此搜索。`,
  },
  Placeholder: {
    en: "Search",
    fa: "جستجو",
    zh: "搜索",
  },
};
