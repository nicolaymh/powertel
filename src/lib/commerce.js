// src/lib/commerce.js

import Commerce from "@chec/commerce.js";

const checAPIKey = import.meta.env.VITE_APP_CHEC_PUBLIC_KEY;

const devEnvironment = import.meta.env.NODE_ENV === "development";

const commerceConfig = {
  axiosConfig: {
    headers: {
      "X-Chec-Agent": "commerce.js/v2",
      "Chec-Version": "2021-09-29",
    },
  },
};

if (devEnvironment && !checAPIKey) {
  throw Error(
    "Your public API key must be provided as an environment variable named NEXT_PUBLIC_CHEC_PUBLIC_KEY. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami"
  );
}

export default new Commerce(checAPIKey, devEnvironment, commerceConfig);
