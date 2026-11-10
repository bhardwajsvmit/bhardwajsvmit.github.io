/**
 * Module state that lives for one page load and survives client-side navigation.
 * `entered` turns true once any page has mounted, so the home page loader plays
 * only when the site is opened on the home page, not on every return to it.
 */
export const session = { entered: false };
