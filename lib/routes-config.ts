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
          },
          {
            title: "Bangla-I (25711)",
            href: "/25711-bangla-i",
          },
          {
            title: "English-I (25712)",
            href: "/25712-english-i",
          },
          {
            title: "Mathematics-I (25911)",
            href: "/25911-mathematics-i",
          },
          {
            title: "Physics-I (25912)",
            href: "/25912-physics-i",
          },
          {
            title: "Computer Office Application (28511)",
            href: "/28511-computer-office-application",
          },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
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
          },
          {
            title: "English-II (25722)",
            href: "/25722-english-ii",
          },
          {
            title: "Physical Education & Life Skills Development (25812)",
            href: "/25812-physical-education-life-skills",
          },
          {
            title: "Chemistry (25913)",
            href: "/25913-chemistry",
          },
          {
            title: "Mathematics-II (25921)",
            href: "/25921-mathematics-ii",
          },
          {
            title: "Python Programming (28521)",
            href: "/28521-python-programming",
          },
          {
            title: "Computer Graphics Design-I (28522)",
            href: "/28522-computer-graphics-design-i",
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
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
          },
          {
            title: "Physics-II (25922)",
            href: "/25922-physics-ii",
          },
          {
            title: "Mathematics-III (25931)",
            href: "/25931-mathematics-iii",
          },
          {
            title: "Application Development Using Python (28531)",
            href: "/28531-application-development-python",
          },
          {
            title: "Computer Graphics Design-II (28532)",
            href: "/28532-computer-graphics-design-ii",
          },
          {
            title: "IT Support Services (28533)",
            href: "/28533-it-support-services",
          },
          {
            title: "Digital Electronics-I (26831)",
            href: "/26831-digital-electronics-i",
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
          },
          {
            title: "Java Programming (28541)",
            href: "/28541-java-programming",
          },
          {
            title: "Data Structure & Algorithm (28542)",
            href: "/28542-data-structure-algorithm",
          },
          {
            title: "Computer Peripherals & Interfacing (28543)",
            href: "/28543-computer-peripherals-interfacing",
          },
          {
            title: "Web Design & Development-I (28544)",
            href: "/28544-web-design-development-i",
          },
          {
            title: "Digital Electronics-II (26841)",
            href: "/26841-digital-electronics-ii",
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
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
          },
          {
            title: "Application Development Using Java (28551)",
            href: "/28551-application-development-java",
          },
          {
            title: "Web Design & Development-II (28552)",
            href: "/28552-web-design-development-ii",
          },
          {
            title: "Computer Architecture & Microprocessor (28553)",
            href: "/28553-computer-architecture-microprocessor",
          },
          {
            title: "Data Communication (28554)",
            href: "/28554-data-communication",
          },
          {
            title: "Operating System (28555)",
            href: "/28555-operating-system",
          },
          {
            title: "Project Work-I (28556)",
            href: "/28556-project-work-i",
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
          },
          {
            title: "Industrial Management (25852)",
            href: "/25852-industrial-management",
          },
          {
            title: "Database Management System (28561)",
            href: "/28561-database-management-system",
          },
          {
            title: "Computer Networking (28562)",
            href: "/28562-computer-networking",
          },
          {
            title: "Sensor & IoT System (28563)",
            href: "/28563-sensor-iot-system",
          },
          {
            title: "Microcontroller Based System Design & Development (28564)",
            href: "/28564-microcontroller-system-design",
          },
          {
            title: "Surveillance Security System (28565)",
            href: "/28565-surveillance-security-system",
          },
          {
            title: "Web Development Project (28566)",
            href: "/28566-web-development-project",
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
          },
          {
            title: "Digital Marketing Technique (28571)",
            href: "/28571-digital-marketing-technique",
          },
          {
            title: "Network Administration & Services (28572)",
            href: "/28572-network-administration-services",
          },
          {
            title: "Cyber Security & Ethics (28573)",
            href: "/28573-cyber-security-ethics",
          },
          {
            title: "Apps Development Project (28574)",
            href: "/28574-apps-development-project",
          },
          {
            title: "Multimedia & Animation (28575)",
            href: "/28575-multimedia-animation",
          },
          {
            title: "Project Work-II (28576)",
            href: "/28576-project-work-ii",
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
          },
          { title: "Bangla-I (25711)", href: "/25711-bangla-i" },
          { title: "English-I (25712)", href: "/25712-english-i" },
          { title: "Social Science (25811)", href: "/25811-social-science" },
          { title: "Mathematics-I (25911)", href: "/25911-mathematics-i" },
          { title: "Chemistry (25913)", href: "/25913-chemistry" },
          {
            title: "Civil Engineering Materials (26411)",
            href: "/26411-civil-engineering-materials",
          },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          { title: "Bangla-II (25721)", href: "/25721-bangla-ii" },
          { title: "English-II (25722)", href: "/25722-english-ii" },
          {
            title: "Physical Education & Life Skills Development (25812)",
            href: "/25812-physical-education-life-skills",
          },
          { title: "Physics-I (25912)", href: "/25912-physics-i" },
          { title: "Mathematics-II (25921)", href: "/25921-mathematics-ii" },
          {
            title: "Civil Engineering Drawing (26421)",
            href: "/26421-civil-engineering-drawing",
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
          },
          {
            title: "Basic Workshop Practice (27011)",
            href: "/27011-basic-workshop-practice",
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
          },
          { title: "Physics-II (25922)", href: "/25922-physics-ii" },
          { title: "Mathematics-III (25931)", href: "/25931-mathematics-iii" },
          {
            title: "Structural Mechanics (26431)",
            href: "/26431-structural-mechanics",
          },
          { title: "Surveying-I (26432)", href: "/26432-surveying-i" },
          {
            title: "Construction Process-I (26433)",
            href: "/26433-construction-process-i",
          },
          {
            title: "Computer Office Application (28511)",
            href: "/28511-computer-office-application",
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          { title: "Accounting (25841)", href: "/25841-accounting" },
          {
            title: "Construction Process-II (26441)",
            href: "/26441-construction-process-ii",
          },
          {
            title: "Estimating & Costing-I (26442)",
            href: "/26442-estimating-costing-i",
          },
          { title: "Civil CAD-I (26443)", href: "/26443-civil-cad-i" },
          { title: "Surveying-II (26444)", href: "/26444-surveying-ii" },
          {
            title: "Geotechnical Engineering (26445)",
            href: "/26445-geotechnical-engineering",
          },
          { title: "Hydrology (26446)", href: "/26446-hydrology" },
          {
            title: "Wood Workshop Practice (26521)",
            href: "/26521-wood-workshop-practice",
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
          },
          {
            title: "Foundation Engineering (26451)",
            href: "/26451-foundation-engineering",
          },
          { title: "Civil CAD-II (26452)", href: "/26452-civil-cad-ii" },
          { title: "Surveying-III (26453)", href: "/26453-surveying-iii" },
          {
            title: "Theory of Structure (26454)",
            href: "/26454-theory-of-structure",
          },
          {
            title: "Water Supply Engineering (26455)",
            href: "/26455-water-supply-engineering",
          },
          { title: "Hydraulics (26456)", href: "/26456-hydraulics" },
        ],
      },
      {
        title: "6th Semester",
        href: "/6th-semester",
        items: [
          {
            title: "Water Resources Engineering (26461)",
            href: "/26461-water-resources-engineering",
          },
          {
            title: "Advance Surveying (26462)",
            href: "/26462-advance-surveying",
          },
          {
            title: "Transportation Engineering-I (26463)",
            href: "/26463-transportation-engineering-i",
          },
          {
            title: "Design of Structure-I (26464)",
            href: "/26464-design-of-structure-i",
          },
          {
            title: "Steel Structures (28863)",
            href: "/28863-steel-structures",
          },
          {
            title: "Advanced Construction (28861)",
            href: "/28861-advanced-construction",
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
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
          },
          {
            title: "Innovation & Entrepreneurship (25853)",
            href: "/25853-innovation-entrepreneurship",
          },
          {
            title: "Civil Engineering Project (26471)",
            href: "/26471-civil-engineering-project",
          },
          {
            title: "Sanitary Engineering (26472)",
            href: "/26472-sanitary-engineering",
          },
          {
            title: "Transportation Engineering-II (26473)",
            href: "/26473-transportation-engineering-ii",
          },
          {
            title: "Design of Structure-II (26474)",
            href: "/26474-design-of-structure-ii",
          },
          {
            title: "Estimating & Costing-II (26475)",
            href: "/26475-estimating-costing-ii",
          },
          {
            title: "Construction Management & Documentation (28871)",
            href: "/28871-construction-management-documentation",
          },
        ],
      },
      {
        title: "8th Semester",
        href: "/8th-semester",
        items: [
          { title: "Industrial Attachment", href: "/industrial-attachment" },
          { title: "Project Presentation", href: "/project-presentation" },
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
          },
          { title: "Bangla-I (25711)", href: "/25711-bangla-i" },
          { title: "English-I (25712)", href: "/25712-english-i" },
          {
            title: "Physical Education & Life Skill Development (25812)",
            href: "/25812-physical-education-life-skill",
          },
          { title: "Mathematics-I (25911)", href: "/25911-mathematics-i" },
          { title: "Physics-I (25912)", href: "/25912-physics-i" },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
          },
          {
            title: "Electrical Engineering Materials (26712)",
            href: "/26712-electrical-engineering-materials",
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          { title: "Bangla-II (25721)", href: "/25721-bangla-ii" },
          { title: "English-II (25722)", href: "/25722-english-ii" },
          { title: "Mathematics-II (25921)", href: "/25921-mathematics-ii" },
          { title: "Physics-II (25922)", href: "/25922-physics-ii" },
          {
            title: "Electrical Circuits-I (26721)",
            href: "/26721-electrical-circuits-i",
          },
          {
            title: "Electrical Engineering Drawing (26722)",
            href: "/26722-electrical-engineering-drawing",
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
          },
        ],
      },
      {
        title: "3rd Semester",
        href: "/3rd-semester",
        items: [
          { title: "Mathematics-III (25931)", href: "/25931-mathematics-iii" },
          { title: "Chemistry (25913)", href: "/25913-chemistry" },
          {
            title: "Computer Office Applications (28511)",
            href: "/28511-computer-office-applications",
          },
          {
            title: "Electrical Circuits-II (26731)",
            href: "/26731-electrical-circuits-ii",
          },
          {
            title: "Electrical Appliances (26732)",
            href: "/26732-electrical-appliances",
          },
          {
            title: "Industrial Electronics (26833)",
            href: "/26833-industrial-electronics",
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          { title: "Social Science (25811)", href: "/25811-social-science" },
          { title: "Accounting (25841)", href: "/25841-accounting" },
          {
            title: "Electrical Installation, Planning, and Estimating (26741)",
            href: "/26741-electrical-installation-planning-estimating",
          },
          { title: "DC Machine (26742)", href: "/26742-dc-machine" },
          {
            title: "Electrical Engineering Project-I (26743)",
            href: "/26743-electrical-engineering-project-i",
          },
          {
            title: "Digital Electronics (26845)",
            href: "/26845-digital-electronics",
          },
          {
            title: "Applied Mechanics (27044)",
            href: "/27044-applied-mechanics",
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
          },
          {
            title: "Industrial Management (25852)",
            href: "/25852-industrial-management",
          },
          {
            title: "Generation of Electrical Power (26751)",
            href: "/26751-generation-electrical-power",
          },
          {
            title: "Electrical & Electronic Measurements-I (26752)",
            href: "/26752-electrical-electronic-measurements-i",
          },
          {
            title: "Testing and Maintenance of Electrical Equipments (26753)",
            href: "/26753-testing-maintenance-electrical-equipments",
          },
          {
            title: "Electrical Engineering Project-II (26754)",
            href: "/26754-electrical-engineering-project-ii",
          },
          {
            title: "Microprocessor & Microcontroller (26853)",
            href: "/26853-microprocessor-microcontroller",
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
          },
          { title: "AC Machine-I (26761)", href: "/26761-ac-machine-i" },
          {
            title:
              "Transmission and Distribution of Electrical Power-I (26762)",
            href: "/26762-transmission-distribution-electrical-power-i",
          },
          {
            title: "Electrical & Electronic Measurements-II (26763)",
            href: "/26763-electrical-electronic-measurements-ii",
          },
          {
            title: "Communication Engineering (26842)",
            href: "/26842-communication-engineering",
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
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
          },
          {
            title: "Innovation & Entrepreneurship (25853)",
            href: "/25853-innovation-entrepreneurship",
          },
          { title: "AC Machine-II (26771)", href: "/26771-ac-machine-ii" },
          {
            title:
              "Transmission and Distribution of Electrical Power-II (26772)",
            href: "/26772-transmission-distribution-electrical-power-ii",
          },
          {
            title: "Switch Gear and Protection (26773)",
            href: "/26773-switch-gear-protection",
          },
          {
            title: "Electrical Engineering Project-III (26774)",
            href: "/26774-electrical-engineering-project-iii",
          },
          {
            title: "Automation Engineering & PLC (26875)",
            href: "/26875-automation-engineering-plc",
          },
        ],
      },
      {
        title: "8th Semester",
        href: "/8th-semester",
        items: [
          { title: "Industrial Attachment", href: "/industrial-attachment" },
          { title: "Project Presentation", href: "/project-presentation" },
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
          },
          { title: "Bangla-I (25711)", href: "/25711-bangla-i" },
          { title: "English-I (25712)", href: "/25712-english-i" },
          {
            title: "Physical Education & Life Skills Development (25812)",
            href: "/25812-physical-education-life-skills",
          },
          { title: "Mathematics-I (25911)", href: "/25911-mathematics-i" },
          { title: "Physics-I (25912)", href: "/25912-physics-i" },
          {
            title: "Basic Workshop Practice (27011)",
            href: "/27011-basic-workshop-practice",
          },
          {
            title: "Machine Shop Practice-I (27012)",
            href: "/27012-machine-shop-practice-i",
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          { title: "Bangla-II (25721)", href: "/25721-bangla-ii" },
          { title: "English-II (25722)", href: "/25722-english-ii" },
          { title: "Chemistry (25913)", href: "/25913-chemistry" },
          { title: "Mathematics-II (25921)", href: "/25921-mathematics-ii" },
          { title: "Physics-II (25922)", href: "/25922-physics-ii" },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
          },
          {
            title: "Mechanical Engineering Drawing (27021)",
            href: "/27021-mechanical-engineering-drawing",
          },
        ],
      },
      {
        title: "3rd Semester",
        href: "/3rd-semester",
        items: [
          { title: "Social Science (25811)", href: "/25811-social-science" },
          {
            title: "Business Communication (25831)",
            href: "/25831-business-communication",
          },
          { title: "Mathematics-III (25931)", href: "/25931-mathematics-iii" },
          {
            title: "Mechanical Engineering Materials (27031)",
            href: "/27031-mechanical-engineering-materials",
          },
          {
            title: "Machine Shop Practice-II (27032)",
            href: "/27032-machine-shop-practice-ii",
          },
          {
            title: "RAC Cycles and Components (27231)",
            href: "/27231-rac-cycles-components",
          },
          {
            title: "Computer Office Application (28511)",
            href: "/28511-computer-office-application",
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          { title: "Accounting (25841)", href: "/25841-accounting" },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
          },
          {
            title: "Engineering Mechanics (27041)",
            href: "/27041-engineering-mechanics",
          },
          {
            title: "Machine Shop Practice-III (27042)",
            href: "/27042-machine-shop-practice-iii",
          },
          { title: "Metallurgy (27043)", href: "/27043-metallurgy" },
          {
            title: "Engineering Thermodynamics (27131)",
            href: "/27131-engineering-thermodynamics",
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
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
          },
          {
            title: "Fluid Mechanics & Machineries (27051)",
            href: "/27051-fluid-mechanics-machineries",
          },
          {
            title: "Mechanical Estimating & Costing (27052)",
            href: "/27052-mechanical-estimating-costing",
          },
          {
            title: "Advanced Welding-I (27053)",
            href: "/27053-advanced-welding-i",
          },
          {
            title: "Foundry & Pattern Making (27054)",
            href: "/27054-foundry-pattern-making",
          },
          {
            title: "Manufacturing Process (27055)",
            href: "/27055-manufacturing-process",
          },
          {
            title: "Programming in C (28567)",
            href: "/28567-programming-in-c",
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
          },
          {
            title: "Automobile Fundamentals (26211)",
            href: "/26211-automobile-fundamentals",
          },
          {
            title: "Strength of Materials (27061)",
            href: "/27061-strength-of-materials",
          },
          {
            title: "Mechanical Measurement & Metrology (27062)",
            href: "/27062-mechanical-measurement-metrology",
          },
          { title: "CAD & CAM (27063)", href: "/27063-cad-cam" },
          {
            title: "Advanced Welding-II (27064)",
            href: "/27064-advanced-welding-ii",
          },
          {
            title: "Plant Engineering & Maintenance (27065)",
            href: "/27065-plant-engineering-maintenance",
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
          },
          {
            title: "Design of Machine Elements (27071)",
            href: "/27071-design-of-machine-elements",
          },
          { title: "Tool Design (27072)", href: "/27072-tool-design" },
          {
            title: "Heat Treatment of Metal (27073)",
            href: "/27073-heat-treatment-metal",
          },
          {
            title: "Mechanical Engineering Project (27074)",
            href: "/27074-mechanical-engineering-project",
          },
          {
            title: "Production Planning & Control (27075)",
            href: "/27075-production-planning-control",
          },
          {
            title: "Mechatronics & PLC (29231)",
            href: "/29231-mechatronics-plc",
          },
        ],
      },
      {
        title: "8th Semester",
        href: "/8th-semester",
        items: [
          { title: "Industrial Attachment", href: "/industrial-attachment" },
          { title: "Project Presentation", href: "/project-presentation" },
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
          },
          { title: "Bangla-I (25711)", href: "/25711-bangla-i" },
          { title: "English-I (25712)", href: "/25712-english-i" },
          { title: "Mathematics-I (25911)", href: "/25911-mathematics-i" },
          { title: "Physics-I (25912)", href: "/25912-physics-i" },
          {
            title: "Basic Electricity (26711)",
            href: "/26711-basic-electricity",
          },
          {
            title: "Basic Electronics (26811)",
            href: "/26811-basic-electronics",
          },
        ],
      },
      {
        title: "2nd Semester",
        href: "/2nd-semester",
        items: [
          { title: "Bangla-II (25721)", href: "/25721-bangla-ii" },
          { title: "English-II (25722)", href: "/25722-english-ii" },
          { title: "Social Science (25811)", href: "/25811-social-science" },
          {
            title: "Physical Education & Life Skills Development (25812)",
            href: "/25812-physical-education-life-skills",
          },
          { title: "Chemistry (25913)", href: "/25913-chemistry" },
          { title: "Mathematics-II (25921)", href: "/25921-mathematics-ii" },
          {
            title: "Electrical Circuits-I (26721)",
            href: "/26721-electrical-circuits-i",
          },
          {
            title: "Electronic Devices and Circuits (26821)",
            href: "/26821-electronic-devices-circuits",
          },
        ],
      },
      {
        title: "3rd Semester",
        href: "/3rd-semester",
        items: [
          { title: "Physics-II (25922)", href: "/25922-physics-ii" },
          { title: "Mathematics-III (25931)", href: "/25931-mathematics-iii" },
          {
            title: "Computer Office Application (28511)",
            href: "/28511-computer-office-application",
          },
          {
            title: "Electrical Circuits-II (26731)",
            href: "/26731-electrical-circuits-ii",
          },
          {
            title: "Digital Electronics-I (26831)",
            href: "/26831-digital-electronics-i",
          },
          {
            title: "Power Electronics (26832)",
            href: "/26832-power-electronics",
          },
        ],
      },
      {
        title: "4th Semester",
        href: "/4th-semester",
        items: [
          { title: "Accounting (25841)", href: "/25841-accounting" },
          {
            title: "Electrical Installation, Planning, and Estimating (26741)",
            href: "/26741-electrical-installation-planning-estimating",
          },
          { title: "DC Machine (26742)", href: "/26742-dc-machine" },
          {
            title: "Digital Electronics-II (26841)",
            href: "/26841-digital-electronics-ii",
          },
          {
            title: "Communication Engineering (26842)",
            href: "/26842-communication-engineering",
          },
          {
            title: "Networks, Filters, and Transmission Lines (26843)",
            href: "/26843-networks-filters-transmission-lines",
          },
          {
            title: "Electronic Servicing (26844)",
            href: "/26844-electronic-servicing",
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
          },
          {
            title: "Industrial Management (25852)",
            href: "/25852-industrial-management",
          },
          {
            title: "Programming in C (28567)",
            href: "/28567-programming-in-c",
          },
          {
            title: "Generation of Electrical Power (26751)",
            href: "/26751-generation-electrical-power",
          },
          {
            title: "Electrical & Electronic Measurements-I (26752)",
            href: "/26752-electrical-electronic-measurements-i",
          },
          {
            title: "Television Engineering (26851)",
            href: "/26851-television-engineering",
          },
          {
            title: "Electronic Appliances (26852)",
            href: "/26852-electronic-appliances",
          },
          {
            title: "Bio-Medical Instruments (28654)",
            href: "/28654-bio-medical-instruments",
          },
        ],
      },
      {
        title: "6th Semester",
        href: "/6th-semester",
        items: [
          { title: "AC Machine-I (26761)", href: "/26761-ac-machine-i" },
          {
            title: "Transmission and Distribution of Electrical Power (26764)",
            href: "/26764-transmission-distribution-electrical-power",
          },
          {
            title: "Electrical & Electronic Measurements-II (26763)",
            href: "/26763-electrical-electronic-measurements-ii",
          },
          {
            title: "TV Studio and Broadcasting (26861)",
            href: "/26861-tv-studio-broadcasting",
          },
          {
            title: "Microcontroller and Embedded System (26862)",
            href: "/26862-microcontroller-embedded-system",
          },
          {
            title: "PCB Design and Prototyping (26863)",
            href: "/26863-pcb-design-prototyping",
          },
          {
            title: "Environmental Studies (29041)",
            href: "/29041-environmental-studies",
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
          },
          {
            title: "Innovation & Entrepreneurship (25853)",
            href: "/25853-innovation-entrepreneurship",
          },
          { title: "AC Machine-II (26771)", href: "/26771-ac-machine-ii" },
          {
            title: "Microwave Radar and Navigation Aids (26871)",
            href: "/26871-microwave-radar-navigation-aids",
          },
          {
            title: "Industrial Automation and PLC (26872)",
            href: "/26872-industrial-automation-plc",
          },
          {
            title: "Control System and Robotics (26873)",
            href: "/26873-control-system-robotics",
          },
          {
            title: "Electronic Project (26874)",
            href: "/26874-electronic-project",
          },
        ],
      },
      {
        title: "8th Semester",
        href: "/8th-semester",
        items: [
          { title: "Industrial Attachment", href: "/industrial-attachment" },
          { title: "Project Presentation", href: "/project-presentation" },
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
