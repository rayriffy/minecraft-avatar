import axios, { AxiosResponse } from 'axios'

interface IResponse {
  id: string
  name: string
}

const getProfile = async (user: string): Promise<AxiosResponse<IResponse>> => {
  return axios.get<IResponse>(`https://api.mojang.com/users/profiles/minecraft/${user}`)
}

export default getProfile
