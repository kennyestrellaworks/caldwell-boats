export type ActivityEntryType = {
  speedboatId: string;
  bookingId: string;
  bookingStatus: string;
  bookingDuration: number;
  bookingRating: string;
  bookingGuests: string[];
  createdAt: string;
  updatedAt: string;
};

export type UsersType = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  designation: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  activityStream: ActivityEntryType[];
  email?: string;
  phone?: string;
  address?: string;
};

export const users: UsersType[] = [
  {
    id: "13752984plodkrma",
    firstName: "Clarkson",
    lastName: "Caldwell",
    role: "admin",
    designation: "Founder & CEO",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751650299/Group_1_qwhi54.jpg",
    description: `Clarkson Caldwell is the passionate owner and founder of Caldwell Boats, a premier boat rental business dedicated to offering unforgettable maritime adventures. A lifelong enthusiast of the open sea, Clarkson turned his personal collection of speedboats, cruisers, and leisure vessels into a thriving service for travelers eager to explore the country’s pristine coastlines and scenic islands. His mission is simple: to provide tourists and locals alike with the freedom to relax, discover hidden coves, and experience the unmatched tranquility of life on the water.

With over a decade of boating experience, Clarkson takes pride in cubookingRating a fleet that balances comfort, performance, and style. Beyond just renting boats, he aims to foster meaningful moments — whether it's families setting off for a sun-soaked afternoon, couples chasing sunsets, or friends carving through waves. Through Caldwell Boats, Clarkson continues to share his love for the sea, ensuring every guest leaves with a story worth telling.`,
    createdAt: "2024-09-17T07:02:33.734Z",
    updatedAt: "2024-09-17T07:02:33.734Z",
    activityStream: [],
  },
  {
    id: "62841309zfynbqwu",
    firstName: "Jasmine",
    lastName: "Caldwell",
    role: "admin",
    designation: "Co-Founder",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751650325/Group_2_yopqce.jpg",
    description: `Jasmine Caldwell is the co-owner and business strategist behind Caldwell Boats, working alongside her husband Clarkson to turn their shared passion for the water into a thriving business. With a solid background in business administration and marketing, Jasmine plays a pivotal role in managing operations, customer experience, and promotional strategies for the company.

Known for her sharp business sense and warm, approachable personality, Jasmine ensures that every guest interaction reflects the company’s values of hospitality, safety, and adventure. She’s the driving force behind Caldwell Boats’ growing online presence, community partnerships, and seasonal events, helping the business expand while maintaining its personal, family-run charm.

Outside of the business, Jasmine loves coastal living, sunset cruises, and discovering new hidden spots along the shoreline — always on the lookout for the next perfect destination to share with their guests.`,
    createdAt: "2024-09-18T09:15:21.523Z",
    updatedAt: "2024-09-18T09:15:21.523Z",
    activityStream: [],
  },
  {
    id: "51092847tkvejsdq",
    firstName: "Kayla",
    lastName: "Brooks",
    role: "user",
    designation: "Senior Boat Captain",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751650350/Layer_9_eq36na.jpg",
    description: `The warm, welcoming face of the company, Kayla handles guest bookings, check-ins, and special requests. She’s known for her friendly personality and quick problem-solving skills, making sure every guest leaves with great memories and a reason to return. A boating enthusiast herself, Kayla loves helping guests plan their perfect day on the water.`,
    createdAt: "2024-09-19T14:48:05.984Z",
    updatedAt: "2024-09-19T14:48:05.984Z",
    activityStream: [],
  },
  {
    id: "83210459crxypfme",
    firstName: "Sophie",
    lastName: "Delgado",
    role: "employee",
    designation: "Marketing Specialist",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751650372/Layer_11_gc1pwq.jpg",
    description: `Sophie manages the company’s social media presence, seasonal promotions, and waterfront events. With a background in digital marketing and a talent for creative campaigns, she’s behind the growing online following and community partnerships that keep Caldwell Boats top of mind for locals and tourists alike.`,
    createdAt: "2024-09-20T11:25:44.221Z",
    updatedAt: "2024-09-20T11:25:44.221Z",
    activityStream: [],
  },
  {
    id: "41927650uvomnhle",
    firstName: "Marcus",
    lastName: "Chen",
    role: "employee",
    designation: "Senior Boat Captain",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751650399/Layer_6_pznlou.jpg",
    description: `Marcus is a veteran captain with 12 years navigating local coastlines and offshore waters. Certified and safety-focused, he leads private charters, sightseeing tours, and wakeboarding sessions. Marcus is passionate about sharing hidden coves, scenic spots, and marine life sightings with guests who join him on board.`,
    createdAt: "2024-09-21T16:33:12.003Z",
    updatedAt: "2024-09-21T16:33:12.003Z",
    activityStream: [],
  },
  {
    id: "76930218lqdgyvzx",
    firstName: "Ethan",
    lastName: "Ramirez",
    role: "employee",
    designation: "Operations Manager",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751650439/Layer_15_wlmmal.jpg",
    description: `Ethan oversees the day-to-day logistics of the fleet, from scheduling boat maintenance to coordinating bookings and ensuring every vessel is ready for guests. With over 8 years of marine operations experience, Ethan’s attention to detail and calm-under-pressure demeanor keep things running smoothly behind the scenes.`,
    createdAt: "2024-09-22T12:00:01.456Z",
    updatedAt: "2024-09-22T12:00:01.456Z",
    activityStream: [],
  },
  {
    id: "38025791sduqnpfi",
    firstName: "Avery",
    lastName: "Gardner",
    role: "employee",
    designation: "Lead Boatwright",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751650528/Layer_5_uyslx3.jpg",
    description: `Avery leads the hands-on construction and finishing of each Caldwell vessel, bringing over a decade of experience in traditional boatbuilding techniques. Known for precision, patience, and a deep respect for the craft, Avery ensures every detail from the grain of the wood to the final polish meets the highest standards. Their craftsmanship is a cornerstone of the Caldwell Boats reputation.`,
    createdAt: "2024-09-23T18:42:19.789Z",
    updatedAt: "2024-09-23T18:42:19.789Z",
    activityStream: [],
  },
  {
    id: "69047528wmjtkzpe",
    firstName: "Harper",
    lastName: "Lowe",
    role: "user",
    designation: "Operations Coordinator",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751726788/Layer_1_ufnigg.jpg",
    description: `Harper manages the day-to-day operations of Caldwell Boats, ensuring each rental runs smoothly from booking to return. Their keen eye for logistics and friendly demeanor makes them a guest favorite.`,
    createdAt: "2024-09-24T11:20:45.600Z",
    updatedAt: "2024-09-24T11:20:45.600Z",
    activityStream: [],
  },
  {
    id: "28476139gxeyuapd",
    firstName: "Rowan",
    lastName: "Pierce",
    role: "user",
    designation: "Customer Experience Manager",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751726818/Layer_2_zdqmxb.jpg",
    description: `Rowan ensures every customer interaction reflects the Caldwell Boats standard. From greeting guests at the dock to handling inquiries, Rowan's warm hospitality keeps clients coming back.`,
    createdAt: "2024-09-25T09:05:12.321Z",
    updatedAt: "2024-09-25T09:05:12.321Z",
    activityStream: [],
  },
  {
    id: "57380216qnscivwd",
    firstName: "Elliot",
    lastName: "Nash",
    role: "user",
    designation: "Fleet Maintenance Lead",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751726838/Layer_3_hywrp1.jpg",
    description: `Elliot oversees the maintenance and safety inspections for every vessel in the Caldwell fleet. With meticulous attention to detail, Elliot ensures each boat is in peak condition before every voyage.`,
    createdAt: "2024-09-26T16:47:33.908Z",
    updatedAt: "2024-09-26T16:47:33.908Z",
    activityStream: [],
  },
  {
    id: "19238570bxptjzra",
    firstName: "Kathleen",
    lastName: "Monroe",
    role: "user",
    designation: "Dock Supervisor",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751726862/Layer_4_zw6rgn.jpg",
    description: `Kai coordinates the marina’s daily dock activities, guiding guests to their vessels and ensuring smooth departures and arrivals. His leadership helps maintain order and efficiency at the waterfront.`,
    createdAt: "2024-09-27T12:33:50.456Z",
    updatedAt: "2024-09-27T12:33:50.456Z",
    activityStream: [],
  },
  {
    id: "68591032vjzmekqu",
    firstName: "Paige",
    lastName: "Benton",
    role: "user",
    designation: "Guest Services Specialist",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751726885/Layer_5_noaige.jpg",
    description: `Sage handles bookings, special requests, and guest inquiries with professionalism and warmth. Always ready with a smile, Sage is dedicated to making every guest feel valued and welcome.`,
    createdAt: "2024-09-28T08:59:25.712Z",
    updatedAt: "2024-09-28T08:59:25.712Z",
    activityStream: [],
  },
  {
    id: "20947318fyowngux",
    firstName: "Reese",
    lastName: "Calder",
    role: "user",
    designation: "Marine Mechanic",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751726920/Layer_6_kxuit4.jpg",
    description: `Reese is responsible for the engine upkeep and mechanical repairs of Caldwell Boats’ fleet. Their expertise keeps every speedboat running smoothly and safely, ensuring reliable adventures on the water.`,
    createdAt: "2024-09-29T14:14:37.900Z",
    updatedAt: "2024-09-29T14:14:37.900Z",
    activityStream: [],
  },
  {
    id: "49832017lcquptar",
    firstName: "Emery",
    lastName: "Blake",
    role: "user",
    designation: "Water Safety Officer",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751726942/Layer_7_g0p62m.jpg",
    description: `Emery ensures the safety of all guests by conducting pre-departure safety briefings, monitoring weather conditions, and providing support in case of emergencies. Emery’s vigilance ensures safe travels.`,
    createdAt: "2024-09-30T19:42:01.678Z",
    updatedAt: "2024-09-30T19:42:01.678Z",
    activityStream: [],
  },
  {
    id: "37065281rbiyjmfa",
    firstName: "Peyton",
    lastName: "Rivers",
    email: "peyton.rivers@gmail.com",
    phone: "253 258 4489",
    address: "1503 Crestview Lane, Dallas, TX 75205",
    role: "user",
    designation: "Senior Booking Agent",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751727141/Layer_9_llhlk6.jpg",
    description: `Peyton handles high-volume and VIP bookings, providing personalized service for the most discerning clients. Peyton's knowledge of the fleet and scheduling expertise ensures seamless experiences.`,
    createdAt: "2024-10-01T10:23:56.908Z",
    updatedAt: "2024-10-01T10:23:56.908Z",
    activityStream: [
      {
        speedboatId: "23818843pzvlkwzb",
        bookingId: "76509132fhlkwvut",
        bookingStatus: "completed",
        bookingDuration: 2,
        bookingRating: "4.5",
        bookingGuests: [
          "38025791sduqnpfi",
          "28476139gxeyuapd",
          "19238570bxptjzra",
        ],
        createdAt: "2024-09-21T16:33:12.003Z",
        updatedAt: "2024-09-21T16:33:12.003Z",
      },
      {
        speedboatId: "43851605yxumczzc",
        bookingId: "68045217mbcnepqs",
        bookingStatus: "completed",
        bookingDuration: 6,
        bookingRating: "4.6",
        bookingGuests: [
          "68591032vjzmekqu",
          "57380216qnscivwd",
          "28476139gxeyuapd",
          "38025791sduqnpfi",
        ],
        createdAt: "2024-10-03T23:33:26.999Z",
        updatedAt: "2024-10-03T23:33:26.999Z",
      },
      {
        speedboatId: "44743815echcloet",
        bookingId: "83061594hrslxjdo",
        bookingStatus: "active",
        bookingDuration: 8,
        bookingRating: "4.4",
        bookingGuests: [
          "68591032vjzmekqu",
          "28476139gxeyuapd",
          "38025791sduqnpfi",
        ],
        createdAt: "2024-10-03T23:33:26.999Z",
        updatedAt: "2024-10-03T23:33:26.999Z",
      },
      {
        speedboatId: "38599319vfscrhzy",
        bookingId: "17930486xqozdmky",
        bookingStatus: "cancelled",
        bookingDuration: 3,
        bookingRating: "1.3",
        bookingGuests: ["28476139gxeyuapd", "38025791sduqnpfi"],
        createdAt: "2024-10-03T23:33:26.999Z",
        updatedAt: "2024-10-03T23:33:26.999Z",
      },

      {
        speedboatId: "57660759kozkrasy",
        bookingId: "94158267zndxgqwa",
        bookingStatus: "completed",
        bookingDuration: 6,
        bookingRating: "4.7",
        bookingGuests: [
          "38025791sduqnpfi",
          "28476139gxeyuapd",
          "19238570bxptjzra",
        ],
        createdAt: "2024-09-21T16:33:12.003Z",
        updatedAt: "2024-09-21T16:33:12.003Z",
      },
      {
        speedboatId: "58455306wmviuebq",
        bookingId: "30478126jcprbkxl",
        bookingStatus: "completed",
        bookingDuration: 7,
        bookingRating: "4.8",
        bookingGuests: [
          "68591032vjzmekqu",
          "57380216qnscivwd",
          "28476139gxeyuapd",
          "38025791sduqnpfi",
        ],
        createdAt: "2024-10-03T23:33:26.999Z",
        updatedAt: "2024-10-03T23:33:26.999Z",
      },
      {
        speedboatId: "23818843pzvlkwzb",
        bookingId: "21740589vyzqtsmr",
        bookingStatus: "active",
        bookingDuration: 5,
        bookingRating: "4.8",
        bookingGuests: [
          "68591032vjzmekqu",
          "28476139gxeyuapd",
          "38025791sduqnpfi",
        ],
        createdAt: "2024-10-03T23:33:26.999Z",
        updatedAt: "2024-10-03T23:33:26.999Z",
      },
      {
        speedboatId: "97673350xtxialip",
        bookingId: "50293168kewtpzod",
        bookingStatus: "cancelled",
        bookingDuration: 4,
        bookingRating: "2.3",
        bookingGuests: ["28476139gxeyuapd", "38025791sduqnpfi"],
        createdAt: "2024-10-03T23:33:26.999Z",
        updatedAt: "2024-10-03T23:33:26.999Z",
      },
    ],
  },
  {
    id: "81543729ztugdvks",
    firstName: "Skylar",
    lastName: "Wynn",
    role: "user",
    designation: "Boat Detailer",
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751727187/Layer_10_recoew.jpg",
    description: `Skylar keeps each speedboat pristine and guest-ready, handling everything from deep-cleaning to polishing. Their attention to cleanliness ensures every boat looks as good as it performs.`,
    createdAt: "2024-10-02T15:18:14.654Z",
    updatedAt: "2024-10-02T15:18:14.654Z",
    activityStream: [],
  },
];
