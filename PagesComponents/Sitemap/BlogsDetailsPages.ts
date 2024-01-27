import { IBlog } from 'Interfaces/Database/blog';

interface Props {
  allBlogsSlugsAndLang: IBlog[];
}
function BlogsDetailsPages({ allBlogsSlugsAndLang }: Props): string {
  const res = allBlogsSlugsAndLang
    .map((blog) => {
      return `<url>
       <loc>https://marabox.com.au/${blog.language}/blogs/${blog.slug?.current}</loc>
    </url>`;
    })
    .join('');
  return res;
}
export { BlogsDetailsPages };
