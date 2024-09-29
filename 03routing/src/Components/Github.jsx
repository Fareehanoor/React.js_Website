import { useEffect, useState } from "react";

function Github() {
  const [dataa, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Fareehanoor")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl gap-2 ">
      Github Followers :{dataa.followers}
      <div className="flex items-center justify-center p-2">
      <img src={dataa.avatar_url} alt="Fareeha Abbas" width={300} height={300}  />
      </div>
      
    </div>
  );
}

export default Github;
