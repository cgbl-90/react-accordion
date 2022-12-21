const data = [
  {
    id: 1,
    title:
      "How is this compared to End-to-End testing tools like Selenium and Cypress?",
    info: "Chromatic runs all tests in parallel at no extra cost or configuration. We optimize for the fastest test time by evaluating only the rendered UI. This focus allows Chromatic to run thousands of UI tests in less than a minute. Selenium/Cypress tests can take half an hour or more for an app of meaningful complexity. That said, we recommend you use various testing strategies (visual, unit, E2E) for comprehensive app coverage.",
  },
  {
    id: 2,
    title: "Can I only take snapshots when a component's code changes?",
    info: "We recommend taking snapshots on every build because it’s the most reliable way to catch UI regressions. Global dependencies, such as CSS or third-party APIs can affect the UI without the code changing.",
  },
  {
    id: 3,
    title: "What happens to my snapshots if I don't use them?",
    info: "Chromatic will reset the snapshot count monthly, calculated based on the day you’ve signed up. For instance, if you signed up on February 14th, your count will be reset on the 14th of each month. Any remaining snapshots from the previous month will not accumulate.",
  },
  {
    id: 4,
    title: "How do browsers affect my snapshot count?",
    info: "Each browser adds another snapshot for each of your stories. For example, if you have a story that is tested in Chrome and IE11, that counts as two snapshots. If you also test your story with different viewports, those count as snapshots as well. For example, you want to test a story at 320px, 1280px, Chrome, and IE11. This would count as 4 snapshots.",
  },
  {
    id: 5,
    title: "What happens if I disable UI Tests and/or UI Review?",
    info: "As long as either the testing or review features are enabled, Chromatic will continue taking snapshots. With both disabled, Chromatic will stop taking snapshots and all other features of the platform (such as publishing) will continue without limits.",
  },
];

export default data;
