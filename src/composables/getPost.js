import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const loadPost = async () => {
    try {
      // let data = await fetch('http://localhost:3000/posts/' + id);
      // if (!data.ok) {
      //   throw Error("Record not found !!!");
      // }
      // post.value = await data.json();

      let res = await projectFirestore.collection("posts").doc(id).get();
      if (!res.exists) {
        throw Error("Record not found.");
      }
      post.value = { ...res.data(), id: res.id };
      console.log(post.value);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, loadPost };
};
export default getPost;
