import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "src/config-global";

export default function useBlogHook() {
  const [blog, setBlog] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = () => {
    try {
      setLoader(true);
      axios.get(`${BASE_URL}v1/blog`).then((res) => {
        console.log("🚀 ~ file: blogHook.js:12 ~ axios.get ~ res:", res);
      });
    } catch (error) {
      return;
    } finally {
      setLoader(false);
    }
    return { blog, loader };
  };
}
