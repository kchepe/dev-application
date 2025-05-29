import { useMemo, useState, type ChangeEvent } from "react";
import { users } from "../data";
import DataPlaceHolder from "./DataPlaceHolder";

const DataList = () => {
  // State to track search input
  const [searchText, setSearchText] = useState("");

  // Handle changes to the search input
  const handleSearchTextOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Check if a value contains the search text (case-insensitive)
  const isExist = (value: string): boolean => {
    return value.toLowerCase().includes(searchText.toLowerCase());
  };

  // Filter users based on name, role, or email match
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (searchText === "") {
        return user; // return all users if no search input
      }

      return isExist(user.name) || isExist(user.role) || isExist(user.email);
    });
  }, [searchText]);

  return (
    <div className="space-y-5">
      {/* Search input field */}
      <input
        placeholder="Search user by name, email or role... "
        className="w-full border px-4 py-2 border rounded-lg border-gray-200"
        type="search"
        value={searchText}
        onChange={handleSearchTextOnChange}
      />

      {/* Show placeholder if no users found, otherwise show filtered list */}
      {filteredUsers.length === 0 ? (
        <DataPlaceHolder />
      ) : (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-8 border-blue-200 border rounded-lg p-4"
          >
            {/* User avatar using the first letter of their name */}
            <div className="font-bold rounded-full h-12 w-12 bg-gray-200 flex items-center justify-center">
              {user.name[0].toUpperCase()}
            </div>
            {/* User name and details */}
            <div>
              <div className="font-bold text-blue-500">{user.name}</div>
              <div className="text-sm text-gray-500">
                {user.role} | {user.email}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DataList;
