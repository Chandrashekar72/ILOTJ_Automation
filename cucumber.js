module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "src/hooks/hooks.ts",
      "src/steps/**/*.ts",
      "src/world/customWorld.ts"
    ],
    paths: ["features/**/*.feature"],
    format: ["progress", "html:reports/report.html"],
    parallel: 1,
    retry: 0
  }
}