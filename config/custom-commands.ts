
declare global {
  namespace WebdriverIO {
    interface Browser {
      logUtil: (status: string, message: any) => Promise<void>;
    }
    interface Element {
      logUtil: (status: string, message: string) => Promise<void>;
      swipeUntilElemetDisplayed: (direction: string) => Promise<void>;
      severityOfTC: (severityLevel: string) => Promise<void>;
    }
  }
}

export {};
