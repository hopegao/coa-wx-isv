import { $ } from 'coa-helper'

$.run(async () => {
  // 在这里写执行方法

  await (await import('./paly-urllink')).default()
})
