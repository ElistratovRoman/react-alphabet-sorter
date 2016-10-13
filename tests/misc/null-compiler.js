function noop() { return null; }

require.extensions['.css'] = noop;
require.extensions['.sass'] = noop;
require.extensions['.scss'] = noop;