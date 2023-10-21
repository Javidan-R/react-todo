declare module '*.png' {
    const value: string;
    export = value;
  }
  
  declare module '*.svg' {
    import React = require('react');
    const value: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default value;
  }