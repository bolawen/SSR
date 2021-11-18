import { GetServerStore } from "../../store/index";
import { render, preRender, buildHtmlString } from "../../lib/ssr";

class Controller {
  static async get(ctx) {
    const context = {css:[]};
    const store = GetServerStore();
    await preRender(ctx, store);
    const content = await render(ctx, context, store);
    const htmlString = await buildHtmlString(ctx, store, content,context);
    if (context.NOT_FOUND) {
      ctx.response.status = 404;
    }
    ctx.body = htmlString;
  }
}

export default Controller;


