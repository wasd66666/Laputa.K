import { useState } from 'react'
import { siteConfig } from '@/lib/config'

/**
 * 联系我们悬浮卡片组件
 * 显示在页面右下角，点击可展开显示联系信息
 */
const ContactCard = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleCard = () => {
    setIsExpanded(!isExpanded)
  }

  const closeCard = () => {
    setIsExpanded(false)
  }

  return (
    <>
      {/* 悬浮按钮 */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleCard}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="联系我们"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>

      {/* 展开的卡片内容 */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* 头部 */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                联系我们
              </h2>
              <button
                onClick={closeCard}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="关闭"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 内容 */}
            <div className="p-6 space-y-6">
              {/* 关于我们 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  关于我们
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                      我们的使命
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      为初创团队、个人创业者和学生提供专业的AI算法服务，
                      让前沿技术成为创新的助推器，帮助每一个梦想快速落地。
                      从概念验证到产品交付，我们提供全流程技术支持。
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                      专业团队背景
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      团队核心成员来自清华、浙大等顶尖学府，拥有博士、硕士学位，
                      在AI算法研究领域具有深厚的学术积累。我们汇聚了来自一线互联网公司、
                      知名制造企业、政企单位的资深从业者，以及在校优秀研究生，
                      形成了理论与实践并重的多元化团队。
                    </p>
                  </div>
                </div>
              </section>

              {/* 团队优势 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  团队优势
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">
                        1
                      </span>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        顶尖学术背景
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      清华、浙大等名校博硕士团队
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">
                        2
                      </span>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        多元行业经验
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      覆盖互联网、制造业、政企等核心领域
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">
                        3
                      </span>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        AI算法专精
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      专注前沿算法研发与工程化落地
                    </p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">
                        4
                      </span>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        全程技术支持
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      从概念验证到产品交付的完整服务
                    </p>
                  </div>
                </div>
              </section>

              {/* 联系方式 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  联系方式
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                      联系我们的小助手
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      扫描二维码添加微信小助手，获取更多信息和专业咨询
                    </p>
                    <div className="flex items-center justify-center bg-white dark:bg-gray-600 p-4 rounded">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gray-200 dark:bg-gray-500 rounded flex items-center justify-center mb-2">
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            微信二维码
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          微信小助手
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                      关注我们的公众号
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      扫描二维码关注我们的公众号，获取最新AI技术资讯和行业动态
                    </p>
                    <div className="flex items-center justify-center bg-white dark:bg-gray-600 p-4 rounded">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gray-200 dark:bg-gray-500 rounded flex items-center justify-center mb-2">
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            公众号二维码
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          微信公众号
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 携手共创未来 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  携手共创未来
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  每一个创新想法都值得被认真对待。
                  无论您是验证商业模式的创业者，还是转化研究成果的学生团队，
                  LaputaK都愿意成为您可靠的技术伙伴，
                  用专业知识和实战经验为您的创新之路保驾护航。
                </p>
              </section>
            </div>

            {/* 底部 */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                © 2025 LaputaK AI. 保留所有权利。
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactCard 
