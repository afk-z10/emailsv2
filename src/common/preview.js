function useIsPreview() {
  return !import.meta.env.PROD;
}

export { useIsPreview };
