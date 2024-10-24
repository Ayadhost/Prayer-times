document.addEventListener("DOMContentLoaded", function() {
    // إعداد الإحداثيات لموقع بغداد
    const coordinates = new adhan.Coordinates(33.3152, 44.3661); // إحداثيات بغداد
    
    // إعداد معايير الحساب وتحديد الزوايا يدويًا
    const params = adhan.CalculationMethod.MuslimWorldLeague(); // أو استخدم طريقة حساب مفضلة
    params.fajrAngle = 16;  // زاوية الفجر حسب المذهب الشيعي
    params.ishaAngle = 4;   // زاوية العشاء حسب المذهب الشيعي

    // حساب أوقات الصلاة
    const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);
    
    // تحويل الأوقات إلى صيغة ساعة ودقيقة بدون ثوانٍ
    const fajrTime = prayerTimes.fajr.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dhuhrTime = prayerTimes.dhuhr.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const maghribTime = prayerTimes.maghrib.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // تحويل الأرقام إلى الأرقام الهندية
    function toArabicNumbers(num) {
        return num.replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
    }

    // تعيين أوقات الصلاة في الجدول مع تحويل الأرقام
    document.getElementById("fajr-time").textContent = toArabicNumbers(fajrTime);
    document.getElementById("dhuhr-time").textContent = toArabicNumbers(dhuhrTime);
    document.getElementById("maghrib-time").textContent = toArabicNumbers(maghribTime);

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
