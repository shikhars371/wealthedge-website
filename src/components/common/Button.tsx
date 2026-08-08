type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      style={{
        background: isPrimary
          ? "linear-gradient(135deg,#3B82F6,#2563EB)"
          : "rgba(255,255,255,.05)",
        color: "#fff",
        border: isPrimary
          ? "none"
          : "1px solid rgba(255,255,255,.2)",
        padding: "16px 34px",
        borderRadius: "14px",
        fontSize: "17px",
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        cursor: "pointer",
        transition: "0.3s ease",
        boxShadow: isPrimary
          ? "0 10px 30px rgba(37,99,235,.45)"
          : "none",
      }}
    >
      {children}
    </button>
  );
}