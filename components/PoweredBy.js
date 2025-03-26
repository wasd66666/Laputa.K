import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${'Laputa.K' || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://www.lucita.online/'
        className='underline justify-start'>
        Laputa.K
      </a>
      .
    </div>
  )
}
