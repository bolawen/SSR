import {render,buildHtmlString} from '../../lib/ssr'

class Controller{
  static async get(ctx){
    const content = await render();
    const htmlString = await buildHtmlString(content);
    ctx.body = htmlString;
  }
}

export default Controller