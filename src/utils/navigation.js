import React from "react";
import {
  StackActions,
  CommonActions,
  DrawerActions,
} from "@react-navigation/native";

export const isMountedRef = React.createRef();
export const navigationRef = React.createRef();

function navigate(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  } else console.warn("navigate Error: app not initialized yet");
}

function push(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  } else console.warn("push Error: app not initialized yet");
}

function replace(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  } else console.warn("push Error: app not initialized yet");
}

function pop(count) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop(count));
  } else console.warn("push Error: app not initialized yet");
}

function popToTop() {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  } else console.warn("push Error: app not initialized yet");
}
function goBack() {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch({ type: "GO_BACK" });
  } else console.warn("push Error: app not initialized yet");
}

function reset(name, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    })
  );
}

function toggleDrawer() {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

function dispatch(action) {
  navigationRef.current?.dispatch(action);
}

const Navigation = {
  navigate,
  push,
  replace,
  pop,
  popToTop,
  goBack,
  reset,
  toggleDrawer,
  dispatch,
};

export default Navigation;
