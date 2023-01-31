import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./search.scss";

const Search = ({ search }: { search: (value: string) => void }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const handleSearch = () => {
    search(searchValue);
    resetInputField();
  };

  return (
    <>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        onChange={handleSearchInputChanges}
      />
      <Button
        aria-label="menu"
        color="primary"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleSearch}
      >
        Search
      </Button>
    </>
  );
};

export default Search;
