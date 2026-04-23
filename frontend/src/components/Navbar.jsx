import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={styles.nav}>
      <h3
        style={styles.logo}
        onClick={() => navigate("/")}
      >
        Telecom AI Hub
      </h3>
    </div>
  );
}

const styles = {
  nav: {
    height: "60px",
    background: "#0f1b33",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100,
  },

  logo: {
    color: "white",
    cursor: "pointer",
    fontSize: "22px",
    fontWeight: "bold",
    margin: 0,
  },
};