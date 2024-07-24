<template>
  <PatternSection>
    <MagicImageSlider :items="carouselItems" />
    <SalesGeneratingMachineSection />
    <IdealCustomersSection />
    <PotentialCustomersSection />
    <WeProvideThePlanCTA />
    <DominateYourNicheSection />
    <OurPortfolioSection />
    <IndustriesWeServeSection />
    <ComprehensiveMarketingSolutionsSection />
    <CustomerReviewSection />
    <Ribbon />
  </PatternSection>
</template>

<script>
import { ref } from "vue";
import MagicImageSlider from "@/components/elements/sliders/MagicImageSlider.vue";

export default {
  components: {
    MagicImageSlider,
  },
  setup() {
    const carouselItems = ref([
      {
        img: "/img/interior-painting.jpg",
        author: "TRUE COAT MARKETING LLC",
        title: "Residential",
        topic: "INTERIOR PAINTING & EXTERIOR PAINTING ",
        des: "Empower your painting business with strategic marketing solutions tailored for local house painters. Expand your reach and attract more clients effectively.",
      },
      {
        img: "/img/ExteriorPainting.jpg",
        author: "TRUE COAT MARKETING LLC",
        title: "Commercial",
        topic: "ANIMAL",
        des: "Enhance curb appeal with TrueCoat Marketing LLC. Expert exterior painting solutions tailored for local homes, making every exterior vibrant.",
      },
      {
        img: "/img/SpecialtyPainting.jpg",
        author: "TRUE COAT MARKETING LLC",
        title: "Specialty",
        topic: "ANIMAL",
        des: "TrueCoat Marketing LLC: Transforming exteriors with precision. Local specialty painters creating stunning outdoor aesthetics for every project.",
      },
      {
        img: "/img/ContractorPainters.jpg",
        author: "TRUE COAT MARKETING LLC",
        title: "Contractor",
        topic: "ANIMALs",
        des: "Empowering contractor painters with strategic marketing solutions to elevate their businesses and attract more clients for lasting success.",
      },
      // Add more items as needed
    ]);

    return {
      carouselItems,
    };
  },
};
</script>
