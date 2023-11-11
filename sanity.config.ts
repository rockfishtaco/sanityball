import { markdownSchema } from 'sanity-plugin-markdown'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'claps',

  projectId: '4jll1z5f',
  dataset: 'nuggets',

  plugins: [deskTool(), visionTool(), markdownSchema() ],

  schema: {
    types: schemaTypes,
  },
})
