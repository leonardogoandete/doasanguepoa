import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");
  const [options, setOptions] = React.useState([""]);
  React.useEffect(() => {
    const getData = async () => {
      const arr = [];
      await axios.get("https://doasanguepoa-bff.herkuapp.com/instituicoes")
        .then((res) => {
          let result = res.data;
          result.map((instituicao) => {
            return arr.push({ value: instituicao.id, label: instituicao.nome });
          });
          setOptions(arr);
        });
    };
    getData();
  }, []);

  const handleChange = (event) => {
    setAge(event["id"]);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {<MenuItem value={options.id}>{options.nome}</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  );
}
