import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';

import schemaTypes from './schemas/schema.js';

export default defineConfig({
  title: 'Marabox',
  projectId: '5qni5qk5',
  dataset: 'production',
  plugins: [deskTool(), visionTool({ defaultApiVersion: '2022-10-21' })],
  schema: {
    types: schemaTypes,
  },
});
