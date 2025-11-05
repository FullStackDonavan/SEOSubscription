<template>
  <PatternSection>
    <BasicImageSlider :slides="imageSlides" />

    <!-- Intro Section -->
    <section class="container mx-auto mt-20">
      <GridTwoColumns>
        <!-- Left Column (Text) -->
        <div>
          <ParagraphSubHeading>
            House Painting Marketing Program
          </ParagraphSubHeading>

          <HeadlineTwo>
            Book More Interior & Exterior Paint Jobs
          </HeadlineTwo>

          <ParagraphDescription>
            Book more interior and exterior painting projects with a system built for professional painters.
            We highlight the craftsmanship homeowners care about—prep, clean lines, durable finishes, and on-time delivery—
            and make it simple for them to request an estimate.
          </ParagraphDescription>

          <ul class="list-disc ml-5 space-y-2 mt-6 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Prep storytelling:</strong> washing, scraping, sanding, caulking, priming—the foundation of a lasting finish.
            </li>
            <li>
              <strong>High-intent services:</strong> interiors, exteriors, cabinets, decks/fences, stucco/brick, color consultation.
            </li>
            <li>
              <strong>Conversion UX:</strong> clear CTAs, quick quote forms, and trust badges (license, insurance, warranty).
            </li>
            <li>
              <strong>Proof:</strong> before/after galleries, materials used, and care instructions.
            </li>
          </ul>

          <div
            class="flex flex-col mb-8 lg:mb-16 mt-8 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4"
          >
            <NuxtLink
              to="/get-started"
              class="text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
            >
              Learn More About Our Program
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column (Image) -->
        <div class="flex justify-center items-center">
          <img
            src="/img/interior-painting.jpg"
            alt="Interior painting before and after"
            class="rounded-2xl shadow-lg w-full object-cover"
            v-show="!isDark"
          />
          <img
            src="/img/interior-painting.jpg"
            alt="Interior painting before and after dark mode"
            class="rounded-2xl shadow-lg w-full object-cover"
            v-show="isDark"
          />
        </div>
      </GridTwoColumns>
    </section>


    <!-- Problem / Solution section -->
    <ProblemSolutionSection
      :title="problemSolution.title"
      :problem="problemSolution.problem"
      :solution="problemSolution.solution"
      :suggestedImagery="problemSolution.suggestedImagery"
    />

    <!-- Approach / Process section -->
    <ApproachProcessSection
      :title="approachProcess.title"
      :intro="approachProcess.intro"
      :stepsTitle="approachProcess.stepsTitle"
      :steps="approachProcess.steps"
      :outcomesTitle="approachProcess.outcomesTitle"
      :outcomes="approachProcess.outcomes"
      :ctaText="approachProcess.ctaText"
      :ctaHref="approachProcess.ctaHref"
      :suggestedImagery="approachProcess.suggestedImagery"
    />

    <!-- <WhatsCoveredInOurProgramSection />
    <ProfessionalWebAppDesignSection />
    <SearchEngineOptimizationSection />
    <LocalOptimizationSection /> -->
    <ProgramDetailsNav 
      basePath="/house-painting-marketing-program" 
      :links="programLinks" 
    />

    <ProgramStats :stats="programStats" />
    <nuxt-link to="/house-painting-marketing-program/online-review-management-system">
      <OptimizingYourReviewsSection />
    </nuxt-link>
    <nuxt-link to="/house-painting-marketing-program/website-updates-and-improvements">
      <WebsiteUpdatesAndImprovementsSection />
    </nuxt-link>
    <nuxt-link to="/house-painting-marketing-program/marketing-planning">
      <MarketingPlanningSection />
    </nuxt-link>
    <Ribbon />
  </PatternSection>
</template>

<script>
import BasicImageSlider from "@/components/elements/sliders/BasicImageSlider.vue";

