import { Search } from "@mui/icons-material"
import { Paper,IconButton } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const [searchTerm,setSearchterm]=useState("")
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(searchTerm){
    navigate(`search/${searchTerm}`);
    }
    setSearchterm("")
  }
  return (
    <Paper component={"form"}
      onSubmit={
        handleSubmit
      }
      sx={{
        borderRadius: 20,
        pl: 2,
        border: "1px solid #e3e3e3",
        mr: { sm: 5 },
        boxShadow: "none",
      }}
    >
      <input
        className="search-bar"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => {setSearchterm(e.target.value)}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar