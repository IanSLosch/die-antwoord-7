import moment from "moment";

jQuery(document).ready(function ($) {
  const countdownElement = $(".countdown");
  const countDownDate = moment('2024-03-23 11:00-07:00', "YYYY-MM-DD HH:mmZZ");
  // Update the count down every second
  let x = setInterval(function () {
    const now = moment();
    const diffSeconds = countDownDate.diff(now, 'seconds');

    if (diffSeconds > 86400) {
      const days = Math.floor(diffSeconds / 86400);
      countdownElement.html(`<span class="days">${days} Day</span>`);
    } else {
      const hours = Math.floor(diffSeconds / 3600);
      const minutes = Math.floor((diffSeconds % 3600) / 60);
      const seconds = diffSeconds % 60;

      countdownElement.html(`
        <span class="hours10">${Math.floor(hours / 100)}</span>
        <span class="hours1">${Math.floor((hours % 100) / 10)}</span>
        :
        <span class="minutes10">${Math.floor(minutes / 10)}</span>
        <span class="minutes1">${minutes % 10}</span>
        :
        <span class="seconds10">${Math.floor(seconds / 10)}</span>
        <span class="seconds1">${seconds % 10}</span>
      `);
    }

    if (diffSeconds < 0) {
      clearInterval(x);
      countdownElement.hide();
      $(".preorder").html(`<img src="./dist/img/watch.png" alt="Watch">`);
    }
  }, 1000);
});
