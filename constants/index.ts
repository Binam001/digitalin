const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Services", href: "/services" },
  { id: 4, title: "Portfolio", href: "/portfolio" },
  { id: 5, title: "Blog", href: "/blog" },
  { id: 6, title: "Trends", href: "/trends" },
  { id: 7, title: "Awards", href: "/awards" },
  { id: 8, title: "Contact", href: "/contact" },
];

const whatWeDoLists = [
  {
    id: 1,
    title: "Social Media Advertising",
    image: "/images/whatWeDo/social-media-ad.png",
    desc: "We create impactful social media strategies that grow your brand and engage the right audience. From content creation to campaign management, we turn likes, shares, and followers into real business results.",
  },
  {
    id: 2,
    title: "Digital Advertising",
    image: "/images/whatWeDo/digital-ad.png",
    desc: "Digital advertising is the use of online platforms—like Google, Facebook, Instagram, and YouTube—to promote your brand, products, or services to the right audience at the right time. It involves placing targeted ads across digital channels using tools that allow precise control over audience segments, budgets, timing, and messaging to drive not only clicks but meaningful engagement. At Digitalin, we specialize in crafting data-driven digital ad campaigns that deliver measurable and high quality results. From search and display ads to social media and video promotions, our approach ensures that your advertising budget works harder—generating more traffic, higher engagement, qualified leads, and conversions. Whether you're looking to build brand awareness, foster audience interaction, or drive sales, we help you reach your business goals with strategic, performance-focused advertising and marketing.",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    image: "/images/whatWeDo/seo-ad.png",
    desc: "SEO (Search Engine Optimization) involves optimizing your website and content to make it more attractive to search engines. This process includes on-page SEO (optimizing individual pages with the right keywords, meta tags, and high-quality content) and off-page SEO (building backlinks and improving your website's authority). The goal of SEO is to increase your website visibility on search engine results pages (SERPs), making it easier for potential customers to find you through organic search and improve keyword rankings. As an expert SEO company in Nepal, we focus on creating strategy based approaches that help your website rank higher, attract more visitors, and convert them into loyal customers.",
  },
  {
    id: 4,
    title: "Web Development",
    image: "/images/whatWeDo/web-dev-ad.png",
    desc: "We build fast, modern websites that don't just look great—they perform. From responsive design to seamless user experience, our web development turns visitors into customers and supports your business goals.",
  },
];

const ourWorkLists = [
  {
    id: 1,
    title: "image 1",
    image: "/images/portfolio/Comedy-Base-Camp-02.webp",
  },
  { id: 2, title: "image 2", image: "/images/portfolio/Dare-to-win-2.webp" },
  { id: 3, title: "image 3", image: "/images/portfolio/dew-friend.png" },
  { id: 4, title: "image 4", image: "/images/portfolio/Dove-1.webp" },
  { id: 5, title: "image 5", image: "/images/portfolio/Dew-Roadies-2.webp" },
  { id: 6, title: "image 6", image: "/images/portfolio/Happydent.webp" },
  { id: 7, title: "image 7", image: "/images/portfolio/Sunsilk.webp" },
  {
    id: 8,
    title: "image 8",
    image: "/images/portfolio/Pepsi-More-Fizz-Thematic-Campaign-1.webp",
  },
  { id: 9, title: "image 9", image: "/images/portfolio/Play-in-Style.webp" },
  {
    id: 10,
    title: "image 10",
    image: "/images/portfolio/Pepsi-Refreshing-Utsav-Offer.png",
  },
  { id: 11, title: "image 11", image: "/images/portfolio/pepsi-tiktok.webp" },
];

const brandsALists = [
  { id: 1, title: "Samsung", image: "/images/brands/samsung.webp" },
  { id: 2, title: "Mountain Dew", image: "/images/brands/mountain-dew.webp" },
  { id: 3, title: "UNL", image: "/images/brands/unl.webp" },
  { id: 4, title: "Dove", image: "/images/brands/dove.webp" },
  {
    id: 5,
    title: "Standard Chartered",
    image: "/images/brands/standard-chartered.webp",
  },
];

