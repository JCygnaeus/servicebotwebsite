export default {
  en: {
    meta: {
      title: 'Servicebot — AI service requests for real estate',
      description: 'Servicebot lets tenants report issues by scanning a QR code and chatting with an AI assistant on WhatsApp.'
    },
    header: {
      language: 'Language'
    },
    footer: {
      trademark: 'Servicebot. WhatsApp is a trademark of its respective owner.',
      privacy: 'Privacy policy'
    },
    hero: {
      badge: 'For landlords and building managers',
      title: 'Get every repair report in full. No more calls back and forth.',
      lead: 'Tenants scan a code and tell you what broke on WhatsApp. You get photos, the exact spot, and how urgent it is.',
      offer: 'In 20 minutes, see a real report go from scan to fixed. You also get a plan for your buildings.',
      points: [
        { title: 'Tenants will use it.', text: 'There is no app to get. They just use WhatsApp.' },
        { title: 'No extra work for your team:', text: 'cases sync with your property system or email.' },
        { title: 'Big problems get help fast.', text: 'Leaks, lockouts and no heat go straight to your staff.' }
      ]
    },
    how: {
      eyebrow: 'How it works',
      title: 'From broken to booked in four steps',
      lead: 'The code knows where the tenant is. So the AI only asks what it needs.',
      steps: [
        {
          title: 'Scan the QR code',
          text: 'Each code is tied to a building, unit or shared space — stairwell, garage, laundry room.'
        },
        {
          title: 'Chat on WhatsApp',
          text: 'WhatsApp opens and knows the spot. The AI asks a few questions and asks for photos.'
        },
        {
          title: 'AI sorts the report',
          text: 'The AI picks the kind of problem and how urgent it is. It writes a short note. Big problems get sent on right away.'
        },
        {
          title: 'Routed and resolved',
          text: 'The work order lands with the right caretaker or contractor. The tenant gets status updates in the same chat.'
        }
      ]
    },
    demo: {
      title: 'Put your first QR code up this week',
      text: 'In 20 minutes, see a real report go from scan to fixed. You also get a plan for your buildings.'
    },
    leadForm: {
      name: 'Name',
      email: 'Work email',
      company: 'Company',
      homes: 'Homes you manage',
      choose: 'Choose',
      homeOptions: ['Under 100', '100–1,000', '1,000–5,000', 'Over 5,000'],
      submit: 'Book my 20-min demo',
      sending: 'Sending...',
      error: 'Could not send the request. Please try again.',
      consent: 'We only use this to set up your demo. Read our',
      privacyLink: 'privacy policy',
      sent: "Thanks! We'll email you within one working day to schedule your demo."
    },
    phone: {
      label: 'Example WhatsApp conversation between a tenant and the AI assistant',
      name: 'Elm Properties Service',
      status: 'AI assistant · replies instantly',
      photo: 'Photo',
      composer: 'Message',
      messages: [
        { from: 'tenant', text: 'Hi! Report from QR: Laundry room, Elm Court 12' },
        { from: 'bot', text: "Thanks! I can see you're in the laundry room at Elm Court 12. What's the problem?" },
        { from: 'tenant', text: 'Washing machine 2 is leaking water on the floor' },
        { from: 'bot', text: 'Sorry about that. Could you send a photo? And is the water still running?' },
        { from: 'tenant', photo: true },
        { from: 'bot', text: "Case #1042 created — priority High. Maintenance has been notified. I'll message you when it's booked." }
      ]
    },
    qr: {
      label: 'Example QR code',
      title: 'Something broken?',
      text: 'Scan to report it on WhatsApp',
      location: 'Elm Court · Laundry room'
    },
    about: {
      title: 'About',
      text: 'Servicebot helps landlords fix things faster. Tenants tell our AI about problems on WhatsApp.'
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      error: 'Could not send the message. Please try again.',
      sent: 'Thanks! We will get back to you soon.'
    },
    privacy: {
      title: 'Privacy policy',
      text: 'When you book a demo, we ask for your name, email, company and how many homes you run. We only use this to set up your demo.',
      question: 'Want to see, fix or delete your data?',
      contactLink: 'Contact us'
    }
  },

  sv: {
    meta: {
      title: 'Servicebot — AI-felanmälan för fastigheter',
      description: 'Med Servicebot gör hyresgäster felanmälan genom att skanna en QR-kod och chatta med en AI-assistent på WhatsApp.'
    },
    header: {
      language: 'Språk'
    },
    footer: {
      trademark: 'Servicebot. WhatsApp är ett varumärke som tillhör sin ägare.',
      privacy: 'Integritetspolicy'
    },
    hero: {
      badge: 'För hyresvärdar och fastighetsförvaltare',
      title: 'Få varje felanmälan komplett. Slipp ringa fram och tillbaka.',
      lead: 'Hyresgäster skannar en kod och berättar på WhatsApp vad som är trasigt. Du får bilder, exakt plats och hur bråttom det är.',
      offer: 'På 20 minuter ser du en riktig felanmälan gå från skanning till lagad. Du får också en plan för dina fastigheter.',
      points: [
        { title: 'Hyresgästerna kommer att använda det.', text: 'Det finns ingen app att ladda ner. De använder bara WhatsApp.' },
        { title: 'Inget extra jobb för ditt team:', text: 'ärendena synkas med ert fastighetssystem eller er e-post.' },
        { title: 'Stora problem får snabb hjälp.', text: 'Läckor, utelåsning och ingen värme går direkt till er personal.' }
      ]
    },
    how: {
      eyebrow: 'Så fungerar det',
      title: 'Från trasigt till bokat i fyra steg',
      lead: 'Koden vet var hyresgästen är. Därför frågar AI:n bara det den behöver.',
      steps: [
        {
          title: 'Skanna QR-koden',
          text: 'Varje kod hör till en byggnad, en lägenhet eller ett gemensamt utrymme — trapphus, garage, tvättstuga.'
        },
        {
          title: 'Chatta på WhatsApp',
          text: 'WhatsApp öppnas och vet platsen. AI:n ställer några frågor och ber om bilder.'
        },
        {
          title: 'AI:n sorterar anmälan',
          text: 'AI:n väljer typ av problem och hur bråttom det är. Den skriver en kort notering. Stora problem skickas vidare direkt.'
        },
        {
          title: 'Skickas vidare och åtgärdas',
          text: 'Arbetsordern hamnar hos rätt fastighetsskötare eller hantverkare. Hyresgästen får statusuppdateringar i samma chatt.'
        }
      ]
    },
    demo: {
      title: 'Sätt upp din första QR-kod redan i veckan',
      text: 'På 20 minuter ser du en riktig felanmälan gå från skanning till lagad. Du får också en plan för dina fastigheter.'
    },
    leadForm: {
      name: 'Namn',
      email: 'Jobbmejl',
      company: 'Företag',
      homes: 'Antal bostäder ni förvaltar',
      choose: 'Välj',
      homeOptions: ['Under 100', '100–1 000', '1 000–5 000', 'Över 5 000'],
      submit: 'Boka min demo på 20 min',
      sending: 'Skickar...',
      error: 'Det gick inte att skicka förfrågan. Försök igen.',
      consent: 'Vi använder bara detta för att boka in din demo. Läs vår',
      privacyLink: 'integritetspolicy',
      sent: 'Tack! Vi mejlar dig inom en arbetsdag för att boka in din demo.'
    },
    phone: {
      label: 'Exempel på en WhatsApp-konversation mellan en hyresgäst och AI-assistenten',
      name: 'Almgårdens Fastigheter',
      status: 'AI-assistent · svarar direkt',
      photo: 'Bild',
      composer: 'Meddelande',
      messages: [
        { from: 'tenant', text: 'Hej! Anmälan från QR: Tvättstuga, Almgården 12' },
        { from: 'bot', text: 'Tack! Jag ser att du är i tvättstugan på Almgården 12. Vad är problemet?' },
        { from: 'tenant', text: 'Tvättmaskin 2 läcker vatten på golvet' },
        { from: 'bot', text: 'Vad tråkigt. Kan du skicka en bild? Och rinner vattnet fortfarande?' },
        { from: 'tenant', photo: true },
        { from: 'bot', text: 'Ärende #1042 skapat — prioritet Hög. Fastighetsskötaren har fått besked. Jag skriver till dig när det är bokat.' }
      ]
    },
    qr: {
      label: 'Exempel på QR-kod',
      title: 'Något trasigt?',
      text: 'Skanna för att anmäla det på WhatsApp',
      location: 'Almgården · Tvättstuga'
    },
    about: {
      title: 'Om oss',
      text: 'Servicebot hjälper hyresvärdar att laga saker snabbare. Hyresgäster berättar om problem för vår AI på WhatsApp.'
    },
    contact: {
      title: 'Kontakt',
      name: 'Namn',
      email: 'E-post',
      message: 'Meddelande',
      send: 'Skicka',
      sending: 'Skickar...',
      error: 'Det gick inte att skicka meddelandet. Försök igen.',
      sent: 'Tack! Vi hör av oss snart.'
    },
    privacy: {
      title: 'Integritetspolicy',
      text: 'När du bokar en demo frågar vi efter ditt namn, din e-post, ditt företag och hur många bostäder ni har. Vi använder bara detta för att boka in din demo.',
      question: 'Vill du se, ändra eller radera dina uppgifter?',
      contactLink: 'Kontakta oss'
    }
  }
}
