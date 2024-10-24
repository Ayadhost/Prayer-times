document.addEventListener("DOMContentLoaded", function() {
    // أوقات الصلاة
    const prayerTimes = {
        fajr: "4:51",
        dhuhr: "11:48",
        maghrib: "5:18"
    };

    // ضبط الأوقات في العناصر
    document.getElementById("fajr-time").textContent = prayerTimes.fajr;
    document.getElementById("dhuhr-time").textContent = prayerTimes.dhuhr;
    document.getElementById("maghrib-time").textContent = prayerTimes.maghrib;
});
