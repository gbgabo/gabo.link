import { getLocaleFromPath, getPrefix, type LocalesValues } from 'intlayer';
import slugify from 'limax';
import QRCode from 'qrcode';

import { SITE, BLOG } from '~/config.mjs';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.basePathname;

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const POST_PERMALINK_PATTERN = trimSlash(BLOG?.post?.permalink || '/%slug%');

export const BLOG_BASE = cleanSlug(BLOG?.list?.pathname);
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.pathname || 'category');
export const TAG_BASE = cleanSlug(BLOG?.tag?.pathname) || 'tag';

/** */
export const getCanonical = (path = ''): string | URL => new URL(path, SITE.origin);

/** */

export const getPermalink = (pathname = '/', slug = '', type = 'page'): string => {
  const locale = getLocaleFromPath(pathname) as LocalesValues;
  let permalink: string;

  switch (type) {
    case 'category':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;

    case 'tag':
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;

    case 'post':
      permalink = createPath(trimSlash(slug));
      break;

    case 'page':
    default:
      permalink = createPath(slug);
  }

  if (locale) {
    permalink = createPath(getPrefix(locale).localePrefix, permalink);
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (pathname = '/'): string => getPermalink(pathname, '/');

/** */
export const getBlogPermalink = (pathname = '/'): string => getPermalink(pathname, BLOG_BASE);

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */

export const generateQR = async (text: string) =>
  await QRCode.toDataURL(text, {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    width: 500,
    margin: 1,
    color: {
      dark: '#c79bff',
      light: '#19002e',
    },
  })
    .then((url) => {
      return url;
    })
    .catch((err) => {
      console.error(err);
    });

const definitivePermalink = (permalink: string): string => createPath('/' + BASE_PATHNAME, permalink);
