import React from "react";
import LinearGradient from "react-native-linear-gradient";
import color from "../styles/color";

const GradientLayout = ({ children }) => (
  <LinearGradient
    colors={[color.primary, color.darkPrimary]}
    {...{
      style: { flex: 1, borderRadius: 5 },
    }}>
    {children}
  </LinearGradient>
);

export default GradientLayout;
