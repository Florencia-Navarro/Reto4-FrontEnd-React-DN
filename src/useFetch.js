import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./redux/userSlice";

function useFetch (url) {
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => dispatch(setUsers(data)))
        .catch((error) => console.error(error))
      }, [url, dispatch])

    return 
}

export default useFetch
