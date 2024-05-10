interface Window {
  Kakao: {
    init: (appId: string) => void;
    isInitialized: () => boolean;
    Auth: {
      setAccessToken: (token: string) => void;
    };
    API: {
      request: (options: {
        url: string;
        [key: string];
      }) => Promise<UserProfile>;
    };
  };
}
