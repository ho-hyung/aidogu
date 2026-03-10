import type { Tool } from '@/types/tool'

import { adobeFirefly } from './adobe-firefly'
import { aiDungeon } from './ai-dungeon'
import { beautifulAi } from './beautiful-ai'
import { bolt } from './bolt'
import { canvaAi } from './canva-ai'
import { characterAi } from './character-ai'
import { chatgpt } from './chatgpt'
import { claude } from './claude'
import { claudeCode } from './claude-code'
import { clova } from './clova'
import { consensus } from './consensus'
import { copyAi } from './copy-ai'
import { cursor } from './cursor'
import { dId } from './d-id'
import { dallE } from './dall-e'
import { deepl } from './deepl'
import { descript } from './descript'
import { elevenlabs } from './elevenlabs'
import { fireflies } from './fireflies'
import { flux } from './flux'
import { gamma } from './gamma'
import { gemini } from './gemini'
import { githubCopilot } from './github-copilot'
import { grammarly } from './grammarly'
import { grok } from './grok'
import { heygen } from './heygen'
import { ideogram } from './ideogram'
import { invideo } from './invideo'
import { jasper } from './jasper'
import { klingAi } from './kling-ai'
import { leonardoAi } from './leonardo-ai'
import { lovable } from './lovable'
import { luma } from './luma'
import { make } from './make'
import { midjourney } from './midjourney'
import { murf } from './murf'
import { n8n } from './n8n'
import { napkinAi } from './napkin-ai'
import { notionAi } from './notion-ai'
import { opusClip } from './opus-clip'
import { otterAi } from './otter-ai'
import { perplexity } from './perplexity'
import { photoroom } from './photoroom'
import { pika } from './pika'
import { removeBg } from './remove-bg'
import { replit } from './replit'
import { runway } from './runway'
import { sora } from './sora'
import { stableDiffusion } from './stable-diffusion'
import { suno } from './suno'
import { synthesia } from './synthesia'
import { tome } from './tome'
import { typecast } from './typecast'
import { udio } from './udio'
import { v0 } from './v0'
import { windsurf } from './windsurf'
import { wrtn } from './wrtn'
import { writesonic } from './writesonic'
import { zapierAi } from './zapier-ai'

export const ALL_TOOLS: readonly Tool[] = [
  adobeFirefly,
  aiDungeon,
  beautifulAi,
  bolt,
  canvaAi,
  characterAi,
  chatgpt,
  claude,
  claudeCode,
  clova,
  consensus,
  copyAi,
  cursor,
  dId,
  dallE,
  deepl,
  descript,
  elevenlabs,
  fireflies,
  flux,
  gamma,
  gemini,
  githubCopilot,
  grammarly,
  grok,
  heygen,
  ideogram,
  invideo,
  jasper,
  klingAi,
  leonardoAi,
  lovable,
  luma,
  make,
  midjourney,
  murf,
  n8n,
  napkinAi,
  notionAi,
  opusClip,
  otterAi,
  perplexity,
  photoroom,
  pika,
  removeBg,
  replit,
  runway,
  sora,
  stableDiffusion,
  suno,
  synthesia,
  tome,
  typecast,
  udio,
  v0,
  windsurf,
  wrtn,
  writesonic,
  zapierAi,
]
