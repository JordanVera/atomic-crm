const INSTAGRAM_URL_REGEX = /^http(?:s)?:\/\/(?:www\.)?instagram.com\//;

export const isInstagramUrl = (url: string) => {
  if (!url) return;
  try {
    const parsedUrl = new URL(url);
    if (!parsedUrl.href.match(INSTAGRAM_URL_REGEX)) {
      return {
        message: "crm.validation.invalid_instagram_url",
        args: { _: "URL must be from instagram.com" },
      };
    }
  } catch {
    return {
      message: "crm.validation.invalid_url",
      args: { _: "Must be a valid URL" },
    };
  }
};
