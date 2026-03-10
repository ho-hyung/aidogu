import type { BlogPost } from '@/types/blog'
import { aiToolsForBeginners2025 } from './ai-tools-for-beginners-2025'
import { chatgptVsClaudeComparison } from './chatgpt-vs-claude-comparison'
import { freeAiImageGenerators } from './free-ai-image-generators'
import { aiToolsForStudents } from './ai-tools-for-students'
import { aiAutomationGuide } from './ai-automation-guide'

export const BLOG_POSTS: readonly BlogPost[] = [
  aiToolsForBeginners2025,
  chatgptVsClaudeComparison,
  freeAiImageGenerators,
  aiToolsForStudents,
  aiAutomationGuide,
]
