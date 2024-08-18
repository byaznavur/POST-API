import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import axios from "axios";

const Intro = () => {
  const [users, setUsers] = useState([]); // Boshlang'ich qiymatni bo'sh massiv qilish
  const [error, setError] = useState(null); // Boshlang'ich qiymatni null qilish

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message); // Xatoni xabar bilan saqlash
      });
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>; // Xato holatini ko'rsatish
  }

  if (users.length === 0) {
    return <div className="text-center">Loading...</div>; // Yuklanish holatini ko'rsatish
  }

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Intro;
