module.exports = {
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx}': 'eslint',
  '*.{js,jsx,ts,tsx,md,html,css}': 'prettier --write',
}
