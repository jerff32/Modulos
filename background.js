try {
    // eslint-disable-next-line no-restricted-globals
    self.importScripts("./dist/background.bundle.js");
} catch (e) {
    console.error(e);
}
