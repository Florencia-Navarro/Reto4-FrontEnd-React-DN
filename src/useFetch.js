import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";

function useFetch (url) {
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)){
            dispatch(addUser(data))
          } else {
            console.error("Expected an array of users")
          }
        })
        .catch((error) => console.error(error))
      }, [url, dispatch])

    return 
}

export default useFetch
