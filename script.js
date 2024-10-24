document.addEventListener("DOMContentLoaded", function() {
    // أوقات الصلاة بدون ثواني
    const prayerTimes = {
        fajr: "4:51",
        dhuhr: "11:48",
        maghrib: "5:18"
    };

    // تعيين أوقات الصلاة في الجدول
    document.getElementById("fajr-time").textContent = prayerTimes.fajr;
    document.getElementById("dhuhr-time").textContent = prayerTimes.dhuhr;
    document.getElementById("maghrib-time").textContent = prayerTimes.maghrib;
});
