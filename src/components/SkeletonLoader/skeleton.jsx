const Skeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        height: props.height,
        width: props.width || "80%",
        borderRadius: props.radius || 0,
        margin: " 0 auto",
      }}
    ></div>
  );
};

export default Skeleton;
