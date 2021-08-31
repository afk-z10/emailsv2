const dev = process.env.ROLLUP_WATCH === "true";
function useIsPreview() {
  return dev;
}

export { useIsPreview };
