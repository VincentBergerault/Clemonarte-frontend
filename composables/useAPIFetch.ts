export const useApiFetch = async (url: string, options: any = {}) => {
  const config = useRuntimeConfig();
  options.server = false;
  return await useFetch(`${config.public.apiBase}/${url}`, options);
};
