import request from '@/plugin/axios'

export function test (data) {
  return request({
    url: '/about',
    method: 'get',
    data
  })
}

export function test2 (data) {
    return request({
      url: '/error',
      method: 'post',
      data
    })
  }
  