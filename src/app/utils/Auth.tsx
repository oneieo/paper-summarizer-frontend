// 쿠키 기반 인증 유틸리티

// 인증이 필요한 API 요청을 위한 유틸리티
export const fetchWithAuth = async (url: string, options: RequestInit = {}): Promise<Response> => {
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };
    
    return fetch(url, {
      ...options,
      headers,
      credentials: "include", // 쿠키 포함 설정
    });
  };
  
  // 인증 확인 함수 (사용자 프로필 가져오기)
  export const checkAuthenticated = async (apiUrl: string): Promise<boolean> => {
    try {
      const response = await fetchWithAuth(`${apiUrl}/api/user/profile`);
      return response.ok;
    } catch (error) {
      console.error("Auth check failed:", error);
      return false;
    }
  };
  
  // 로그아웃 함수
  export const logout = async (apiUrl: string): Promise<void> => {
    try {
      await fetchWithAuth(`${apiUrl}/api/auth/logout`, {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };