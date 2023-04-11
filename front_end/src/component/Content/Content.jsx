import React, { Component } from "react"
import Home from "../../pages/Home/Home";
import Customer from "../../pages/Customer/Customer";
import Item from "../../pages/Item/Item";
import PlaceOrder from "../../pages/PlaceOrder/PlaceOrder";
import OrderDetails from "../../pages/OrderDetails/OrderDetails";
import { Route, Routes } from "react-router-dom";

export default function Content() {
  return (
    <div className="mt-4 text-center">
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/customer" element={<Customer />}></Route>
      <Route path="/item" element={<Item />}></Route>
      <Route path="/place" element={<PlaceOrder />}></Route>
      <Route path="/orderDetail" element={<OrderDetails/>}></Route>
      {/* <Route path="/" element={<Login/>}></Route> */}
    </Routes>
  </div>
  );
}
