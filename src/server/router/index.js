import Router from 'koa-router';
import Controller from '../controller/index.js'

const router = new Router();
router.get(/\.*/,Controller.get);

export default router;