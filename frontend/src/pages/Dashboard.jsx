import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const recentActivities = [
    {
      user: "Rahul Sharma",
      activity: "Asked about 5G Network Slicing",
      status: "Completed",
    },
    {
      user: "Priya Verma",
      activity: "Submitted Billing Complaint",
      status: "Escalated",
    },
    {
      user: "Amit Patel",
      activity: "Completed LTE Quiz",
      status: "Passed",
    },
    {
      user: "Sneha Jain",
      activity: "Generated Support Message",
      status: "Delivered",
    },
  ];

  return (
    <div>
      <Sidebar />
      <Navbar />

      <div style={styles.container}>
        <h1>📊 Telecom AI Dashboard</h1>

        <p style={styles.subtitle}>
          Real-time overview of platform usage, customer support insights,
          and AI learning performance.
        </p>

        {/* KPI Cards */}
        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>12,450+</h2>
            <p>AI Queries Resolved</p>
          </div>

          <div style={styles.card}>
            <h2>8,320+</h2>
            <p>Complaints Processed</p>
          </div>

          <div style={styles.card}>
            <h2>5,100+</h2>
            <p>Quizzes Completed</p>
          </div>

          <div style={styles.card}>
            <h2>96%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>

        {/* Analytics Section */}
        <div style={styles.analyticsSection}>
          <div style={styles.analyticsCard}>
            <h2>📌 Complaint Breakdown</h2>

            <p>📶 Network Issues: 45%</p>
            <p>💳 Billing Issues: 25%</p>
            <p>📞 SIM Issues: 20%</p>
            <p>🌐 Internet Issues: 10%</p>
          </div>

          <div style={styles.analyticsCard}>
            <h2>🤖 AI Usage Stats</h2>

            <p>🎓 Tutor Sessions: 3,240</p>
            <p>🧪 Quiz Generations: 1,890</p>
            <p>💬 Messages Rewritten: 2,100</p>
            <p>🛠 Complaints Resolved: 4,560</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={styles.tableContainer}>
          <h2>📋 Recent Activities</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>User</th>
                <th style={styles.th}>Activity</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentActivities.map((item, index) => (
                <tr key={index}>
                  <td style={styles.td}>{item.user}</td>
                  <td style={styles.td}>{item.activity}</td>
                  <td style={styles.statusTd}>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    paddingTop: "90px",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "90%",
    maxWidth: "1100px",
    margin: "0 auto",
    color: "white",
    minHeight: "100vh",
    background: "#0b1220",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "30px",
    lineHeight: "1.6",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  },

  analyticsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  analyticsCard: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    lineHeight: "2",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  },

  tableContainer: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    overflowX: "auto",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    color: "white",
  },

  th: {
    textAlign: "left",
    padding: "14px",
    borderBottom: "1px solid #334155",
    color: "#8b5cf6",
  },

  td: {
    textAlign: "left",
    padding: "14px",
    borderBottom: "1px solid #334155",
  },

  statusTd: {
    textAlign: "left",
    padding: "14px",
    borderBottom: "1px solid #334155",
    color: "#22c55e",
    fontWeight: "bold",
  },
};