export function load(file) {
  return () => import(`../pages/${file}`).then((m) => m.default || m)
}
