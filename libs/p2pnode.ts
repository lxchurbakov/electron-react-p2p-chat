const electron = (window as any).electronAPI as {
  send: <T>(event: string, data: T) => void;
  on: <T>(event: string, callback: (event: any, data: T) => void) => void;
  once: <T>(event: string, callback: (event: any, data: T) => void) => void;
  off: <T>(event: string, callback: (event: any, data: T) => void) => void;
};

export default (() => {
  let listeners = [] as any[];

  electron.on('p2p/broadcast', (event, data) => {
    listeners.forEach((l) => l(data));
  });

  return {
    listen: ({ port }) => {
      return new Promise<void>((resolve) => {
        electron.once('p2p/listen/success', () => resolve());
        electron.send('p2p/listen', { port });
      });
    },

    connect: ({ ip, port }) => {
      return new Promise<void>((resolve) => {
        electron.once('p2p/connect/success', () => resolve());
        electron.send('p2p/connect', { ip, port });
      });
    },

    send: ({ type, meta }) => {
      electron.send('p2p/broadcast', { data: { type, meta } });
    },
    onMessage: (callback) => {
      listeners.push(callback); return () => { listeners = listeners.filter((l) => l !== callback) };
    },
  };
})();
