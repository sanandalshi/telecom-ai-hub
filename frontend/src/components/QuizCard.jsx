import { useState } from "react";

export default function QuizCard({ question, options, correctAnswer, explanation }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setShowResult(true);
  };

  return (
    <div style={styles.card}>
      
      <h3 style={{ marginBottom: 10 }}>{question}</h3>

      {options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => handleSelect(opt)}
          style={{
            ...styles.option,
            background:
              showResult && opt === correctAnswer
                ? "#16a34a"
                : showResult && opt === selected
                ? "#dc2626"
                : "#1f2937",
          }}
        >
          {opt}
        </button>
      ))}

      {showResult && (
        <div style={styles.result}>
          {selected === correctAnswer ? "✅ Correct!" : "❌ Wrong!"}

          <p style={{ marginTop: 10 }}>
            <b>Explanation:</b> {explanation}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#111a2e",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  option: {
    display: "block",
    width: "100%",
    marginTop: 10,
    padding: 10,
    color: "white",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    borderRadius: 5,
  },
  result: {
    marginTop: 15,
    padding: 10,
    background: "#0b1220",
    borderRadius: 8,
  },
};