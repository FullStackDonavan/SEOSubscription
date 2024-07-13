<template>
  <BasicSection class="container mx-auto mt-20 p-4 sm:p-8">
    <ParagraphSubHeading> {{ IntroText.SubHeading }} </ParagraphSubHeading>
    <HeadlineTwo>
      {{ IntroText.Heading }}
    </HeadlineTwo>
    <ParagraphDescription>
      {{ IntroText.description }}
    </ParagraphDescription>
  </BasicSection>
  <CardDeckFourColumns class="p-4 sm:p-8">
    <IndustryCard
      v-for="Industry in Industries"
      :key="Industry.id"
      :title="Industry.title"
      :image="Industry.image"
      :description="Industry.description"
      :url="Industry.url"
    />
  </CardDeckFourColumns>
</template>

<script>
export default {
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        SubHeading: "Service Area Businesses We Serve",
        Heading:
          "Promotion Is An Essential Component For Any Service Area Business, And It's Crucial To Understand That Each Service Area Business Has Its Distinct Obstacles And Hurdles To Overcome",
        description:
          "Each Service Area Business possesses distinctive marketing requirements that necessitate the assistance of a strategic marketing partner to accomplish their objectives and goals. At True Coat Marketing LLC, we grasp the intricacies of these various industries and work closely with each business to integrate ourselves into their team.",
      },
      Industries: [
        {
          id: 1,
          title: "Flooring",
          image: "/img/contractor-marketing-program.jpg",
          description: "Satisifying Your Customers' Needs For Social Trust",
          url: "/",
        },
        {
          id: 2,
          title: "Cleaning Contractors",
          image: "/img/contractor-marketing-program.jpg",
          description: "Satisifying Your Customers' Needs For Social Trust",
          url: "/",
        },
        {
          id: 3,
          title: "Decking Contractors",
          image: "/img/contractor-marketing-program.jpg",
          description: "Satisifying Your Customers' Needs For Social Trust",
          url: "/",
        },
        {
          id: 4,
          title: "Electrical Contractors",
          image: "/img/contractor-marketing-program.jpg",
          description: "Satisifying Your Customers' Needs For Social Trust",
          url: "/",
        },
        {
          id: 5,
          title: "General Contractors",
          image: "/img/contractor-marketing-program.jpg",
          description: "Satisifying Your Customers' Needs For Social Trust",
          url: "/",
        },
      ],
    };
  },
};
</script>