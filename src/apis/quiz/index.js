import request from "../request";

export const apiGetQuizs = () => {
  return request(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`);
}
