/* eslint-disable no-unused-vars */
export enum device {
  mobileS = `(max-width: 320px)`,
  mobileM = `(max-width: 375px)`,
  // mobileL = `(max-width: 425px)`,
  mobileL = `(max-width: 550px)`,
  tabletS = `(max-width: 600px) `,
  tabletM = `(max-width: 768px) `,
  tabletL = `(max-width: 800px) `,
  laptopXS = `(max-width: 1024px)`,
  laptopS = `(max-width: 1280px)`,
  laptopM = `(max-width: 1366px)`,
  laptopL = `(max-width: 1440px)`,
  desktop = `(max-width: 2560px)`,
}

export enum deviceMin {
  mobileM = `(min-width: 321px)`,
  mobileL = `(min-width: 376px)`,
  // tabletS = `(min-width: 426px)`,
  tabletS = `(min-width: 551px)`,
  tabletM = `(min-width: 601px) `,
  tabletL = `(min-width: 769px) `,
  laptopXS = `(min-width: 801px) `,
  laptopS = `(min-width: 1025px)`,
  laptopM = `(min-width: 1281px)`,
  laptopL = `(min-width: 1367px)`,
  desktop = `(min-width: 1441px)`,
}

//use in mediaQuery with maxWidth
export const deviceSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 550,
  tabletS: 600,
  tabletM: 768,
  tabletL: 800,
  laptopXS: 1024,
  laptopS: 1280,
  laptopM: 1366,
  laptopL: 1440,
  desktop: 2560,
};
