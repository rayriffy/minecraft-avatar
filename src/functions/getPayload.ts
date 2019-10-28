import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

type crafatarTypes = 'avatars' | 'renders/head' | 'renders/body' | 'skins' | 'capes'

const getPayload = async (type: crafatarTypes, id: string): Promise<AxiosResponse<ArrayBuffer>> => {
  const payload: AxiosRequestConfig = {
    method: 'get',
    url: `https://crafatar.com/${type}/${id}?overlay&default`,
    responseType: 'arraybuffer'
  }

  return axios(payload)
}

export default getPayload
