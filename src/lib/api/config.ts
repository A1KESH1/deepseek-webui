export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_DEEPSEEK_API_URL || 'https://ark.cn-beijing.volces.com/api/v3',
  BASE_URL_V0: process.env.NEXT_PUBLIC_DEEPSEEK_API_URL_V0 || 'https://api.deepseek.com/v1',
  BASE_COZE_URL: process.env.NEXT_PUBLIC_COZE_API_URL || 'https://api.coze.cn/v1',
  MODELS: {
    'chat': 'ep-20250209205724-2tnn5',
    'reasoner': 'ep-20250209205708-tn2x4',
  },
} as const;

export type ModelType = keyof typeof API_CONFIG.MODELS; 
