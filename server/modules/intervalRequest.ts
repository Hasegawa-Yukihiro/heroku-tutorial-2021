import axios from "axios";

export const intervalRequest = () => {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  let interval: ReturnType<typeof setTimeout> | null = null;

  const request = async () => {
    return axios.get("https://heroku-tutorial-2021.herokuapp.com/");
  };

  // // 毎夜23:59でインターバル終了
  setTimeout(() => {
    if (interval) {
      clearInterval(interval);
    }
  }, new Date().setHours(22, 0, 0, 0) - new Date().setHours(currentHour, currentMinute));

  // 毎朝7時からインターバルスタート
  setTimeout(() => {
    // herokuの仕様で30分リクエストがないとスリープしてしまうため30分ごとにリクエスト送信
    interval = setInterval(request, 60000 * 29);
  }, new Date().setHours(7, 0, 0, 0) - new Date().setHours(currentHour, currentMinute));
};
