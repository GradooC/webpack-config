declare module 'react-hot-loader/root';

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}
