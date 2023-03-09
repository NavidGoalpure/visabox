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
        phone: "+98 9113410070",
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
            en: "Hassan Amirshahi",
            fa: "حسن امیرشاهی"
        },
        phone: "+98 2188311593,+98 9121077760",
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
            en: "Roxana Moallemian",
            fa: "رکسانا معلمیان"
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
        phone: "+98 2122704817,+98 9013788625",
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
        phone: "+98 9122151862",
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
        phone: "+98 9153137087,+98 5138430730",
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
        phone: "+98 5137672809",
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
        phone: "+98 21665645912,+98 9125139310",
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
        phone: "+98 2188822452-+98 2188862034, +989211914685-9122790683",
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
        phone: "+98 9122389210",
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
        phone: "+98 2188240445",
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
        phone: "+98 9121083186",
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
        phone: "+98 2122743307",
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