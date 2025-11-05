<template>
  <PatternSection>
    <BasicImageSlider :slides="imageSlides" />

    <!-- Intro Section -->
    <section class="container mx-auto mt-20">
      <GridTwoColumns>
        <!-- Left Column (Text) -->
        <div>
          <ParagraphSubHeading>
            Water Treatment Marketing Program
          </ParagraphSubHeading>

          <HeadlineTwo>
            Book More Consultations & Build Trust with Homeowners
          </HeadlineTwo>

          <ParagraphDescription>
            Book more consultations for softeners, filtration, and whole-home water solutions. 
            We position your expertise in diagnosing water issues and delivering clean, great-tasting water 
            with dependable equipment and professional installs.
          </ParagraphDescription>

          <ul class="list-disc ml-5 space-y-2 mt-6 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Problem → solution storytelling:</strong> hard water scale, staining, taste/odor → softeners, media filtration, RO.
            </li>
            <li>
              <strong>High-intent services:</strong> softener installs, whole-house filtration, RO systems, UV, well water solutions.
            </li>
            <li>
              <strong>Conversion UX:</strong> clear CTAs, quick quote forms, and transparent maintenance plans.
            </li>
            <li>
              <strong>Proof:</strong> before/after readings (TDS/hardness), photos of installs, and homeowner testimonials.
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
            src="/img/Transform-Your-Website.jpg"
            alt="Water treatment marketing illustration"
            class="rounded-2xl shadow-lg w-full object-cover"
            v-show="!isDark"
          />
          <img
            src="/img/Transform-Your-Website.jpg"
            alt="Water treatment marketing illustration dark mode"
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

    <ProgramDetailsNav
      basePath="/water-treatment-marketing-program"
      :links="programLinks"
    />


<ProgramStats :stats="programStats" />

    <WhatsCoveredInOurProgramSection />
    <ProfessionalWebAppDesignSection />
    <SearchEngineOptimizationSection />
    <LocalOptimizationSection />



    <WeProvideThePlanCTA />
    <OptimizingYourReviewsSection />
    <WebsiteUpdatesAndImprovementsSection />
    <MarketingPlanningSection />
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
          image: "/img/Revolutionizing-Contractor-Marketing.jpg",
          title: "Water Treatment Leads",
          description: "Drive consultations for filtration and softener installs, repairs, and service.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Your-Contractor-Marketing-Experts.jpg",
          title: "Neighborhood Visibility",
          description: "Own local search terms and map results across your service areas.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Transform-Your-Website.jpg",
          title: "Conversion-First Pages",
          description: "Educate homeowners and convert with clear CTAs and trust badges.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Services-Are-Being-Searched.jpg",
          title: "Measurable Results",
          description: "See performance across calls, forms, and booked evaluations.",
          buttonText: "Get Started",
          link: "/get-started",
        },
      ],

      problemSolution: {
        title: "Low Visibility, High Competition in Water Treatment",
        problem: {
          heading: "The Problem",
          description: [
            "Most water treatment companies rely on word-of-mouth or manufacturer leads. Meanwhile, homeowners are searching online every day for “water softener installation near me” and “whole-home filtration.” Many dealers miss these opportunities because their websites don’t rank or convert."
          ],
          points: [
            "Weak online visibility for high-value service terms",
            "No location-based SEO for well water, filtration, or softener installs",
            "Generic websites that fail to build homeowner trust"
          ],
        },
        solution: {
          heading: "Our Solution",
          description: [
            "We build digital systems that generate leads while you’re out installing and servicing. Our marketing program attracts homeowners researching water quality, educates them with clean visuals and trust-building content, and converts them with fast, mobile-first design."
          ],
          points: [
            "SEO targeting for filtration, softeners, and water testing",
            "Conversion-focused landing pages with quote and testing forms",
            "Local visibility through Google Maps and reputation management"
          ],
        },
        suggestedImagery: [
          { label: "Filtration Equipment Installation", file: "/img/Transform-Your-Website.jpg" },
          { label: "Before & After Water Quality Tests", file: "/img/Services-Are-Being-Searched.jpg" },
        ],
      },

      approachProcess: {
        title: "Our Process for Water Treatment Growth",
        intro: [
          "Your customers don’t just want clean water — they want confidence in your expertise. Our process ensures your marketing reflects that trust and authority while driving measurable leads."
        ],
        stepsTitle: "How We Work",
        steps: [
          { title: "Research & Discovery", description: "We identify your target areas, local search terms, and homeowner pain points (hardness, odor, staining, etc.).", duration: "30–45 min" },
          { title: "Build & Optimize", description: "We craft SEO-driven pages, educational content, and high-performing landing pages that drive quote requests.", duration: "1–2 weeks" },
          { title: "Measure & Refine", description: "We track lead volume, service type demand, and keyword rankings to continuously optimize performance.", duration: "Ongoing" },
        ],
        outcomesTitle: "What You Get",
        outcomes: [
          "Consistent local leads for installs and service calls",
          "Improved Google visibility for “near me” and well water terms",
          "A reputation that positions your brand as the trusted expert"
        ],
        ctaText: "Start Your Water Treatment Marketing Plan",
        ctaHref: "/get-started",
        suggestedImagery: [
          { label: "Local SEO Maps", file: "/img/Our-Platform.jpg" },
          { label: "Clean Water Before & After", file: "/img/Sales-Generating-Machine-Light.png" },
        ],
      },

      programLinks: [
        {
          path: "search-engine-optimization",
          icon: "mdi:magnify",
          iconColor: "text-indigo-500",
          text: "Search Engine Optimization",
        },
        {
          path: "local-optimization-management",
          icon: "mdi:map-marker",
          iconColor: "text-rose-500",
          text: "Local Optimization Management",
        },
        {
          path: "online-review-management-system",
          icon: "mdi:star",
          iconColor: "text-amber-500",
          text: "Online Review Management",
        },
        {
          path: "web-application-design",
          icon: "mdi:palette",
          iconColor: "text-purple-500",
          text: "Web Application Design",
        },
        {
          path: "website-updates-and-improvements",
          icon: "mdi:update",
          iconColor: "text-cyan-500",
          text: "Website Updates & Improvements",
        },
        {
          path: "marketing-planning",
          icon: "mdi:calendar-check",
          iconColor: "text-green-500",
          text: "Marketing Planning",
        },
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

<style scoped>
</style>
