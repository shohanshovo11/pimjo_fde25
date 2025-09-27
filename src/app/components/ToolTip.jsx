export const ToolTip = ({ text, textColor, bgColor }) => {
  return (
    <div
      style={{
        letterSpacing: "-0.2px",
        lineHeight: "16px",
        backgroundColor: bgColor,
        color: textColor,
      }}
      className={`inline-flex font-medium text-xs rounded-2xl px-2 py-0.5 items-center justify-center`}
    >
      {text}
    </div>
  );
};
