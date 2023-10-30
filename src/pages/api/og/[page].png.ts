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

 
export const get = ({params, props}) => {
  const { page } = props
  const {title, subtitle} = page;
  // Astro doesn't support tsx endpoints so I'm using React-element objects
  const html = {
    type: 'div',
    props: {
      style: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              inset: 0,
              height: '100%',
              width: '100%',
              backgroundImage:
                'linear-gradient(to right, #00ffb712 1px, #19002e 1px), linear-gradient(to bottom, #00ffb7 1px, #19002e 1px)',
              backgroundSize: '24px 24px',
            },
            children: '',
          },
        },
        {
          type: 'span',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              position: 'absolute',
              bottom: 60,
              left: 60,
              width: '80%',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '2.5rem',
                    lineHeight: 1,
                    background: '#c79bff',
                    color: '#19002e',
                    padding: '1rem 1.75rem',
                    borderRadius: 20,
                    fontWeight: 600,
                    marginRight: 'auto',
                  },
                  children: 'gabo.link',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  },
                  children: [
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontSize: '5.25rem',
                          lineHeight: 1,
                          fontWeight: 600,
                          color: '#ff0e82',
                          backgroundColor: '#240041',
                          padding: '30px 40px',
                          borderRadius: 30,
                          border: '4px',
                          marginBottom: '20px',
                        },
                        children: t(title),
                      },
                    },
                  ],
                },
              },
              {
                type: 'span',
                props: {
                  style: {
                    fontSize: '2rem',
                    lineHeight: '2.5rem',
                    color: '#fff',
                  },
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
