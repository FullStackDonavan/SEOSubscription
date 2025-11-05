<template>
  <PatternSection>
    <BasicImageSlider :slides="imageSlides" />

    <!-- Hero / Intro Section -->
    <section class="prose dark:prose-invert max-w-3xl mx-auto my-10">
      <h1>Insurance Broker Marketing Program</h1>
      <p>
        Attract qualified agents, agencies, and broker partners with a marketing system built for insurance growth.
        From SEO to lead funnels, we help brokerages scale their reach, improve digital presence, and convert quote
        seekers into lifelong clients.
      </p>

      <h2>What We Emphasize for Insurance Brokers</h2>
      <ul>
        <li><strong>Visibility:</strong> SEO strategies tailored to insurance and financial keywords.</li>
        <li><strong>Lead Flow:</strong> Conversion-driven landing pages, forms, and CRM integration.</li>
        <li><strong>Trust Signals:</strong> Licensed brokerage credibility, client testimonials, and compliance language.</li>
        <li><strong>Automation:</strong> Email nurturing, retargeting, and follow-up sequences for brokers and prospects.</li>
      </ul>

      <h3>Suggested Imagery</h3>
      <ul>
        <li>Broker dashboard & analytics — <code>/img/Our-Platform.jpg</code></li>
        <li>SEO and conversion funnel graphics — <code>/img/Sales-Generating-Machine-Light.png</code></li>
        <li>Lead form & CTA visuals — <code>/img/Transform-Your-Website.jpg</code></li>
      </ul>
    </section>

    <!-- Core Program Sections -->
    <WhatsCoveredInOurProgramSection />
    <ProfessionalWebAppDesignSection />
    <SearchEngineOptimizationSection />
    <LocalOptimizationSection />

    <!-- Program Details Navigation -->
    <ProgramDetailsNav 
      basePath="/insurance-broker-marketing-program" 
      :links="programLinks" 
    />

    <!-- Problem / Solution Section -->
    <ProblemSolutionSection
      :title="problemSolution.title"
      :problem="problemSolution.problem"
      :solution="problemSolution.solution"
      :suggestedImagery="problemSolution.suggestedImagery"
    />

    <!-- Approach / Process Section -->
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

    <!-- Supporting / Conversion Sections -->
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
          image: "/img/Our-Platform.jpg",
          title: "Insurance SEO Success",
          description: "Rank for competitive insurance keywords and capture local leads.",
          buttonText: "Get My Free Audit",
          link: "/get-started",
        },
        {
          image: "/img/Sales-Generating-Machine-Light.png",
          title: "Conversion Funnels for Brokers",
          description: "Build automated lead flows that track every quote request and policy sale.",
          buttonText: "Learn More",
          link: "/get-started",
        },
        {
          image: "/img/Transform-Your-Website.jpg",
          title: "Marketing That Converts",
          description: "Transform your brokerage website into a compliant, quote-generating machine.",
          buttonText: "Start Now",
          link: "/get-started",
        },
      ],
      programLinks: [
        {
          path: 'search-engine-optimization',
          icon: 'mdi:magnify',
          iconColor: 'text-indigo-500',
          text: 'SEO for Insurance Brokers'
        },
        {
          path: 'local-optimization-management',
          icon: 'mdi:map-marker',
          iconColor: 'text-rose-500',
          text: 'Local Optimization'
        },
        {
          path: 'online-review-management-system',
          icon: 'mdi:star',
          iconColor: 'text-amber-500',
          text: 'Online Reputation Management'
        },
        {
          path: 'web-application-design',
          icon: 'mdi:palette',
          iconColor: 'text-purple-500',
          text: 'Insurance Website Design'
        },
        {
          path: 'website-updates-and-improvements',
          icon: 'mdi:update',
          iconColor: 'text-cyan-500',
          text: 'Website Improvements'
        },
        {
          path: 'marketing-planning',
          icon: 'mdi:calendar-check',
          iconColor: 'text-green-500',
          text: 'Marketing Strategy & Planning'
        }
      ],
      problemSolution: {
        title: 'Why Most Insurance Websites Don’t Generate Leads',
        problem: {
          heading: 'The Problem',
          description: [
            'Most insurance agencies and broker websites look professional but lack the SEO, calls to action, and content structure to convert traffic into quote requests.'
          ],
          points: [
            'Low Google rankings for competitive keywords',
            'Generic copy that doesn’t build trust or urgency',
            'No automation or follow-up systems for leads'
          ]
        },
        solution: {
          heading: 'Our Solution',
          description: [
            'We combine SEO, UX optimization, and conversion-focused copywriting to attract organic traffic and turn every visit into a lead. Our marketing program is tailored for brokers and insurance professionals.'
          ],
          points: [
            'SEO targeting “insurance broker” and service keywords',
            'Conversion-focused design with strong CTAs',
            'Automated CRM and email nurturing integrations'
          ]
        },
        suggestedImagery: [
          { label: 'Search Ranking Graphs', file: '/img/Our-Platform.jpg' },
          { label: 'Lead Funnel Mockups', file: '/img/Sales-Generating-Machine-Light.png' }
        ]
      },
      approachProcess: {
        title: 'Our Approach to Broker Growth',
        intro: [
          'We build a lead generation ecosystem that aligns your brokerage’s services, website, and marketing campaigns into one cohesive strategy.'
        ],
        stepsTitle: 'How We Work',
        steps: [
          { title: 'Audit & Research', description: 'Analyze your current online presence and keyword opportunities.', duration: '1–3 days' },
          { title: 'Optimize & Build', description: 'Revise your site, create SEO pages, and implement automation.', duration: '1–2 weeks' },
          { title: 'Track & Improve', description: 'Monitor results, refine campaigns, and scale monthly leads.', duration: 'Ongoing' }
        ],
        outcomesTitle: 'What You Get',
        outcomes: [
          'Higher search rankings and traffic',
          'Consistent lead generation and follow-up',
          'Professional online reputation and trust'
        ],
        ctaText: 'Get a Free Marketing Audit',
        ctaHref: '/get-started',
        suggestedImagery: [
          { label: 'SEO Workflow Diagram', file: '/img/Our-Platform.jpg' },
          { label: 'CRM & Lead Dashboard', file: '/img/Transform-Your-Website.jpg' }
        ]
      }
    };
  },
};
</script>

<style scoped>
</style>
