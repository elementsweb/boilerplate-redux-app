import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
/* eslint-enable */

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

export default DevTools;
