type testData = {
  task: string
  due: string | null
  notes: string
}

export const defaultData: testData[] = [
  {
    task: "Add a New Feature",
    due: JSON.stringify(new Date("2023/10/15")),
    notes: "This is a note",
  },
  {
    task: "Write Integration Tests",
    due: null,
    notes: "Use Jest",
  },
  {
    task: "Add Instagram Integration",
    due: null,
    notes: "",
  },
  {
    task: "Cleanup Database",
    due: JSON.stringify(new Date("2023/02/15")),
    notes: "Remove old data",
  },
  {
    task: "Refactor API Endpoints",
    due: null,
    notes: "",
  },
  {
    task: "Add Documentation to API",
    due: JSON.stringify(new Date("2023/09/12")),
    notes: "Add JS Docs to all endpoints",
  },
  {
    task: "Update NPM Packages",
    due: null,
    notes: "Upgrade React & Chakra UI",
  },
];

export default testData;