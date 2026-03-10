import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { SITE_CONFIG } from '@/lib/constants'
import { getOgImageUrl } from '@/lib/og'

const PAGE_TITLE = '자주 묻는 질문 (FAQ)'
const PAGE_DESCRIPTION = 'AI 도구에 대해 자주 묻는 질문과 답변을 모았습니다. AI 도구 선택, 비용, 사용법 등 궁금한 점을 확인하세요.'

export function generateMetadata(): Metadata {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    openGraph: {
      title: `${PAGE_TITLE} | ${SITE_CONFIG.name}`,
      description: PAGE_DESCRIPTION,
      url: `${SITE_CONFIG.url}/faq`,
      images: [{ url: getOgImageUrl(PAGE_TITLE, PAGE_DESCRIPTION) }],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/faq`,
    },
  }
}

interface FaqItem {
  readonly question: string
  readonly answer: string
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: 'AI 도구란 무엇인가요?',
    answer:
      'AI 도구는 인공지능 기술을 활용하여 다양한 작업을 자동화하거나 보조해주는 소프트웨어입니다. 글쓰기, 이미지 생성, 코딩, 번역, 데이터 분석 등 다양한 분야에서 활용할 수 있으며, 사용자의 생산성을 크게 향상시켜 줍니다.',
  },
  {
    question: 'AI 도구는 무료로 사용할 수 있나요?',
    answer:
      '많은 AI 도구가 무료 플랜이나 무료 체험 기간을 제공합니다. ChatGPT, Claude, Gemini 등 대부분의 주요 AI 도구는 기본 기능을 무료로 사용할 수 있습니다. 다만, 고급 기능이나 더 많은 사용량이 필요한 경우 유료 구독이 필요할 수 있습니다.',
  },
  {
    question: '추천하는 무료 AI 도구는 어떤 것이 있나요?',
    answer:
      '대표적인 무료 AI 도구로는 ChatGPT(무료 버전), Google Gemini, Microsoft Copilot, 뤼튼(Wrtn) 등이 있습니다. 이미지 생성에는 Microsoft Designer, 글쓰기에는 뤼튼이나 ChatGPT를 추천합니다. 용도에 따라 적합한 도구가 다르므로, 카테고리별로 비교해보시는 것을 권장합니다.',
  },
  {
    question: 'AI 이미지 생성 도구는 어떤 것이 좋나요?',
    answer:
      'AI 이미지 생성 도구 중에서는 Midjourney가 높은 품질로 유명하며, DALL-E 3(ChatGPT Plus에 포함)도 훌륭한 결과물을 제공합니다. 무료로 사용할 수 있는 도구로는 Microsoft Designer, Leonardo AI, Playground AI 등이 있습니다. 각 도구마다 스타일과 강점이 다르므로 목적에 맞게 선택하세요.',
  },
  {
    question: 'AI 글쓰기 도구는 어떤 것이 있나요?',
    answer:
      'AI 글쓰기 도구로는 ChatGPT, Claude, Jasper, Writesonic, 뤼튼 등이 있습니다. 한국어 글쓰기에는 뤼튼이 특화되어 있으며, 영어 콘텐츠 작성에는 Jasper가 인기 있습니다. Claude는 긴 문서 작성과 분석에 강점이 있습니다.',
  },
  {
    question: 'AI 코딩 도구는 어떤 것을 추천하나요?',
    answer:
      'AI 코딩 도구로는 GitHub Copilot, Cursor, Claude Code 등이 대표적입니다. GitHub Copilot은 VS Code와 통합되어 코드 자동 완성을 제공하며, Cursor는 AI 기반 코드 에디터로 코드 작성과 수정을 도와줍니다. 초보자에게는 ChatGPT나 Claude에 코드 관련 질문을 하는 것도 좋은 방법입니다.',
  },
  {
    question: 'ChatGPT와 Claude의 차이점은 무엇인가요?',
    answer:
      'ChatGPT(OpenAI)와 Claude(Anthropic)는 모두 뛰어난 대화형 AI입니다. ChatGPT는 플러그인 생태계와 이미지 생성(DALL-E) 통합이 강점이며, Claude는 긴 문서 처리, 정확한 지시 따르기, 안전성에 강점이 있습니다. 두 도구 모두 한국어를 지원하며, 용도에 따라 적합한 도구가 다를 수 있습니다.',
  },
  {
    question: 'AI 도구를 사용할 때 개인정보는 안전한가요?',
    answer:
      '대부분의 주요 AI 서비스는 개인정보 보호 정책을 마련하고 있지만, 민감한 개인정보(주민등록번호, 비밀번호, 금융 정보 등)는 AI 도구에 입력하지 않는 것이 좋습니다. 기업용으로 사용할 경우 데이터 보호 정책이 있는 엔터프라이즈 플랜을 이용하시는 것을 권장합니다.',
  },
  {
    question: 'AI 도구가 만든 결과물을 상업적으로 사용할 수 있나요?',
    answer:
      'AI 도구로 생성한 결과물의 상업적 사용 가능 여부는 도구마다 다릅니다. ChatGPT, Claude 등 대부분의 텍스트 생성 도구는 상업적 사용을 허용합니다. 이미지 생성 도구의 경우 유료 플랜에서 상업적 사용이 가능한 경우가 많습니다. 각 도구의 이용약관을 반드시 확인하세요.',
  },
  {
    question: '한국어를 잘 지원하는 AI 도구는 어떤 것이 있나요?',
    answer:
      '한국어 지원이 우수한 AI 도구로는 뤼튼(Wrtn), 네이버 클로바X, ChatGPT, Claude, Google Gemini 등이 있습니다. 특히 뤼튼과 클로바X는 한국어에 특화되어 자연스러운 한국어 결과물을 제공합니다. ChatGPT와 Claude도 한국어 성능이 크게 향상되었습니다.',
  },
  {
    question: 'AI 도구를 어떻게 선택해야 하나요?',
    answer:
      'AI 도구를 선택할 때는 다음 기준을 고려하세요: 1) 사용 목적(글쓰기, 이미지 생성, 코딩 등), 2) 예산(무료/유료), 3) 한국어 지원 수준, 4) 사용 편의성, 5) 출력 품질. 여러 도구를 무료 버전으로 먼저 테스트해보고, 가장 적합한 도구를 선택하는 것을 추천합니다.',
  },
  {
    question: 'AI 도구를 처음 사용하는데 어떻게 시작하나요?',
    answer:
      'AI 도구 입문자에게는 ChatGPT나 뤼튼으로 시작하는 것을 추천합니다. 회원가입 후 바로 대화를 시작할 수 있으며, 질문하듯 자연어로 요청하면 됩니다. 처음에는 간단한 질문이나 글 작성부터 시작하고, 점차 복잡한 작업으로 확장해보세요.',
  },
  {
    question: 'AI 도구의 답변을 신뢰할 수 있나요?',
    answer:
      'AI 도구는 매우 유용하지만, "환각(hallucination)" 현상으로 잘못된 정보를 생성할 수 있습니다. 특히 최신 정보, 통계, 전문 분야의 경우 AI의 답변을 반드시 검증하는 것이 중요합니다. AI 도구는 보조 수단으로 활용하고, 중요한 의사결정에는 전문가의 확인을 거치세요.',
  },
  {
    question: 'AI 도구의 유료 구독은 가치가 있나요?',
    answer:
      '유료 구독의 가치는 사용 빈도와 목적에 따라 다릅니다. 업무에서 자주 사용한다면 유료 플랜의 빠른 응답 속도, 고급 모델 접근, 더 많은 사용량 등이 생산성 향상에 큰 도움이 됩니다. 먼저 무료 버전으로 충분히 사용해보고, 한계를 느낄 때 유료로 전환하는 것을 추천합니다.',
  },
  {
    question: 'AI 영상 생성 도구는 어떤 것이 있나요?',
    answer:
      'AI 영상 생성 도구로는 Runway, Pika, Sora(OpenAI), HeyGen 등이 있습니다. Runway는 텍스트/이미지에서 영상을 생성하는 기능이 뛰어나며, HeyGen은 AI 아바타를 활용한 영상 제작에 특화되어 있습니다. 아직 초기 단계이지만 빠르게 발전하고 있는 분야입니다.',
  },
  {
    question: 'AI 도구로 프레젠테이션을 만들 수 있나요?',
    answer:
      '네, Gamma, Beautiful.ai, SlidesAI 등의 도구로 AI 기반 프레젠테이션을 만들 수 있습니다. 텍스트 주제나 개요를 입력하면 자동으로 슬라이드 디자인과 내용을 생성해줍니다. 한국어도 지원하며, 기존 PowerPoint보다 훨씬 빠르게 프레젠테이션을 완성할 수 있습니다.',
  },
  {
    question: '업무에서 AI 도구를 활용하는 가장 좋은 방법은 무엇인가요?',
    answer:
      '업무에서 AI 도구를 효과적으로 활용하려면: 1) 반복적인 작업(이메일 작성, 회의록 정리 등)부터 자동화하세요. 2) 명확하고 구체적인 프롬프트를 작성하세요. 3) AI 결과물을 그대로 사용하지 말고 검토 후 수정하세요. 4) 팀에서 사용할 경우 AI 사용 가이드라인을 마련하세요.',
  },
  {
    question: 'AI 도구 관련 최신 소식은 어디서 확인할 수 있나요?',
    answer:
      `${SITE_CONFIG.name}에서 최신 AI 도구 소식과 업데이트를 한국어로 확인할 수 있습니다. 뉴스레터를 구독하시면 새로운 AI 도구 출시, 업데이트, 활용 팁 등을 정기적으로 받아보실 수 있습니다. 카테고리별 페이지에서도 최신 도구를 확인해보세요.`,
  },
] as const

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumb items={[{ label: 'FAQ' }]} />

      <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
        자주 묻는 질문
      </h1>
      <p className="mb-10 text-lg text-gray-600 dark:text-gray-400">
        AI 도구에 대해 궁금한 점을 모아 정리했습니다.
      </p>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
          >
            <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/50">
              <span>{item.question}</span>
              <svg
                className="ml-4 h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180 dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="border-t border-gray-200 px-6 py-4 text-sm leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-400">
              {item.answer}
            </div>
          </details>
        ))}
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
