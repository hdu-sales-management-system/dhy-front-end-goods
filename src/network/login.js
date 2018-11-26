import api from './base'

export default function(config) { 
  return api.get('/login',config) 
}