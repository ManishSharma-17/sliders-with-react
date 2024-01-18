import React from "react";
import Split from "@uiw/react-split";
// import Split from "react-split";
const DashBoard = () => {
  return (
    <div className="flex min-h-screen items-center">
      <div className="container mx-auto">
        <div className="w-full">
          <Split
            style={{
              height: 200,
              border: "1px solid #d5d5d5",
              borderRadius: 3,
            }}
          >
            <Split mode="vertical">
              <div style={{ height: "50%" }}>Top Pane</div>
              <Split style={{ height: "50%" }}>
                <div>Left Pane</div>
                <div style={{ flex: 1 }}>Right Pane</div>
              </Split>
            </Split>
            <div style={{ flex: 1 }}>Right Pane</div>
          </Split>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
