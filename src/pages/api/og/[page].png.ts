import { ImageResponse } from '@vercel/og';
import i18next, { t } from 'i18next';

import fs from 'fs';
import path from 'path';

export const config = {
  runtime: 'edge',
};

const font = fs.readFileSync(
    path.resolve('node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-all-500-normal.woff'),
);

const pages = [
  {
    slug: "projects",
    title: "projects.og.title",
    subtitle: "projects.og.subtitle"
  },
  {
    slug: "blog",
    title: "blog.og.title",
    subtitle: "blog.og.subtitle"
  },
];

export function getStaticPaths() {
    return pages.map(page => {
      return {
        params: { page: page.slug },
        props: { page }
      }
    })
  }

 
export const get = ({ params, props }) => {
  const { page } = props
  const { title, subtitle } = page;
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
                'linear-gradient(to right, #00ffb712 1px, #19002e 1px), linear-gradient(to bottom, #00ffb7 1px, #19002e 1px)',
              backgroundSize: '33px 33px',
            },
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
                  children: t(title),
                },
              },
              {
                type: 'span',
                props: {
                  tw: 'text-3xl text-white',
                  children: t(subtitle),
                },
              },
            ],
          },
        },
      ],
    },
  };
   
  return new ImageResponse(
    html, 
    {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: 'JetBrains MonoVariable',
                style: 'monospace',
                data: font
            }
        ]
    }
  );
}
