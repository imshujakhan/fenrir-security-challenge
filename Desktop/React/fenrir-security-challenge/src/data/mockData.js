export const scans = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 2,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 3,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 4,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 5,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 6,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 7,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 8,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 },
    lastScan: "4d ago",
  },
  {
    id: 9,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 },
    lastScan: "4d ago",
  },
  {
    id: 10,
    name: "Web App Servers",
    type: "Blackbox",
    status: "Failed",
    progress: 100,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "4d ago",
  },
  {
    id: 11,
    name: "Web App Servers",
    type: "Blackbox",
    status: "Failed",
    progress: 100,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "4d ago",
  },
];

export const orgStats = {
  "Critical Severity": { count: 4, change: "+12%" },
  "High Severity": { count: 17, change: "-8%" },
  "Medium Severity": { count: 43, change: "+5%" },
  "Low Severity": { count: 67, change: "-3%" },
};

export const activeScan = {
  id: 2,
  type: "Grey Box",
  status: "In Progress",
  progress: 0,
  targets: "google.com",
  startedAt: "Nov 22, 09:00AM",
  credentials: "2 Active",
  files: "Control.pdf",
  checklists: "40/350",
  steps: ["Spidering", "Mapping", "Testing", "Validating", "Reporting"],
  currentStep: 2,
};

export const activityLogs = [
  {
    time: "15:47:32",
    type: "info",
    message: "Testing authentication bypass on /api/login",
  },
  {
    time: "15:47:28",
    type: "success",
    message: "Mapped 342 endpoints across 12 domains",
  },
  {
    time: "15:47:15",
    type: "warning",
    message: "Detected potential SQL injection vector at /search?q=",
  },
  {
    time: "15:47:02",
    type: "info",
    message: "Analyzing JWT token structure and expiration",
  },
  {
    time: "15:46:48",
    type: "error",
    message: "Rate limit exceeded on /api/users - retrying in 30s",
  },
  {
    time: "15:46:35",
    type: "success",
    message: "Successfully crawled 1,247 unique URLs",
  },
  {
    time: "15:46:20",
    type: "info",
    message: "Initiating XSS payload injection tests",
  },
  {
    time: "15:46:05",
    type: "info",
    message: "Scanning for exposed sensitive files (.env, .git)",
  },
];

export const findings = [
  {
    id: 1,
    severity: "Critical",
    time: "15:47:15",
    title: "SQL Injection Vulnerability",
    endpoint: "POST /api/search",
    description:
      "Unsanitized user input in search parameter allows database manipulation",
  },
  {
    id: 2,
    severity: "High",
    time: "15:46:52",
    title: "Broken Authentication",
    endpoint: "GET /api/users/:id",
    description:
      "Missing authorization check allows access to arbitrary user profiles",
  },
  {
    id: 3,
    severity: "High",
    time: "15:46:38",
    title: "Cross-Site Scripting (XSS)",
    endpoint: "POST /api/comments",
    description:
      "Reflected XSS in comment field due to insufficient output encoding",
  },
  {
    id: 4,
    severity: "Medium",
    time: "15:46:20",
    title: "Sensitive Data Exposure",
    endpoint: "GET /api/config",
    description:
      "API endpoint exposes internal configuration and database credentials",
  },
  {
    id: 5,
    severity: "Medium",
    time: "15:46:05",
    title: "Missing Rate Limiting",
    endpoint: "POST /api/login",
    description:
      "No rate limiting on authentication endpoint enables brute force attacks",
  },
];

export const scanMetrics = {
  subAgents: 8,
  parallelExecutions: 24,
  operations: 15847,
  severityCounts: { critical: 1, high: 2, medium: 2, low: 0 },
};
