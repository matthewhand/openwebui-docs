import React from 'react';
import Link from '@docusaurus/Link';

export const TutorialBanner = () => {
  return (
    <div className="my-4 p-4 border-l-4 border-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:border-yellow-400">
      <h3 className="text-lg font-bold text-yellow-700 dark:text-yellow-300">⚠️ Important Notice</h3>
      <p className="mt-2 text-yellow-600 dark:text-yellow-200">
        This tutorial is a community contribution and is not supported by the OpenWebUI team. It serves only as a demonstration on how to customize OpenWebUI for your specific use case. Want to contribute? Check out the contributing tutorial.
      </p>
    </div>
  );
};
