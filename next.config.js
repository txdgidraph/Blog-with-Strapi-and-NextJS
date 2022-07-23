// const production = process.env.NODE_ENV === "production";
// let url = "";
// const url = production
//   ? "https://www.yoursite.com"
//   : "http://localhost:1337";

// module.exports = {
//   serverRuntimeConfig: {
//     url: "http://192.168.1.63:1337",
//   },
// };

const production = process.env.NODE_ENV === "production";

export const url = production
  ? "https://www.yoursite.com"
  : "http://192.168.1.63:1337";
