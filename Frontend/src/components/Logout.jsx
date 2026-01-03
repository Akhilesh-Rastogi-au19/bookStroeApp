import React from "react";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [authUser, setAutUser] = useAuth();
  const handleLogout = () => {
    try {
      setAutUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      // TransformStream.success("Logout sucessfully");
      // document.getElementById("my_modal_3").close();

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      alert("Error:" + error);
      setTimeout(() => {}, 3000);
    }
  };
  return (
    <div>
      <button
        className="ml-3 px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;



// import React from "react";

// import { useAuth } from "../context/AuthProvider";

// function Logout() {
//   const [authUser, setAuthUser] = useAuth();

//   const handleLogout = () => {
//     localStorage.removeItem("Users");
//     setAuthUser(null);
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-500 text-white px-4 py-2 rounded-md"
//     >
//       Logout
//     </button>
//   );
// }

// export default Logout;

