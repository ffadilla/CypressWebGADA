let inbound = {
  source: {
    hasCompletedRequest: false,
  },
};

export function setHasCompletedRequest(status: boolean) {
  inbound.source.hasCompletedRequest = status;
}

export function hasCompletedRequest(): boolean {
  return inbound.source.hasCompletedRequest;
}
