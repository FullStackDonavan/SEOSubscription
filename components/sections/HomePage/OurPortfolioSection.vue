<template>
  <BasicSection class="container mx-auto mt-20">
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
  </BasicSection>
  <div class="p-4 sm:p-8">
    <CardDeckThreeColumns>
      <LaunchCard
        v-for="Item in Items"
        :key="Item.id"
        :title="Item.title"
        :image="Item.image"
      />
    </CardDeckThreeColumns>
  </div>
</template>

<script>
export default {
  name: "Our Portfolio",
  data() {
    return {
      IntroText: {
        SubHeading: "Examples of Recently Launched Websites",
        Heading:
          "Launching A New Website Is Always An Exciting Event, And This Was Undoubtedly The Case For These Recent Website Launches!",
        description:
          "Our team will construct your website without any additional build charges beyond our monthly fee. Additionally, our skilled marketing team can assist you in creating a comprehensive marketing strategy for your business. This comprises paid online advertising via Google and Facebook, social media management, email marketing, and printing marketing services.",
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