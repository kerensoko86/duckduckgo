const RenderHighlightedTitle = ({ text, findValue }) => {
  if (!findValue) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${findValue})`, "gi");
  const strings = text.split(regex);

  return (
    <span>
      {strings.map((str, index) =>
        regex.test(str) ? (
          <mark key={index}>{str}</mark>
        ) : (
          <span key={index}>{str}</span>
        )
      )}
    </span>
  );
};

export default RenderHighlightedTitle;
