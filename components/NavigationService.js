import { NavigationActions, DrawerActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function openDrawer() {
   navigator.dispatch(DrawerActions.toggleDrawer());
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  openDrawer,
};
