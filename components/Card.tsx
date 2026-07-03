type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
