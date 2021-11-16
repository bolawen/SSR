import Koa from 'koa';
import KoaStatic from 'koa-static'
import {relativeToRoot} from '../utils/path';

const app = new Koa();
app.use(KoaStatic(relativeToRoot('./build')));
app.use(KoaStatic(relativeToRoot('./public')));
const requireContext = require.context('./router',false,/.js$/);
const requireAll = context => context.keys().map(context);
requireAll(requireContext).forEach(item=>{
  let router=item.default;
  app.use(router.routes()).use(router.allowedMethods());
});
app.listen(8090,()=>{
  console.log('渲染服务启动成功！');
});