const brandsBLists = [
  { id: 1, title: "Double A", image: "/images/brands/double-a.webp" },
  { id: 2, title: "IME Life", image: "/images/brands/IME-life.webp" },
  { id: 3, title: "Sunsilk", image: "/images/brands/sunsilk.webp" },
  { id: 4, title: "Surf Exel", image: "/images/brands/surf-exel.webp" },
];

const socialLinkLists = [
  {
    id: 1,
    title: "facebook",
    icon: "iconoir:facebook",
    fillIcon: "ri:facebook-fill",
    href: "#",
  },
  {
    id: 2,
    title: "instagram",
    icon: "hugeicons:instagram",
    fillIcon: "ri:instagram-fill",
    href: "#",
  },
  {
    id: 3,
    title: "youtube",
    icon: "iconoir:youtube",
    fillIcon: "uil:youtube",
    href: "#",
  },
  {
    id: 4,
    title: "twitter",
    icon: "codicon:twitter",
    fillIcon: "codicon:twitter",
    href: "#",
  },
  {
    id: 5,
    title: "linkedin",
    icon: "circum:linkedin",
    fillIcon: "mingcute:linkedin-fill",
    href: "#",
  },
  {
    id: 6,
    title: "tiktok",
    icon: "proicons:tiktok",
    fillIcon: "ic:round-tiktok",
    href: "#",
  },
];

const contactLists = [
  {
    id: 1,
    title: "contact",
    link: "tel:+977 9704593302",
    desc: "+977 9704593302",
    icon: "ri:phone-fill",
  },
  {
    id: 2,
    title: "email",
    link: "mailto:connect@digitalin.com.np",
    desc: "connect@digitalin.com.np",
    icon: "material-symbols-light:mail",
  },
  {
    id: 3,
    title: "address",
    link: "https://www.google.com/maps/place/DigitalIN/@27.672925,85.301999,11z/data=!4m6!3m5!1s0x39eb19b6c0ed815b:0x339d33c792d1a3!8m2!3d27.6729245!4d85.3019988!16s%2Fg%2F11cmql937l?hl=en&entry=ttu",
    desc: " Pattipa Marg Uttar Baghdol, Lalitpur, Nepal",
    icon: "gridicons:location",
  },
];

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const features = [
  {
    id: 1,
    icon: "/images/icons/feature-icon1.svg",
    title: "Mountain Dew",
    desc: "The mountains are calling, and the adrenaline is rising. In a land where adventure is in our DNA, Mountain Dew stands as the ultimate fuel for those who refuse to back down.",
    styles: "top-[0%]",
  },
  {
    id: 2,
    icon: "/images/icons/feature-icon2.svg",
    title: "Pepsi",
    desc: "Our latest creative for Pepsi Nepal highlights the crisp, carbonated kick that cuts through the spice and doubles the delight. Because let's be honest: a meal without a cold Pepsi isn't a meal—it's just a snack.",
    styles: "top-[50%] opacity-0",
  },
  {
    id: 3,
    icon: "/images/icons/feature-icon3.svg",
    title: "Happydent",
    desc: "Brighten every smile with Happydent! Enjoy long-lasting freshness and a burst of delicious flavor with every chew. Because your smile deserves to shine anywhere, anytime..",
    styles: "top-[90%] opacity-0",
  },
  // {
  //   id: 4,
  //   icon: "/images/icons/feature-icon4.svg",
  //   highlight: "AirDrop.",
  //   text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
  //   styles: "top-[70%]",
  // },
  // {
  //   id: 5,
  //   icon: "/images/icons/feature-icon5.svg",
  //   highlight: "Writing Tool.",
  //   text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
  //   styles: "top-[90%]",
  // },
];