export default {
  components: {
    BasicImageSlider,
  },
  data() {
    return {
      imageSlides: [
        {
          image: "/img/interior-painting.jpg",
          title: "Interior Painting",
          description:
            "Transform homes with beautiful finishes that make every space feel new again.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/ExteriorPainting.jpg",
          title: "Exterior Painting",
          description:
            "Boost curb appeal with clean lines, color precision, and weather-resistant coatings.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/SpecialtyPainting.jpg",
          title: "Specialty Painting",
          description:
            "Cabinet refinishing, decks, and detail work that showcase craftsmanship.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/ContractorPainters.jpg",
          title: "Painting Contractors",
          description:
            "Marketing systems that keep your crew booked and your phone ringing.",
          buttonText: "Get Started",
          link: "/get-started",
        },
      ],

      problemSolution: {
        title: "Booked Schedules, Not Empty Weeks",
        problem: {
          heading: "The Problem",
          description: [
            "Many painting companies depend on word-of-mouth and inconsistent referrals. Without a predictable system for generating leads, painters often experience slow seasons, low visibility online, and missed estimates."
          ],
          points: [
            "Low visibility in local searches for painting and repainting services",
            "Websites that don’t showcase craftsmanship or trust signals",
            "Few or outdated Google reviews limiting credibility",
            "No streamlined process for capturing and following up with leads"
          ]
        },
        solution: {
          heading: "Our Solution",
          description: [
            "We help professional painters build steady, measurable pipelines of interior and exterior painting projects. From high-ranking SEO pages to simple quote request funnels, our marketing system turns your expertise into consistent booked jobs."
          ],
          points: [
            "Targeted local SEO for high-intent searches like 'house painter near me'",
            "Conversion-driven website with quote forms and review proof",
            "Automated follow-ups and review requests to increase close rates",
            "Visual galleries and service pages that build instant trust"
          ]
        },
        suggestedImagery: [
          { label: "Interior Living Room Before & After", file: "/img/interior-painting.jpg" },
          { label: "Exterior Home Repaint Prep & Finish", file: "/img/ExteriorPainting.jpg" },
          { label: "Cabinet & Trim Detail Shots", file: "/img/SpecialtyPainting.jpg" }
        ]
      },

      approachProcess: {
        title: "Our Process for Painting Business Growth",
        intro: [
          "We’ve refined a marketing process that helps painters go from relying on word-of-mouth to owning their local market. It’s built around visibility, credibility, and effortless follow-up — the essentials for keeping your calendar full all year."
        ],
        stepsTitle: "How We Work",
        steps: [
          { title: "Discovery & Planning", description: "We learn about your service areas, specialties, and customer base to tailor a marketing plan that fits your painting business goals.", duration: "30–45 min" },
          { title: "Design & Build", description: "We create a beautiful, conversion-optimized website with photo galleries, clear CTAs, and SEO content targeting local painting services.", duration: "1–2 weeks" },
          { title: "Optimize & Promote", description: "We enhance your local SEO rankings, Google profile, and reviews so your business appears at the top when homeowners search for painters near them.", duration: "Ongoing" }
        ],
        outcomesTitle: "What You Get",
        outcomes: [
          "Consistent quote requests from nearby homeowners",
          "Higher Google rankings for painting and repainting services",
          "A professional online presence that reflects your craftsmanship",
          "Better customer follow-up and more 5-star reviews"
        ],
        ctaText: "Start Your Painting Marketing Plan",
        ctaHref: "/get-started",
        suggestedImagery: [
          { label: "Local SEO Map Rankings", file: "/img/ExteriorPainting.jpg" },
          { label: "Painter Quote Funnel UI", file: "/img/interior-painting.jpg" }
        ]
      },

      programLinks: [
        {
          path: "search-engine-optimization",
          icon: "mdi:magnify",
          iconColor: "text-indigo-500",
          text: "Search Engine Optimization"
        },
        {
          path: "local-optimization-management",
          icon: "mdi:map-marker",
          iconColor: "text-rose-500",
          text: "Local Optimization Management"
        },
        {
          path: "online-review-management-system",
          icon: "mdi:star",
          iconColor: "text-amber-500",
          text: "Online Review Management"
        },
        {
          path: "web-application-design",
          icon: "mdi:palette",
          iconColor: "text-purple-500",
          text: "Web Application Design"
        },
        {
          path: "website-updates-and-improvements",
          icon: "mdi:update",
          iconColor: "text-cyan-500",
          text: "Website Updates & Improvements"
        },
        {
          path: "marketing-planning",
          icon: "mdi:calendar-check",
          iconColor: "text-green-500",
          text: "Marketing Planning"
        }
      ],
       programStats: [
  {
    title: 'Water Systems Installed',
    value: '2,500+',
    icon: 'mdi:water',
    description: 'Residential and commercial systems'
  },
  {
    title: 'Customer Retention',
    value: '92%',
    icon: 'mdi:account-heart',
    description: 'Annual contract renewals'
  }
]
    };
  },
};
</script>
