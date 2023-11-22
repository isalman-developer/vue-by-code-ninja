import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadPosts = async () => {
    try {
      
      /*
      using json-server(json file) database
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("Data not loaded !!!");
      }
      posts.value = await data.json();
      */
     
      /* simply getting data using firestore
      const res = await projectFirestore.collection('posts').orderBy('createdAt').get();
      posts.value = res.docs.map(doc => {
        return {...doc.data(), id:doc.id}
      })
      */

      // using snapshot for realtime listening to data
      projectFirestore.collection('posts').orderBy('createdAt').onSnapshot((snap)=>{
        let docs = snap.docs.map((doc)=>{
          return {...doc.data(), id:doc.id}
        }) 
        posts.value = docs;
      });
     

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
so getPosts can be used later to extract posts, error and loadPosts function. 
*/
export default getPosts;
