interface MediaQueryTools {
  isServer: boolean;
  isClient: boolean;
}
const useSsr = (): MediaQueryTools => {
  const isServer = typeof window === 'undefined';
  return {
    isServer,
    isClient: !isServer,
  };
};
export default useSsr;
