module.exports = {
  mode: "development",
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude:/node_modules/,
      },
      {
        test:/.(png|jpe?g|gif|svg)$/i,
        type:'asset',
        generator:{
          filename:'images/[name]-[hash][ext]'
        }
      }
    ]
  },
};