const featureSequence = [
  {
    id: 1,
    videoPath: "/videos/portfolio/mountain-dew.mp4",
    boxClass: ".box1",
    delay: 0,
  },
  {
    id: 2,
    videoPath: "/videos/portfolio/pepsi.mp4",
    boxClass: ".box2",
    delay: 0,
  },
  {
    id: 3,
    videoPath: "/videos/portfolio/happydent.mp4",
    boxClass: ".box3",
    delay: 0,
  },
  // { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  // { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const teamMemberLists = [
  {
    id: 1,
    name: "Umang Shakya",
    // image: "/images/team/umang.webp",
    image: "/images/team/team1.png",
  },
  {
    id: 2,
    name: "Jiwan Shrestha",
    // image: "/images/team/jiwan.webp",
    image: "/images/team/team2.png",
  },
  {
    id: 3,
    name: "Roshan Tamrakar",
    // image: "/images/team/roshan.webp",
    image: "/images/team/team3.png",
  },
  {
    id: 4,
    name: "Shiwani Pradhan",
    // image: "/images/team/shiwani.webp",
    image: "/images/team/team1.png",
  },
  {
    id: 5,
    name: "Luniva Singh",
    // image: "/images/team/luniva.webp",
    image: "/images/team/team2.png",
  },
  {
    id: 6,
    name: "Romen Manandhar",
    // image: "/images/team/romen.webp",
    image: "/images/team/team3.png",
  },
  {
    id: 7,
    name: "Sabin Khadgi",
    // image: "/images/team/sabin.webp",
    image: "/images/team/team1.png",
  },
  {
    id: 8,
    name: "Rajesh Maharjan",
    // image: "/images/team/rajesh.webp",
    image: "/images/team/team2.png",
  },
  {
    id: 9,
    name: "Anil Dali",
    // image: "/images/team/anil.webp",
    image: "/images/team/team3.png",
  },
  {
    id: 10,
    name: "Alka Neupane",
    // image: "/images/team/alka.webp",
    image: "/images/team/team1.png",
  },
  {
    id: 11,
    name: "Prakriti Shree Shrestha",
    // image: "/images/team/Prakriti.webp",
    image: "/images/team/team2.png",
  },
  {
    id: 12,
    name: "Jabina Maharjan",
    // image: "/images/team/Jabina.webp",
    image: "/images/team/team3.png",
  },
  {
    id: 13,
    name: "Dristi Singh",
    // image: "/images/team/Dristi.webp",
    image: "/images/team/team1.png",
  },
  {
    id: 14,
    name: "Rujit Duwal",
    // image: "/images/team/Rujit-Duwal.webp",
    image: "/images/team/team2.png",
  },
  {
    id: 15,
    name: "Shown Darsandhari",
    // image: "/images/team/Shown-Darsandhari.webp",
    image: "/images/team/team3.png",
  },
  {
    id: 16,
    name: "Rasel Shakya",
    // image: "/images/team/rasel.webp",
    image: "/images/team/team1.png",
  },
  {
    id: 17,
    name: "Meena Tamang",
    // image: "/images/team/Meena-Tamang.webp",
    image: "/images/team/team2.png",
  },
  {
    id: 18,
    name: "Ojaswi Shrestha",
    // image: "/images/team/OJ.webp",
    image: "/images/team/team3.png",
  },
  {
    id: 19,
    name: "Gauri K.C",
    // image: "/images/team/Gauri.webp",
    image: "/images/team/team1.png",
  },
  {
    id: 20,
    name: "Abhishek Pandey",
    // image: "/images/team/Abisek.webp",
    image: "/images/team/team2.png",
  },
  {
    id: 21,
    name: "Sanish Shakya",
    // image: "/images/team/Sanish.webp",
    image: "/images/team/team3.png",
  },
];

