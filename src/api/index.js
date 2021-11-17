import { isServer } from "../utils";
import { requestTransform as clientRequest } from "./client";
import { requestTransform as serverRequest } from "./server";

const apiList = {
    findImageList:{
        url:'/image/find',
        method:'get'
    },
    findByAuthImageList:{
        url:'/image/findByAuth',
        method:'get'
    },
    login:{
        url:'/user/login',
        method:'post'
    }
};
const apiRequest = isServer ? serverRequest : clientRequest;

export default apiRequest(apiList);
