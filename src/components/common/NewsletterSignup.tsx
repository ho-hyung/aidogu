'use client'

import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!email) return

    setIsSubmitted(true)
    setEmail('')
  }

  if (isSubmitted) {
    return (
      <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950/30">
        <div className="mb-3 text-3xl">&#10003;</div>
        <p className="text-base font-medium text-green-800 dark:text-green-300">
          구독해주셔서 감사합니다! 최신 AI 도구 소식을 보내드리겠습니다.
        </p>
      </section>
    )
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          AI 도구 소식 받기
        </h2>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          새로운 AI 도구 출시, 업데이트, 활용 팁을 이메일로 받아보세요.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            구독하기
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
          스팸 메일을 보내지 않으며, 언제든 구독을 취소할 수 있습니다.
        </p>
      </div>
    </section>
  )
}
