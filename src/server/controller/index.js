import { render, buildHtmlString } from "../../lib/ssr";

class Controller {
  static async get(ctx) {
    const context = {};
    const content = await render(ctx,context);
    const htmlString = await buildHtmlString(ctx, content);
    if(context.NOT_FOUND){
      ctx.response.status=404;
    }
    ctx.body = htmlString;
  }
}

export default Controller;
