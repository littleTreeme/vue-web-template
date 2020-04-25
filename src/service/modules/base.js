/**
 * 基本配置
 */
import { http } from 'kdutil';

const BASE_URL = 'test';

// 获取资源配置
export const getCommonConfig = async (params = {}) => http.get(`${BASE_URL}/commonparam`, { params });
