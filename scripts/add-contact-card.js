#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * 自动添加联系我们卡片到所有主题的脚本
 * 这个脚本会在每个主题的LayoutBase组件中添加ContactCard组件
 */

// 需要修改的主题列表
const themes = [
  'hexo', 'heo', 'fukasawa', 'gitbook', 'medium', 'next', 
  'nobelium', 'simple', 'example', 'magzine', 'commerce',
  'plog', 'photo', 'movie', 'nav', 'game', 'starter', 'landing'
]

// ContactCard组件的导入语句
const importStatement = "import ContactCard from '@/components/ContactCard'"

// ContactCard组件的使用语句
const contactCardComponent = `
      {/* 联系我们悬浮卡片 */}
      <ContactCard />`

/**
 * 检查文件是否已经包含ContactCard
 */
function hasContactCard(content) {
  return content.includes('ContactCard') || content.includes('联系我们悬浮卡片')
}

/**
 * 添加import语句
 */
function addImportStatement(content) {
  // 查找最后一个import语句的位置
  const importRegex = /import\s+.*?from\s+['"][^'"]*['"]/g
  let lastImportMatch
  let match
  
  while ((match = importRegex.exec(content)) !== null) {
    lastImportMatch = match
  }
  
  if (lastImportMatch) {
    const insertPosition = lastImportMatch.index + lastImportMatch[0].length
    return content.slice(0, insertPosition) + '\n' + importStatement + content.slice(insertPosition)
  } else {
    // 如果没有找到import语句，在文件开头添加
    return importStatement + '\n' + content
  }
}

/**
 * 添加ContactCard组件到布局中
 */
function addContactCardToLayout(content) {
  // 查找合适的位置插入ContactCard
  // 通常在</div>标签前或者在其他悬浮组件附近
  
  // 方法1: 在最后的</div>前添加
  const lastDivRegex = /<\/div>\s*\)\s*}\s*export/
  if (lastDivRegex.test(content)) {
    return content.replace(lastDivRegex, (match) => {
      return contactCardComponent + '\n    ' + match
    })
  }
  
  // 方法2: 在return语句的最后一个</div>前添加
  const returnDivRegex = /(\s*<\/div>\s*\)\s*$)/m
  if (returnDivRegex.test(content)) {
    return content.replace(returnDivRegex, contactCardComponent + '$1')
  }
  
  // 方法3: 在ThemeGlobal Provider的最后添加
  const providerRegex = /(<\/[A-Za-z]+\.Provider>\s*\)\s*}\s*export)/
  if (providerRegex.test(content)) {
    return content.replace(providerRegex, contactCardComponent + '\n    $1')
  }
  
  // 方法4: 在主要div容器的最后添加
  const mainDivRegex = /(.*<\/div>\s*\)\s*}\s*const\s+Layout)/s
  if (mainDivRegex.test(content)) {
    return content.replace(mainDivRegex, (match) => {
      const lines = match.split('\n')
      const lastDivIndex = lines.findLastIndex(line => line.includes('</div>'))
      if (lastDivIndex > -1) {
        lines.splice(lastDivIndex, 0, contactCardComponent)
        return lines.join('\n')
      }
      return match
    })
  }
  
  console.log('Warning: Could not find suitable location to insert ContactCard component')
  return content
}

/**
 * 处理单个主题文件
 */
function processThemeFile(themePath) {
  const indexPath = path.join(themePath, 'index.js')
  
  if (!fs.existsSync(indexPath)) {
    console.log(`Skipping ${themePath}: index.js not found`)
    return
  }
  
  try {
    let content = fs.readFileSync(indexPath, 'utf8')
    
    // 检查是否已经添加过ContactCard
    if (hasContactCard(content)) {
      console.log(`Skipping ${themePath}: ContactCard already exists`)
      return
    }
    
    // 添加import语句
    content = addImportStatement(content)
    
    // 添加ContactCard组件
    content = addContactCardToLayout(content)
    
    // 写回文件
    fs.writeFileSync(indexPath, content, 'utf8')
    console.log(`✅ Successfully added ContactCard to ${themePath}`)
    
  } catch (error) {
    console.error(`❌ Error processing ${themePath}:`, error.message)
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 Starting to add ContactCard to all themes...\n')
  
  const themesDir = path.join(__dirname, '..', 'themes')
  
  if (!fs.existsSync(themesDir)) {
    console.error('❌ Themes directory not found!')
    process.exit(1)
  }
  
  themes.forEach(theme => {
    const themePath = path.join(themesDir, theme)
    if (fs.existsSync(themePath)) {
      console.log(`Processing theme: ${theme}`)
      processThemeFile(themePath)
    } else {
      console.log(`Skipping ${theme}: theme directory not found`)
    }
  })
  
  console.log('\n✨ Finished processing all themes!')
  console.log('\n📝 Note: Please review the changes and test each theme to ensure the ContactCard is properly positioned.')
}

// 运行脚本
if (require.main === module) {
  main()
}

module.exports = {
  processThemeFile,
  addImportStatement,
  addContactCardToLayout,
  hasContactCard
} 
