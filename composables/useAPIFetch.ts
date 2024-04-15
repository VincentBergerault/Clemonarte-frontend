export const useApiFetch = async (url: string, options: any = {}) => {
  const config = useRuntimeConfig();
  options.server = false;
  return await useFetch(
    `${removeTrailingSlash(config.public.apiBase)}/${url}`,
    options
  );
};

function removeTrailingSlash(url: string): string {
  if (url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
}
