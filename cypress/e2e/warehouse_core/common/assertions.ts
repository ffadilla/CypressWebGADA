export function assertAPIRequestHeaders(
  APIAlias: string,
  attribute: string,
  value: string
) {
  cy.wait(APIAlias).then((API) => {
    expect(API.request.headers[attribute]).to.include(value);
  });
}

export function assertQueryParam(query: string, value: string) {
  const queryParam = value === "null" ? "" : query + "=" + value;
  expect(cy.url().should("include", queryParam));
}

export function assertDateQueryParam(query: string, value: string) {
  const queryParam = value === "null" ? "" : query + "=" + value;
  expect(cy.url().should("include", queryParam));
}
