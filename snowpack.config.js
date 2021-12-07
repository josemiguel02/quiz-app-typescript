// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/src",
    public: "/"
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    source: "remote"
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
