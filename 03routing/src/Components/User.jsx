import { useParams } from "react-router-dom";

function User() {
    const params = useParams(); // way 1
    // const {userId} = useParams(); way 2
  return (
    <>
    {/* Way 1 */}
     <p>UserId : {params.userId}</p>
     {/* Way 2 */}
     {/* <p>UserId : {userId}</p> */}
    </>
  )
}

export default User