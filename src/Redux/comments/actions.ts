import { DATA_COMMENTS } from "./action-types";

export const sendComment = (payload: {
  idFilm: number;
  idComment: string;
  comment: string;
}) => {
  return {
    type: DATA_COMMENTS.SEND_COMMENT,
    ...payload,
  } as const;
};

export const sendCommentStart = () => {
  return {
    type: DATA_COMMENTS.SEND_COMMENT_START,
  } as const;
};

export const sendCommentSuccess = (payload: any) => {
  return {
    type: DATA_COMMENTS.SEND_COMMENT_SUCCESS,
    payload,
  } as const;
};

export const sendCommentFail = () => {
  return {
    type: DATA_COMMENTS.SEND_COMMENT_FAIL,
  } as const;
};
