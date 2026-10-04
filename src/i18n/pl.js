// Тексты сайта на польском. *слово* → маркерное выделение, \n → перенос строки.
export default {
  name: 'Polski',
  locale: 'pl_PL',
  meta: {
    title: 'MOST — szkoła języka angielskiego i niemieckiego w Krakowie',
    description:
      'Kursy angielskiego i niemieckiego w Krakowie i online: dzieci, młodzież, dorośli, firmy. Matura, Cambridge, Goethe-Zertifikat. Grupy do 8 osób, darmowa lekcja próbna i test poziomu.',
  },
  logoTag: 'szkoła językowa',
  nav: {
    skip: 'Przejdź do treści',
    menu: 'Menu główne',
    open: 'Otwórz menu',
    close: 'Zamknij menu',
    cta: 'Lekcja próbna',
    items: {
      languages: 'Języki',
      courses: 'Kursy',
      method: 'Metoda',
      levels: 'Poziomy',
      teachers: 'Lektorzy',
      pricing: 'Cennik',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
  },

  hero: {
    note: 'Hello! · Hallo! · Cześć!',
    title: 'Angielski i niemiecki,\n*który zostaje w głowie*',
    lead: 'Uczymy mówić od pierwszej lekcji — w małych grupach, z lektorami, którzy naprawdę lubią ludzi. Stacjonarnie na Starym Mieście w Krakowie i online.',
    primary: 'Zapisz się na lekcję próbną',
    secondary: 'Sprawdź swój poziom',
    call: 'Zadzwoń do nas',
    free: 'pierwsza lekcja gratis',
    stats: [
      { value: '13', label: 'lat uczymy w Krakowie' },
      { value: '2 400+', label: 'kursantów i kursantek' },
      { value: '96%', label: 'zdanych egzaminów' },
    ],
    stickers: ['Hello!', 'Guten Tag!', 'Cheers', 'Danke!', 'How are you?', 'Wie geht’s?'],
    polaroid: 'grupa B1, czwartek 18:00 ☺',
  },

  marquee: ['Speak up', 'Sprich mit uns', 'Matura', 'Cambridge', 'Goethe-Zertifikat', 'Small talk', 'Business English', 'Deutsch im Beruf', 'IELTS', 'Konversacje'],

  languages: {
    eyebrow: 'Dwa języki, jedna szkoła',
    title: 'Wybierz język — *albo oba*',
    lead: 'Angielski otwiera świat, niemiecki — rynek pracy tuż za granicą. Uczymy obu od zera do C2, z tym samym podejściem: dużo mówienia, mało nudy.',
    items: [
      {
        key: 'en',
        flag: 'EN',
        word: 'Hello',
        name: 'Angielski',
        sub: 'English',
        text: 'Od pierwszych słów po swobodne rozmowy, prezentacje i egzaminy. Brytyjski i amerykański — wybierasz, co bliżej Twojemu uchu.',
        points: ['Poziomy A1–C2', 'Matura podstawowa i rozszerzona', 'Cambridge: B2 First, C1 Advanced, C2 Proficiency', 'IELTS i Business English'],
        fact: 'Czy wiesz, że „set” ma ponad 400 znaczeń?',
      },
      {
        key: 'de',
        flag: 'DE',
        word: 'Hallo',
        name: 'Niemiecki',
        sub: 'Deutsch',
        text: 'Gramatyka bez strachu i słownictwo, które przyda się w pracy, na studiach i u rodziny w Berlinie czy Wiedniu.',
        points: ['Poziomy A1–C2', 'Matura i olimpiady', 'Goethe-Zertifikat, TestDaF, ÖSD', 'Deutsch im Beruf — dla pracujących'],
        fact: 'Czy wiesz, że „Kummerspeck” to boczek z zajadania smutków?',
      },
    ],
  },

  courses: {
    eyebrow: 'Kursy',
    title: 'Kurs na *każdy etap* życia',
    lead: 'Grupy dobieramy według poziomu i wieku — po teście, nie „na oko”. Zajęcia 2 × 90 minut w tygodniu albo intensywnie w weekendy.',
    hours: 'h / tydzień',
    items: [
      { img: 'kids', age: '6–12 lat', title: 'Dzieci', text: 'Gry, piosenki, projekty i ruch. Dziecko uczy się języka tak, jak uczyło się polskiego — przez zabawę.', hours: '2', tag: 'max 6 osób' },
      { img: 'teens', age: '13–19 lat', title: 'Młodzież i matura', text: 'Solidna gramatyka, dużo mówienia i próbne matury co semestr. Plus pomoc w bieżących sprawdzianach.', hours: '3', tag: 'próbne matury' },
      { img: 'adults', age: '19+', title: 'Dorośli', text: 'Od „zaczynam od zera” po „chcę wreszcie mówić płynnie”. Wieczorami, w miłej atmosferze, bez szkolnego stresu.', hours: '3', tag: 'wieczorami' },
      { img: 'exams', age: 'B2–C2', title: 'Egzaminy', text: 'Cambridge, IELTS, Goethe-Zertifikat, TestDaF. Strategie, próbne arkusze i feedback do każdego wypracowania.', hours: '4', tag: 'z próbnymi testami' },
      { img: 'business', age: 'dla firm', title: 'Język w firmie', text: 'Kursy szyte na miarę zespołu: maile, spotkania, negocjacje, rozmowy z klientem. U Was w biurze lub online.', hours: '2–4', tag: 'faktura VAT' },
      { img: 'online', age: 'cała Polska', title: 'Online na żywo', text: 'Te same lektorki i lektorzy, ta sama metoda — przez kamerę. Materiały i nagrania w aplikacji szkoły.', hours: '2–3', tag: 'na żywo, nie nagrania' },
    ],
  },

  bands: {
    london: { kicker: 'English', title: 'Speak like\nyou mean it.', note: 'wyjazd językowy do Londynu — co lato' },
    berlin: { kicker: 'Deutsch', title: 'Sprich einfach\nlos!', note: 'wymiana ze szkołą partnerską w Berlinie' },
  },

  method: {
    eyebrow: 'Jak uczymy',
    title: 'Mniej wkuwania,\n*więcej mówienia*',
    lead: 'Metoda komunikacyjna: 70% zajęć to rozmowa. Gramatykę poznajesz w kontekście, a słówka powtarzasz w aplikacji, gdy masz 5 minut.',
    steps: [
      { title: 'Test poziomu', text: '15 minut online + krótka rozmowa z lektorem. Za darmo i bez zobowiązań.', icon: 'test' },
      { title: 'Dobór grupy', text: 'Do 8 osób na podobnym poziomie i w podobnym wieku. Pasuje Ci godzina? Zaczynamy.', icon: 'users' },
      { title: 'Zajęcia i aplikacja', text: 'Lekcje pełne rozmów, a między nimi krótkie powtórki — fiszki, nagrania, mini-quizy.', icon: 'chat' },
      { title: 'Postęp i certyfikat', text: 'Raport co semestr i certyfikat MOST z poziomem CEFR. Albo — egzamin międzynarodowy.', icon: 'cap' },
    ],
    note: 'zero nudnych dyktand ✓',
  },

  levels: {
    eyebrow: 'Poziomy CEFR',
    title: 'Gdzie jesteś *teraz?*',
    lead: 'Kliknij poziom i zobacz, co już umiesz i ile zwykle trwa droga na kolejny stopień.',
    duration: 'Zwykle',
    cta: 'Zrób darmowy test poziomu',
    items: [
      { code: 'A1', name: 'Początkujący', can: 'Przedstawiasz się, zamawiasz kawę, pytasz o drogę.', time: '1 semestr' },
      { code: 'A2', name: 'Podstawowy', can: 'Rozmawiasz o rodzinie, pracy i planach; rozumiesz proste ogłoszenia.', time: '1–2 semestry' },
      { code: 'B1', name: 'Samodzielny', can: 'Radzisz sobie w podróży, opowiadasz historie, piszesz proste maile.', time: '2 semestry' },
      { code: 'B2', name: 'Średnio zaawansowany', can: 'Swobodnie dyskutujesz, oglądasz seriale z napisami w oryginale.', time: '2–3 semestry' },
      { code: 'C1', name: 'Zaawansowany', can: 'Pracujesz i studiujesz w języku, rozumiesz żarty i aluzje.', time: '3 semestry' },
      { code: 'C2', name: 'Biegły', can: 'Mówisz precyzyjnie jak wykształcony native speaker.', time: 'tyle, ile trzeba' },
    ],
  },

  teachers: {
    eyebrow: 'Lektorzy',
    title: 'Ludzie, *z którymi chce się gadać*',
    lead: 'Filolodzy, egzaminatorzy i native speakerzy. Każda osoba w zespole przeszła nasze szkolenie metodyczne — i rozmowę o tym, dlaczego lubi uczyć.',
    items: [
      { img: 't-anna', name: 'Anna Wróbel', lang: 'en', role: 'Angielski · matura i Cambridge', note: 'Egzaminatorka Cambridge, 9 lat w MOST', fun: 'fanka Jane Austen i pubowych quizów' },
      { img: 't-tomasz', name: 'Tomasz Lis', lang: 'de', role: 'Niemiecki · dorośli i firmy', note: '6 lat pracy w Monachium', fun: 'uczy przez piosenki Rammsteina (i nie tylko)' },
      { img: 't-helga', name: 'Helga Baumann', lang: 'de', role: 'Native speaker · Goethe-Zertifikat', note: 'Z Hamburga, w Krakowie od 2015', fun: 'piecze najlepszy Apfelstrudel w szkole' },
      { img: 't-jakub', name: 'Jakub Nowicki', lang: 'en', role: 'Angielski · Business English i IELTS', note: 'Wcześniej trener w korporacji IT', fun: 'mówi z akcentem z Manchesteru' },
    ],
  },

  pricing: {
    eyebrow: 'Cennik',
    title: 'Proste ceny, *bez gwiazdek*',
    lead: 'Podręczniki i dostęp do aplikacji w cenie. Płatność miesięcznie lub za semestr (−5%). Rodzeństwo i druga osoba z firmy: −10%.',
    popular: 'najczęściej wybierany',
    from: 'od',
    cta: 'Zapisz się',
    plans: [
      { name: 'Grupa', size: '6–8 osób', price: '249', unit: 'zł / miesiąc', points: ['2 × 90 min w tygodniu', 'Podręcznik i aplikacja w cenie', 'Raport postępów co semestr', 'Certyfikat MOST'] },
      { name: 'Mini-grupa', size: '2–4 osoby', price: '389', unit: 'zł / miesiąc', points: ['2 × 90 min w tygodniu', 'Program pod potrzeby grupy', 'Elastyczne terminy', 'Próbne egzaminy w cenie'], featured: true },
      { name: 'Indywidualnie', size: '1 : 1', price: '129', unit: 'zł / 60 min', points: ['Stacjonarnie lub online', 'Pakiety 10 lekcji: −10%', 'Egzaminy, praca, przeprowadzka', 'Terminy także rano'] },
    ],
  },

  testimonials: {
    eyebrow: 'Opinie',
    title: 'Co mówią *po lekcjach*',
    items: [
      { text: 'Po dwóch latach w MOST zdałam C1 Advanced z wynikiem A. Ale najważniejsze — przestałam się bać mówić.', name: 'Karolina, 24', course: 'Cambridge C1' },
      { text: 'Syn biegnie na angielski szybciej niż na trening. Nie wiem, co oni tam robią, ale działa.', name: 'Piotr, tata Kuby (9)', course: 'Dzieci' },
      { text: 'Przeprowadzka do Wiednia była łatwiejsza, bo Helga przygotowała mnie do rozmów w urzędzie i u lekarza.', name: 'Marta, 35', course: 'Niemiecki B1' },
      { text: 'Kurs dla naszego działu sprzedaży: po pół roku chłopaki sami prowadzą calle z Niemcami.', name: 'Rafał, kierownik sprzedaży', course: 'Deutsch im Beruf' },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pytania, które *często słyszymy*',
    items: [
      { q: 'Jak wygląda lekcja próbna?', a: 'To 45 minut w małej grupie lub indywidualnie. Poznajesz lektora, sprawdzamy poziom w rozmowie i dobieramy kurs. Lekcja jest bezpłatna i do niczego nie zobowiązuje.' },
      { q: 'Nie znam języka wcale. Czy mogę zacząć?', a: 'Oczywiście. Grupy A1 startują we wrześniu, lutym i maju, a na zajęcia indywidualne możesz zapisać się w każdej chwili.' },
      { q: 'Ile osób jest w grupie?', a: 'Od 6 do 8 w grupach standardowych, 2–4 w mini-grupach, maksymalnie 6 na kursach dla dzieci. Dzięki temu każda osoba mówi na każdej lekcji.' },
      { q: 'Co, jeśli opuszczę zajęcia?', a: 'Materiały i krótkie nagranie z tablicy znajdziesz w aplikacji. Możesz też przyjść na lekcję innej grupy na tym samym poziomie.' },
      { q: 'Czy wystawiacie faktury i certyfikaty?', a: 'Tak. Wystawiamy faktury dla osób prywatnych i firm, a po każdym semestrze — certyfikat MOST z poziomem CEFR. Przygotowujemy też do egzaminów międzynarodowych.' },
      { q: 'Czy można zrezygnować w trakcie?', a: 'Tak, z miesięcznym okresem wypowiedzenia. Przy płatności za semestr zwracamy różnicę za niewykorzystane miesiące.' },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Pierwsza lekcja *jest na nas*',
    lead: 'Zostaw kontakt — oddzwonimy w ciągu jednego dnia roboczego, dobierzemy termin i wyślemy link do testu poziomu.',
    form: {
      name: 'Imię',
      contact: 'Telefon lub e-mail',
      language: 'Język',
      languages: ['Angielski', 'Niemiecki', 'Oba języki'],
      group: 'Dla kogo',
      groups: ['Dla mnie (dorośli)', 'Dla dziecka', 'Dla nastolatka', 'Dla firmy'],
      level: 'Poziom (jeśli wiesz)',
      levels: ['Nie wiem — chcę test', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      mode: 'Forma',
      modes: ['Stacjonarnie', 'Online'],
      message: 'Wiadomość (opcjonalnie)',
      consent: 'Zgadzam się na kontakt w sprawie kursu. Dane przetwarzamy zgodnie z RODO wyłącznie w tym celu.',
      submit: 'Wyślij zgłoszenie',
      thanks: 'Dziękujemy! Odezwiemy się w ciągu jednego dnia roboczego. Bis bald & see you soon!',
      again: 'Wyślij kolejne zgłoszenie',
    },
    address: 'Adres',
    phone: 'Telefon',
    email: 'E-mail',
    hoursTitle: 'Sekretariat',
    hours: ['pon.–pt. 9:00–20:30', 'sob. 9:00–14:00'],
    map: 'Pokaż na mapie',
    tram: '3 min od przystanku „Batorego” (tramwaje 4, 8, 13, 14, 24)',
  },

  footer: {
    tagline: 'Szkoła języka angielskiego i niemieckiego w Krakowie. Mówimy z Tobą od 2013 roku.',
    nav: 'Na skróty',
    photos: 'Zdjęcia: Unsplash',
    cookies: 'Ustawienia cookies',
    rights: 'Wszelkie prawa zastrzeżone.',
    demo: 'Strona demonstracyjna — dane kontaktowe są przykładowe.',
    top: 'Do góry',
  },

  cookies: {
    title: 'Ciasteczka',
    text: 'Używamy plików cookies niezbędnych do działania strony, a za Twoją zgodą — także analitycznych i marketingowych.',
    acceptAll: 'Akceptuję wszystkie',
    rejectAll: 'Tylko niezbędne',
    settings: 'Ustawienia',
    dialogTitle: 'Ustawienia cookies',
    save: 'Zapisz wybór',
    close: 'Zamknij',
    always: 'Zawsze aktywne',
    categories: {
      necessary: { title: 'Niezbędne', text: 'Zapamiętują Twój wybór dotyczący cookies. Bez nich strona nie działa poprawnie.' },
      analytics: { title: 'Analityczne', text: 'Pomagają nam zrozumieć, jak korzystasz ze strony, abyśmy mogli ją ulepszać.' },
      marketing: { title: 'Marketingowe', text: 'Pozwalają pokazywać Ci dopasowane reklamy naszych kursów w innych serwisach.' },
    },
  },
}
