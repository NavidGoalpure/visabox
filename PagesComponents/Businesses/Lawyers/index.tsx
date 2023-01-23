import { assssingAuthorities } from "./const";

function Content() {
  const foo = assssingAuthorities;
  return (
    <div>
      <img src={foo?.[0]?.avatar} alt="" />
    </div>
  );
}
export default Content;
