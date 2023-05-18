import { atom } from 'recoil'
import { v1 } from 'uuid'

// **** 방문 페이지
export const visitedPageState = atom({
  key: `visitedPageState/${v1()}`,
  default: '/', // default page
})
