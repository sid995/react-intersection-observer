/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  // This "hack" ensures your IDE detects all normal Tailwind classes, while JIT is used when compiling the project.
  // All the normal Tailwind classes should show up in code completion. It can't show all the new classes generated by JIT.
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: ['src/**/*.tsx'],
};
