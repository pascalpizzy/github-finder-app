import UserResults from "../components/users/UserResults"
import Usersearch from "../components/users/Usersearch"
function Home() {
  return (
    <>
        <Usersearch/>
        <UserResults/>
        {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
    </>
  )
}

export default Home