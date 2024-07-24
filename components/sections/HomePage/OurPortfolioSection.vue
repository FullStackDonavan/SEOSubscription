<template>
  <BasicSection class="mb-4">
    <div class="p-4 sm:p-8">
      <ParagraphSubHeading>
        {{ IntroText.SubHeading }}
      </ParagraphSubHeading>
      <HeadlineTwo>
        {{ IntroText.Heading }}
      </HeadlineTwo>
      <ParagraphDescription>
        {{ IntroText.description }}
      </ParagraphDescription>
    </div>
    <MagicCarousel />
  </BasicSection>
  <!-- <div class="p-4 sm:p-8">
    <CardDeckThreeColumns>
      <LaunchCard
        v-for="Item in Items"
        :key="Item.id"
        :title="Item.title"
        :image="Item.image"
      />
    </CardDeckThreeColumns>
  </div> -->
</template>

<script>
export default {
  name: "Our Portfolio",
  data() {
    return {
      IntroText: {
        SubHeading: "Examples of Recently Launched Websites",
        Heading:
          "Launching A New Website Is Always Exciting, And These Recent Launches Were No Exception!",
        description:
          "Our team builds your website with no extra build charges beyond the monthly fee. We also offer expert marketing services including Google and Facebook ads, social media management, email marketing, and print marketing.",
      },
      Items: [
        {
          id: 1,
          title: "Custom Painting By Dale",
          image: "/img/custom-painting-by-dale-vercel-app.png",
        },
        {
          id: 2,
          title: "Absolute House Painters",
          image: "/img/absolutehousepainters.png",
        },
        {
          id: 3,
          title: "Annapolis Painting",
          image: "/img/annapolispainting.png",
        },
      ],
    };
  },
};
</script>
