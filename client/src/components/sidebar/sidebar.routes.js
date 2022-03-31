export default [
  {
    name: "Home",
    icon: "X",
    url: "/",
    category: "Dashboard",
  },

  {
    name: "Students",
    children: [
      {
        name: "List",
        url: "/students",
      },
      {
        name: "Create",
        url: "/newuser",
      },
    ],
  },
  {
    name: "Item4",
    children: [
      {
        name: "Child41",
        url: "#child41",
      },
      {
        name: "Child42",
        url: "#child42",
      },
      {
        name: "Child43",
        children: [
          {
            name: "Child431",
            url: "#child431",
          },
          {
            name: "Child432",
            url: "#child432,",
          },
          {
            name: "Child433",
            url: "#child433",
          },
        ],
      },
    ],
  },
];
