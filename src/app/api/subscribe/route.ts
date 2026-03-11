import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email } = await request.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: '유효한 이메일을 입력해주세요.' }, { status: 400 })
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: '서버 설정 오류입니다.' }, { status: 500 })
  }

  const res = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  const body = await res.json().catch(() => null)
  console.log('[subscribe] Buttondown status:', res.status, JSON.stringify(body))

  if (res.status === 201) {
    return NextResponse.json({ success: true })
  }

  if (res.status === 400 || res.status === 422) {
    const bodyStr = JSON.stringify(body)
    if (bodyStr.includes('already') || bodyStr.includes('duplicate')) {
      return NextResponse.json({ error: '이미 구독 중인 이메일입니다.' }, { status: 400 })
    }
    return NextResponse.json({ error: `입력 오류: ${bodyStr}` }, { status: 400 })
  }

  if (res.status === 401) {
    console.error('[subscribe] Invalid Buttondown API key')
    return NextResponse.json({ error: '서버 설정 오류입니다.' }, { status: 500 })
  }

  return NextResponse.json({ error: `오류 (${res.status}): ${JSON.stringify(body)}` }, { status: 500 })
}
