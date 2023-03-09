import { MultiLanguageText } from "Interfaces";

interface Naati {
    fullName: MultiLanguageText;
    phone?: string;
    email?: string;
    language: MultiLanguageText[];
    location?: MultiLanguageText;
    website?: string;
}

const naaties: Naati[] = [
    {
        fullName: {
            en: "Navid Armiun",
            fa: "نوید آرمیون"
        },
        phone: "+989113410070",
        email: "armiun@hotmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
        website: "www.armiun.com",
    },
    {
        fullName: {
            en: "Behnood Olfatpour",
            fa: "بهبود الفت پور"
        },
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
    },
    {
        fullName: {
            en: "Seyed Hassan Amirshahi",
            fa: "سید حسن امیرشاهی"
        },
        phone: "++98 2188311593, 98 9121077760",
        email: "info@amirshahilaw.com, translation.office14@gmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
        website: "www.lawiran.org",
    },
    {
        fullName: {
            en: "Roxana Moallemian Barmi",
            fa: "رکسانا معلمیان بارمی"
        },
        email: "roxanabarmi@gmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        }],
    },
    {
        fullName: {
            en: "Matin Amirshahi",
            fa: "متین امیرشاهی"
        },
        phone: "+982122704817, +989013788625",
        email: "translation@amirshahi.law",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        },
        {
            en: "English to Persian",
            fa: "انگلیسی به فارسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
        website: "www.amirshahi.law",
    },
    {
        fullName: {
            en: "Gholamreza Tajvidi",
            fa: "غلامرضا تجویدی"
        },
        phone: "98 9122151862",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        },
        {
            en: "English to Persian",
            fa: "انگلیسی به فارسی"
        }],
    },
    {
        fullName: {
            en: "Ali Khazaee Farid",
            fa: "علی خرایی فرید"
        },
        phone: "00989153137087, 0098 51 38430730",
        email: "rezakhfarid@gmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
    },
    {
        fullName: {
            en: "Khalil Motallebzadeh",
            fa: "خلیل مطلب زاده"
        },
        phone: "+98(51)37672809",
        email: "soroosh12@gmail.com, kmotallebz@gmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        },
        {
            en: "English to Persian",
            fa: "انگلیسی به فارسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
        website: "www.soroosh483.ir",
    },
    {
        fullName: {
            en: "Somayyeh Karami",
            fa: "صمیه کرمی"
        },
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        }],
    },
    {
        fullName: {
            en: "Mohammadreza Hosseini",
            fa: "محمدرضا حسینی"
        },
        phone: "+98 21 66 5645 91-2, +98 9125139310",
        email: "shakiba11@yahoo.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        },
        {
            en: "English to Persian",
            fa: "انگلیسی به فارسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
        website: "www.Tarjom.com",
    },
    {
        fullName: {
            en: "Atefeh Pashazadeh",
            fa: "عاطفه پاشازاده"
        },
        phone: "02188822452- 02188862034, 00989211914685-9122790683",
        email: "atefeh.pashazadeh@gmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        },
        {
            en: "English to Persian",
            fa: "انگلیسی به فارسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
        website: "www.tehrannaati.com",
    },
    {
        fullName: {
            en: "Majid Fatahipour",
            fa: "مجید فتاحی پور"
        },
        phone: "00989122389210",
        email: "majifata@gmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
    },
    {
        fullName: {
            en: "Shahram Mirzaei",
            fa: "دکتر نوید آرمیون"
        },
        phone: "+982188240445",
        email: "translation@aryagroup.com.au",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        },
        {
            en: "English to Persian",
            fa: "انگلیسی به فارسی"
        }],
        website: "www.aryagroup.co.ir",
    },
    {
        fullName: {
            en: "Alireza Mamdoohi",
            fa: "علیرضا ممدوهی"
        },
        phone: "0912 108 3186",
        email: "mamdoohi.ar@gmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        }],
    },
    {
        fullName: {
            en: "Alireza Hassani",
            fa: "علیرضا حسنی"
        },
        phone: "+982122743307",
        email: "alirezaabiz@gmail.com",
        language: [{
            en: "Persian to English",
            fa: "فارسی به انگلیسی"
        },
        {
            en: "English to Persian",
            fa: "انگلیسی به فارسی"
        }],
        location: {
            en: "Iran",
            fa: "ایران"
        },
        website: "www.abiztranslation.ir",
    },
]