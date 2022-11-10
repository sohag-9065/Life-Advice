import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Life Advice`;
    }, [title])
}

export default useTitle;