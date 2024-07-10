function Icon({ color, size, svgData, style }) {
  const { path, className } = svgData;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color || "currentColor"}
      class={className}
      viewBox={`0 0 ${size} ${size}`}
      style={style}
    >
      <path fill-rule="evenodd" d={path} />
    </svg>
  );
}

export default Icon;
