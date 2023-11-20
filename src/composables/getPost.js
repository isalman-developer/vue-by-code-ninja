import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const loadPost = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts/' + id);
   
      if (data.ok) {
        post.value = await data.json();
      } else {
        throw Error("Record not found !!!");
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, loadPost };
};
export default getPost;
