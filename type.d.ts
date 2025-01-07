declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}
declare module 'isbot-fast' {
  function isbot(userAgent: string): boolean;
  export = isbot;
}
