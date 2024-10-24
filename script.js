document.addEventListener("DOMContentLoaded", function() {
    // إعدادات الزاوية (زاوية الفجر وزاوية العشاء)
    const params = {
        fajrAngle: 16, // زاوية الفجر
        ishaAngle: 14  // زاوية العشاء
    };

    // إعدادات الموقع (خطوط العرض والطول)
    const coordinates = new adhan.Coordinates(33.3152, 44.3661); // بغداد

    // حساب أوقات الصلاة بناءً على الزوايا
    const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);

    // تحويل الأرقام إلى الأرقام الهندية
    function toArabicNumbers(num) {
        return num.replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
    }

    // تنسيق الوقت بدون ثواني
    function formatTime(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'مساءً' : 'صباحًا';
        const displayHours = hours % 12 || 12;
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${toArabicNumbers(displayHours + ':' + displayMinutes)} ${ampm}`;
    }

    // تعيين أوقات الصلاة في الجدول
    document.getElementById("fajr-time").textContent = formatTime(prayerTimes.fajr);
    document.getElementById("dhuhr-time").textContent = formatTime(prayerTimes.dhuhr);
    document.getElementById("maghrib-time").textContent = formatTime(prayerTimes.maghrib);
    document.getElementById("isha-time").textContent = formatTime(prayerTimes.isha);
    document.getElementById("sunset-time").textContent = formatTime(prayerTimes.maghrib); // وقت الغروب يساوي المغرب

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
        
        // تحويل الأرقام إلى الأرقام الهندية
        const formattedDateTimeArabic = toArabicNumbers(formattedDateTime);

        // تحديث النص
        document.getElementById("current-date-time").textContent = formattedDateTimeArabic;
    }

    // استدعاء الدالة عند التحميل وتحديث الوقت كل ثانية
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
