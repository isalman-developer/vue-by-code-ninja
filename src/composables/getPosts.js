import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadPosts = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      if (data.ok) {
        posts.value = await data.json();
      } else {
        throw Error("Data not loaded !!!");
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  //   object containing posts, error and loadPosts are return by getPosts function
  return { posts, error, loadPosts };
};

/* 
whenever this module is imported by default getPosts will be porvided as the default value of this module. 

import getPosts from '../path/to/this/file'; 

so getPosta can be used later to extract posts, error and loadPosts function. 
*/
export default getPosts;
