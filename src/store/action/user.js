import api from "../../api/index";
import { ChangeUser } from "../type";

export const changeUser = (data) => {
  return {
    type: ChangeUser,
    data,
  };
};
export const login = (playload) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { code } = await api.login(playload);
        if (code == 0) {
          resolve();
        } else {
          reject();
        }
      } catch (error) {
        reject();
      }
    });
  };
};
export const findUser = () => {
  return (dispatch,state,ctx) => {
    return new Promise(async (resolve, reject) => {
      try {
        const {code,data} =await api.findUser({},ctx);
        if(code==0){
          dispatch(changeUser({username:data}));
          resolve();
        }else{
          reject();
        }
      }catch(error){
        reject();
      }
    });
  };
};
