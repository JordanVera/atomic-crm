import * as ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    branch: process.env.DEPLOY_BRANCH || "gh-pages",
    repo: process.env.DEPLOY_REPO_URL || undefined,
    nojekyll: true,
    message: `Deploy ${new Date().toISOString()}`,
  },
  function (err) {
    if (err) {
      console.error("Failed to deploy to GitHub Pages", err);
      process.exit(1);
    }
    console.log(
      "Deployed dist/ to gh-pages branch. Ensure GitHub Pages source is set to gh-pages / (root).",
    );
  },
);
