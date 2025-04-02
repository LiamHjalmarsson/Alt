import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIndexStore = defineStore('data', () => {
  const hero = ref({
    title: 'Vi hjälper er med allt inom webb',
    subtitle: 'Enkelt och billigt',
    cta: 'Kontakt oss',
  });

  const service = ref({
    title: 'Så kan vi hjälpa er',
    services: [
      {
        id: 1,
        title: 'Cms',
        content: `Vi bygger moderna, snabba och användarvänliga webbplatser som engagerar.`,
        icon: `fluent:content-view-24-regular`,
      },
      {
        id: 2,
        title: 'Ui & Ux',
        content: `Vi optimerar din webbplats för sökmotorer (SEO) så att du syns bättre och når rätt målgrupp.`,
        icon: `material-symbols:design-services-outline-rounded`,
      },
      {
        id: 3,
        title: 'Utvckling',
        content: `Vi utvecklar skräddarsydda lösningar med fokus på funktionalitet, prestanda och långsiktig hållbarhet.`,
        icon: `ic:outline-code-off`,
      },
      {
        id: 4,
        title: 'Hosting',
        content: `Vi erbjuder säker och snabb hosting som garanterar stabil drift och optimal prestanda för din webbplats.`,
        icon: `ant-design:cloud-server-outlined`,
      },
      {
        id: 3,
        title: 'Seo',
        content: `Vi optimerar din webbplats för sökmotorer (SEO) så att du syns bättre och når rätt målgrupp.`,
        icon: `lineicons:seo`,
      },
      {
        id: 3,
        title: 'Accessibility',
        content: `Vi skapar tillgängliga webbplatser som är användarvänliga för alla, oavsett enhet eller behov.`,
        icon: `oui:accessibility`,
      },
    ],
  });

  return {
    hero,
    service,
  };
});
