function Icon({ color, size, svgData, style }) {
  const { path, className } = svgData;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color || "currentColor"}
      className={className}
      viewBox={`0 0 20 20`}
      style={style}
    >
      <path d={path} />
    </svg>
  );
}

export default Icon;
