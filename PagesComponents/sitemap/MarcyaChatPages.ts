import { Domain_Langs } from './const';

function MarcyaChatPages(): string[] {
  const res = Domain_Langs.map((lang) => {
    return `
         <url>
           <loc>${lang}/australia-migration-ai/marcya</loc>
         </url>`;
  });
  return res;
}
export { MarcyaChatPages };