import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import { askTutor } from "../services/api";

export default function Learn() {
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sampleQuestions = [
    "What is 5G?",
    "Explain LTE architecture",
    "What is network slicing?",
    "Difference between 4G and 5G",
  ];

  const handleAsk = async (customQuestion = null) => {
    const finalQuestion = customQuestion || question;

    if (!finalQuestion.trim()) return;

    setChat((prev) => [
      ...prev,
      {
        type: "user",
        message: finalQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const res = await askTutor(finalQuestion);

      setChat((prev) => [
        ...prev,
        {
          type: "ai",
          message: res.answer,
        },
      ]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        {
          type: "ai",
          message:
            "Something went wrong while fetching AI response.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      <Sidebar />

      <div style={styles.container}>
        <h1>🎓 Telecom AI Tutor</h1>

        <p style={styles.subtitle}>
          Learn telecom concepts instantly using Groq-powered AI explanations.
        </p>

        {/* Sample Questions */}
        <div style={styles.sampleContainer}>
          {sampleQuestions.map((q, index) => (
            <button
              key={index}
              style={styles.sampleBtn}
              onClick={() => handleAsk(q)}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div style={styles.chatContainer}>
          {chat.length === 0 && (
            <div style={styles.emptyState}>
              Ask anything about telecom concepts like 5G,
              LTE, IoT, networking and more.
            </div>
          )}

          {chat.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                background:
                  msg.type === "user"
                    ? "#2563eb"
                    : "#1e293b",
                alignSelf:
                  msg.type === "user"
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              {msg.message}
            </div>
          ))}

          {loading && <Loader />}
        </div>

        {/* Input Section */}
        <div style={styles.inputSection}>
          <input
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleAsk();
    }
  }}
  placeholder="Ask telecom-related questions..."
  style={styles.input}
/>

          <button
            onClick={() => handleAsk()}
            style={styles.button}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    paddingTop: "100px",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "90%",
    maxWidth: "900px",
    margin: "0 auto",
    minHeight: "100vh",
    background: "#0b1220",
    color: "white",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "20px",
  },

  sampleContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },

  sampleBtn: {
    padding: "10px 14px",
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  chatContainer: {
  height: "320px",
  background: "#0f172a",
  padding: "20px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  overflowY: "auto",
  marginBottom: "20px",
},
  emptyState: {
  color: "#94a3b8",
  textAlign: "center",
  marginTop: "90px",
  lineHeight: "1.6",
},

  message: {
    padding: "14px",
    borderRadius: "10px",
    maxWidth: "75%",
    color: "white",
    lineHeight: "1.6",
    whiteSpace: "pre-wrap",
  },

  inputSection: {
  display: "flex",
  gap: "10px",
  marginTop: "10px",
},

  input: {
    flex: 1,
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },

  button: {
    padding: "14px 22px",
    background: "#8b5cf6",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};