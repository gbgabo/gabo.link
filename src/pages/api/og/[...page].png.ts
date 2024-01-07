import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';
import { fetchPosts } from '~/utils/blog';
import { generateQR } from '~/utils/permalinks';

export const config = {
  runtime: 'edge',
};

const font = fs.readFileSync(path.resolve('src/assets/jetbrains-mono-all-500-normal.woff'));

const posts = await fetchPosts('en');
const tags = new Set();
const categories = new Set();

posts.map((post) => {
  Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  typeof post.category === 'string' && categories.add(post.category.toLowerCase());
});

const tagsData = Array.from(tags).map((tag: string) => {
  return {
    slug: `tag/${tag}`,
    title: `#${tag}`,
    subtitle: '',
  };
});

const categoriesData = Array.from(categories).map((category: string) => {
  return {
    slug: `category/${category}`,
    title: category,
    subtitle: '',
  };
});

// Had to declare language variations through [...rest] parameters static props
// instead of i18next because it appears not to work with .ts routes
const pages = [
  {
    slug: 'projects',
    title: '/projects',
    subtitle: '',
  },
  {
    slug: 'pt-BR/projects',
    title: '/projects',
    subtitle: '',
  },
  {
    slug: 'uses',
    title: '/uses',
    subtitle: 'The free and open-source tools I use everyday, from desktop and mobile to text based apps',
  },
  {
    slug: 'pt-BR/uses',
    title: '/uses',
    subtitle:
      'As ferramentas livres e de código aberto que uso diariamente, de desktop e mobile, à aplicações de texto',
  },
  {
    slug: 'blog',
    title: '/blog',
    subtitle: "The articles and lists I've been writing in my software development journey",
  },
  {
    slug: 'pt-BR/blog',
    title: '/blog',
    subtitle: 'Os textos e listas que tenho escrito na durante minha jornada de desenvolvedor de software',
  },
  ...tagsData,
  ...categoriesData,
];

export function getStaticPaths() {
  return pages.map((page) => {
    return {
      params: { page: page.slug },
      props: { page },
    };
  });
}

export const GET = async ({ props }) => {
  const { page } = props;
  const { title, subtitle, slug } = page;
  // Astro doesn't support tsx endpoints so I'm using React-element objects
  const html = {
    type: 'div',
    props: {
      tw: 'bg-white w-full h-full flex relative',
      children: [
        {
          type: 'div',
          props: {
            tw: 'absolute inset-0 h-full w-full',
            style: {
              backgroundImage:
                'linear-gradient(to right, #00ffb712 1px, #19002e 1px), linear-gradient(to bottom, #00ffb7 2px, #19002e 2px)',
              backgroundSize: '33px 33px',
            },
          },
        },
        {
          type: 'img',
          props: {
            tw: 'absolute right-0 top-0 h-90 m-8',
            src: await generateQR(`https://gabo.link/${slug}`),
          },
        },
        {
          type: 'span',
          props: {
            tw: 'flex flex-col absolute bottom-14 left-14 w-10/12 items-start',
            children: [
              {
                type: 'span',
                props: {
                  tw: 'bg-[#c79bff] text-[#19002e] mb-3 text-4xl rounded-2xl py-3 px-5 mr-auto',
                  children: 'gabo.link',
                },
              },
              {
                type: 'span',
                props: {
                  tw: 'rounded-3xl px-8 py-5 border-4 border-[#ff0e82] bg-[#240041] mb-4 text-7xl text-[#ff0e82]',
                  children: title,
                },
              },
              {
                type: 'span',
                props: {
                  tw: 'text-4xl text-white',
                  children: subtitle,
                },
              },
            ],
          },
        },
      ],
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'JetBrains MonoVariable',
        data: font,
      },
    ],
  });
};
