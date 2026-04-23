import { useState } from "react";

export default function ChatBox({ onSend }) {
  const [text, setText] = useState("");

  return (
    <div style={{ marginTop: 20 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message..."
        style={styles.input}
      />

      <button
        onClick={() => {
          onSend(text);
          setText("");
        }}
        style={styles.button}
      >
        Send
      </button>
    </div>
  );
}

const styles = {
  input: {
    padding: 10,
    width: "70%",
    marginRight: 10,
  },
  button: {
    padding: 10,
    background: "#3b82f6",
    color: "white",
    border: "none",
  },
};