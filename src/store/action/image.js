import api from "../../api";
import { ChangeImageList } from "../type";

export const changeImageList = (data) => {
  return {
    type: ChangeImageList,
    data,
  };
};

export const changeImageListAsync = (playload) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      const { code, data } = await api.findImageList(playload);
      if (code == 0) {
        dispatch(changeImageList(data));
        resolve();
      }else{
        reject();
      }
    });
  };
};
