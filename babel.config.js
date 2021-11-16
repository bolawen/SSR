const presets=[
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: "3.11.0",
    },
  ],
  "@babel/preset-react"
]
const plugins=["@babel/plugin-transform-runtime"]
module.exports={
  presets,
  plugins
}