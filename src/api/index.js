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
        url:'/userByJwt/login',
        method:'post'
    },
    findUser:{
        url:'/userByJwt/find',
        method:'get'
    }
};
const apiRequest = isServer ? serverRequest : clientRequest;

export default apiRequest(apiList);
