import {
    Button,
  Card,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import useStyles from "./LoginStyle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import addUser from "../../data/user";

const Login = () => {
  const login = useStyles();

  const [showPassword, setshowPassword] = useState(false);
  const showPwd = () => {
    setshowPassword(!showPassword);
  };

  const [language, setLanguage] = useState(true);
  function LanguageOpt1() {
    setLanguage(false);
  }
  function LanguageOpt2() {
    setLanguage(true);
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      addUser(values);
    },
  });
  return (
    <div className={login.body}>
      <form onSubmit={formik.handleSubmit}>
        <Card className={login.card} elevation={24}>
          <Typography className={login.typo} variant="h3">
            inviso
          </Typography>
          <div className={login.container}>
          <TextField
            className={login.textfield}
            variant="outlined"
            name="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            label={language ? "Username" : "Kullanıcı Adı"}
            />
            </div>
          <TextField
            className={login.textfield}
            variant="outlined"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            label={language ? "Password" : "Şifre"}
            type={showPassword ? "text" : "password"}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                  <IconButton onClick={showPwd}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
          <div className={login.container}>
            <Link href="#" className={login.link}>
              Forgot Password?
            </Link>
            <Select className={login.select} value={language ? "eng" : "tur"}>
              <MenuItem value="eng" onClick={LanguageOpt2}>
                English
              </MenuItem>
              <MenuItem value="tur" onClick={LanguageOpt1}>
                Turkish
              </MenuItem>
            </Select>
          </div>
          <Button className={login.button} type="submit" variant="primary">
            {language ? "Login" : "Giriş"}
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Login;
