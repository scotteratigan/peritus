import React from "react";
import Link from "./Link";

const style = {
  padding: 15,
  fontSize: ".8rem",
  display: "inline"
};

export default function Links() {
  return (
    <div style={style}>
      <Link name="Overview" url="/overview" selected={false} />
      <Link name="Product Performance" url="/performance" selected={false} />
      <Link name="Customer Health" url="/health" selected={true} />
      <Link name="Bundle Processing" url="/processing" selected={false} />
      <Link name="Team Performance" url="/teamperformance" selected={false} />
      <Link name="Incidents" url="/incidents" selected={false} />
    </div>
  );
}
