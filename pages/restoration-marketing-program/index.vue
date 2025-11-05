<template>
  <PatternSection>
    <BasicImageSlider :slides="imageSlides" />

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

    <WhatsCoveredInOurProgramSection />
    <ProfessionalWebAppDesignSection />
    <SearchEngineOptimizationSection />
    <LocalOptimizationSection />
    <ProgramDetailsNav 
      basePath="/restoration-marketing-program" 
      :links="programLinks" 
    />
    <nuxt-link to="/restoration-marketing-program/online-review-management-system">
      <OptimizingYourReviewsSection />
    </nuxt-link>
    <nuxt-link to="/restoration-marketing-program/website-updates-and-improvements">
      <WebsiteUpdatesAndImprovementsSection />
    </nuxt-link>
    <nuxt-link to="/restoration-marketing-program/marketing-planning">
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
          title: "Emergency Restoration Leads",
          description: "Capture high-intent calls for water, fire, mold, and storm restoration.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Not-Just-A-Website.jpg",
          title: "Beyond a Website",
          description: "Conversion-first funnels built for urgent service requests.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Our-Platform.jpg",
          title: "Local Visibility",
          description: "Rank in the map pack and neighborhood searches.",
          buttonText: "Get Started",
          link: "/get-started",
        },
        {
          image: "/img/Sales-Generating-Machine.png",
          title: "Built to Convert",
          description: "Clear CTAs, trust signals, and review flows that drive inbound jobs.",
          buttonText: "Get Started",
          link: "/get-started",
        },
      ],

      problemSolution: {
        title: 'Emergency Calls, Lost Opportunities',
        problem: {
          heading: 'The Problem',
          description: [
            'In restoration, timing is everything. Many companies lose high-intent jobs because their websites are slow, invisible in local search, or lack trust signals when homeowners are in crisis.'
          ],
          points: [
            'Outdated or unoptimized Google Business Profiles',
            'Weak call-to-actions and unclear service coverage',
            'No system for fast lead follow-up or review requests'
          ]
        },
        solution: {
          heading: 'Our Solution',
          description: [
            'We position your business as the go-to restoration team for fire, water, and mold emergencies. Our marketing systems combine fast-loading pages, emergency-focused SEO, and review automation to turn every call into a confirmed job.'
          ],
          points: [
            'Local SEO that dominates emergency and “near me” searches',
            'Conversion-focused landing pages for each service type',
            'Integrated call tracking and review follow-up flows'
          ]
        },
        suggestedImagery: [
          { label: 'Emergency Response Teams', file: '/img/Our-Platform.jpg' },
          { label: 'Before & After Restoration Projects', file: '/img/Transform-Your-Website.jpg' }
        ]
      },

      approachProcess: {
        title: 'Our Process for Restoration Growth',
        intro: [
          'From the moment someone searches “water damage near me,” your marketing should respond with the same urgency as your crew in the field. Our process builds a strong, measurable system for capturing those calls and converting them into lasting customers.'
        ],
        stepsTitle: 'How We Work',
        steps: [
          { title: 'Discovery', description: 'We analyze your service areas, damage categories, and insurance partnerships to target high-value local searches.', duration: '30–45 min' },
          { title: 'Build & Optimize', description: 'We develop SEO-driven pages, conversion funnels, and call tracking for water, fire, and mold restoration.', duration: '1–2 weeks' },
          { title: 'Review & Refine', description: 'We monitor lead quality, keyword rankings, and review volume to continuously improve performance.', duration: 'Ongoing' }
        ],
        outcomesTitle: 'What You Get',
        outcomes: [
          'Consistent, qualified inbound leads year-round',
          'Higher conversion rates from emergency search traffic',
          'A trusted brand reputation backed by visible reviews'
        ],
        ctaText: 'Start Your Restoration Marketing Plan',
        ctaHref: '/get-started',
        suggestedImagery: [
          { label: 'Emergency Call Funnels', file: '/img/Sales-Generating-Machine-Light.png' },
          { label: 'Map Pack Rankings Visual', file: '/img/Our-Platform.jpg' }
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
      ]
    };
  },
};
</script>

<style scoped>
</style>
