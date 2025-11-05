<template>
  <PatternSection>
        <BasicImageSlider :slides="imageSlides" />
    <!-- Hero / Intro Section -->
    <section class="container mx-auto mt-20">
      <GridTwoColumns>
        <!-- Left Column (Text) -->
        <div>
          <ParagraphSubHeading>
            Insurance Broker Marketing Program
          </ParagraphSubHeading>

          <HeadlineTwo>
            Attract Qualified Leads & Grow Your Brokerage
          </HeadlineTwo>

          <ParagraphDescription>
            In insurance, timing and trust are everything. Many brokerages lose high-intent prospects because their websites are slow, invisible in search, or lack credibility when clients are ready to act. 
            Our system ensures your brokerage captures every lead and converts them efficiently.
          </ParagraphDescription>

          <ul class="list-disc ml-5 space-y-2 mt-6 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Visibility:</strong> SEO strategies targeting high-intent insurance and financial keywords.
            </li>
            <li>
              <strong>Conversion:</strong> Landing pages, forms, and funnels designed to turn visitors into quote requests.
            </li>
            <li>
              <strong>Trust Signals:</strong> Licensed brokerage credibility, client testimonials, and compliance language.
            </li>
            <li>
              <strong>Automation:</strong> Email nurturing, retargeting, and follow-up sequences for prospects and agents.
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
            src="/img/Our-Platform.jpg"
            alt="Insurance broker marketing dashboard"
            class="rounded-2xl shadow-lg w-full object-cover"
            v-show="!isDark"
          />
          <img
            src="/img/Our-Platform.jpg"
            alt="Insurance broker marketing dashboard dark mode"
            class="rounded-2xl shadow-lg w-full object-cover"
            v-show="isDark"
          />
        </div>
      </GridTwoColumns>
    </section>

    <!-- Problem / Solution section -->
    <ProblemSolutionSection
      :title="insuranceProblemSolution.title"
      :problem="insuranceProblemSolution.problem"
      :solution="insuranceProblemSolution.solution"
      
    />

    <!-- Approach / Process section -->
    <ApproachProcessSection
      :title="insuranceApproachProcess.title"
      :intro="insuranceApproachProcess.intro"
      :stepsTitle="insuranceApproachProcess.stepsTitle"
      :steps="insuranceApproachProcess.steps"
      :outcomesTitle="insuranceApproachProcess.outcomesTitle"
      :outcomes="insuranceApproachProcess.outcomes"
      :ctaText="insuranceApproachProcess.ctaText"
      :ctaHref="insuranceApproachProcess.ctaHref"
    />

    <!-- <WhatsCoveredInOurProgramSection />
    <ProfessionalWebAppDesignSection />
    <SearchEngineOptimizationSection />
    <LocalOptimizationSection /> -->

    <ProgramDetailsNav 
      basePath="/insurance-marketing-program" 
      :links="programLinks" 
    />

    <ProgramStats :stats="programStats" />

    <nuxt-link to="/insurance-marketing-program/online-review-management-system">
      <OptimizingYourReviewsSection />
    </nuxt-link>
    <nuxt-link to="/insurance-marketing-program/website-updates-and-improvements">
      <WebsiteUpdatesAndImprovementsSection />
    </nuxt-link>
    <nuxt-link to="/insurance-marketing-program/marketing-planning">
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
          image: "/img/Services-Are-Being-Searched.jpg",
          title: "Qualified Insurance Leads",
          description: "Capture high-intent prospects looking for insurance quotes and broker services.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Not-Just-A-Website.jpg",
          title: "Beyond a Website",
          description: "Conversion-first funnels for agents, agencies, and brokers.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Our-Platform.jpg",
          title: "Local & Online Visibility",
          description: "Rank for insurance, broker, and agent keywords across your target markets.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Sales-Generating-Machine.png",
          title: "Built to Convert",
          description: "Clear CTAs, trust signals, and follow-up sequences that drive quote submissions.",
          buttonText: "Get Started",
          link: "/get-started",
        },
      ],

      insuranceProblemSolution: {
        title: 'High-Intent Leads Lost Online',
        problem: {
          heading: 'The Problem',
          description: [
            'Many insurance brokerages lose high-intent leads because their websites are slow, hard to find in search, or lack credibility signals for clients and agents.'
          ],
          points: [
            'Outdated or unoptimized Google Business Profiles',
            'Weak call-to-actions and unclear services coverage',
            'No automated follow-up or nurturing system'
          ]
        },
        solution: {
          heading: 'Our Solution',
          description: [
            'We position your brokerage as the trusted source for insurance quotes, agent recruitment, and partner referrals. Our marketing system combines fast-loading pages, SEO targeting, and automated lead nurturing to convert more prospects into clients.'
          ],
          points: [
            'Targeted SEO for insurance and financial keywords',
            'Conversion-focused landing pages for each service or partner type',
            'Automated email and retargeting sequences to nurture leads'
          ]
        },
        suggestedImagery: [
          { label: 'Broker Dashboard & Analytics', file: '/img/Our-Platform.jpg' },
          { label: 'Lead Funnel Visual', file: '/img/Sales-Generating-Machine-Light.png' }
        ]
      },

      insuranceApproachProcess: {
        title: 'Our Process for Insurance Growth',
        intro: [
          'From the moment someone searches “insurance quotes near me,” your marketing should respond with the same urgency as restoration crews handling emergencies. We capture, nurture, and convert leads efficiently while building trust.'
        ],
        stepsTitle: 'How We Work',
        steps: [
          { title: 'Discovery', description: 'We assess your target markets, services, and existing digital presence to find opportunities.', duration: '30–45 min' },
          { title: 'Build & Optimize', description: 'We create SEO-optimized landing pages, conversion funnels, and automated follow-up for insurance leads.', duration: '1–2 weeks' },
          { title: 'Review & Refine', description: 'We monitor lead quality, search rankings, and engagement to continuously improve results.', duration: 'Ongoing' }
        ],
        outcomesTitle: 'What You Get',
        outcomes: [
          'Consistent, qualified inbound insurance leads',
          'Higher conversion rates from search traffic',
          'A trusted brokerage reputation backed by reviews and testimonials'
        ],
        ctaText: 'Start Your Insurance Marketing Plan',
        ctaHref: '/get-started',
        suggestedImagery: [
          { label: 'Conversion Funnel Dashboard', file: '/img/Sales-Generating-Machine-Light.png' },
          { label: 'SEO & Rankings Visual', file: '/img/Our-Platform.jpg' }
        ]
      },

      programLinks: [
        {
          path: 'search-engine-optimization',
          icon: 'mdi:magnify',
          iconColor: 'text-indigo-500',
          text: 'Search Engine Optimization'
        },
        {
          path: 'local-optimization-management',
          icon: 'mdi:map-marker',
          iconColor: 'text-rose-500',
          text: 'Local Optimization Management'
        },
        {
          path: 'online-review-management-system',
          icon: 'mdi:star',
          iconColor: 'text-amber-500',
          text: 'Online Review Management'
        },
        {
          path: 'web-application-design',
          icon: 'mdi:palette',
          iconColor: 'text-purple-500',
          text: 'Web Application Design'
        },
        {
          path: 'website-updates-and-improvements',
          icon: 'mdi:update',
          iconColor: 'text-cyan-500',
          text: 'Website Updates & Improvements'
        },
        {
          path: 'marketing-planning',
          icon: 'mdi:calendar-check',
          iconColor: 'text-green-500',
          text: 'Marketing Planning'
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

<style scoped>
</style>
