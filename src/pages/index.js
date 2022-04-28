import * as React from "react";

import PlateCalculator from "../components/plate-calculator/plate-calculator";

const IndexPage = () => {
  return (
    <div className="relative">
      <PlateCalculator />

      <div className="absolute bottom-0 right-0 m-4">
        <a
          className="inline-block p-4 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium"
          href="https://www.github.com/vietqhoang/fortyfives"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default IndexPage;
