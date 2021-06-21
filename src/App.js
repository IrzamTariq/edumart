import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import StripeContainer from "./components/StripeContainer";
import SideDrawer from "./components/drawer/SideDrawer";
import { Modal, Button } from "antd";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword from "./pages/auth/ForgotPassword";
import History from "./pages/user/History";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminChats from "./pages/admin/chats";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import SubCreate from "./pages/admin/sub/SubCreate";
import SubUpdate from "./pages/admin/sub/SubUpdate";
import ProductCreate from "./pages/admin/product/ProductCreate";
import AllProducts from "./pages/admin/product/AllProducts";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import Product from "./pages/Product";
import CategoryHome from "./pages/category/CategoryHome";
import SubHome from "./pages/sub/SubHome";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import printingComposing from "./pages/printing&Composing";
import { postMessage, getUserMessage } from "./functions/message";
import Checkout from "./pages/Checkout";
import CreateCouponPage from "./pages/admin/coupon/CreateCouponPage";
import Payment from "./pages/Payment";
import { Widget, addResponseMessage, addUserMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./functions/auth";

const App = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));
  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                chatId: res.data.chatId ? res.data.chatId : "",
                _id: res.data._id,
              },
            });
            if (res.data.chatId) {
              getUserMessage(idTokenResult.token, res.data.chatId).then(
                (res1) => {
                  //  HANDLE USER MESSAGES
                  for (let i = 0; i < res1.data.length; i++) {
                    const element = res1.data[i];
                    if (element.senderId + "" === res.data._id + "") {
                      addUserMessage(element.message);
                    } else {
                      addResponseMessage(element.message);
                    }
                  }
                  console.log("MESSAGES...", res1.data);
                }
              );
            }
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  const handleNewUserMessage = (newMessage) => {
    addResponseMessage("We response you as soon as possible");
  };

  return (
    <>
      {/* {user && user.role === "subscriber" && ( */}
      <Widget
        handleSubmit={(res) => {
          postMessage(user.token, {
            message: res,
            image: "",
            type: "text",
            senderId: user._id,
            email: user.email,
            chatId: user.chatId ? user.chatId : "",
          }).then((res) => {
            if (!user.chatId) {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  name: user.name,
                  email: user.email,
                  token: user.token,
                  role: user.role,
                  chatId: res.chatId,
                  _id: user._id,
                },
              });
            }
          });
        }}
        title="Welcome To EduMart"
        subtitle="you can ask what ever you want"
        handleNewUserMessage={handleNewUserMessage}
      />
      {/* )} */}
      {/* <Modal
        footer={[
          <Button key="back" onClick={() => {}}>
            Cancel
          </Button>,
        ]}
        title={"Payment"}
        visible={true}
        closeIcon
      >
        <StripeContainer />
      </Modal> */}
      <Header />
      <SideDrawer />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <UserRoute exact path="/user/history" component={History} />
        <UserRoute exact path="/user/password" component={Password} />
        <UserRoute exact path="/user/wishlist" component={Wishlist} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/chats" component={AdminChats} />
        <AdminRoute exact path="/admin/category" component={CategoryCreate} />
        <AdminRoute
          exact
          path="/admin/category/:slug"
          component={CategoryUpdate}
        />
        <AdminRoute exact path="/admin/sub" component={SubCreate} />
        <AdminRoute exact path="/admin/sub/:slug" component={SubUpdate} />
        <AdminRoute exact path="/admin/product" component={ProductCreate} />
        <AdminRoute exact path="/admin/products" component={AllProducts} />
        <AdminRoute
          exact
          path="/admin/product/:slug"
          component={ProductUpdate}
        />
        <Route exact path="/product/:slug" component={Product} />
        <Route exact path="/category/:slug" component={CategoryHome} />
        <Route exact path="/sub/:slug" component={SubHome} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/printingcomposing" component={printingComposing} />
        <Route exact path="/cart" component={Cart} />
        <UserRoute exact path="/checkout" component={Checkout} />
        <AdminRoute exact path="/admin/coupon" component={CreateCouponPage} />
        <UserRoute exact path="/payment" component={Payment} />
      </Switch>
    </>
  );
};

export default App;
