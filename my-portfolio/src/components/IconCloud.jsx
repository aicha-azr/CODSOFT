import React, { useEffect, useMemo, useState } from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';
import { useTheme } from 'next-themes';

// List of icons you want to display
const iconSlugs = [
  'nodedotjs',   // Node.js
  'javascript',  // JavaScript
  'react',       // React
  'nextdotjs',   // Next.js
  'postman',     // Postman
  'github', 
  'css3',
       'docker',
       'express',
       'figma',
       'html5',
       'mongoose',
       'mongodb',
       'redux',
       'tailwindcss',
       'git',
       'vercel'
];

// Cloud settings
const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Render custom icon
const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud() {
  const [data, setData] = useState(null);
  const { theme } = useTheme(); // Using Next.js theme support for dark/light modes

  // Fetch the icons for the specified slugs
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, []);

  // Render the icons once they are fetched
  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'light')
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
