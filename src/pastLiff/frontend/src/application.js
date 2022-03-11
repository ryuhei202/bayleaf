var componentRequireContext = require.context("./component", true);
var ReactRailsUJS = require("react_ujs");
// use `custom_components/` for <%= react_component(...) %> calls
ReactRailsUJS.useContext(componentRequireContext);
