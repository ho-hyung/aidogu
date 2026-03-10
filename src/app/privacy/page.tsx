import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: `${SITE_CONFIG.name}의 개인정보처리방침입니다.`,
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        개인정보처리방침
      </h1>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        최종 업데이트: 2026년 3월 10일
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">1. 개인정보의 수집 및 이용 목적</h2>
          <p>
            {SITE_CONFIG.name}(이하 &quot;사이트&quot;)은 다음 목적을 위해 최소한의 개인정보를 수집할 수 있습니다.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
            <li>웹사이트 이용 통계 분석 및 서비스 개선</li>
            <li>뉴스레터 발송 (구독 동의 시)</li>
            <li>문의 응대</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">2. 수집하는 개인정보 항목</h2>
          <p>사이트는 다음 정보를 자동으로 수집할 수 있습니다.</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
            <li>방문 기록, 접속 시간, 브라우저 종류 (Google Analytics를 통해)</li>
            <li>IP 주소 (익명화 처리)</li>
          </ul>
          <p className="mt-2">
            뉴스레터 구독 시: 이메일 주소
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">3. 쿠키 사용</h2>
          <p>
            사이트는 사용자 경험 개선 및 통계 분석을 위해 쿠키를 사용합니다.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
            <li><strong>필수 쿠키:</strong> 테마 설정 (다크/라이트 모드) 저장</li>
            <li><strong>분석 쿠키:</strong> Google Analytics를 통한 방문 통계 (익명화)</li>
            <li><strong>광고 쿠키:</strong> Google AdSense를 통한 맞춤 광고 제공</li>
          </ul>
          <p className="mt-2">
            브라우저 설정에서 쿠키를 비활성화할 수 있으며, 이 경우 일부 기능이 제한될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">4. 제3자 서비스</h2>
          <p>사이트는 다음 제3자 서비스를 사용합니다.</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
            <li><strong>Google Analytics:</strong> 웹사이트 방문 통계 분석</li>
            <li><strong>Google AdSense:</strong> 광고 제공</li>
            <li><strong>Vercel:</strong> 웹사이트 호스팅</li>
          </ul>
          <p className="mt-2">
            각 서비스의 개인정보 처리에 대해서는 해당 서비스의 개인정보처리방침을 참고하시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">5. 제휴 링크</h2>
          <p>
            사이트에 포함된 일부 링크는 제휴(어필리에이트) 링크일 수 있습니다.
            사용자가 해당 링크를 통해 서비스에 가입하거나 구매할 경우, 사이트 운영자에게 수수료가 지급될 수 있습니다.
            이는 사용자에게 추가 비용을 발생시키지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">6. 개인정보의 보유 및 파기</h2>
          <p>
            수집된 개인정보는 수집 목적이 달성된 후 지체 없이 파기합니다.
            뉴스레터 구독 해지 시 이메일 주소는 즉시 삭제됩니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">7. 이용자의 권리</h2>
          <p>이용자는 다음 권리를 행사할 수 있습니다.</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
            <li>개인정보 열람, 수정, 삭제 요청</li>
            <li>뉴스레터 구독 해지</li>
            <li>쿠키 비활성화</li>
          </ul>
          <p className="mt-2">
            관련 문의: <span className="font-medium text-blue-600 dark:text-blue-400">leehoh3153@gmail.com</span>
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">8. 개인정보처리방침의 변경</h2>
          <p>
            본 개인정보처리방침은 관련 법률 및 서비스 변경에 따라 수정될 수 있으며,
            변경 사항은 이 페이지에 게시합니다.
          </p>
        </section>
      </div>
    </div>
  )
}
