// import { Button, Checkbox, Label, Spinner } from "flowbite-react";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ReactSession } from "react-client-session";
// import axios from "axios";
// import { mobile } from "../responsive";

import styled from "styled-components";
import Stationery from "./Stationery";

const USER_DETAILS_API_URL = process.env.REACT_APP_USER_DETAILS_API_URL;

function UserDashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const Option = styled.option``;
  const Container = styled.div``;

  const Title = styled.h1`
    margin: 20px;
  `;

  const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Filter = styled.div`
    margin: 20px;
  `;

  const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
  `;

  const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
  `;

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   sendUserDetailsRequest();
  // }, []);

  // function sendUserDetailsRequest() {
  //   setIsLoading(true);
  //   axios
  //     .get(USER_DETAILS_API_URL, {
  //       params: { email: ReactSession.get("email") },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setUser(response?.data);
  //     })
  //     .catch((err) => {})
  //     .then(() => setIsLoading(false));
  // }

  return (
    <Container>
      {/* <Navbar /> */}
      {/* <Announcement /> */}
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Stationery />
      {/* <Products /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </Container>
  );
}

export default UserDashboardPage;
