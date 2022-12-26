import React from "react";
import { connect } from "react-redux";
import { httpRequest, login } from "../../store/actions/asyncActions";
import LoginForm from "../pure/LoginForm";

const mapStateToProps = (state) => {
  return {
    loged: state.userState.loged,
    fetching: state.userState.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      const data = {
        email,
        password,
      };
      const url = "https://reqres.in/api/login";
      dispatch(httpRequest("post", url, data));
    },
  };
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
