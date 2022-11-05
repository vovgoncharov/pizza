import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={410}
    viewBox="0 0 280 410"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="132" cy="134" r="132" /> 
    <circle cx="196" cy="141" r="5" /> 
    <rect x="8" y="269" rx="0" ry="0" width="257" height="26" /> 
    <rect x="213" y="328" rx="0" ry="0" width="0" height="1" /> 
    <rect x="10" y="305" rx="0" ry="0" width="254" height="46" /> 
    <rect x="11" y="363" rx="0" ry="0" width="79" height="29" /> 
    <rect x="179" y="361" rx="0" ry="0" width="85" height="37" />
  </ContentLoader>
)
export default Skeleton;
