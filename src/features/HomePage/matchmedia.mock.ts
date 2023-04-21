export default Object.defineProperty(window, 'matchMedia', {
  value: () => ({
      matches: window.innerWidth < 768,
      addListener: () => {},
      removeListener: () => {}
  })
});