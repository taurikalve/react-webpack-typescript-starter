declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGElement>>;
  export default SVG;
}
