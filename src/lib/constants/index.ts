import { getEnv } from "@/lib/env";

export const GLOBAL = Object.freeze({
  APP_NAME: getEnv({ key: "APP_NAME", fallback: "Tijara" }),
  APP_DESC: getEnv({ key: "APP_DESC", fallback: "All you need in one spot" }),
});
