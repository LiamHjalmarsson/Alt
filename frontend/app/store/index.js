import { defineStore } from "pinia";
import { ref } from "vue";

export const useIndexStore = defineStore("data", () => {
  const { find, findOne } = useStrapi();

  const hero = ref({
    title: "Vi hjälper er med allt inom webb",
    subtitle: "Enkelt och billigt",
    cta: "Kontakt oss",
    image: "",
  });

  const service = ref({
    title: "Så kan vi hjälpa er",
    services: [
      {
        id: 1,
        title: "Cms",
        content: `Vi bygger moderna, snabba och användarvänliga webbplatser som engagerar.`,
        icon: `fluent:content-view-24-regular`,
      },
      {
        id: 2,
        title: "Ui & Ux",
        content: `Vi optimerar din webbplats för sökmotorer (SEO) så att du syns bättre och når rätt målgrupp.`,
        icon: `material-symbols:design-services-outline-rounded`,
      },
      {
        id: 3,
        title: "Utvckling",
        content: `Vi utvecklar skräddarsydda lösningar med fokus på funktionalitet, prestanda och långsiktig hållbarhet.`,
        icon: `ic:outline-code-off`,
      },
      {
        id: 4,
        title: "Hosting",
        content: `Vi erbjuder säker och snabb hosting som garanterar stabil drift och optimal prestanda för din webbplats.`,
        icon: `ant-design:cloud-server-outlined`,
      },
      {
        id: 3,
        title: "Seo",
        content: `Vi optimerar din webbplats för sökmotorer (SEO) så att du syns bättre och når rätt målgrupp.`,
        icon: `lineicons:seo`,
      },
      {
        id: 3,
        title: "Accessibility",
        content: `Vi skapar tillgängliga webbplatser som är användarvänliga för alla, oavsett enhet eller behov.`,
        icon: `oui:accessibility`,
      },
    ],
  });

  const visability = ref({
    title: "Varför synas på webben",
    list: [
      {
        id: 1,
        title: "Bättre synlighet",
        description: `Vårt mål är att förstå varje kunds verksamhet och den marknad de verkar på. Vi strävar efter att helt sätta oss in i målgruppen och deras behov – för att skapa digitala lösningar som engagerar och levererar verkligt värde.`,
      },
      {
        id: 2,
        title: "Ökat förtroende",
        description: `Vår planeringsprocess förvandlar insikter till en tydlig handlingsplan som hjälper dig att nå dina affärsmål. Genom att förstå dina behov skapar vi en strategi som ökar trafiken, engagerar besökare och omvandlar dem till kunder.`,
      },
      {
        id: 3,
        title: "Finns för alla",
        description: `Vi kombinerar estetik och funktion för att skapa digitala upplevelser som fångar användarnas uppmärksamhet. Vår designprocess fokuserar på användarvänlighet och varumärkesidentitet – allt för att öka engagemang och driva konverteringar.`,
      },
      {
        id: 4,
        title: "Stick ut",
        description: `Vi bygger snabba, skalbara och säkra digitala lösningar anpassade efter dina affärsbehov. Med modern teknik och smart kod tar vi din webbplats eller applikation från idé till verklighet – alltid med fokus på prestanda, användarupplevelse och långsiktig hållbarhet.`,
      },
      {
        id: 5,
        title: "Ökad försäljning",
        description: `Vi kombinerar estetik och funktion för att skapa digitala upplevelser som fångar användarnas uppmärksamhet. Vår designprocess fokuserar på användarvänlighet och varumärkesidentitet – allt för att öka engagemang och driva konverteringar.`,
      },
      {
        id: 6,
        title: "Mät och förbättra",
        description: `Vi bygger snabba, skalbara och säkra digitala lösningar anpassade efter dina affärsbehov. Med modern teknik och smart kod tar vi din webbplats eller applikation från idé till verklighet – alltid med fokus på prestanda, användarupplevelse och långsiktig hållbarhet.`,
      },
    ],
  });

  const offer = ref({
    title: "Rätt lösning för digg företag",
    list: [
      {
        id: 1,
        title: "Ny hemsida",
        description: `En ny hemsida är den digitala kärnan i ditt företag – vi skapar en skräddarsydd, visuellt tilltalande och högpresterande webbplats som engagerar besökare och stärker din varumärkesidentitet.`,
        icon: "uil:github",
        details: [],
      },
      {
        id: 2,
        title: "Befintlig hemsida",
        description: `Har du redan en hemsida men vill förbättra den? Vi hjälper dig att uppdatera design, hastighet, säkerhet och SEO så att din webbplats presterar bättre.`,
        icon: "uil:accessible-icon-alt",
        details: [],
      },
    ],
  });

  const project = ref([]);

  const faq = ref({
    title: "Vanliga frågor",
    questions: [
      {
        id: 1,
        title:
          "Varför behöver min verksamhet anlita en webbyrå?",
        answer: "",
      },
      {
        id: 2,
        title:
          "Hur lång tid tar det för er att skapa en hemsida?",
        answer: "",
      },
      {
        id: 3,
        title: "Vilka tjänster erbjuder ni?",
        answer: "",
      },
    ],
  });

  const articles = ref([]);

  const getProjects = async () => {
    let projects = await find("projects", {
      populate: "*",
    });

    console.log(projects.data);
    project.value = projects.data 
  }

  const getArticles = async () => {
    const { data } = await find("articles", {
      populate: "*"
      // populate:{
      //   blocks: {
      //     on: {
      //       "blocks.hero": {
      //         populate: "*",
      //       },
      //     }
      //   }
      // }
    });
  
    articles.value = data;
  
    console.log(articles.value);
  };

  return {
    hero,
    service,
    visability,
    offer,
    project,
    faq,
    articles,
    getArticles
  };
});
