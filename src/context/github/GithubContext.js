import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    

    //get initial users (for texting purpose)
    // const fetchUsers = async () => {
    //     const response = await fetch(`${GITHUB_URL}/users`, {
    //         headers:{
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         },
    //     })
    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,
    //     })
    // }

    
    
    // Search Users function 
    const searchUsers = async (text) => {

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            },
        })
        const {items} = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        searchUsers,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext