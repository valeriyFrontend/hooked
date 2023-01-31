import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
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
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={2}
    >
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        size="small"
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
    </Grid>
  );
};

export default Search;
