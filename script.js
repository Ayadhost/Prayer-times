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

    // تحديث التاريخ والوقت الحالي في الحقل تحت العنوان
    function updateDateTime() {
        const currentDateTime = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const formattedDateTime = currentDateTime.toLocaleDateString('ar-EG', options);
        document.getElementById("current-date-time").textContent = formattedDateTime;
    }

    // استدعاء الدالة عند التحميل وتحديث الوقت كل ثانية
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
