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
        title: "First Semester",
        href: "/1st",
        // noLink: true,
        items: [{ title: "Bangla-1 (25711)", href: "/Bangla-I(25711)" }],
      },
      {
        title: "Second Semester",
        href: "/2nd",
        items: [
          {
            title: "Python Programming (28521)",
            href: "/28521-python-programming",
            items: [
              {
                title: "অধ্যায় ১ বেসিক অফ প্রোগ্রামিং (BASIC OF PROGRAMMING)",
                href: "/chapter-1",
              },
              {
                title: "অধ্যায় ২: পাইথনের বেসিকস (BASICS OF PYTHON)",
                href: "/chapter-2",
              },
              {
                title: "অধ্যায় ৩: ভেরিয়েবলস এবং ডাটা টাইপস",
                href: "/chapter-3",
              },
              {
                title: "অধ্যায় ৪:",
                href: "/chapter-4",
              },
              {
                title: "অধ্যায় ৫:",
                href: "/chapter-5",
              },
              {
                title: "অধ্যায় ৬:",
                href: "/chapter-6",
              },
              {
                title: "অধ্যায় ৭:",
                href: "/chapter-7",
              },
              {
                title: "অধ্যায় ৮:",
                href: "/chapter-8",
              },
              {
                title: "অধ্যায় ৯:",
                href: "/chapter-9",
              },
              {
                title: "অধ্যায় ১০:",
                href: "/chapter-10",
              },
            ],
          },
        ],
      },
      {
        title: "Third Semester",
        href: "/3rd",
        // noLink: true,
      },
      {
        title: "Fourth Semester",
        href: "/4th",
        // noLink: true,
      },
      {
        title: "Fifth Semester",
        href: "/5th",
        // noLink: true,
      },
      {
        title: "Sixth Semester",
        href: "/6th",
        // noLink: true,
      },
      {
        title: "Seventh Semester",
        href: "/7th",
        // noLink: true,
      },
    ],
  },
  {
    title: "Civil Technology - 64",
    href: "/64-ct",
    noLink: true,
    items: [
      {
        title: "First Semester",
        href: "/1st",
        // noLink: true,
      },
      {
        title: "Second Semester",
        href: "/2nd",
        // noLink: true,
      },
      {
        title: "Third Semester",
        href: "/3rd",
        // noLink: true,
      },
      {
        title: "Fourth Semester",
        href: "/4th",
        // noLink: true,
      },
      {
        title: "Fifth Semester",
        href: "/5th",
        // noLink: true,
      },
      {
        title: "Sixth Semester",
        href: "/6th",
        // noLink: true,
      },
      {
        title: "Seventh Semester",
        href: "/7th",
        // noLink: true,
      },
    ],
  },
  {
    title: "Electrical Technology - 67",
    href: "/67-et",
    noLink: true,
    items: [
      {
        title: "First Semester",
        href: "/1st",
        // noLink: true,
      },
      {
        title: "Second Semester",
        href: "/2nd",
        // noLink: true,
      },
      {
        title: "Third Semester",
        href: "/3rd",
        // noLink: true,
      },
      {
        title: "Fourth Semester",
        href: "/4th",
        // noLink: true,
      },
      {
        title: "Fifth Semester",
        href: "/5th",
        // noLink: true,
      },
      {
        title: "Sixth Semester",
        href: "/6th",
        // noLink: true,
      },
      {
        title: "Seventh Semester",
        href: "/7th",
        // noLink: true,
      },
    ],
  },
  {
    title: "Mechanical Technology - 70",
    href: "/70-mt",
    noLink: true,
    items: [
      {
        title: "First Semester",
        href: "/1st",
        // noLink: true,
      },
      {
        title: "Second Semester",
        href: "/2nd",
        // noLink: true,
      },
      {
        title: "Third Semester",
        href: "/3rd",
        // noLink: true,
      },
      {
        title: "Fourth Semester",
        href: "/4th",
        // noLink: true,
      },
      {
        title: "Fifth Semester",
        href: "/5th",
        // noLink: true,
      },
      {
        title: "Sixth Semester",
        href: "/6th",
        // noLink: true,
      },
      {
        title: "Seventh Semester",
        href: "/7th",
        // noLink: true,
      },
    ],
  },
  {
    title: "Electronics Technology - 68",
    href: "/68-elt",
    noLink: true,
    items: [
      {
        title: "First Semester",
        href: "/1st",
        // noLink: true,
      },
      {
        title: "Second Semester",
        href: "/2nd",
        // noLink: true,
      },
      {
        title: "Third Semester",
        href: "/3rd",
        // noLink: true,
      },
      {
        title: "Fourth Semester",
        href: "/4th",
        // noLink: true,
      },
      {
        title: "Fifth Semester",
        href: "/5th",
        // noLink: true,
      },
      {
        title: "Sixth Semester",
        href: "/6th",
        // noLink: true,
      },
      {
        title: "Seventh Semester",
        href: "/7th",
        // noLink: true,
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
