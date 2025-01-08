// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Get Started",
    href: "/get-started",
  },

  {
    title: "Computer Science and Technology - 85",
    href: "/85-cst",
    noLink: true,
    items: [
      {
        title: "1st Semester",
        href: "/1st-semester",
        items: [
          {
            title: "Engineering Drawing (21011)",
            href: "/21011-engineering-drawing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Bangla-I (25711)",
            href: "/25711-bangla-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-I (25712)",
            href: "/25712-english-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-I (25911)",
            href: "/25911-mathematics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-I (25912)",
            href: "/25912-physics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Office Application (28511)",
            href: "/28511-computer-office-application",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          {
            title: "Bangla-II (25721)",
            href: "/25721-bangla-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-II (25722)",
            href: "/25722-english-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physical Education & Life Skills Development (25812)",
            href: "/25812-physical-education-life-skills",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Chemistry (25913)",
            href: "/25913-chemistry",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-II (25921)",
            href: "/25921-mathematics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Python Programming (28521)",
            href: "/28521-python-programming",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Graphics Design-I (28522)",
            href: "/28522-computer-graphics-design-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "3rd Semester",
        href: "/3rd-semester",
        items: [
          {
            title: "Social Science (25811)",
            href: "/25811-social-science",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-II (25922)",
            href: "/25922-physics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-III (25931)",
            href: "/25931-mathematics-iii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Application Development Using Python (28531)",
            href: "/28531-application-development-python",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Graphics Design-II (28532)",
            href: "/28532-computer-graphics-design-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "IT Support Services (28533)",
            href: "/28533-it-support-services",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Digital Electronics-I (26831)",
            href: "/26831-digital-electronics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          {
            title: "Business Communication (25831)",
            href: "/25831-business-communication",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Java Programming (28541)",
            href: "/28541-java-programming",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Data Structure & Algorithm (28542)",
            href: "/28542-data-structure-algorithm",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Peripherals & Interfacing (28543)",
            href: "/28543-computer-peripherals-interfacing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Web Design & Development-I (28544)",
            href: "/28544-web-design-development-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Digital Electronics-II (26841)",
            href: "/26841-digital-electronics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "5th Semester",
        href: "/5th-semester",
        items: [
          {
            title: "Accounting (25841)",
            href: "/25841-accounting",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Application Development Using Java (28551)",
            href: "/28551-application-development-java",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Web Design & Development-II (28552)",
            href: "/28552-web-design-development-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Architecture & Microprocessor (28553)",
            href: "/28553-computer-architecture-microprocessor",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Data Communication (28554)",
            href: "/28554-data-communication",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Operating System (28555)",
            href: "/28555-operating-system",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Project Work-I (28556)",
            href: "/28556-project-work-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "6th Semester",
        href: "/6th-semester",
        items: [
          {
            title: "Principles of Marketing (25851)",
            href: "/25851-principles-of-marketing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Industrial Management (25852)",
            href: "/25852-industrial-management",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Database Management System (28561)",
            href: "/28561-database-management-system",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Networking (28562)",
            href: "/28562-computer-networking",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Sensor & IoT System (28563)",
            href: "/28563-sensor-iot-system",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Microcontroller Based System Design & Development (28564)",
            href: "/28564-microcontroller-system-design",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Surveillance Security System (28565)",
            href: "/28565-surveillance-security-system",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Web Development Project (28566)",
            href: "/28566-web-development-project",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "7th Semester",
        href: "/7th-semester",
        items: [
          {
            title: "Innovation & Entrepreneurship (25853)",
            href: "/25853-innovation-entrepreneurship",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Digital Marketing Technique (28571)",
            href: "/28571-digital-marketing-technique",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Network Administration & Services (28572)",
            href: "/28572-network-administration-services",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Cyber Security & Ethics (28573)",
            href: "/28573-cyber-security-ethics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Apps Development Project (28574)",
            href: "/28574-apps-development-project",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Multimedia & Animation (28575)",
            href: "/28575-multimedia-animation",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Project Work-II (28576)",
            href: "/28576-project-work-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Civil Technology - 64",
    href: "/64-ct",
    noLink: true,
    items: [
      {
        title: "1st Semester",
        href: "/1st-semester",
        items: [
          {
            title: "Engineering Drawing (21011)",
            href: "/21011-engineering-drawing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Bangla-I (25711)",
            href: "/25711-bangla-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-I (25712)",
            href: "/25712-english-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Social Science (25811)",
            href: "/25811-social-science",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-I (25911)",
            href: "/25911-mathematics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Chemistry (25913)",
            href: "/25913-chemistry",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Civil Engineering Materials (26411)",
            href: "/26411-civil-engineering-materials",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          {
            title: "Bangla-II (25721)",
            href: "/25721-bangla-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-II (25722)",
            href: "/25722-english-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physical Education & Life Skills Development (25812)",
            href: "/25812-physical-education-life-skills",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-I (25912)",
            href: "/25912-physics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-II (25921)",
            href: "/25921-mathematics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Civil Engineering Drawing (26421)",
            href: "/26421-civil-engineering-drawing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Workshop Practice (27011)",
            href: "/27011-basic-workshop-practice",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "3rd Semester",
        href: "/3rd-semester",
        items: [
          {
            title: "Business Communication (25831)",
            href: "/25831-business-communication",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-II (25922)",
            href: "/25922-physics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-III (25931)",
            href: "/25931-mathematics-iii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Structural Mechanics (26431)",
            href: "/26431-structural-mechanics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Surveying-I (26432)",
            href: "/26432-surveying-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Construction Process-I (26433)",
            href: "/26433-construction-process-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Office Application (28511)",
            href: "/28511-computer-office-application",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          {
            title: "Accounting (25841)",
            href: "/25841-accounting",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Construction Process-II (26441)",
            href: "/26441-construction-process-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Estimating & Costing-I (26442)",
            href: "/26442-estimating-costing-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Civil CAD-I (26443)",
            href: "/26443-civil-cad-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Surveying-II (26444)",
            href: "/26444-surveying-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Geotechnical Engineering (26445)",
            href: "/26445-geotechnical-engineering",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Hydrology (26446)",
            href: "/26446-hydrology",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Wood Workshop Practice (26521)",
            href: "/26521-wood-workshop-practice",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "5th Semester",
        href: "/5th-semester",
        items: [
          {
            title: "Industrial Management (25852)",
            href: "/25852-industrial-management",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Foundation Engineering (26451)",
            href: "/26451-foundation-engineering",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Civil CAD-II (26452)",
            href: "/26452-civil-cad-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Surveying-III (26453)",
            href: "/26453-surveying-iii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Theory of Structure (26454)",
            href: "/26454-theory-of-structure",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Water Supply Engineering (26455)",
            href: "/26455-water-supply-engineering",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Hydraulics (26456)",
            href: "/26456-hydraulics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "6th Semester",
        href: "/6th-semester",
        items: [
          {
            title: "Water Resources Engineering (26461)",
            href: "/26461-water-resources-engineering",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Advance Surveying (26462)",
            href: "/26462-advance-surveying",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Transportation Engineering-I (26463)",
            href: "/26463-transportation-engineering-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Design of Structure-I (26464)",
            href: "/26464-design-of-structure-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Steel Structures (28863)",
            href: "/28863-steel-structures",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Advanced Construction (28861)",
            href: "/28861-advanced-construction",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "7th Semester",
        href: "/7th-semester",
        items: [
          {
            title: "Principle of Marketing (25851)",
            href: "/25851-principle-of-marketing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Innovation & Entrepreneurship (25853)",
            href: "/25853-innovation-entrepreneurship",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Civil Engineering Project (26471)",
            href: "/26471-civil-engineering-project",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Sanitary Engineering (26472)",
            href: "/26472-sanitary-engineering",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Transportation Engineering-II (26473)",
            href: "/26473-transportation-engineering-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Design of Structure-II (26474)",
            href: "/26474-design-of-structure-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Estimating & Costing-II (26475)",
            href: "/26475-estimating-costing-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Construction Management & Documentation (28871)",
            href: "/28871-construction-management-documentation",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "8th Semester",
        href: "/8th-semester",
        items: [
          {
            title: "Industrial Attachment",
            href: "/industrial-attachment",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Project Presentation",
            href: "/project-presentation",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Electrical Technology - 67",
    href: "/67-et",
    noLink: true,
    items: [
      {
        title: "1st Semester",
        href: "/1st-semester",
        items: [
          {
            title: "Engineering Drawing (21011)",
            href: "/21011-engineering-drawing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Bangla-I (25711)",
            href: "/25711-bangla-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-I (25712)",
            href: "/25712-english-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physical Education & Life Skill Development (25812)",
            href: "/25812-physical-education-life-skill",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-I (25911)",
            href: "/25911-mathematics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-I (25912)",
            href: "/25912-physics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Engineering Materials (26712)",
            href: "/26712-electrical-engineering-materials",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          {
            title: "Bangla-II (25721)",
            href: "/25721-bangla-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-II (25722)",
            href: "/25722-english-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-II (25921)",
            href: "/25921-mathematics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-II (25922)",
            href: "/25922-physics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Circuits-I (26721)",
            href: "/26721-electrical-circuits-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Engineering Drawing (26722)",
            href: "/26722-electrical-engineering-drawing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "3rd Semester",
        href: "/3rd-semester",
        items: [
          {
            title: "Mathematics-III (25931)",
            href: "/25931-mathematics-iii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Chemistry (25913)",
            href: "/25913-chemistry",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Office Applications (28511)",
            href: "/28511-computer-office-applications",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Circuits-II (26731)",
            href: "/26731-electrical-circuits-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Appliances (26732)",
            href: "/26732-electrical-appliances",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Industrial Electronics (26833)",
            href: "/26833-industrial-electronics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          {
            title: "Social Science (25811)",
            href: "/25811-social-science",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Accounting (25841)",
            href: "/25841-accounting",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Installation, Planning, and Estimating (26741)",
            href: "/26741-electrical-installation-planning-estimating",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "DC Machine (26742)",
            href: "/26742-dc-machine",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Engineering Project-I (26743)",
            href: "/26743-electrical-engineering-project-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Digital Electronics (26845)",
            href: "/26845-digital-electronics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Applied Mechanics (27044)",
            href: "/27044-applied-mechanics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "5th Semester",
        href: "/5th-semester",
        items: [
          {
            title: "Principle of Marketing (25851)",
            href: "/25851-principle-of-marketing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Industrial Management (25852)",
            href: "/25852-industrial-management",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Generation of Electrical Power (26751)",
            href: "/26751-generation-electrical-power",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical & Electronic Measurements-I (26752)",
            href: "/26752-electrical-electronic-measurements-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Testing and Maintenance of Electrical Equipments (26753)",
            href: "/26753-testing-maintenance-electrical-equipments",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Engineering Project-II (26754)",
            href: "/26754-electrical-engineering-project-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Microprocessor & Microcontroller (26853)",
            href: "/26853-microprocessor-microcontroller",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "6th Semester",
        href: "/6th-semester",
        items: [
          {
            title: "Programming in C (28567)",
            href: "/28567-programming-in-c",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "AC Machine-I (26761)",
            href: "/26761-ac-machine-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title:
              "Transmission and Distribution of Electrical Power-I (26762)",
            href: "/26762-transmission-distribution-electrical-power-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical & Electronic Measurements-II (26763)",
            href: "/26763-electrical-electronic-measurements-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Communication Engineering (26842)",
            href: "/26842-communication-engineering",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "7th Semester",
        href: "/7th-semester",
        items: [
          {
            title: "Business Communication (25831)",
            href: "/25831-business-communication",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Innovation & Entrepreneurship (25853)",
            href: "/25853-innovation-entrepreneurship",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "AC Machine-II (26771)",
            href: "/26771-ac-machine-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title:
              "Transmission and Distribution of Electrical Power-II (26772)",
            href: "/26772-transmission-distribution-electrical-power-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Switch Gear and Protection (26773)",
            href: "/26773-switch-gear-protection",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Engineering Project-III (26774)",
            href: "/26774-electrical-engineering-project-iii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Automation Engineering & PLC (26875)",
            href: "/26875-automation-engineering-plc",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "8th Semester",
        href: "/8th-semester",
        items: [
          {
            title: "Industrial Attachment",
            href: "/industrial-attachment",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Project Presentation",
            href: "/project-presentation",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Mechanical Technology - 70",
    href: "/70-mt",
    noLink: true,
    items: [
      {
        title: "1st Semester",
        href: "/1st-semester",
        items: [
          {
            title: "Engineering Drawing (21011)",
            href: "/21011-engineering-drawing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Bangla-I (25711)",
            href: "/25711-bangla-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-I (25712)",
            href: "/25712-english-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physical Education & Life Skills Development (25812)",
            href: "/25812-physical-education-life-skills",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-I (25911)",
            href: "/25911-mathematics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-I (25912)",
            href: "/25912-physics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Workshop Practice (27011)",
            href: "/27011-basic-workshop-practice",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Machine Shop Practice-I (27012)",
            href: "/27012-machine-shop-practice-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          {
            title: "Bangla-II (25721)",
            href: "/25721-bangla-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-II (25722)",
            href: "/25722-english-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Chemistry (25913)",
            href: "/25913-chemistry",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-II (25921)",
            href: "/25921-mathematics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-II (25922)",
            href: "/25922-physics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mechanical Engineering Drawing (27021)",
            href: "/27021-mechanical-engineering-drawing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "3rd Semester",
        href: "/3rd-semester",
        items: [
          {
            title: "Social Science (25811)",
            href: "/25811-social-science",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Business Communication (25831)",
            href: "/25831-business-communication",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-III (25931)",
            href: "/25931-mathematics-iii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mechanical Engineering Materials (27031)",
            href: "/27031-mechanical-engineering-materials",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Machine Shop Practice-II (27032)",
            href: "/27032-machine-shop-practice-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "RAC Cycles and Components (27231)",
            href: "/27231-rac-cycles-components",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Office Application (28511)",
            href: "/28511-computer-office-application",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          {
            title: "Accounting (25841)",
            href: "/25841-accounting",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Engineering Mechanics (27041)",
            href: "/27041-engineering-mechanics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Machine Shop Practice-III (27042)",
            href: "/27042-machine-shop-practice-iii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Metallurgy (27043)",
            href: "/27043-metallurgy",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Engineering Thermodynamics (27131)",
            href: "/27131-engineering-thermodynamics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "5th Semester",
        href: "/5th-semester",
        items: [
          {
            title: "Industrial Management (25852)",
            href: "/25852-industrial-management",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Fluid Mechanics & Machineries (27051)",
            href: "/27051-fluid-mechanics-machineries",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mechanical Estimating & Costing (27052)",
            href: "/27052-mechanical-estimating-costing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Advanced Welding-I (27053)",
            href: "/27053-advanced-welding-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Foundry & Pattern Making (27054)",
            href: "/27054-foundry-pattern-making",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Manufacturing Process (27055)",
            href: "/27055-manufacturing-process",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Programming in C (28567)",
            href: "/28567-programming-in-c",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "6th Semester",
        href: "/6th-semester",
        items: [
          {
            title: "Principles of Marketing (25851)",
            href: "/25851-principles-of-marketing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Automobile Fundamentals (26211)",
            href: "/26211-automobile-fundamentals",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Strength of Materials (27061)",
            href: "/27061-strength-of-materials",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mechanical Measurement & Metrology (27062)",
            href: "/27062-mechanical-measurement-metrology",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "CAD & CAM (27063)",
            href: "/27063-cad-cam",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Advanced Welding-II (27064)",
            href: "/27064-advanced-welding-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Plant Engineering & Maintenance (27065)",
            href: "/27065-plant-engineering-maintenance",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "7th Semester",
        href: "/7th-semester",
        items: [
          {
            title: "Innovation & Entrepreneurship (25853)",
            href: "/25853-innovation-entrepreneurship",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Design of Machine Elements (27071)",
            href: "/27071-design-of-machine-elements",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Tool Design (27072)",
            href: "/27072-tool-design",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Heat Treatment of Metal (27073)",
            href: "/27073-heat-treatment-metal",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mechanical Engineering Project (27074)",
            href: "/27074-mechanical-engineering-project",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Production Planning & Control (27075)",
            href: "/27075-production-planning-control",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mechatronics & PLC (29231)",
            href: "/29231-mechatronics-plc",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "8th Semester",
        href: "/8th-semester",
        items: [
          {
            title: "Industrial Attachment",
            href: "/industrial-attachment",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Project Presentation",
            href: "/project-presentation",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Electronics Technology - 68",
    href: "/68-elt",
    noLink: true,
    items: [
      {
        title: "1st Semester",
        href: "/1st-semester",
        items: [
          {
            title: "Engineering Drawing (21011)",
            href: "/21011-engineering-drawing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Bangla-I (25711)",
            href: "/25711-bangla-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-I (25712)",
            href: "/25712-english-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-I (25911)",
            href: "/25911-mathematics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physics-I (25912)",
            href: "/25912-physics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          {
            title: "Bangla-II (25721)",
            href: "/25721-bangla-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "English-II (25722)",
            href: "/25722-english-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Social Science (25811)",
            href: "/25811-social-science",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Physical Education & Life Skills Development (25812)",
            href: "/25812-physical-education-life-skills",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Chemistry (25913)",
            href: "/25913-chemistry",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-II (25921)",
            href: "/25921-mathematics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Circuits-I (26721)",
            href: "/26721-electrical-circuits-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electronic Devices and Circuits (26821)",
            href: "/26821-electronic-devices-circuits",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "3rd Semester",
        href: "/3rd-semester",
        items: [
          {
            title: "Physics-II (25922)",
            href: "/25922-physics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Mathematics-III (25931)",
            href: "/25931-mathematics-iii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Computer Office Application (28511)",
            href: "/28511-computer-office-application",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Circuits-II (26731)",
            href: "/26731-electrical-circuits-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Digital Electronics-I (26831)",
            href: "/26831-digital-electronics-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Power Electronics (26832)",
            href: "/26832-power-electronics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          {
            title: "Accounting (25841)",
            href: "/25841-accounting",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical Installation, Planning, and Estimating (26741)",
            href: "/26741-electrical-installation-planning-estimating",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "DC Machine (26742)",
            href: "/26742-dc-machine",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Digital Electronics-II (26841)",
            href: "/26841-digital-electronics-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Communication Engineering (26842)",
            href: "/26842-communication-engineering",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Networks, Filters, and Transmission Lines (26843)",
            href: "/26843-networks-filters-transmission-lines",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electronic Servicing (26844)",
            href: "/26844-electronic-servicing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "5th Semester",
        href: "/5th-semester",
        items: [
          {
            title: "Principles of Marketing (25851)",
            href: "/25851-principles-of-marketing",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Industrial Management (25852)",
            href: "/25852-industrial-management",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Programming in C (28567)",
            href: "/28567-programming-in-c",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Generation of Electrical Power (26751)",
            href: "/26751-generation-electrical-power",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical & Electronic Measurements-I (26752)",
            href: "/26752-electrical-electronic-measurements-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Television Engineering (26851)",
            href: "/26851-television-engineering",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electronic Appliances (26852)",
            href: "/26852-electronic-appliances",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Bio-Medical Instruments (28654)",
            href: "/28654-bio-medical-instruments",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "6th Semester",
        href: "/6th-semester",
        items: [
          {
            title: "AC Machine-I (26761)",
            href: "/26761-ac-machine-i",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Transmission and Distribution of Electrical Power (26764)",
            href: "/26764-transmission-distribution-electrical-power",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electrical & Electronic Measurements-II (26763)",
            href: "/26763-electrical-electronic-measurements-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "TV Studio and Broadcasting (26861)",
            href: "/26861-tv-studio-broadcasting",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Microcontroller and Embedded System (26862)",
            href: "/26862-microcontroller-embedded-system",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "PCB Design and Prototyping (26863)",
            href: "/26863-pcb-design-prototyping",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "7th Semester",
        href: "/7th-semester",
        items: [
          {
            title: "Business Communication (25831)",
            href: "/25831-business-communication",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Innovation & Entrepreneurship (25853)",
            href: "/25853-innovation-entrepreneurship",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "AC Machine-II (26771)",
            href: "/26771-ac-machine-ii",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Microwave Radar and Navigation Aids (26871)",
            href: "/26871-microwave-radar-navigation-aids",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Industrial Automation and PLC (26872)",
            href: "/26872-industrial-automation-plc",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Control System and Robotics (26873)",
            href: "/26873-control-system-robotics",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Electronic Project (26874)",
            href: "/26874-electronic-project",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "8th Semester",
        href: "/8th-semester",
        items: [
          {
            title: "Industrial Attachment",
            href: "/industrial-attachment",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
          {
            title: "Project Presentation",
            href: "/project-presentation",
            items: [
              {
                title: "অধ্যায়-১",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায়-২",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায়-৩",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায়-৪",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায়-৫",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায়-৬",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায়-৭",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায়-৮",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায়-৯",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায়-১০",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
