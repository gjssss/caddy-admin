import request from '~/utils/request'

export function getConfig(path?: string) {
  const _path = path?.startsWith('/') ? path.slice(1) : path
  return request.get(`/config/${_path ?? ''}`)
}

export function postConfig(path: string, data: object | string) {
  const _path = path?.startsWith('/') ? path.slice(1) : path
  return request.post(`/config/${_path}`, data)
}

export function putConfig(path: string, data: object | string) {
  const _path = path?.startsWith('/') ? path.slice(1) : path
  return request.put(`/config/${_path}`, data)
}

export function patchConfig(path: string, data: object | string) {
  const _path = path?.startsWith('/') ? path.slice(1) : path
  return request.patch(`/config/${_path}`, data)
}

export function deleteConfig(path?: string) {
  const _path = path?.startsWith('/') ? path.slice(1) : path
  return request.delete(`/config/${_path ?? ''}`)
}
