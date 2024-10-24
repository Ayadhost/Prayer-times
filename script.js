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
        
        // الحصول على أجزاء التاريخ
        const day = currentDateTime.getDate();
        const month = currentDateTime.getMonth() + 1; // getMonth() تعطي الشهور من 0 إلى 11، لذلك نضيف 1
        const year = currentDateTime.getFullYear();
        const hours = currentDateTime.getHours();
        const minutes = currentDateTime.getMinutes();
        const seconds = currentDateTime.getSeconds();
        const ampm = hours >= 12 ? 'مساءً' : 'صباحًا';
        
        // تحويل الساعات إلى نظام 12 ساعة
        const displayHours = hours % 12 || 12;
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
        
        // تنسيق التاريخ والوقت
        const formattedDateTime = `${day}-${month}-${year} ${displayHours}:${displayMinutes}:${displaySeconds} ${ampm}`;
        
        // تحديث النص
        document.getElementById("current-date-time").textContent = formattedDateTime;
    }

    // استدعاء الدالة عند التحميل وتحديث الوقت كل ثانية
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
