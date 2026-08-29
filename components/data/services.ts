import { Language } from "./translations";

export interface Service {
    number: string;
    title: string;
    description: string;
    image: string;
}

export const services: Record<Language, Service[]> = {
    en: [
        {
            number: "01",
            title: "WEBSITE DESIGN & DEVELOPMENT",
            description: "Professional websites created to strengthen your online presence and support business growth.",
            image: "/images/services/service-01.jpg",
        },
        {
            number: "02",
            title: "SOCIAL MEDIA MANAGEMENT",
            description: "Strategic content planning, professional creation, publishing and account management.",
            image: "/images/services/service-02.jpg",
        },
        {
            number: "03",
            title: "DESIGN, BRANDING & PRINTING",
            description: "Creative design, visual identity, marketing materials and professional print solutions.",
            image: "/images/services/service-03.jpg",
        },
        {
            number: "04",
            title: "PHOTOGRAPHY & VIDEO",
            description: "Creative design, visual identity, marketing materials and professional print solutions.",
            image: "/images/services/service-04.jpg",
        },
        {
            number: "05",
            title: "DIGITAL ADVERTISING",
            description: "Targeted digital campaigns across Google and social platforms to increase visibility and reach.",
            image: "/images/services/service-05.png",
        },
        {
            number: "06",
            title: "SOCIAL MEDIA GROWTH",
            description: "Strategic growth solutions designed to strengthen your social presence, reach and audience engagement.",
            image: "/images/services/service-06.png",
        },
    ],

    ar: [
        {
            number: "01",
            title: "تصميم وتطوير المواقع الإلكترونية",
            description: "مواقع إلكترونية احترافية تعزز حضورك الرقمي وتدعم نمو أعمالك.",
            image: "/images/services/service-01.jpg",
        },
        {
            number: "02",
            title: "إدارة وسائل التواصل الاجتماعي",
            description: "تخطيط استراتيجي للمحتوى وإنشاء احترافي ونشر وإدارة الحسابات.",
            image: "/images/services/service-02.jpg",
        },
        {
            number: "03",
            title: "التصميم والهوية التجارية والطباعة",
            description: "تصميم إبداعي وهوية بصرية ومواد تسويقية وحلول طباعة احترافية.",
            image: "/images/services/service-03.jpg",
        },
        {
            number: "04",
            title: "التصوير والفيديو",
            description: "حلول إبداعية للتصوير وإنتاج الفيديو والمحتوى المرئي لأعمالك.",
            image: "/images/services/service-04.jpg",
        },
        {
            number: "05",
            title: "الإعلان الرقمي",
            description: "حملات إعلانية رقمية مستهدفة عبر Google ومنصات التواصل الاجتماعي لزيادة الظهور والوصول.",
            image: "/images/services/service-05.png",
        },
        {
            number: "06",
            title: "نمو وسائل التواصل الاجتماعي",
            description: "حلول استراتيجية للنمو مصممة لتعزيز حضورك على وسائل التواصل الاجتماعي، وتوسيع نطاق الوصول، وزيادة تفاعل الجمهور.",
            image: "/images/services/service-06.png",
        },
    ],
};