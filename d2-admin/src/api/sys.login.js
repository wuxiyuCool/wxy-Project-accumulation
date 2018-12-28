import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function test (data) {
  return request({
    url: '',
    method: 'get'
  })
}