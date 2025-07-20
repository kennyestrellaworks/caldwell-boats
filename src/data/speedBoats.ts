export type SpeedboatsType = {
  id: string;
  name: string;
  type: string;
  length: string;
  capacity: number;
  speed: string;
  price: number;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  specifications: {
    engine: string;
    fuel: string;
    range: string;
    crew: string;
  };
  featured: boolean;
};

export const speedboats: SpeedboatsType[] = [
  {
    id: "97594537jynfwfgm",
    name: "Yamaha 242X",
    type: "Jet Boat",
    length: "24 ft",
    capacity: 12,
    speed: "50 mph",
    price: 650,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534883/Layer_1_caxowq.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534883/Layer_1_caxowq.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534934/Layer_5_t8tyvg.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534930/Layer_4_ps4r3c.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534928/Layer_3_qyfyxb.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534925/Layer_7_uw73y7.jpg",
    ],
    features: [
      "Wakeboard Tower",
      "Bluetooth Sound System",
      "Swim Platform",
      "GPS Navigation",
    ],
    description: `The Yamaha 242X is the ultimate fusion of performance and style. Designed for thrill-seekers and watersports enthusiasts, this high-performance speedboat is powered by twin Yamaha marine engines, delivering exhilarating acceleration and agile handling on the water.

With a spacious and luxurious cockpit layout, the 242X comfortably seats up to 12 passengers, making it perfect for family outings, wakeboarding adventures, or coastal cruising.

Its sleek, aerodynamic design is complemented by bold, modern colorways and durable marine-grade upholstery. Whether you're carving waves or relaxing at anchor, the Yamaha 242X offers unmatched versatility, power, and style.`,
    specifications: {
      engine: "Twin 1.8L Yamaha HO Jet Engines",
      fuel: "Premium Gasoline",
      range: "150 nautical miles",
      crew: "Self-drive or optional captain",
    },
    featured: true,
  },
  {
    id: "70372665etdjlegb",
    name: "Scarab 285 ID",
    type: "Jet Boat",
    length: "28 ft",
    capacity: 10,
    speed: "52 mph",
    price: 720,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534688/Layer_11_o0wqam.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534688/Layer_11_o0wqam.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534712/Layer_9_ifhfdv.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534707/Layer_10_zswwqr.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534705/Layer_8_lbz5lq.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534700/Layer_12_sycve4.jpg",
    ],
    features: ["Sound System", "Cooler", "Wakeboard Tower", "GPS Navigation"],
    description: `The Scarab 285 ID is a bold, high-performance jet boat built for those who crave speed and precision on the water. Powered by twin Rotax jet engines, it delivers instant throttle response, nimble handling, and impressive acceleration, making it ideal for water sports and adrenaline-fueled cruising.

Inside, the Scarab 285 ID offers a luxurious, spacious cockpit with premium upholstery, versatile seating configurations, and intuitive controls. It features an integrated swim platform, a high-end sound system, and an available touchscreen display, ensuring both comfort and convenience for up to 13 passengers.

Striking exterior lines, bold color accents, and a wakeboard tower give the 285 ID a head-turning presence. Whether you're towing skiers, blasting across open water, or anchored at a quiet cove, the Scarab 285 ID delivers the perfect combination of power, versatility, and modern styling.`,
    specifications: {
      engine: "Twin Rotax 300 HP Jet Engines",
      fuel: "Premium Gasoline",
      range: "160 nautical miles",
      crew: "Optional captain",
    },
    featured: false,
  },
  {
    id: "43851605yxumczzc",
    name: "Donzi 38 ZRC",
    type: "Offshore Racer",
    length: "38 ft",
    capacity: 6,
    speed: "100+ mph",
    price: 900,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534545/Layer_14_ify0ul.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534545/Layer_14_ify0ul.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534586/Layer_15_jsdglj.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534584/Layer_16_stqhzk.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534580/Layer_13_swx3sn.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534577/Layer_17_nhsqea.jpg",
    ],
    features: [
      "Race Seats",
      "Hydraulic Steering",
      "Trim Tabs",
      "GPS Speedometer",
    ],
    description: `The Donzi 38 ZRC is a legendary offshore performance boat, renowned for its blistering speed, razor-sharp handling, and aggressive styling. Engineered for thrill-seekers and competitive racers, this powerhouse features twin high-performance outboard or stern drive engines capable of propelling it to exhilarating top speeds.

The cockpit of the 38 ZRC is built for both performance and comfort, with ergonomically designed bolster seating, race-inspired gauges, and a streamlined dash layout. The deep-V hull design ensures a smooth, confident ride through challenging offshore conditions, giving drivers complete control at high speeds.

With its sleek, aerodynamic silhouette and bold graphics, the Donzi 38 ZRC commands attention at every marina and race event. Perfect for high-speed runs, poker runs, or weekend adventures, it’s a favorite among performance boating enthusiasts seeking adrenaline, precision, and iconic Donzi craftsmanship.`,
    specifications: {
      engine: "Twin Mercury Racing 565",
      fuel: "High-Octane Gasoline",
      range: "220 nautical miles",
      crew: "Optional race crew",
    },
    featured: false,
  },
  {
    id: "04145876kszgkeex",
    name: "Fountain 38 SCX",
    type: "Center Console",
    length: "38 ft",
    capacity: 9,
    speed: "90+ mph",
    price: 880,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534350/Layer_19_uzxwcb.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534350/Layer_19_uzxwcb.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534403/Layer_21_ggbzrc.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534401/Layer_20_vjnp6r.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534398/Layer_18_b6vuyh.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534396/Layer_22_rxir7e.jpg",
    ],
    features: [
      "Fishing Rod Holders",
      "Premium Navigation System",
      "Insulated Fish Box",
      "Sunshade",
    ],
    description: `The Fountain 38 SCX is a masterful blend of cutting-edge performance and luxurious day boating versatility. Powered by triple high-performance outboards, this sport catamaran-inspired center console is designed to deliver jaw-dropping speed, agile handling, and an impressively smooth ride, even in rough offshore waters.

The spacious cockpit offers an ideal layout for both adrenaline-charged runs and leisurely cruising. Premium seating, an advanced digital helm, and a full-featured entertainment system ensure comfort and control, while an integrated hardtop with LED lighting and ample storage make the 38 SCX as practical as it is exhilarating.

With its aggressive, aerodynamic styling and customizable color schemes, the Fountain 38 SCX stands out at every marina and sandbar. It’s the ultimate choice for boaters who demand a perfect balance of race-proven performance, innovative features, and modern luxury in an offshore-ready package.`,
    specifications: {
      engine: "Triple Mercury 400 Verado",
      fuel: "Premium Gasoline",
      range: "250 nautical miles",
      crew: "Optional captain",
    },
    featured: false,
  },
  {
    id: "57622391athkwryy",
    name: "MTI 390X",
    type: "Performance Catamaran",
    length: "39 ft",
    capacity: 6,
    speed: "120+ mph",
    price: 940,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534069/Layer_25_g3ok8l.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534069/Layer_25_g3ok8l.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534113/Layer_26_sciztw.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534110/Layer_27_sdy4vf.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534107/Layer_24_g49n2z.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751534105/Layer_23_rt6bgk.jpg",
    ],
    features: [
      "GPS Navigation",
      "Hydraulic Steering",
      "Race Seats",
      "Sun Deck",
    ],
    description: `The MTI 390X is a cutting-edge performance catamaran built for serious speed enthusiasts and offshore racers. Powered by twin Mercury Racing outboards, this 39-foot cat delivers jaw-dropping acceleration and top-end speeds exceeding 120 mph, while maintaining remarkable stability and precise control.

Inside, the 390X features a purpose-built cockpit designed for both comfort and performance. Bolstered seating, race-inspired digital displays, and intuitive throttle controls give the driver total command of the boat’s impressive capabilities. Passengers enjoy generous legroom, premium upholstery, and a custom stereo system that keeps the energy high during every ride.

Visually striking and unmistakably MTI, the 390X boasts a sleek, aerodynamic hull design and bold graphics that turn heads on every waterway. Perfect for poker runs, offshore races, or high-speed cruising, the MTI 390X blends competition-grade engineering with luxurious craftsmanship for an unforgettable boating experience.`,
    specifications: {
      engine: "Twin Mercury Racing 450R",
      fuel: "Premium Gasoline",
      range: "200 nautical miles",
      crew: "Optional race crew",
    },
    featured: true,
  },
  {
    id: "67430458dttmfsez",
    name: "Outerlimits SL 44",
    type: "Offshore Racer",
    length: "44 ft",
    capacity: 6,
    speed: "100+ mph",
    price: 910,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533859/Layer_31_mqx92i.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533859/Layer_31_mqx92i.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533986/Layer_29_bjdrx7.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533984/Layer_30_ixbx38.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533903/Layer_28_bpvi9l.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533899/Layer_32_ljzhwj.jpg",
    ],
    features: [
      "Race Seats",
      "Premium Sound System",
      "Hydraulic Steering",
      "GPS Speedometer",
    ],
    description: `The Outerlimits SL 44 is a high-performance V-bottom speedboat that combines brute offshore power with luxury and refinement. Equipped with staggered Mercury Racing engines, this 44-foot powerhouse is capable of reaching speeds well over 120 mph while delivering an exceptionally smooth and stable ride, even in challenging offshore conditions.

Inside, the SL 44 offers an upscale cockpit and cabin layout, designed for both serious racers and leisure boaters alike. The cockpit features bolstered high-back racing seats, precision throttle and trim controls, and advanced digital instrumentation, giving the driver absolute confidence at high speed. Below deck, you'll find a spacious cabin with a wraparound lounge, premium finishes, and a fully appointed wet bar.

Known for its aggressive styling and impeccable craftsmanship, the Outerlimits SL 44 stands out with bold hull graphics, aerodynamic lines, and durable marine-grade upholstery. Whether you're chasing checkered flags in offshore events or enjoying a high-speed coastal run, the SL 44 delivers unrivaled power, luxury, and offshore capability.`,
    specifications: {
      engine: "Twin Mercury Racing 565",
      fuel: "High-Octane Gasoline",
      range: "230 nautical miles",
      crew: "Professional race crew optional",
    },
    featured: false,
  },
  {
    id: "93191466wixopbbt",
    name: "Cigarette Racing 42' Huntress",
    type: "Performance Center Console",
    length: "42 ft",
    capacity: 10,
    speed: "80+ mph",
    price: 920,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533689/Layer_35_y0itsl.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533689/Layer_35_y0itsl.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533732/Layer_38_bjbotl.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533730/Layer_34_ngyz1w.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533725/Layer_36_ux3lcd.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533722/Layer_37_qtjclj.jpg",
    ],
    features: [
      "Luxury Cabin",
      "Seating Lounge",
      "GPS Navigation",
      "Premium Sound System",
    ],
    description: `The Cigarette Racing 42' Huntress is a luxury performance center console built to deliver both offshore power and sophisticated style. Powered by up to five Mercury Racing outboard engines, this 42-foot beast offers exhilarating speed capabilities while maintaining impressive stability and control in open water conditions.

Designed with versatility in mind, the Huntress features a spacious deck layout with plush seating, an expansive sun lounge, and a fully equipped helm station with state-of-the-art navigation and entertainment systems. The boat also offers a comfortable cabin below deck, complete with a berth, air conditioning, and a private head, making it perfect for overnight getaways or long-distance coastal cruising.

Finished with bold, aerodynamic lines and premium marine-grade upholstery, the 42' Huntress turns heads at every dock and on every waterway. Whether you're chasing offshore adventure, entertaining guests, or simply enjoying a day on the water in unmatched comfort and performance, the Cigarette Racing 42' Huntress is engineered to exceed expectations.`,
    specifications: {
      engine: "Quad Mercury 450R Racing",
      fuel: "Premium Gasoline",
      range: "280 nautical miles",
      crew: "Professional captain optional",
    },
    featured: false,
  },
  {
    id: "29982076sfdhypgc",
    name: "Formula 350 CBR",
    type: "Luxury Bowrider",
    length: "35 ft",
    capacity: 10,
    speed: "60 mph",
    price: 790,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533500/Layer_40_yqgei1.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533500/Layer_40_yqgei1.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533537/Layer_41_kckq6j.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533534/Layer_43_e27orm.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533532/Layer_39_pegqna.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533530/Layer_42_pff98y.jpg",
    ],
    features: [
      "Seating Lounge",
      "Bluetooth Audio",
      "GPS Navigation",
      "Swim Platform",
    ],
    description: `The Formula 350 CBR (Crossover Bowrider) seamlessly blends the versatility of an open bow day boat with the comforts of a full-featured cruiser. Powered by twin or triple Mercury or Volvo Penta engines, this 35-foot vessel delivers smooth, confident performance whether you’re slicing through open water or enjoying a leisurely sunset cruise.

The expansive cockpit and open bow seating areas offer generous space for entertaining, complete with wraparound lounges, a wet bar, and convertible sun pads. Below deck, the 350 CBR surprises with a fully appointed cabin featuring a forward berth, modern galley, air conditioning, and an enclosed head — ideal for overnight escapes or quick retreats from the sun.

Sleek, contemporary lines paired with premium marine upholstery and high-gloss cabinetry give the Formula 350 CBR a sophisticated, modern presence. Designed for boaters who demand both style and substance, this crossover offers the perfect balance of day boating excitement and cruiser-level luxury.`,
    specifications: {
      engine: "Twin MerCruiser 8.2 MAG",
      fuel: "Premium Gasoline",
      range: "200 nautical miles",
      crew: "Optional captain",
    },
    featured: false,
  },
  {
    id: "70200252rwdwltzg",
    name: "Axopar 28 T-Top",
    type: "Center Console",
    length: "28 ft",
    capacity: 9,
    speed: "48 mph",
    price: 620,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533295/Layer_47_mtshio.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533295/Layer_47_mtshio.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533334/Layer_46_qtwu7p.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533330/Layer_49_vanv5m.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533328/Layer_48_cg8fv6.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533326/Layer_50_du77qw.jpg",
    ],
    features: ["GPS Navigation", "Sun Deck", "Sound System", "Swim Platform"],
    description: `The Axopar 28 T-Top is a dynamic, adventure-ready sport boat designed for boaters who demand versatility, performance, and Scandinavian styling. Powered by a single or twin outboard setup, this 28-foot vessel is known for its agile handling, efficient ride, and ability to confidently tackle a wide range of water conditions.

The distinctive T-Top configuration provides ample shade for the cockpit while maintaining an open, airy feel. The deck layout is intelligently arranged with modular seating, a spacious bow sunbed, and practical storage solutions throughout. Optional features like a wet bar, forward cabin with a berth, and a marine toilet expand its functionality, making it ideal for both daytime excursions and overnight stays.

With its sharp, contemporary profile and rugged good looks, the Axopar 28 T-Top turns heads at every marina. Whether you’re chasing offshore fishing grounds, hosting friends for coastal cruising, or exploring hidden coves, this sport boat delivers impressive comfort, smart features, and reliable performance to suit any on-water adventure.`,
    specifications: {
      engine: "Single Mercury Verado 400",
      fuel: "Premium Gasoline",
      range: "200 nautical miles",
      crew: "Self-drive or optional captain",
    },
    featured: false,
  },
  {
    id: "28680835qekcluxi",
    name: "Sea Ray SLX 350",
    type: "Luxury Bowrider",
    length: "35 ft",
    capacity: 12,
    speed: "58 mph",
    price: 780,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533169/Layer_51_qwna0v.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533169/Layer_51_qwna0v.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533204/Layer_55_xwdaua.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533201/Layer_54_uswzuj.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533198/Layer_52_bqwqso.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533197/Layer_53_vq2whx.jpg",
    ],
    features: [
      "Bluetooth Audio",
      "Sun Deck",
      "Premium Seating",
      "GPS Navigation",
    ],
    description: `The Sea Ray SLX 350 is a luxury dayboat engineered to deliver sophisticated style, powerful performance, and premium comfort on the water. Powered by twin MerCruiser sterndrive engines, it offers exhilarating acceleration, precise handling, and a remarkably smooth ride, whether you're cruising along the coast or anchoring in a secluded cove.

The spacious cockpit features plush wraparound seating, a fully equipped wet bar, and a convertible sunpad, creating an inviting space for socializing, dining, or relaxing under the sun. An advanced digital helm with intuitive touch-screen controls puts navigation and entertainment at your fingertips, while the integrated swim platform with an optional submersible step makes water access effortless.

Designed with modern luxury in mind, the SLX 350 combines bold, elegant lines with refined detailing throughout. Premium marine upholstery, customizable color schemes, and ambient LED lighting enhance the onboard experience, making every outing a memorable escape. Ideal for hosting family and friends, this sport boat delivers a perfect blend of performance, versatility, and upscale leisure.`,
    specifications: {
      engine: "Twin MerCruiser 6.2L",
      fuel: "Premium Gasoline",
      range: "180 nautical miles",
      crew: "Optional captain",
    },
    featured: false,
  },
  {
    id: "57660759kozkrasy",
    name: "Chaparral 287 SSX",
    type: "Sport Boat",
    length: "28 ft",
    capacity: 9,
    speed: "55 mph",
    price: 720,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532990/Layer_60_d7eilh.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532990/Layer_60_d7eilh.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533035/Layer_57_e4xjhp.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533031/Layer_58_ggmi8d.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533029/Layer_56_qq0h9w.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751533027/Layer_59_fcxyud.jpg",
    ],
    features: ["GPS Navigation", "Sound System", "Cooler", "Sunshade"],
    description: `The Chaparral 287 SSX is a premium sport bowrider that masterfully blends performance, luxury, and versatility for boaters seeking high-end comfort and thrilling on-water experiences. Powered by a range of robust inboard or sterndrive engine options, the 287 SSX delivers confident acceleration, smooth handling, and a stable, dry ride in a variety of conditions.

Its spacious cockpit layout features plush, diamond-stitched seating, a full-service wet bar, and an advanced digital helm with dual touch-screen displays for navigation, audio, and system controls. A generous bow seating area, convertible sun loungers, and an integrated swim platform with a telescoping ladder make the 287 SSX ideal for sun-soaked leisure and water sports adventures.

Sporting sleek, contemporary lines and bold color accents, the Chaparral 287 SSX stands out at every dock. Thoughtful design touches like stainless steel hardware, LED lighting, and ample storage elevate the onboard experience, offering a perfect balance of sophistication, functionality, and exhilarating performance for family outings or lively so
`,
    specifications: {
      engine: "Volvo Penta V8 380",
      fuel: "Premium Gasoline",
      range: "160 nautical miles",
      crew: "Self-drive",
    },
    featured: true,
  },
  {
    id: "33984214hckgvgiq",
    name: "Boston Whaler 320 Vantage",
    type: "Center Console",
    length: "32 ft",
    capacity: 10,
    speed: "58 mph",
    price: 780,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532849/Layer_61_ustgnp.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532849/Layer_61_ustgnp.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532891/Layer_64_bvkzg7.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532889/Layer_65_z4nlxz.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532888/Layer_63_smcfof.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532882/Layer_62_buz8ae.jpg",
    ],
    features: [
      "Fishing Rod Holders",
      "Swim Platform",
      "GPS Navigation",
      "Premium Seating",
    ],
    description: `The Boston Whaler 320 Vantage is a versatile dual-console boat built to handle everything from offshore fishing excursions to family day cruising with ease. Powered by twin Mercury outboard engines, it delivers impressive speed, smooth handling, and reliable performance in both calm and rough conditions, living up to Boston Whaler’s reputation for unsinkable design and rugged durability.

On deck, the 320 Vantage features a highly adaptable cockpit with convertible seating, a spacious bow lounge, and a portside companion seat that transforms into multiple seating and lounging configurations. Anglers will appreciate the integrated livewell, fish boxes, and ample rod storage, while families and guests enjoy a well-appointed wet bar, a retractable sunshade, and a roomy enclosed head for added convenience.

The boat’s modern styling is matched by premium fit and finish throughout, with stainless steel accents, marine-grade upholstery, and thoughtful storage solutions. Whether you’re chasing trophy fish offshore, anchoring for a sunset picnic, or enjoying water sports with friends, the Boston Whaler 320 Vantage delivers confidence, comfort, and versatility in every adventure.`,
    specifications: {
      engine: "Twin Mercury Verado 350",
      fuel: "Premium Gasoline",
      range: "240 nautical miles",
      crew: "Self-drive or optional captain",
    },
    featured: false,
  },
  {
    id: "58455306wmviuebq",
    name: "Nor-Tech 340 Sport",
    type: "Center Console",
    length: "34 ft",
    capacity: 9,
    speed: "85 mph",
    price: 880,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532693/Layer_66_du1wtk.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532693/Layer_66_du1wtk.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532728/Layer_67_qcgfda.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532725/Layer_71_euyakp.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532723/Layer_68_bpf67s.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532721/Layer_70_mstzok.jpg",
    ],
    features: [
      "Premium Sound System",
      "Seating Lounge",
      "GPS Navigation",
      "Sunshade",
    ],
    description: `The Nor-Tech 340 Sport is a high-performance center console that seamlessly combines speed, style, and versatility. Equipped with powerful triple Mercury outboard engines, this boat offers blistering acceleration and smooth, confident handling, making it ideal for offshore runs, sandbar parties, and weekend cruises alike.

Designed with both performance enthusiasts and casual boaters in mind, the 340 Sport features a spacious, open deck layout with plush, diamond-stitched seating and a fully equipped helm station with advanced digital controls and navigation displays. A roomy forward lounge and wraparound bow seating offer ample space for relaxing, while integrated storage compartments keep gear organized and accessible.

Built with Nor-Tech’s signature sleek styling and attention to detail, the 340 Sport includes a custom sound system, a deluxe wet bar, and optional fishing amenities like rod holders and livewells. Whether you’re chasing adventure at top speed or cruising comfortably with family and friends, the Nor-Tech 340 Sport delivers uncompromising luxury and performance on the water.`,
    specifications: {
      engine: "Triple Mercury 450R",
      fuel: "Premium Gasoline",
      range: "300 nautical miles",
      crew: "Optional captain",
    },
    featured: false,
  },
  {
    id: "93894860uesohyds",
    name: "Midnight Express 34 Open",
    type: "Center Console",
    length: "34 ft",
    capacity: 10,
    speed: "85 mph",
    price: 870,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532531/Layer_74_qedqli.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532531/Layer_74_qedqli.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532565/Layer_75_tmbhqu.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532565/Layer_73_cp2ehf.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532561/Layer_72_bzqvwi.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532557/Layer_76_hzlzc4.jpg",
    ],
    features: [
      "GPS Navigation",
      "Insulated Fish Box",
      "Premium Seating",
      "Sound System",
    ],
    description: `The Midnight Express 34 Open is a beautifully engineered, high-performance center console designed for thrill-seekers and leisure cruisers alike. Powered by twin or triple outboard engines, it offers blistering top-end speeds combined with a stable, confident ride, perfect for offshore adventures and coastal runs.

Its open deck layout is intelligently designed to maximize space and versatility, featuring generous seating, a luxurious forward sun lounge, and a well-appointed helm with state-of-the-art navigation and control systems. The boat also includes a spacious console cabin equipped with a freshwater head and storage, making it suitable for extended day trips and overnight getaways.

Sleek lines and bold custom finishes give the 34 Open its signature presence on the water. With premium marine-grade upholstery, integrated LED lighting, and an optional top-tier audio system, this vessel delivers an unmatched blend of performance, comfort, and striking modern style, making it a favorite among discerning boaters.`,
    specifications: {
      engine: "Triple Mercury Verado 400",
      fuel: "Premium Gasoline",
      range: "280 nautical miles",
      crew: "Self-drive or optional captain",
    },
    featured: false,
  },
  {
    id: "04207323lxduovfe",
    name: "Baja 36 Outlaw",
    type: "Performance Offshore",
    length: "36 ft",
    capacity: 6,
    speed: "85+ mph",
    price: 840,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532404/Layer_78_jdj9nv.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532404/Layer_78_jdj9nv.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532436/Layer_77_jopdbn.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532433/Layer_81_itfbn3.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532433/Layer_82_lqaxe3.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532430/Layer_80_wqomsp.jpg",
    ],
    features: [
      "Race Seats",
      "Hydraulic Steering",
      "GPS Navigation",
      "Bluetooth Audio",
    ],
    description: `The Performance Offshore is a high-speed luxury powerboat crafted for adrenaline-fueled offshore runs and refined leisure cruising. Its powerful twin or triple engine setup delivers exhilarating acceleration, razor-sharp handling, and the ability to confidently navigate choppy waters at impressive speeds.

Designed with both performance and comfort in mind, the Performance Offshore features a sleek, aerodynamic profile and a thoughtfully arranged cockpit. The spacious deck layout includes premium seating, a wraparound sun lounge, and an ergonomic helm equipped with advanced digital controls and navigation displays. Below deck, a compact yet inviting cabin offers a relaxing retreat with a freshwater head and lounge area.

Built with precision engineering and bold styling, the Performance Offshore showcases premium marine-grade finishes, customizable color schemes, and integrated audio and lighting systems. It’s the perfect vessel for those who demand both speed and sophistication on open waters, whether chasing the horizon or hosting sunset gatherings at anchor.`,
    specifications: {
      engine: "Twin Mercury Racing 520 EFI",
      fuel: "High-Octane Gasoline",
      range: "220 nautical miles",
      crew: "Optional race crew",
    },
    featured: false,
  },
  {
    id: "98344703wvngpdqq",
    name: "Intrepid 345 Valor",
    type: "Center Console",
    length: "34 ft",
    capacity: 8,
    speed: "65 mph",
    price: 800,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532281/Layer_86_lbro4u.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532281/Layer_86_lbro4u.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532320/Layer_85_axbpzm.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532319/Layer_84_ehgpdo.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532316/Layer_87_prkkoa.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532315/Layer_83_kj0ln6.jpg",
    ],
    features: [
      "Luxury Cabin",
      "Swim Platform",
      "GPS Navigation",
      "Premium Sound System",
    ],
    description: `The Intrepid 345 Valor is a versatile, high-performance center console that perfectly balances offshore capability with luxury cruising amenities. Designed for serious anglers and recreational boaters alike, it features a powerful twin or triple engine configuration, delivering speed, stability, and fuel efficiency for everything from deep-sea fishing trips to family outings.

Its thoughtfully designed cockpit boasts ample seating, an integrated hardtop, and a spacious forward lounge area for relaxing or socializing. The helm is outfitted with cutting-edge electronics, intuitive controls, and premium materials, offering a comfortable, commanding experience for captains. Below deck, a surprisingly roomy cabin includes a convertible V-berth, enclosed head with a shower, and galley conveniences for extended trips.

Built with Intrepid’s renowned craftsmanship and attention to detail, the 345 Valor offers customizable options, from upholstery and lighting to fishing packages and entertainment upgrades. This boat blends performance, comfort, and style into one capable, adventure-ready package for boaters who demand versatility without compromise.`,
    specifications: {
      engine: "Triple Yamaha 300",
      fuel: "Premium Gasoline",
      range: "260 nautical miles",
      crew: "Optional captain",
    },
    featured: true,
  },
  {
    id: "44743815echcloet",
    name: "Wellcraft 302 Fisherman",
    type: "Center Console",
    length: "30 ft",
    capacity: 8,
    speed: "56 mph",
    price: 690,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532141/Layer_88_xjj3mx.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532141/Layer_88_xjj3mx.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532164/Layer_92_taxnb6.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532162/Layer_91_sw1qxm.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532161/Layer_89_gk2mkw.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532159/Layer_90_ldzues.jpg",
    ],
    features: [
      "Fishing Rod Holders",
      "Insulated Fish Box",
      "GPS Navigation",
      "Bluetooth Audio",
    ],
    description: `The Wellcraft 302 Fisherman is a serious offshore center console built for anglers who demand capability, speed, and modern comforts. Powered by twin outboard engines, it delivers impressive performance and handling in a variety of sea conditions, making it equally suited for deep-sea fishing expeditions or coastal family cruising.

Its fishing-focused layout includes an expansive aft cockpit with a large livewell, multiple in-floor fish boxes, and ample rod storage throughout. The integrated T-top provides shade and houses additional rod holders and optional electronics, while the leaning post features tackle storage and a freshwater sink. Forward, a spacious bow lounge with wraparound seating offers a perfect spot to relax when not chasing fish.

Blending rugged utility with upscale details, the Wellcraft 302 Fisherman includes premium upholstery, modern helm instrumentation, and an enclosed head compartment for added convenience. This versatile sport fishing boat is purpose-built for those who appreciate both the thrill of the hunt and the pleasure of a well-appointed day on the water.`,
    specifications: {
      engine: "Twin Mercury 300 Verado",
      fuel: "Premium Gasoline",
      range: "240 nautical miles",
      crew: "Self-drive or optional captain",
    },
    featured: false,
  },
  {
    id: "54216780tdkoodli",
    name: "Velocity Powerboats VR1 290",
    type: "Performance Offshore",
    length: "29 ft",
    capacity: 6,
    speed: "75 mph",
    price: 720,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532014/Layer_95_ivytgc.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532014/Layer_95_ivytgc.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532049/Layer_94_hc9b10.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532048/Layer_96_bwklvo.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532046/Layer_97_ukem5i.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751532045/Layer_93_jflycf.jpg",
    ],
    features: [
      "Race Seats",
      "Hydraulic Steering",
      "Sound System",
      "GPS Navigation",
    ],
    description: `The Velocity Powerboats VR1 290 is a sleek, performance-driven sport boat built for enthusiasts who crave speed and agility on the water. With its signature deep-V hull design and lightweight construction, the VR1 290 delivers exhilarating acceleration, razor-sharp handling, and a dry, stable ride even in choppy conditions.

This 29-foot performance boat is powered by a single or twin engine configuration, offering customizable options to suit a range of boating styles — from spirited weekend cruising to competitive poker runs. The cockpit layout includes bolster-style helm and passenger seats, a well-organized dashboard with high-performance gauges, and a spacious rear bench for passengers to ride comfortably at high speeds.

Beyond its racing pedigree, the VR1 290 balances performance with convenience, featuring a small cuddy cabin ideal for stowing gear or taking a break between runs. Bold graphics, quality upholstery, and polished stainless-steel hardware give this boat an unmistakable presence at any dock or marina. It’s a classic Velocity — fast, sharp, and built to thrill.`,
    specifications: {
      engine: "Single Mercury 565",
      fuel: "Premium Gasoline",
      range: "200 nautical miles",
      crew: "Optional race crew",
    },
    featured: false,
  },
  {
    id: "23818843pzvlkwzb",
    name: "SeaVee 340Z",
    type: "Center Console",
    length: "34 ft",
    capacity: 8,
    speed: "65 mph",
    price: 780,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531892/Layer_98_fpk6ec.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531892/Layer_98_fpk6ec.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531933/Layer_100_vuamj0.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531922/Layer_102_plhwn2.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531921/Layer_101_mykvnm.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531920/Layer_99_s2vkjy.jpg",
    ],
    features: [
      "Fishing Rod Holders",
      "Sun Deck",
      "Insulated Fish Box",
      "GPS Navigation",
    ],
    description: `The SeaVee 340Z is a premium offshore center console built for serious anglers and boating enthusiasts who demand uncompromising performance, fishability, and modern versatility. Featuring SeaVee’s renowned twin-stepped Z-hull design, this 34-foot boat delivers superior speed, fuel efficiency, and a remarkably stable, dry ride even in rough offshore conditions.

Designed with the hardcore fisherman in mind, the 340Z boasts an expansive, uncluttered cockpit with multiple in-deck fish boxes, insulated livewells, and ample rod storage. The optional second helm station and integrated T-top provide additional functionality for both offshore runs and relaxed coastal cruises. With a customizable layout, owners can configure the boat with options like forward seating, dive doors, and high-capacity bait systems to suit their unique needs.

While the 340Z is built for battle on the water, it doesn’t sacrifice comfort. Plush seating, premium upholstery, and a well-appointed console with advanced electronics create a refined boating experience. Whether targeting big game offshore or enjoying a family sandbar outing, the SeaVee 340Z blends professional-grade fishing features with the amenities of a luxury center console.`,
    specifications: {
      engine: "Triple Mercury 350 Verado",
      fuel: "Premium Gasoline",
      range: "300 nautical miles",
      crew: "Self-drive",
    },
    featured: false,
  },
  {
    id: "39471381qdplptig",
    name: "Sonic 32 CC",
    type: "Center Console",
    length: "32 ft",
    capacity: 9,
    speed: "68 mph",
    price: 720,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531741/Layer_105_qb30hg.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531741/Layer_105_qb30hg.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531774/Layer_106_oxdvpc.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531772/Layer_107_zzn7cm.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531771/Layer_103_orzbcb.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531768/Layer_104_fxaluv.jpg",
    ],
    features: ["GPS Navigation", "Sun Deck", "Cooler", "Premium Seating"],
    description: `The Sonic 32 CC is a versatile high-performance center console built for boaters who demand both speed and adaptability. With its sleek, aggressive lines and twin-step hull design, this 32-foot model delivers thrilling top-end performance while maintaining impressive stability and control in offshore conditions.

Designed to suit a variety of on-water activities, the 32 CC features a spacious open deck layout perfect for fishing, diving, or cruising with friends and family. Multiple in-deck storage compartments, an insulated fish box, and an integrated livewell cater to anglers, while generous seating, premium upholstery, and a wraparound console windshield enhance passenger comfort.

Advanced electronics, intuitive helm controls, and customizable options like T-top configurations, sound systems, and color schemes allow owners to tailor the Sonic 32 CC to their exact preferences. Whether chasing trophy fish offshore or enjoying a sunset run along the coast, the Sonic 32 CC offers an id
`,
    specifications: {
      engine: "Twin Mercury 350 Verado",
      fuel: "Premium Gasoline",
      range: "260 nautical miles",
      crew: "Optional captain",
    },
    featured: false,
  },
  {
    id: "56179641nspkziti",
    name: "Checkmate Pulsare 2400 BRX",
    type: "Performance Bowrider",
    length: "24 ft",
    capacity: 6,
    speed: "75 mph",
    price: 660,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531621/Layer_110_iulo0p.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531621/Layer_110_iulo0p.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531654/Layer_111_qjxgjb.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531653/Layer_112_ckn54n.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531651/Layer_109_wrvkkz.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531649/Layer_108_jjepsx.jpg",
    ],
    features: [
      "Sound System",
      "Sun Deck",
      "GPS Navigation",
      "Hydraulic Steering",
    ],
    description: `The Checkmate Pulsare 2400 BRX is a bold, high-performance bowrider designed for thrill-seekers and families alike. Known for its sleek, race-inspired profile and precision hull engineering, this 24-foot speedboat delivers exhilarating top speeds with smooth, confident handling across both calm waters and open bays.

Inside, the Pulsare 2400 BRX offers a spacious, open bow layout with plush seating, premium marine upholstery, and thoughtful storage throughout. The cockpit is equipped with adjustable bucket seats, a well-designed helm with modern instrumentation, and a performance-style steering wheel that puts total control at the driver’s fingertips.

Blending classic Checkmate styling with modern upgrades, the 2400 BRX features vibrant gelcoat finishes, optional wakeboard towers, and an integrated swim platform for easy water access. Whether cruising with family, pulling a skier, or racing across glassy lakes, the Checkmate Pulsare 2400 BRX offers excitement, comfort, and
`,
    specifications: {
      engine: "Single Mercury 300 Verado",
      fuel: "Premium Gasoline",
      range: "160 nautical miles",
      crew: "Self-drive",
    },
    featured: true,
  },
  {
    id: "97673350xtxialip",
    name: "Performance Powerboats P-33",
    type: "Performance Offshore",
    length: "33 ft",
    capacity: 6,
    speed: "95+ mph",
    price: 890,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531479/Layer_115_njrtlk.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531479/Layer_115_njrtlk.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531512/Layer_118_olmtmz.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531511/Layer_117_tbomia.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531510/Layer_114_kj2fvk.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531509/Layer_113_jbyszp.jpg",
    ],
    features: [
      "Race Seats",
      "Hydraulic Steering",
      "Sound System",
      "GPS Navigation",
    ],
    description: `The Performance Powerboats P-33 is a high-performance offshore powerboat crafted for speed enthusiasts and competitive racers. With its aggressive, aerodynamic lines and proven stepped-hull design, the P-33 cuts through waves with precision, offering both thrilling acceleration and remarkable stability in open water.

Designed for both comfort and function, the cockpit layout features race-bolstered seating, ergonomic controls, and a sleek, modern dashboard with full digital instrumentation. The spacious cabin below provides convenient amenities for extended runs, including a V-berth, storage compartments, and optional entertainment features.

Built to withstand the rigors of offshore racing, the P-33 incorporates lightweight composite materials, premium hardware, and customizable engine packages capable of pushing speeds beyond 100 mph. Whether you're chasing checkered flags or enjoying adrenaline-fueled weekend runs, the Performance Powerboats P-33 delivers world-class performance and unmistakable presence on the water.`,
    specifications: {
      engine: "Twin Mercury Racing 520 EFI",
      fuel: "High-Octane Gasoline",
      range: "210 nautical miles",
      crew: "Optional race crew",
    },
    featured: false,
  },
  {
    id: "77113245izibxlbf",
    name: "Eliminator 28 Speedster",
    type: "Performance Catamaran",
    length: "28 ft",
    capacity: 6,
    speed: "120+ mph",
    price: 890,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531329/Layer_119_df943d.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531329/Layer_119_df943d.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531372/Layer_120_xo4fbi.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531369/Layer_123_grpfoi.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531368/Layer_122_lwixzg.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531367/Layer_121_hmmy3x.jpg",
    ],
    features: [
      "Race Seats",
      "Hydraulic Steering",
      "Premium Sound System",
      "GPS Navigation",
    ],
    description: `The Eliminator 28 Speedster is a head-turning performance catamaran designed for those who crave speed, style, and precision handling. Its twin-sponson hull configuration provides exceptional stability and effortless planing, making it one of the most exhilarating rides in its class. With a sleek, aerodynamic profile and bold custom graphics, the 28 Speedster commands attention whether docked or wide open on the water.

Inside, the cockpit is designed for both driver and passengers to experience maximum comfort at high speeds. It features sculpted high-back bucket seats, premium marine upholstery, and a full digital dash with performance readouts. The layout accommodates up to six passengers, offering a balance of luxury finishes and race-inspired functionality.

Powered by twin high-performance outboard or stern-drive engine options, the Eliminator 28 Speedster delivers blistering top-end speeds while maintaining superb cornering and wave-cutting capabilities. Perfect for poker runs, offshore sprints, or weekend blasts across the lake, it stands as a modern icon in the world of custom performance powerboats.`,
    specifications: {
      engine: "Twin Mercury Racing 450R",
      fuel: "High-Octane Gasoline",
      range: "200 nautical miles",
      crew: "Optional race crew",
    },
    featured: false,
  },
  {
    id: "27649447rzdvczdc",
    name: "Spectre 32 Cat",
    type: "Performance Catamaran",
    length: "32 ft",
    capacity: 6,
    speed: "115 mph",
    price: 880,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531202/Layer_127_hvgf1l.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531202/Layer_127_hvgf1l.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531239/Layer_124_cbtxoc.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531236/Layer_128_hmzj6r.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531235/Layer_126_n5hqwi.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531235/Layer_125_an0bw1.jpg",
    ],
    features: [
      "GPS Navigation",
      "Hydraulic Steering",
      "Race Seats",
      "Bluetooth Audio",
    ],
    description: `The Spectre 32 Cat is a purpose-built performance catamaran designed for adrenaline seekers and offshore enthusiasts. With its twin-sponson tunnel hull, the 32 Cat effortlessly slices through rough water while maintaining incredible stability and control at high speeds. Its aggressive, aerodynamic styling and striking color schemes make it a standout on any waterway.

Inside the spacious cockpit, the Spectre 32 Cat offers race-inspired bucket seating for four, a wraparound windscreen, and a custom-molded dash equipped with digital instrumentation and performance controls. The layout is optimized for both comfort and function, providing an exhilarating experience whether you're cruising coastal runs or chasing top speeds in offshore poker runs.

Equipped with twin outboards or high-output stern drives, the Spectre 32 Cat is capable of achieving blistering top speeds while delivering precise, responsive handling. Its advanced hull design ensures minimal drag and efficient lift, making it one of the most sought-after performance cats in its class for seasoned drivers and speedboat enthusiasts alike.`,
    specifications: {
      engine: "Twin Mercury Racing 450R",
      fuel: "High-Octane Gasoline",
      range: "200 nautical miles",
      crew: "Optional race crew",
    },
    featured: false,
  },
  {
    id: "81629517pzekqrpb",
    name: "Formula 330 Crossover",
    type: "Luxury Bowrider",
    length: "33 ft",
    capacity: 10,
    speed: "58 mph",
    price: 790,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531046/Layer_129_iwciwr.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531046/Layer_129_iwciwr.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531095/Layer_132_cd9edn.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531095/Layer_131_gazbf1.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531093/Layer_133_fjf8uu.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751531093/Layer_130_ckvkeq.jpg",
    ],
    features: [
      "Premium Sound System",
      "Seating Lounge",
      "GPS Navigation",
      "Sun Deck",
    ],
    description: `The Formula 330 Crossover is a sophisticated blend of luxury, performance, and versatility, designed for boaters who demand more from their time on the water. Its sleek, modern lines and bold hull graphics command attention, while the deep-V hull ensures a smooth, confident ride across a variety of conditions.

The cockpit layout of the 330 Crossover is spacious and intelligently arranged, featuring plush, wraparound seating, a convertible sun lounge, and an ergonomically designed helm station equipped with the latest navigation technology. An integrated wet bar and premium sound system make it perfect for entertaining family and friends during day cruises or sunset gatherings.

Below deck, the 330 Crossover surprises with a fully appointed cabin offering a cozy lounge, sleeping accommodations, a compact galley, and an enclosed head. Combining day boat utility with overnight comfort, the Formula 330 Crossover is ideal for both spirited adventures and relaxing weekend getaways on the water.`,
    specifications: {
      engine: "Twin MerCruiser 8.2 MAG",
      fuel: "Premium Gasoline",
      range: "190 nautical miles",
      crew: "Optional captain",
    },
    featured: true,
  },
  {
    id: "58285447hvjrlcsx",
    name: "Nor-Tech 390 Sport",
    type: "Performance Center Console",
    length: "39 ft",
    capacity: 10,
    speed: "90 mph",
    price: 910,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530883/Layer_138_hsunfn.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530883/Layer_138_hsunfn.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530935/Layer_134_yxy3a4.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530935/Layer_135_htwhwl.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530934/Layer_137_cxww4r.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530934/Layer_136_wnj8lo.jpg",
    ],
    features: [
      "Luxury Cabin",
      "Premium Sound System",
      "Seakeeper Stabilizer",
      "GPS Navigation",
    ],
    description: `The Nor-Tech 390 Sport is a premium high-performance center console designed for boaters who crave speed, luxury, and versatility. With its sleek, aggressive lines and bold presence, this 39-foot powerhouse is built for those who want to turn heads on the water while experiencing class-leading performance.

The spacious deck layout of the 390 Sport offers generous wraparound seating, an expansive aft lounge, and a forward sun pad, making it perfect for entertaining, offshore fishing, or high-speed coastal cruising. The helm is equipped with state-of-the-art navigation systems, digital controls, and an advanced audio setup, ensuring both comfort and control at any speed.

Powered by multiple high-output outboard engines, the Nor-Tech 390 Sport delivers blistering top speeds with smooth, stable handling even in challenging sea conditions. Its deep-V hull design ensures a soft, dry ride, while premium marine upholstery and top-tier finishes elevate the onboard experience, blending performance and luxury into one unforgettable package.`,
    specifications: {
      engine: "Quad Mercury Racing 450R",
      fuel: "Premium Gasoline",
      range: "300 nautical miles",
      crew: "Professional captain optional",
    },
    featured: false,
  },
  {
    id: "61173936xbdzrswh",
    name: "Sonic 36 CC",
    type: "Center Console",
    length: "36 ft",
    capacity: 8,
    speed: "70 mph",
    price: 850,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530752/Layer_143_d5y621.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530752/Layer_143_d5y621.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530789/Layer_139_ewaxuh.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530788/Layer_141_fqrxun.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530788/Layer_142_wwajj0.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530788/Layer_140_pnido0.jpg",
    ],
    features: [
      "Fishing Rod Holders",
      "Insulated Fish Box",
      "GPS Navigation",
      "Bluetooth Audio",
    ],
    description: `The Sonic 36 CC is a high-performance center console speedboat designed for offshore enthusiasts who value speed, agility, and versatility. Its sharp, aerodynamic profile and powerful stance make it an eye-catching vessel on any body of water, from calm bays to open seas.

Built for both sport and leisure, the 36 CC offers a spacious, well-appointed deck layout with ample seating, a forward sun lounge, and a fully equipped helm featuring advanced navigation and control systems. The boat’s design ensures an efficient, smooth ride, providing both thrill and comfort for fishing trips, high-speed runs, or family outings.

Powered by twin or triple outboard engines, the Sonic 36 CC boasts impressive acceleration and top speeds while maintaining stability and responsive handling in various sea conditions. Premium marine-grade finishes, storage solutions, and an integrated sound system round out its luxurious and practical features, making it a favorite for boaters seeking a bold, versatile offshore performer.`,
    specifications: {
      engine: "Triple Mercury Verado 350",
      fuel: "Premium Gasoline",
      range: "280 nautical miles",
      crew: "Optional captain",
    },
    featured: false,
  },
  {
    id: "38599319vfscrhzy",
    name: "Outerlimits SV 29",
    type: "Offshore V-Bottom",
    length: "29 ft",
    capacity: 6,
    speed: "115 mph",
    price: 880,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530609/Layer_147_ocvkut.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530609/Layer_147_ocvkut.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530653/Layer_146_tb0oon.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530651/Layer_145_bf1ons.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530649/Layer_148_uv7wfz.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530649/Layer_144_fwj7ko.jpg",
    ],
    features: [
      "Race Seats",
      "Trim Tabs",
      "GPS Speedometer",
      "Hydraulic Steering",
    ],
    description: `The Outerlimits SV 29 is a high-performance offshore V-bottom speedboat crafted for thrill-seekers who demand precision handling and blistering top speeds. With its aggressive, aerodynamic profile and race-inspired design, the SV 29 stands out as a purebred performance machine on the water.

Its cockpit is designed with both driver and passenger comfort in mind, featuring bolstered seating, a custom dash with advanced instrumentation, and premium marine finishes throughout. The boat’s deep-V hull design ensures a smooth, stable ride even in choppy offshore conditions, making it ideal for poker runs, offshore racing, or high-speed coastal cruising.

Powered by a single, high-output engine — typically a Mercury Racing powerhouse — the Outerlimits SV 29 delivers incredible acceleration and reliable top-end speed. Built with meticulous attention to detail and uncompromising craftsmanship, it offers both performance enthusiasts and collectors a sleek, exhilarating ride coupled with unmatched build quality and timeless Outerlimits style.`,
    specifications: {
      engine: "Single Mercury Racing 565",
      fuel: "High-Octane Gasoline",
      range: "190 nautical miles",
      crew: "Race crew optional",
    },
    featured: false,
  },
  {
    id: "42953526yvoimueu",
    name: "Fountain 34 TE",
    type: "Center Console",
    length: "34 ft",
    capacity: 9,
    speed: "85 mph",
    price: 870,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530420/Layer_151_jccrik.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530420/Layer_151_jccrik.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530526/Layer_153_l5nfho.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530526/Layer_152_hdfimn.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530520/Layer_149_hr32g7.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530515/Layer_150_gh748o.jpg",
    ],
    features: [
      "Fishing Rod Holders",
      "Insulated Fish Box",
      "GPS Navigation",
      "Premium Seating",
    ],
    description: `The Fountain 34 TE (Tournament Edition) is a serious offshore center console designed for anglers and performance enthusiasts alike. Renowned for its sleek, aggressive styling and proven deep-V hull, the 34 TE cuts through rough water with ease while offering remarkable speed, stability, and control.

Built for both sport fishing and leisure cruising, the Fountain 34 TE features an open, spacious deck layout with plenty of rod holders, insulated fish boxes, and a large livewell. The helm is equipped with modern electronics, premium finishes, and triple helm seats, providing comfort and functionality whether you’re chasing trophy fish offshore or cruising with family and friends.

Powered by twin or triple outboard engines, the 34 TE offers exceptional acceleration and top-end performance, making it one of the fastest center consoles in its class. Premium upholstery, ample storage, and a forward sunpad round out this versatile package, offering the perfect balance of hardcore fishing capability and high-performance fun.`,
    specifications: {
      engine: "Triple Mercury 400 Verado",
      fuel: "Premium Gasoline",
      range: "270 nautical miles",
      crew: "Optional captain",
    },
    featured: false,
  },
  {
    id: "48896830qlngghgr",
    name: "Baja 278 Islander",
    type: "Performance Bowrider",
    length: "27 ft",
    capacity: 8,
    speed: "64 mph",
    price: 690,
    image:
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530192/57622391athkwryy_d0ubym.jpg",
    gallery: [
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530190/43851605yxumczzc_gd5i80.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530192/57622391athkwryy_d0ubym.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530191/04145876kszgkeex_kbrfgl.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530190/70372665etdjlegb_dignra.jpg",
      "https://res.cloudinary.com/davjgeymf/image/upload/v1751530190/97594537jynfwfgm_ddy9fl.jpg",
    ],
    features: ["Sound System", "Swim Platform", "GPS Navigation", "Sun Deck"],
    description: `The Baja 278 Islander is a bold and stylish performance boat designed for those who crave speed, comfort, and open-water adventure. With its signature sleek lines and aggressive stance, this bowrider combines high-performance capability with family-friendly features, making it an ideal choice for both thrill-seekers and casual cruisers.

The spacious cockpit and open bow seating area provide comfortable accommodations for up to 10 passengers, complete with plush marine-grade upholstery, integrated cup holders, and ample storage for gear and water toys. The 278 Islander’s ergonomic helm features modern gauges and controls, giving the captain precise command whether navigating calm bays or slicing through offshore waves.

Powered by a powerful single or twin engine configuration, the Baja 278 Islander delivers impressive top speeds and nimble handling. Its deep-V hull ensures a smooth, dry ride, while the integrated swim platform and ladder make water access easy for swimming, snorkeling, or watersports. It’s the perfect balance of speedboat excitement and weekend versatility.`,
    specifications: {
      engine: "Single MerCruiser 496 MAG HO",
      fuel: "Premium Gasoline",
      range: "160 nautical miles",
      crew: "Self-drive",
    },
    featured: false,
  },
];
