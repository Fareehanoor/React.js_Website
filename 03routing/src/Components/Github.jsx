// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
//   const [dataa, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Fareehanoor")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl gap-2 ">
      Github Followers :{data.followers}
      <div className="flex items-center justify-center p-2">
      <img src={data.avatar_url} alt="Fareeha Abbas" width={300} height={300}  />
      </div>
      
    </div>
  );
}

export default Github;

export const githubLoader = async () =>{
    const response = await fetch("https://api.github.com/users/Fareehanoor");
    return response.json();
}
