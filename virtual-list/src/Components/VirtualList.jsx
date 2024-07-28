import { useState } from "react";

const VirtualList = ({ list, height, width, itemHeight }) => {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const visibleList = list.slice(indices[0], indices[1] + 1);

  const handleScroll = (event) => {
    const { scrollTop } = event.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{ height, width, background: "#f5f5dc", overflow: "auto" }}
    >
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleList.map((item, index) => {
          return (
            <div
              key={index}
              className="item"
              style={{
                height: itemHeight,
                background: "#e0f7fa",
                borderTop: "5px solid #f5f5dc",
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"item " + item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualList;
