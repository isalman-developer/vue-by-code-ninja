import { ref } from "vue";

const getTagsCloud = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      return tagSet.add(tag);
    });
  });

  tags.value = [...tagSet];
  return { tags };
};

export default getTagsCloud;
