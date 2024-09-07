// src/components/magicui/icon-cloud.jsx
import React from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { default as icons } from 'simple-icons/icons'; // Import all icons

const IconCloud = ({ iconSlugs }) => {
  const iconTags = iconSlugs.map(slug => {
    const icon = icons[slug];
    if (icon) {
      return renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e) => e.preventDefault(),
          href: `https://www.example.com/${slug}`,
          target: '_blank',
          rel: 'noreferrer',
        },
      });
    }
    return null;
  });

  return (
    <Cloud
      containerProps={{ /* Customize container props if needed */ }}
      canvasProps={{ /* Customize canvas props if needed */ }}
      options={{ /* Customize cloud options if needed */ }}
    >
      {iconTags}
      {/* Additional static content */}
      <div style={{ color: 'blue', fontSize: '24px' }}>
        Hello World
      </div>
    </Cloud>
  );
};

export default IconCloud;