const blogLists = [
  {
    id: 1,
    title: "Facebook Advertising",
    slug: "facebook-advertising",
    src: "/images/whatWeDo/1.png",
    image: "/images/whatWeDo/facebook-Advertising.jpg",
    desc: "Facebook Advertising is a powerful way to reach your ideal customers by placing targeted ads across Facebook's network. With advanced audience segmentation, precise interest-based targeting, and real-time optimization, Facebook allows you to connect with people who are genuinely interested in your brand. Whether your goal is brand awareness, generate lead, website traffic, or direct sales — Facebook Advertising provides the tools to deliver measurable results. As a Facebook advertising agency in Nepal, Digitalin specializes in designing performance-driven Facebook ad campaigns that align with your business goals. From compelling visuals and persuasive content to advanced targeting and budget optimization, we ensure that every rupee you spend works smarter — generating real engagement, quality leads, and impactful conversions. Whether you're launching a new brand, expanding your reach, or boosting your online sales, our Facebook advertising solutions help you achieve growth with strategic, digital marketing execution.",
    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
  {
    id: 2,
    title: "Digital Advertising",
    slug: "digtial-advertising",
    src: "/images/whatWeDo/2.png",
    image: "/images/whatWeDo/digital-advertising.png",
    desc: "Digital advertising is the use of online platforms—like Google, Facebook, Instagram, and YouTube—to promote your brand, products, or services to the right audience at the right time. It involves placing targeted ads across digital channels using tools that allow precise control over audience segments, budgets, timing, and messaging to drive not only clicks but meaningful engagement. At Digitalin, we specialize in crafting data-driven digital ad campaigns that deliver measurable and high quality results. From search and display ads to social media and video promotions, our approach ensures that your advertising budget works harder—generating more traffic, higher engagement, qualified leads, and conversions. Whether you're looking to build brand awareness, foster audience interaction, or drive sales, we help you reach your business goals with strategic, performance-focused advertising and marketing.",

    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    src: "/images/whatWeDo/3.png",
    image: "/images/whatWeDo/seo-company-in-nepal.png",
    desc: "SEO (Search Engine Optimization) involves optimizing your website and content to make it more attractive to search engines. This process includes on-page SEO (optimizing individual pages with the right keywords, meta tags, and high-quality content) and off-page SEO (building backlinks and improving your website's authority). The goal of SEO is to increase your website visibility on search engine results pages (SERPs), making it easier for potential customers to find you through organic search and improve keyword rankings. As an expert SEO company in Nepal, we focus on creating strategy based approaches that help your website rank higher, attract more visitors, and convert them into loyal customers.",

    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
  {
    id: 4,
    title: "Search Engine Marketing",
    slug: "search-engine-marketing",
    src: "/images/whatWeDo/4.png",
    image: "/images/whatWeDo/search-engine-marketing-1.png",
    desc: "Search Engine Marketing (SEM) is a powerful digital strategy that places your business at the top of search engine results when customers are actively looking for your products or services. It uses paid advertising platforms like Google Ads to drive instant visibility, highly targeted traffic, and strong conversions through keyword-focused campaigns. As a trusted search engine marketing agency, Digitalin helps businesses grow through strategic search engine marketing SEM practices built on smart marketing strategy, precise targeting, and controlled ad spend. Unlike generic promotion, SEM allows you to reach your audience at the right time, when they are most ready to take action. As a performance-focused digital marketing agency, we design high-impact sem campaigns that improve your online presence and strengthen your online visibility, ensuring your brand shows up exactly where it matters most.",

    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
];

const trendLists = [
  {
    id: 1,
    title: "Facebook Advertising",
    slug: "facebook-advertising",
    image: "/images/whatWeDo/facebook-Advertising.jpg",
    desc: "Facebook Advertising is a powerful way to reach your ideal customers by placing targeted ads across Facebook's network. With advanced audience segmentation, precise interest-based targeting, and real-time optimization, Facebook allows you to connect with people who are genuinely interested in your brand. Whether your goal is brand awareness, generate lead, website traffic, or direct sales — Facebook Advertising provides the tools to deliver measurable results. As a Facebook advertising agency in Nepal, Digitalin specializes in designing performance-driven Facebook ad campaigns that align with your business goals. From compelling visuals and persuasive content to advanced targeting and budget optimization, we ensure that every rupee you spend works smarter — generating real engagement, quality leads, and impactful conversions. Whether you're launching a new brand, expanding your reach, or boosting your online sales, our Facebook advertising solutions help you achieve growth with strategic, digital marketing execution.",
    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
  {
    id: 2,
    title: "Digital Advertising",
    slug: "digtial-advertising",
    image: "/images/whatWeDo/digital-advertising.png",
    desc: "Digital advertising is the use of online platforms—like Google, Facebook, Instagram, and YouTube—to promote your brand, products, or services to the right audience at the right time. It involves placing targeted ads across digital channels using tools that allow precise control over audience segments, budgets, timing, and messaging to drive not only clicks but meaningful engagement. At Digitalin, we specialize in crafting data-driven digital ad campaigns that deliver measurable and high quality results. From search and display ads to social media and video promotions, our approach ensures that your advertising budget works harder—generating more traffic, higher engagement, qualified leads, and conversions. Whether you're looking to build brand awareness, foster audience interaction, or drive sales, we help you reach your business goals with strategic, performance-focused advertising and marketing.",

    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    image: "/images/whatWeDo/seo-company-in-nepal.png",
    desc: "SEO (Search Engine Optimization) involves optimizing your website and content to make it more attractive to search engines. This process includes on-page SEO (optimizing individual pages with the right keywords, meta tags, and high-quality content) and off-page SEO (building backlinks and improving your website's authority). The goal of SEO is to increase your website visibility on search engine results pages (SERPs), making it easier for potential customers to find you through organic search and improve keyword rankings. As an expert SEO company in Nepal, we focus on creating strategy based approaches that help your website rank higher, attract more visitors, and convert them into loyal customers.",

    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
  {
    id: 4,
    title: "Search Engine Marketing",
    slug: "search-engine-marketing",
    image: "/images/whatWeDo/search-engine-marketing-1.png",
    desc: "Search Engine Marketing (SEM) is a powerful digital strategy that places your business at the top of search engine results when customers are actively looking for your products or services. It uses paid advertising platforms like Google Ads to drive instant visibility, highly targeted traffic, and strong conversions through keyword-focused campaigns. As a trusted search engine marketing agency, Digitalin helps businesses grow through strategic search engine marketing SEM practices built on smart marketing strategy, precise targeting, and controlled ad spend. Unlike generic promotion, SEM allows you to reach your audience at the right time, when they are most ready to take action. As a performance-focused digital marketing agency, we design high-impact sem campaigns that improve your online presence and strengthen your online visibility, ensuring your brand shows up exactly where it matters most.",

    descTitle1: "The Mirror of the Mountains",
    desc1:
      "There is a reason Phewa Lake is the most photographed spot in Pokhara. On a calm morning, the water becomes a perfect glass mirror, reflecting the jagged, snowy teeth of the Annapurna range and the sharp peak of Machapuchare. From the air, this effect is magnified. As we descend from Sarangkot, the lake acts as our visual anchor. Seeing the clouds and mountains reflected below you while you float above them is a surreal, inception-like experience that flyers never forget.",
    descTitle2: "The Landing Zone Culture",
    desc2:
      "The northern shore of Phewa Lake isn't just a body of water; it's our runway. This specific stretch, known as the Khapaudi or Pame side, is buzzing with energy. As we spiral down for a landing, you'll see children waving from the banks, buffalo grazing near the water, and colorful boats drifting by. It’s a gentle transition from the adrenaline of the high altitude to the laid-back vibe of the lakeside.",
    descTitle3: "Beyond the Flight: The Tal Barahi Connection",
    desc3:
      "Once your feet are back on the ground, the lake offers a different kind of peace. I always recommend our clients take a colorful 'doonga' (boat) to the Tal Barahi temple situated on the island in the middle of the lake. It creates a beautiful symmetry to your day: you’ve seen the temple from the heavens like a bird, and now you can experience it from the water, completing your connection with Pokhara’s spirit.",
  },
];

const serviceLists = [
  {
    id: 1,
    title: "Social Media Marketing",
    image: "/images/services/Social-Media-Marketing.png",
    desc: "We create engaging social media campaigns that drive growth and performance.",
  },
  {
    id: 2,
    title: "Digital Media Buying",
    image: "/images/services/Digital-Media-Buying.png",
    desc: "We secure high-impact ad placements to maximize reach and ROI.",
  },
  {
    id: 3,
    title: "Integrated Campaigns & Activations",
    image: "/images/services/Integrated-Campaigns-&-Activations.jpg",
    desc: "We deliver multi-channel campaigns that maintain brand consistency and impact.",
  },
  {
    id: 4,
    title: "Influencer Marketing",
    image: "/images/services/Influencer-Marketing.jpg",
    desc: "We partner with authentic influencers to create campaigns that resonate and convert.",
  },
  {
    id: 5,
    title: "Programmatic Advertising",
    image: "/images/services/Programmatic-Advertising.jpg",
    desc: "We use data-driven automation to target the right audience and maximize results.",
  },
  {
    id: 6,
    title: "Digital Content Creation",
    image: "/images/services/Digital-Content-Creation.jpg",
    desc: "We craft timely, relevant content that engages audiences and aligns with trends.",
  },
  {
    id: 7,
    title: "Video Shoot Content Development",
    image: "/images/services/Video-Shoot-Content.jpg",
    desc: "We produce brand-tailored videos and short-form content to boost engagement.",
  },
  {
    id: 8,
    title: "Media Planning",
    image: "/images/services/Media-Planning.jpg",
    desc: "We develop strategic media plans that optimize budgets and drive results.",
  },
  {
    id: 9,
    title: "Web Development",
    image: "/images/services/Web-Development.jpg",
    desc: "We build custom, responsive websites focused on UX, SEO, and conversions.",
  },
];

const awardLists = [
  {
    id: 1,
    year: 2025,
    title: "Promotional Champaign of the Year",
    sponsor: "Pepsi More Fizz More Swag Content",
    image:
      "/images/awards/PROMOTIONAL-CAMPAIGN-OF-THE-YEARPepsi-More-fizz-more-swag-contest.webp",
  },
  {
    id: 2,
    year: 2025,
    title: "Experimental Marketing Champaign of the Year",
    sponsor: "Mountain Dew X Roadies",
    image: "/images/awards/Award-01-1.webp",
  },
  {
    id: 3,
    year: 2025,
    title: "Brand Awareness",
    sponsor: "Mountain Dew X Roadies",
    image: "/images/awards/Award-02-1.webp",
  },
  {
    id: 4,
    year: 2025,
    title: "Best Use of Social Media",
    sponsor: "Standard Chartered",
    image: "/images/awards/Award-03-1.webp",
  },
  {
    id: 5,
    year: 2025,
    title: "Promotional Champaign of the Year",
    sponsor: "Double",
    image: "/images/awards/Award-04-1.webp",
  },
  {
    id: 6,
    year: 2025,
    title: "Promotional Champaign of the Year",
    sponsor: "Pepsi More Fizz More Swag Content",
    image: "/images/awards/Award-05-1.webp",
  },
];

export {
  navLinks,
  whatWeDoLists,
  ourWorkLists,
  brandsALists,
  brandsBLists,
  socialLinkLists,
  contactLists,
  noChangeParts,
  features,
  featureSequence,
  teamMemberLists,
  blogLists,
  trendLists,
  serviceLists,
  awardLists,
};
