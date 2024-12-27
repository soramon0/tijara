interface Opts {
  key: string;
  must?: boolean;
  fallback?: string;
}
export function getEnv(opts: Opts) {
  const { key, must = false, fallback = "" } = opts;

  if (!key) throw new Error("Please provide env variable name");
  const value = process.env[key];

  if (must && !value) {
    throw new Error(`No value was provided for ${key}`);
  }

  return value || fallback;
}
