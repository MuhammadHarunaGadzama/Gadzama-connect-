type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#16a34a",
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {text}
    </button>
  );
}
