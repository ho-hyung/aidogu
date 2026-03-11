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

  if (res.status === 201) {
    return NextResponse.json({ success: true })
  }

  if (res.status === 400) {
    return NextResponse.json({ error: '이미 구독 중인 이메일입니다.' }, { status: 400 })
  }

  return NextResponse.json({ error: '구독 처리 중 오류가 발생했습니다.' }, { status: 500 })
}
