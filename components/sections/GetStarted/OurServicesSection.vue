<template>
  <BasicSection class="container mx-auto mt-20">
    <div class="p-4 sm:p-8">
      <ParagraphSubHeading>{{ IntroText.SubHeading }}</ParagraphSubHeading>
      <HeadlineTwo>{{ IntroText.Heading }}</HeadlineTwo>
    </div>
    <div class="p-4 sm:p-8">
      <CardDeckFourColumns>
        <ServiceCard
          v-for="Service in Services"
          :key="Service.id"
          :title="Service.title"
          :image="Service.image"
          :description="Service.description"
        />
      </CardDeckFourColumns>
    </div>
  </BasicSection>
</template>

<script>
export default {
  name: "Our Services",
  data() {
    return {
      IntroText: {
        SubHeading: "Unlock the Value of",
        Heading: "Our Contractor Marketing Program",
      },
      Services: [
        {
          id: 1,
          title: "Professional Website Design",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Our in-house design and development team will create a visually striking, fully responsive website that meets current design and optimization specifications while turning visitors into loyal clients.",
        },
        {
          id: 2,
          title: "Website Hosting",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "We use the latest cloud technologies to host your website with reliable uptime, fast load times, and top-tier security — one less bill and worry for you.",
        },
        {
          id: 3,
          title: "Search Engine Optimization",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "SEO is built directly into your website to maximize organic and local search rankings, keeping your company visible to potential clients when they need you most.",
        },
        {
          id: 4,
          title: "Local Optimization Management",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Your Google Map and local SEO presence doesn't happen by accident. Using Yext, we manage and optimize your local listings to capture more high-intent local leads.",
        },
        {
          id: 5,
          title: "Online Review Management System",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Online reviews can make or break a business. Our system, powered by Birdeye, allows you to monitor, respond to, and encourage positive reviews across the web.",
        },
        {
          id: 6,
          title: "Website Updates & Improvements",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Our in-house writing team develops and updates content to keep your website relevant, engaging, and optimized for search engines, turning visitors into leads.",
        },
        {
          id: 7,
          title: "AI-Powered Call Center & Chatbot",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Our AI-driven call center and chatbot act as your 24/7 virtual sales and support team. Chatbots qualify leads, answer questions, and schedule appointments while calls are transcribed and routed for instant follow-up.",
        },
        {
          id: 8,
          title: "Lead Generation & Conversion Systems",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Automated pipelines capture, qualify, and nurture leads through AI-driven follow-ups, ensuring no inquiry is lost and every potential client is engaged quickly.",
        },
        {
          id: 9,
          title: "Marketing Planning & Automation",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "We create a custom marketing plan aligned with your goals and budget, combining local SEO, ad campaigns, AI chatbots, and automated workflows to maximize leads and ROI.",
        },
        {
          id: 10,
          title: "Social Media Management & Ads",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "Maintain a professional presence on Facebook, Instagram, and Google with AI-assisted post creation, ad targeting, A/B testing, and retargeting campaigns to capture every potential client.",
        },
        {
          id: 11,
          title: "So Much More",
          image: "/img/contractor-marketing-program.jpg",
          description:
            "From graphic design, branding, guarantees, to AI-powered automation, our contractor marketing program provides everything needed to grow your business online from first click to booked appointment.",
        },
      ],
    };
  },
};
</script>
