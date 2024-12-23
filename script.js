// Countdown Logic
const countdown = () => {
    const currentDate = new Date();
    const weddingDate = new Date("2025-02-02T00:00:00");
    const timeDifference = weddingDate - currentDate;

  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

   
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
};


setInterval(countdown, 1000);
